# 🤖 Automatización de Pruebas con JMeter

Repositorio para pruebas de performance y carga de endpoints HTTP usando Apache JMeter, con automatización completa de ejecución, generación de reportes interactivos y soporte para integración continua (CI/CD).

## 📋 Descripción

Este proyecto automatiza pruebas de carga sobre endpoints HTTP utilizando JMeter 5.6.3, facilitando la ejecución local o en pipelines de CI/CD. Incluye scripts Python para orquestar las pruebas, validar configuraciones, generar reportes HTML interactivos y publicar resultados automáticamente.

![JMeter Tests](https://github.com/dmelchor24/endpoints-jmeter-tests/actions/workflows/jmeter-tests.yaml/badge.svg)

📊 **Reporte de la última ejecución (GitHub Pages)**

👉 https://dmelchor24.github.io/endpoints-jmeter-tests

### Características principales

✅ **Automatización completa** - Ejecución y reportes en un solo comando  
✅ **Parametrización dinámica** - Datos de prueba desde archivos CSV  
✅ **Carga controlada** - Rampa gradual de usuarios concurrentes  
✅ **Validaciones integradas** - Assertions de código HTTP y tiempos de respuesta  
✅ **Reportes interactivos** - HTML con gráficos y estadísticas detalladas  
✅ **GitHub Pages ready** - Publicación automática de reportes  
✅ **Docker-ready** - Ejecutable en cualquier entorno  
✅ **Histórico completo** - Mantiene todas las ejecuciones anteriores  

## 📁 Estructura del proyecto

```
├── Dockerfile                          # Imagen Docker con JMeter 5.6.3 y Python 3
├── scripts/
│   └── execute-tests.py                # Script principal de automatización
├── test-plans/jmeter/
│   └── tp-carga-controlada.jmx         # Plan de pruebas JMeter
├── data/csv/
│   └── set-datos-creacion.csv          # 1000 registros de datos de prueba
├── docs/                               # Reportes para GitHub Pages
│   ├── index.html                      # Redirección al último reporte
│   └── report/                         # Reporte HTML más reciente
├── results/                            # Histórico de ejecuciones
│   └── run_[timestamp]/
│       ├── results_[timestamp].csv     # Datos de cada request
│       ├── jmeter_[timestamp].log      # Log de ejecución
│       ├── report_[timestamp]/         # Reporte HTML completo
│       └── statistics.json             # Estadísticas en JSON
├── eventos/
│   └── curl.txt                        # Ejemplo de request curl
└── README.md
```

## 🔧 Requisitos

- **Python 3.x**
- **Apache JMeter 5.6.3 o superior** (instalado localmente o vía Docker)
- **Docker** (opcional, para ejecución en contenedores)

## 🚀 Uso rápido

### 1. Ejecución local

Instala JMeter y asegúrate de que esté en tu PATH o define la variable de entorno `JMETER_HOME`.

```bash
python scripts/execute-tests.py --base-url=https://api.example.com --test-plan=test-plans/jmeter/tp-carga-controlada.jmx
```

**El script automáticamente:**
- Valida y normaliza la URL proporcionada
- Busca JMeter en múltiples ubicaciones
- Ejecuta el plan de pruebas
- Genera resultados en `results/run_[timestamp]/`
- Crea reporte HTML interactivo
- Copia el reporte a `docs/` para publicación
- Actualiza `docs/index.html` con redirección al último reporte

### 2. Ejecución con Docker

Construye la imagen y ejecuta las pruebas en un contenedor:

```bash
# Construir imagen
docker build -t jmeter-tests .

# Ejecutar pruebas (Windows)
docker run --rm -v %cd%:/workspace -w /workspace jmeter-tests python3 scripts/execute-tests.py --base-url=https://api.example.com

# Ejecutar pruebas (Linux/Mac)
docker run --rm -v $(pwd):/workspace -w /workspace jmeter-tests python3 scripts/execute-tests.py --base-url=https://api.example.com
```

### 3. Parámetros y configuración

**Argumentos de línea de comandos:**
- `--base-url`: URL base del endpoint a probar (requerido)
- `--test-plan`: Ruta al archivo JMX de JMeter (opcional, por defecto: `test-plans/jmeter/tp-carga-controlada.jmx`)

**Variables de entorno:**
- `BASE_URL`: URL base del endpoint (alternativa a `--base-url`)
- `TEST_PLAN`: Ruta al plan de pruebas (alternativa a `--test-plan`)

**Prioridad:** Argumentos CLI > Variables de entorno > Valores por defecto

**Ejemplo con variables de entorno:**
```bash
export BASE_URL=https://api.example.com
export TEST_PLAN=test-plans/jmeter/tp-carga-controlada.jmx
python scripts/execute-tests.py
```

## 📊 Plan de pruebas

El plan de pruebas `tp-carga-controlada.jmx` está configurado con:

### Configuración HTTP
- **Protocolo:** HTTPS
- **Host por defecto:** `endpoints-fast-api.onrender.com`
- **Timeout de conexión:** 10 segundos
- **Timeout de respuesta:** 10 segundos

### Grupo de threads (Concurrency Thread Group)
- **Usuarios concurrentes:** 20
- **Rampa:** 2 minutos
- **Pasos:** 10
- **Duración:** 1 minuto

### Request HTTP
- **Método:** POST
- **Endpoint:** `/api/v1/tasks/`
- **Body:** JSON con `title` y `description` (parametrizados desde CSV)
- **Headers:** `Content-Type: application/json`

### Validaciones
- **Códigos de respuesta esperados:** 200 o 201
- **Duración máxima por request:** 3 segundos
- **Timer uniforme:** 200-1000ms entre requests

### Datos de prueba
El archivo `data/csv/set-datos-creacion.csv` contiene 1000 registros con formato:
```csv
title;description
Tarea 1;Descripción Tarea 1
Tarea 2;Descripción Tarea 2
...
```

## 🎨 Reportes generados

Cada ejecución genera:

1. **CSV de resultados** (`results_[timestamp].csv`)
   - Datos de cada request: timestamp, elapsed time, response code, latency, bytes, etc.

2. **Log de JMeter** (`jmeter_[timestamp].log`)
   - Log detallado de la ejecución

3. **Reporte HTML interactivo** (`report_[timestamp]/`)
   - Dashboard con gráficos
   - Estadísticas de rendimiento
   - Tiempos de respuesta
   - Throughput
   - Percentiles

4. **Estadísticas JSON** (`statistics.json`)
   - Metadata de la ejecución
   - Timestamp, URL, cantidad de requests

## 🔄 Flujo de ejecución

1. Usuario ejecuta `execute-tests.py` con URL base
2. Script valida URL y extrae host (sin protocolo)
3. Busca JMeter en múltiples ubicaciones
4. Valida que el CSV de datos tenga registros
5. Ejecuta JMeter con parámetros dinámicos
6. Genera CSV con resultados de cada request
7. Genera reporte HTML con gráficos y estadísticas
8. Copia reporte a `docs/` para GitHub Pages
9. Crea archivo de redirección y metadata
10. Muestra resumen: cantidad de requests, URL, timestamp

## 🐳 Dockerfile

La imagen Docker incluye:
- **Base:** Eclipse Temurin 11 JRE
- **JMeter:** 5.6.3
- **Python:** 3.x
- **Plugins:** Concurrency Thread Group (jmeter-plugins-casutg)
- **Zona horaria:** America/Guatemala
- **Health check:** Verifica instalación de JMeter

## 🛠️ Personalización

### Modificar el plan de pruebas

Edita `test-plans/jmeter/tp-carga-controlada.jmx` para ajustar:
- Número de usuarios concurrentes
- Duración de la prueba
- Endpoints a probar
- Validaciones y assertions
- Timers y delays

### Agregar datos de prueba

Modifica `data/csv/set-datos-creacion.csv` con tus propios datos. Formato:
```csv
title;description
Tu título;Tu descripción
```

### Crear nuevos planes de prueba

1. Crea un nuevo archivo `.jmx` en `test-plans/jmeter/`
2. Configura el CSV Data Set Config apuntando a `/tests/data/csv/tu-archivo.csv`
3. Usa `${__P(base_url)}` para el dominio en HTTP Request Defaults
4. Ejecuta con `--test-plan=test-plans/jmeter/tu-plan.jmx`

## 📤 Publicación de reportes

El reporte HTML más reciente se encuentra en `docs/report/index.html`. El archivo `docs/index.html` redirige automáticamente al último reporte generado.

### Publicar en GitHub Pages

1. Ve a Settings > Pages en tu repositorio
2. Selecciona la rama `main` y carpeta `/docs`
3. Guarda los cambios
4. Los reportes estarán disponibles en `https://tu-usuario.github.io/tu-repo/`

## 📝 Validaciones del script

El script `execute-tests.py` incluye validaciones robustas:

- ✅ Valida formato de URL (rechaza markdown, espacios, esquemas inválidos)
- ✅ Extrae host sin protocolo para JMeter
- ✅ Busca JMeter en múltiples ubicaciones
- ✅ Verifica que el CSV tenga datos reales
- ✅ Maneja errores con mensajes descriptivos en colores
- ✅ Genera timestamps únicos para cada ejecución

## 📈 Histórico de ejecuciones

Todas las ejecuciones se guardan en `results/` con estructura:
```
results/
├── run_20260215_222654/
├── run_20260215_230931/
├── run_20260215_231043/
├── run_20260215_231741/
└── run_20260215_232607/
```

Cada carpeta contiene los resultados completos de esa ejecución.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Haz fork del repositorio
2. Crea una rama para tu feature
3. Haz commit de tus cambios
4. Haz push a la rama
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está disponible bajo la licencia que especifiques.