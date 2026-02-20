# endpoints-jmeter-tests

Repositorio para pruebas de performance y carga de endpoints usando Apache JMeter, con automatización de ejecución, generación de reportes y soporte para integración continua (CI/CD).

## Descripción
Este proyecto permite ejecutar pruebas de carga sobre endpoints HTTP utilizando JMeter, automatizando la generación de resultados y reportes HTML. Incluye scripts para facilitar la ejecución local o en pipelines, así como utilidades para preparar los datos y publicar los reportes.

## Estructura del proyecto

```
├── Dockerfile                # Imagen para ejecutar JMeter y scripts en CI/CD
├── scripts/
│   └── execute-tests.py      # Script principal para ejecutar pruebas y generar reportes
├── test-plans/
│   └── jmeter/
│       └── tp-carga-controlada.jmx  # Plan de pruebas JMeter
├── data/
│   └── csv/
│       └── set-datos-creacion.csv   # Datos de entrada para pruebas
├── docs/
│   ├── index.html            # Redirección al último reporte
│   └── report/               # Reporte HTML generado por JMeter
├── results/                  # Resultados y reportes de ejecuciones anteriores
└── README.md
```

## Requisitos

- Python 3.x
- Apache JMeter 5.6.3 o superior (instalado localmente o vía Docker)
- (Opcional) Docker para ejecución en contenedores

## Uso rápido

### 1. Ejecución local

1. Instala JMeter y asegúrate de que esté en tu PATH o define la variable de entorno `JMETER_HOME`.
2. Ejecuta el script principal:

```bash
python scripts/execute-tests.py --base-url=http://localhost:8000 --test-plan=test-plans/jmeter/tp-carga-controlada.jmx
```

El script:
- Ejecuta el test plan indicado
- Genera resultados en `results/`
- Crea un reporte HTML en `docs/report/`
- Actualiza `docs/index.html` para redirigir al último reporte

### 2. Ejecución con Docker

Puedes construir y correr el contenedor para ejecutar las pruebas:

```bash
docker build -t jmeter-tests .
docker run --rm -v %cd%:/workspace -w /workspace jmeter-tests \
	python3 scripts/execute-tests.py --base-url=http://localhost:8000
```

### 3. Variables y argumentos

- `--base-url` o variable de entorno `BASE_URL`: URL base del endpoint a probar
- `--test-plan` o variable de entorno `TEST_PLAN`: Ruta al archivo JMX de JMeter

## Estructura de carpetas

- **scripts/**: utilidades y scripts de automatización
- **test-plans/jmeter/**: planes de prueba JMeter (`.jmx`)
- **data/csv/**: archivos CSV de datos para alimentar los tests
- **docs/**: reportes HTML y archivos para publicación (por ejemplo, GitHub Pages)
- **results/**: resultados y reportes de ejecuciones anteriores

## Personalización

Puedes modificar el archivo JMX en `test-plans/jmeter/` para ajustar los escenarios de carga, endpoints, datos, etc. El archivo CSV en `data/csv/set-datos-creacion.csv` contiene los datos de entrada para los tests parametrizados.

## Publicación de reportes

El reporte HTML más reciente se encuentra en `docs/report/index.html`. El archivo `docs/index.html` redirige automáticamente al último reporte generado.