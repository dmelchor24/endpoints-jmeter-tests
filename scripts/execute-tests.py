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
# VALIDAR Y NORMALIZAR URL
# ============================================================
def validate_and_normalize_url(url: str):
    """
    Valida la URL y retorna (full_url, host_only).

    JMeter necesita SOLO el host en -Jbase_url porque el .jmx
    usa ${__P(base_url)} en HTTPSampler.domain (sin protocolo).

    Ejemplos:
        "https://api.example.com"   -> host: "api.example.com"
        "http://localhost:8000"     -> host: "localhost:8000"
    """
    # Detectar artefactos de markdown
    for pattern in ["__", "**"]:
        if pattern in url:
            print_error("❌", f"URL inválida: '{url}'")
            print_error("  ", f"Contiene el patrón no permitido: '{pattern}'")
            print_info("💡", "Ingresa la URL sin formato markdown. Ejemplo: https://api.example.com")
            sys.exit(1)

    if " " in url:
        print_error("❌", f"La URL contiene espacios: '{url}'")
        sys.exit(1)

    # Extraer host según el esquema
    if url.startswith("https://"):
        host = url[len("https://"):]
    elif url.startswith("http://"):
        host = url[len("http://"):]
    else:
        print_error("❌", f"URL sin esquema válido: '{url}'")
        print_info("💡", "La URL debe comenzar con http:// o https://")
        sys.exit(1)

    # Eliminar path si se incluyó por error (solo necesitamos host[:puerto])
    host = host.rstrip("/").split("/")[0]

    if not host:
        print_error("❌", "No se pudo extraer el host de la URL.")
        sys.exit(1)

    print_success("✅", f"URL completa    : {url}")
    print_success("✅", f"Host para JMeter: {host}")
    return url, host

# ============================================================
# Timestamp
# ============================================================
timestamp = time.strftime("%Y%m%d_%H%M%S")

jmeter_log      = f"jmeter_{timestamp}.log"
report_dir_name = f"report_{timestamp}"
results_dir     = f"results/run_{timestamp}"
docs_dir        = "docs"

os.makedirs(results_dir, exist_ok=True)
os.makedirs(docs_dir, exist_ok=True)

# ============================================================
# Leer parámetros (prioridad: CLI > ENV > default)
# ============================================================
base_url  = os.getenv("BASE_URL",  "http://localhost:8000")
test_plan = os.getenv("TEST_PLAN", "test-plans/jmeter/tp-carga-controlada.jmx")

for arg in sys.argv[1:]:
    if arg.startswith("--base-url="):
        base_url = arg.split("=", 1)[1]
    elif arg.startswith("--test-plan="):
        test_plan = arg.split("=", 1)[1]

# Validar y extraer host ANTES de cualquier otra operación
base_url, jmeter_host = validate_and_normalize_url(base_url)

# ============================================================
# Buscar JMeter
# ============================================================
def find_jmeter():
    jmeter_home = os.getenv("JMETER_HOME")
    if jmeter_home:
        path = os.path.join(jmeter_home, "bin", "jmeter")
        if os.path.exists(path):
            return path

    cmd = shutil.which("jmeter")
    if cmd:
        return cmd

    for path in [
        "/opt/apache-jmeter/bin/jmeter",
        "/usr/local/apache-jmeter/bin/jmeter",
        os.path.expanduser("~/apache-jmeter/bin/jmeter"),
    ]:
        if os.path.exists(path):
            return path

    return None

jmeter_cmd = find_jmeter()
if not jmeter_cmd:
    print_error("❌", "JMeter no encontrado")
    print_info("💡", "Instala JMeter o define JMETER_HOME")
    sys.exit(1)

# ============================================================
# Validar Test Plan
# ============================================================
print_info("📋", "Validando test plan...")
if not os.path.exists(test_plan):
    print_error("❌", f"Test plan no encontrado: {test_plan}")
    sys.exit(1)
print_success("✓", f"Test plan encontrado: {test_plan}")

# ============================================================
# Ejecutar JMeter
# IMPORTANTE: -Jbase_url recibe SOLO el host (sin https://)
# El .jmx usa ${__P(base_url)} en HTTPSampler.domain
# ============================================================
results_csv      = f"results_{timestamp}.csv"
result_file_path = os.path.join(results_dir, results_csv)
log_file_path    = os.path.join(results_dir, jmeter_log)

command = [
    jmeter_cmd,
    "-n",
    "-t", test_plan,
    "-l", result_file_path,
    "-j", log_file_path,
    f"-Jbase_url={jmeter_host}",   # ← solo el host, sin protocolo
]

print_info("▶️ ", "Ejecutando JMeter...")
print_info("📝", f"Comando: {' '.join(command)}\n")

try:
    subprocess.run(command, check=True, capture_output=False, text=True)
    print_success("✅", "JMeter completado exitosamente")
except subprocess.CalledProcessError as e:
    print_error("❌", f"Error al ejecutar JMeter (código: {e.returncode})")
    sys.exit(1)

# ============================================================
# Validar que el CSV tenga datos reales
# ============================================================
if not os.path.exists(result_file_path):
    print_error("❌", f"Archivo de resultados no generado: {result_file_path}")
    sys.exit(1)

result_size = os.path.getsize(result_file_path)
print_info("📄", f"Archivo de resultados: {result_file_path} ({result_size} bytes)")

if result_size == 0:
    print_error("❌", "El archivo de resultados está vacío.")
    print_info("💡", f"Verifica que la API sea accesible: {base_url}")
    sys.exit(1)

with open(result_file_path, "r") as f:
    lines = f.readlines()

data_rows = len(lines) - 1  # descontar header
print_info("📊", f"Filas de datos en CSV: {data_rows}")

if data_rows == 0:
    print_error("❌", "JMeter no ejecutó ninguna request.")
    print_info("💡", f"Verifica que el endpoint sea accesible: {base_url}/api/v1/tasks")
    print_info("💡", "Verifica que el CSV exista en: /tests/data/csv/set-datos-creacion.csv")
    sys.exit(1)

# ============================================================
# Generar reporte HTML
# ============================================================
report_dir_path = os.path.join(results_dir, report_dir_name)

print_info("\n📊", "Generando reporte HTML...")

command_report = [
    jmeter_cmd,
    "-g", result_file_path,
    "-o", report_dir_path,
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
    sys.exit(1)

if not os.path.exists(report_dir_path):
    print_error("❌", f"Directorio de reporte no encontrado: {report_dir_path}")
    sys.exit(1)

# ============================================================
# Preparar docs/ para GitHub Pages
# ============================================================
print_info("\n📦", "Preparando archivos para GitHub Pages...")

def remove_readonly(func, path, excinfo):
    import stat
    os.chmod(path, stat.S_IWRITE)
    func(path)

# Limpiar docs/ sin borrar la carpeta raíz
for item in os.listdir(docs_dir):
    item_path = os.path.join(docs_dir, item)
    if os.path.isdir(item_path):
        if sys.platform == "win32":
            shutil.rmtree(item_path, onerror=remove_readonly)
        else:
            shutil.rmtree(item_path)
    else:
        os.remove(item_path)

# Copiar reporte directamente a docs/
for item in os.listdir(report_dir_path):
    src = os.path.join(report_dir_path, item)
    dst = os.path.join(docs_dir, item)
    if os.path.isdir(src):
        shutil.copytree(src, dst)
    else:
        shutil.copy2(src, dst)

print_success("✅", "Reporte copiado a docs/")

# ============================================================
# index.html de redirección para GitHub Pages
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
        .card {{
            text-align: center;
            background: rgba(255,255,255,0.1);
            padding: 40px;
            border-radius: 12px;
            backdrop-filter: blur(10px);
        }}
        .spinner {{
            border: 4px solid rgba(255,255,255,0.3);
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
    <div class="card">
        <div class="spinner"></div>
        <h2>🚀 Cargando Reporte de Performance</h2>
        <p>Redirigiendo automáticamente...</p>
        <p>Si no se redirige, <a href="index.html">haz clic aquí</a></p>
        <div class="info">
            <p>Última ejecución: {timestamp}</p>
            <p>Base URL: {base_url}</p>
            <p>Requests ejecutadas: {data_rows}</p>
        </div>
    </div>
</body>
</html>
"""

with open(os.path.join(docs_dir, "redirect.html"), "w", encoding="utf-8") as f:
    f.write(index_html)

# Metadata
with open(os.path.join(docs_dir, ".last_run.txt"), "w") as f:
    f.write(f"timestamp={timestamp}\n")
    f.write(f"base_url={base_url}\n")
    f.write(f"jmeter_host={jmeter_host}\n")
    f.write(f"data_rows={data_rows}\n")

print_success("✅", "Metadata guardada")
print_success("🎉", f"Pipeline completado — Reporte en: docs/  |  Requests: {data_rows}")