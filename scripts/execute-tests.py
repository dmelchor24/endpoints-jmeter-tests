import time
import subprocess
import os
import sys
import shutil

# Colores para terminal
class Colors:
    GREEN = '\033[92m'
    RED = '\033[91m'
    YELLOW = '\033[93m'
    BLUE = '\033[94m'
    RESET = '\033[0m'

def print_info(emoji, message):
    print(f"{emoji} {message}")

def print_success(emoji, message):
    print(f"{Colors.GREEN}{emoji} {message}{Colors.RESET}")

def print_error(emoji, message):
    print(f"{Colors.RED}{emoji} {message}{Colors.RESET}")

def print_warning(emoji, message):
    print(f"{Colors.YELLOW}{emoji} {message}{Colors.RESET}")

# ============================================================
# VALIDAR URL antes de hacer cualquier cosa
# ============================================================
def validate_url(url: str) -> None:
    """Valida que la URL no tenga caracteres de markdown u otros artefactos."""
    invalid_patterns = ["__", "**", " "]
    for pattern in invalid_patterns:
        if pattern in url:
            print_error("❌", f"URL inválida detectada: '{url}'")
            print_error("  ", f"Contiene el patrón no permitido: '{pattern}'")
            print_info("💡", "Asegúrate de ingresar la URL sin formato markdown ni espacios.")
            sys.exit(1)

    if not (url.startswith("http://") or url.startswith("https://")):
        print_error("❌", f"URL sin esquema válido: '{url}'")
        print_info("💡", "La URL debe comenzar con http:// o https://")
        sys.exit(1)

    print_success("✅", f"URL válida: {url}")

# ============================================================
# Creación de timestamp
# ============================================================
timestamp = time.strftime("%Y%m%d_%H%M%S")

# Definir nombres de archivos
jmeter_log = f"jmeter_{timestamp}.log"
report_dir_name = f"report_{timestamp}"

# Definir directorios
results_dir = f"results/run_{timestamp}"
docs_dir = "docs"

os.makedirs(results_dir, exist_ok=True)
os.makedirs(docs_dir, exist_ok=True)

# BASE_URL por defecto para pruebas en local (prioridad: CLI > ENV > default)
base_url = os.getenv("BASE_URL", "http://localhost:8000")

# Test Plan por defecto
test_plan = os.getenv("TEST_PLAN", "test-plans/jmeter/tp-carga-controlada.jmx")

# Leer argumento desde CLI (CI)
for arg in sys.argv[1:]:
    if arg.startswith("--base-url="):
        base_url = arg.split("=", 1)[1]
    elif arg.startswith("--test-plan="):
        test_plan = arg.split("=", 1)[1]

# Validar URL inmediatamente después de leerla
validate_url(base_url)

# ============================================================
# Buscar JMETER
# ============================================================
def find_jmeter():
    """Busca JMeter en ubicaciones comunes"""
    jmeter_home = os.getenv("JMETER_HOME")
    
    if jmeter_home:
        jmeter_path = os.path.join(jmeter_home, "bin", "jmeter")
        if os.path.exists(jmeter_path):
            return jmeter_path
    
    # Buscar en PATH
    jmeter_cmd = shutil.which("jmeter")
    if jmeter_cmd:
        return jmeter_cmd
    
    # Ubicaciones comunes
    common_paths = [
        "/opt/apache-jmeter/bin/jmeter",
        "/usr/local/apache-jmeter/bin/jmeter",
        os.path.expanduser("~/apache-jmeter/bin/jmeter"),
    ]
    
    for path in common_paths:
        if os.path.exists(path):
            return path
    
    return None

jmeter_cmd = find_jmeter()

if not jmeter_cmd:
    print_error("❌", "JMeter no encontrado")
    print_info("💡", "Instala JMeter o define JMETER_HOME")
    sys.exit(1)

# ============================================================
# Validar que exista el Test Plan
# ============================================================
print_info("📋", "Validando test plan...")

if not os.path.exists(test_plan):
    print_error("❌", f"Test plan no encontrado: {test_plan}")
    sys.exit(1)

print_success("✓", f"Test plan encontrado: {test_plan}")

# ============================================================
# Ejecutar JMeter
# ============================================================
results_csv = f"results_{timestamp}.csv"
result_file_path = os.path.join(results_dir, results_csv)
log_file_path = os.path.join(results_dir, jmeter_log)

command = [
    jmeter_cmd,
    "-n",  # Non-GUI mode
    "-t", test_plan,  # Test plan
    "-l", result_file_path,  # Results file
    "-j", log_file_path,  # Log file
    "-Jbase_url=" + base_url,  # Pasar base_url como property
]

print_info("▶️ ", "Ejecutando JMeter...")
print_info("📝", f"Comando: {' '.join(command)}\n")

try:
    result = subprocess.run(command, check=True, capture_output=False, text=True)
    print_success("✅", "JMeter completado exitosamente")
except subprocess.CalledProcessError as e:
    print_error("❌", f"Error al ejecutar JMeter (código: {e.returncode})")
    sys.exit(1)

# ============================================================
# Validar que el CSV de resultados exista y tenga datos
# ============================================================
if not os.path.exists(result_file_path):
    print_error("❌", f"Archivo de resultados no generado: {result_file_path}")
    sys.exit(1)

result_size = os.path.getsize(result_file_path)
print_info("📄", f"Archivo de resultados: {result_file_path} ({result_size} bytes)")

if result_size == 0:
    print_error("❌", "El archivo de resultados está vacío. JMeter no ejecutó ninguna petición.")
    print_info("💡", f"Verifica que la URL sea accesible: {base_url}")
    sys.exit(1)

# ============================================================
# Generar reporte HTML
# ============================================================
report_dir_path = os.path.join(results_dir, report_dir_name)

print_info("\n📊", "Generando reporte HTML...")

command_report = [
    jmeter_cmd,
    "-g", result_file_path,  # Input results file
    "-o", report_dir_path,   # Output report directory
]

try:
    result_report = subprocess.run(command_report, check=True, capture_output=True, text=True)
    print_success("✅", f"Reporte generado: {report_dir_path}")
except subprocess.CalledProcessError as e:
    print_error("❌", "Error al generar reporte HTML")
    if e.stderr:
        print_error("📝 stderr:", e.stderr)
    if e.stdout:
        print_error("📝 stdout:", e.stdout)
    # Fallar inmediatamente: sin reporte no tiene sentido continuar
    sys.exit(1)

# Verificar que el directorio del reporte fue creado
if not os.path.exists(report_dir_path):
    print_error("❌", f"Directorio de reporte no encontrado después de generarlo: {report_dir_path}")
    sys.exit(1)

# ============================================================
# Preparar archivos para GitHub Pages
# ============================================================
print_info("\n📦", "Preparando archivos para GitHub Pages...")

# Función para eliminar directorios con retry (útil en Windows)
def remove_readonly(func, path, excinfo):
    """Maneja archivos de solo lectura en Windows"""
    import stat
    os.chmod(path, stat.S_IWRITE)
    func(path)

def safe_rmtree(directory, max_attempts=3):
    """Elimina directorio con reintentos"""
    if not os.path.exists(directory):
        return True
    
    for attempt in range(max_attempts):
        try:
            if sys.platform == "win32":
                shutil.rmtree(directory, onerror=remove_readonly)
            else:
                shutil.rmtree(directory)
            return True
        except PermissionError:
            if attempt < max_attempts - 1:
                print_warning("⚠️ ", f"Reintentando eliminar directorio (intento {attempt + 2}/{max_attempts})...")
                time.sleep(0.5)
            else:
                print_warning("⚠️ ", f"No se pudo eliminar {directory}")
                return False
        except Exception as e:
            print_warning("⚠️ ", f"Error al eliminar directorio: {e}")
            return False
    return False

# Limpiar contenido previo de docs (sin borrar la carpeta raíz)
for item in os.listdir(docs_dir):
    item_path = os.path.join(docs_dir, item)
    if os.path.isdir(item_path):
        shutil.rmtree(item_path)
    else:
        os.remove(item_path)

# Copiar reporte directamente dentro de docs/
for item in os.listdir(report_dir_path):
    src = os.path.join(report_dir_path, item)
    dst = os.path.join(docs_dir, item)

    if os.path.isdir(src):
        shutil.copytree(src, dst)
    else:
        shutil.copy2(src, dst)

print_success("✅", "Reporte copiado directamente a docs/")

# ============================================================
# Crear index.html principal que redirige al reporte
# ============================================================
index_html = f"""<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="refresh" content="0; url=index.html">
    <title>JMeter Performance Test Results</title>
    <style>
        body {{
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }}
        .loading {{
            text-align: center;
            background: rgba(255, 255, 255, 0.1);
            padding: 40px;
            border-radius: 12px;
            backdrop-filter: blur(10px);
        }}
        .spinner {{
            border: 4px solid rgba(255, 255, 255, 0.3);
            border-top: 4px solid white;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            animation: spin 1s linear infinite;
            margin: 20px auto;
        }}
        @keyframes spin {{
            0% {{ transform: rotate(0deg); }}
            100% {{ transform: rotate(360deg); }}
        }}
        a {{ color: #fff; text-decoration: none; border-bottom: 2px solid white; }}
        a:hover {{ opacity: 0.8; }}
        .info {{ font-size: 12px; margin-top: 20px; opacity: 0.8; }}
    </style>
</head>
<body>
    <div class="loading">
        <div class="spinner"></div>
        <h2>🚀 Cargando Reporte de Performance</h2>
        <p>Redirigiendo automáticamente...</p>
        <p>Si no se redirige, <a href="index.html">haz clic aquí</a></p>
        <div class="info">
            <p>Última ejecución: {timestamp}</p>
            <p>Base URL: {base_url}</p>
        </div>
    </div>
</body>
</html>
"""

# Guardar index.html en docs/
index_path = os.path.join(docs_dir, "redirect.html")
with open(index_path, "w", encoding="utf-8") as f:
    f.write(index_html)

# ============================================================
# Guardar metadata de última ejecución
# ============================================================
with open(os.path.join(docs_dir, ".last_run.txt"), "w") as f:
    f.write(f"{timestamp}\n")
    f.write(f"base_url={base_url}\n")

print_success("✅", "Información de ejecución guardada")
print_success("🎉", f"Pipeline completado. Reporte disponible en: docs/")