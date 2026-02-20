FROM eclipse-temurin:11-jre

# Metadata
LABEL maintainer="tu-email@example.com"
LABEL description="JMeter test runner container for CI/CD"
LABEL version="1.0"

# Arguments
ARG JMETER_VERSION=5.6.3

# Environment variables
ENV JMETER_VERSION=${JMETER_VERSION}
ENV JMETER_HOME=/opt/apache-jmeter
ENV PATH=$JMETER_HOME/bin:$PATH
ENV TZ=America/Guatemala

# Instalar dependencias
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    wget \
    ca-certificates \
    python3 \
    python3-pip \
    curl \
    tzdata \
    && rm -rf /var/lib/apt/lists/*

# Descargar e instalar JMeter
RUN echo "📥 Descargando JMeter ${JMETER_VERSION}..." && \
    wget -q https://archive.apache.org/dist/jmeter/binaries/apache-jmeter-${JMETER_VERSION}.tgz && \
    echo "📂 Extrayendo JMeter..." && \
    tar -xzf apache-jmeter-${JMETER_VERSION}.tgz && \
    mv apache-jmeter-${JMETER_VERSION} ${JMETER_HOME} && \
    rm apache-jmeter-${JMETER_VERSION}.tgz && \
    echo "✅ JMeter instalado"

# Instalar plugins de JMeter (opcional)
RUN wget -q -O ${JMETER_HOME}/lib/ext/jmeter-plugins-manager.jar \
    https://jmeter-plugins.org/get/ || true && \
    wget -q -O ${JMETER_HOME}/lib/cmdrunner-2.3.jar \
    https://repo1.maven.org/maven2/kg/apc/cmdrunner/2.3/cmdrunner-2.3.jar || true

# Crear directorio de trabajo
WORKDIR /tests

# Copiar archivos del proyecto
COPY scripts/ /tests/scripts/
COPY test-plans/ /tests/test-plans/
COPY data/ /tests/data/

# Dar permisos de ejecución
RUN chmod +x /tests/scripts/execute-tests.py

# Crear directorios para resultados
RUN mkdir -p /tests/results /tests/docs && \
    chmod 777 /tests/results /tests/docs

# Verificar instalación
RUN echo "🔍 Verificando instalación..." && \
    jmeter --version && \
    python3 --version && \
    echo "✅ Todo instalado correctamente"

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD jmeter --version || exit 1

# Comando por defecto
ENTRYPOINT ["python3", "scripts/execute-tests.py"]
CMD ["--help"]