
        const exercises = [
            // Module 1: Network Security Fundamentals (25 exercises)
            {module: 1, title: "Identificar el protocolo de seguridad de red", description: "¿Qué protocolo se utiliza para cifrar el tráfico web entre un navegador y un servidor?", difficulty: "easy", points: 10, answer: "HTTPS", hint: "Es la versión segura de HTTP y utiliza SSL/TLS para el cifrado."},
            {module: 1, title: "Puerto estándar para HTTPS", description: "¿Qué puerto TCP se utiliza por defecto para el tráfico HTTPS?", difficulty: "easy", points: 10, answer: "443", hint: "Es el puerto estándar asignado por IANA para HTTP sobre SSL/TLS."},
            {module: 1, title: "Protocolo de seguridad de correo", description: "¿Qué protocolo se utiliza para cifrar correos electrónicos en tránsito?", difficulty: "easy", points: 10, answer: "SMTPS", hint: "Es la versión segura de SMTP que utiliza SSL/TLS."},
            {module: 1, title: "VPN protocolo común", description: "¿Qué protocolo es comúnmente utilizado para establecer conexiones VPN seguras?", difficulty: "easy", points: 10, answer: "OpenVPN", hint: "Es un software de código abierto que implementa técnicas de red privada virtual."},
            {module: 1, title: "Cifrado simétrico vs asimétrico", description: "¿Qué tipo de cifrado utiliza la misma clave para cifrar y descifrar?", difficulty: "easy", points: 10, answer: "simétrico", hint: "Ejemplos incluyen AES y DES."},
            {module: 1, title: "Algoritmo de cifrado común", description: "¿Qué algoritmo de cifrado simétrico es ampliamente utilizado en la actualidad?", difficulty: "easy", points: 10, answer: "AES", hint: "Advanced Encryption Standard, adoptado por el gobierno de EE.UU."},
            {module: 1, title: "Longitud de clave AES", description: "¿Cuáles son las longitudes de clave estándar para AES? (separadas por coma)", difficulty: "easy", points: 10, answer: "128,192,256", hint: "AES soporta claves de 128, 192 y 256 bits."},
            {module: 1, title: "Protocolo de autenticación", description: "¿Qué protocolo se utiliza comúnmente para autenticar usuarios en redes?", difficulty: "easy", points: 10, answer: "RADIUS", hint: "Remote Authentication Dial-In User Service."},
            {module: 1, title: "Firewall básico", description: "¿Qué dispositivo de red filtra el tráfico entre redes basándose en reglas de seguridad?", difficulty: "easy", points: 10, answer: "firewall", hint: "Actúa como una barrera entre redes de confianza y no confianza."},
            {module: 1, title: "NAT función", description: "¿Qué tecnología permite que múltiples dispositivos en una red local compartan una sola dirección IP pública?", difficulty: "easy", points: 10, answer: "NAT", hint: "Network Address Translation."},
            {module: 1, title: "Configurar regla de firewall", description: "¿Qué comando bloquearía el tráfico entrante en el puerto 22 en iptables?", difficulty: "medium", points: 20, answer: "iptables -A INPUT -p tcp --dport 22 -j DROP", hint: "Usa iptables con la cadena INPUT, protocolo tcp, puerto de destino 22 y acción DROP."},
            {module: 1, title: "Diferencia entre IDS e IPS", description: "¿Cuál es la principal diferencia entre un IDS y un IPS?", difficulty: "medium", points: 20, answer: "IPS previene, IDS detecta", hint: "IDS monitorea y alerta, IPS monitorea y actúa para prevenir."},
            {module: 1, title: "Protocolo de túnel seguro", description: "¿Qué protocolo crea un túnel seguro a través de una red no segura?", difficulty: "medium", points: 20, answer: "SSH", hint: "Secure Shell, utilizado para acceder de forma segura a servidores remotos."},
            {module: 1, title: "Certificado SSL", description: "¿Qué organización emite certificados SSL/TLS para dominios?", difficulty: "medium", points: 20, answer: "CA", hint: "Certificate Authority o Autoridad de Certificación."},
            {module: 1, title: "Cifrado de extremo a extremo", description: "¿Qué protocolo de mensajería utiliza cifrado de extremo a extremo por defecto?", difficulty: "medium", points: 20, answer: "Signal", hint: "Aplicación de mensajería conocida por su fuerte cifrado."},
            {module: 1, title: "VLAN seguridad", description: "¿Qué tecnología permite segmentar una red física en múltiples redes lógicas?", difficulty: "medium", points: 20, answer: "VLAN", hint: "Virtual Local Area Network."},
            {module: 1, title: "DMZ propósito", description: "¿Cuál es el propósito de una DMZ en la arquitectura de red?", difficulty: "medium", points: 20, answer: "Aislar servidores públicos", hint: "Zona desmilitarizada que actúa como red intermedia entre Internet y la red interna."},
            {module: 1, title: "Protocolo de autenticación seguro", description: "¿Qué protocolo proporciona autenticación mutua entre cliente y servidor?", difficulty: "medium", points: 20, answer: "TLS", hint: "Transport Layer Security, sucesor de SSL."},
            {module: 1, title: "Configurar IPtables NAT", description: "¿Qué comando configura NAT en iptables para compartir internet?", difficulty: "hard", points: 30, answer: "iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE", hint: "Usa la tabla nat, cadena POSTROUTING, interfaz de salida eth0 y acción MASQUERADE."},
            {module: 1, title: "Ataque MITM prevención", description: "¿Qué tecnología previene ataques Man-in-the-Middle en redes WiFi?", difficulty: "hard", points: 30, answer: "WPA3", hint: "El estándar de seguridad WiFi más reciente con mejor protección contra MITM."},
            {module: 1, title: "Protocolo de clave pública", description: "¿Qué algoritmo se utiliza comúnmente para el intercambio de claves en SSL/TLS?", difficulty: "hard", points: 30, answer: "Diffie-Hellman", hint: "Permite que dos partes establezcan una clave compartida sobre un canal inseguro."},
            {module: 1, title: "Firewall estadoful", description: "¿Qué tipo de firewall mantiene un registro del estado de las conexiones activas?", difficulty: "hard", points: 30, answer: "stateful", hint: "Stateful Packet Inspection (SPI)."},
            {module: 1, title: "VPN protocolo UDP", description: "¿Qué protocolo VPN utiliza el puerto UDP 51820 por defecto?", difficulty: "hard", points: 30, answer: "WireGuard", hint: "Protocolo VPN moderno y rápido."},
            {module: 1, title: "Cifrado asimétrico algoritmo", description: "¿Qué algoritmo de cifrado asimétrico es ampliamente utilizado para cifrar correos electrónicos?", difficulty: "hard", points: 30, answer: "RSA", hint: "Rivest-Shamir-Adleman, utilizado en PGP/GPG."},
            {module: 1, title: "Network segmentation", description: "¿Qué tecnología permite crear redes virtuales aisladas dentro de una misma infraestructura física?", difficulty: "hard", points: 30, answer: "SDN", hint: "Software-Defined Networking."},
            {module: 2, title: "Firewall básico Windows", description: "¿Cuál es el nombre del firewall integrado en Windows?", difficulty: "easy", points: 10, answer: "Windows Defender Firewall", hint: "Viene integrado con el sistema operativo Windows."},
            {module: 2, title: "Firewall Linux común", description: "¿Cuál es el firewall más común en distribuciones Linux?", difficulty: "easy", points: 10, answer: "iptables", hint: "Herramienta de configuración de firewall en el kernel de Linux."},
            {module: 2, title: "Firewall moderno Linux", description: "¿Qué herramienta moderna reemplaza a iptables en muchas distribuciones Linux?", difficulty: "easy", points: 10, answer: "nftables", hint: "Netfilter tables, diseñado para ser más eficiente."},
            {module: 2, title: "Regla firewall permitir HTTP", description: "¿Qué comando permite el tráfico HTTP entrante en iptables?", difficulty: "easy", points: 10, answer: "iptables -A INPUT -p tcp --dport 80 -j ACCEPT", hint: "Usa la cadena INPUT, protocolo tcp, puerto 80 y acción ACCEPT."},
            {module: 2, title: "Firewall Cisco", description: "¿Qué comando se utiliza para configurar reglas en un firewall Cisco ASA?", difficulty: "easy", points: 10, answer: "access-list", hint: "Lista de control de acceso."},
            {module: 2, title: "Política firewall por defecto", description: "¿Cuál debe ser la política por defecto de un firewall?", difficulty: "easy", points: 10, answer: "deny all", hint: "Denegar todo el tráfico por defecto y solo permitir lo explícitamente autorizado."},
            {module: 2, title: "Firewall de aplicación", description: "¿Qué tipo de firewall puede filtrar tráfico basado en el contenido de la aplicación?", difficulty: "easy", points: 10, answer: "WAF", hint: "Web Application Firewall."},
            {module: 2, title: "Firewall de red", description: "¿Qué tipo de firewall filtra tráfico entre redes?", difficulty: "easy", points: 10, answer: "Network firewall", hint: "Firewall de red o perimeter firewall."},
            {module: 2, title: "Firewall host-based", description: "¿Qué tipo de firewall se instala directamente en un sistema operativo?", difficulty: "easy", points: 10, answer: "Host-based firewall", hint: "Protege un solo host o dispositivo."},
            {module: 2, title: "Firewall transparente", description: "¿Qué tipo de firewall opera sin ser detectado por los usuarios finales?", difficulty: "easy", points: 10, answer: "Transparent firewall", hint: "No requiere configuración en los dispositivos clientes."},
            {module: 2, title: "Configurar NAT en Cisco", description: "¿Qué comando configura NAT dinámica en un router Cisco?", difficulty: "medium", points: 20, answer: "ip nat inside source list 1 pool POOL1", hint: "Configura la traducción de direcciones para el tráfico interno."},
            {module: 2, title: "Firewall zone-based", description: "¿Qué tipo de firewall divide la red en zonas de seguridad?", difficulty: "medium", points: 20, answer: "Zone-based firewall", hint: "Común en firewalls Cisco ASA."},
            {module: 2, title: "Regla firewall bloquear IP", description: "¿Qué comando bloquea una IP específica en iptables?", difficulty: "medium", points: 20, answer: "iptables -A INPUT -s 192.168.1.100 -j DROP", hint: "Usa la opción -s para especificar la dirección fuente."},
            {module: 2, title: "Firewall logging", description: "¿Qué opción en iptables permite registrar tráfico bloqueado?", difficulty: "medium", points: 20, answer: "-j LOG", hint: "Registra el paquete en los logs del kernel."},
            {module: 2, title: "Firewall rate limiting", description: "¿Qué módulo de iptables se utiliza para limitar la velocidad de conexión?", difficulty: "medium", points: 20, answer: "limit", hint: "Módulo que limita la tasa de coincidencias."},
            {module: 2, title: "Firewall state tracking", description: "¿Qué módulo de iptables permite el seguimiento del estado de las conexiones?", difficulty: "medium", points: 20, answer: "state", hint: "Permite filtrar basado en el estado de la conexión (NEW, ESTABLISHED, etc.)."},
            {module: 2, title: "Firewall MAC filtering", description: "¿Qué tipo de filtrado utiliza direcciones MAC para controlar el acceso?", difficulty: "medium", points: 20, answer: "MAC filtering", hint: "Filtra tráfico basado en la dirección MAC de origen o destino."},
            {module: 2, title: "Firewall port forwarding", description: "¿Qué técnica permite redirigir tráfico de un puerto a otro en un firewall?", difficulty: "medium", points: 20, answer: "Port forwarding", hint: "También conocido como redirección de puertos."},
            {module: 2, title: "Configurar firewall complejo", description: "¿Qué comando crea una regla compleja que permite HTTP y HTTPS solo de una subred específica?", difficulty: "hard", points: 30, answer: "iptables -A INPUT -p tcp -s 192.168.1.0/24 --dport 80:443 -j ACCEPT", hint: "Usa el rango de puertos 80:443 para HTTP y HTTPS."},
            {module: 2, title: "Firewall fail2ban", description: "¿Qué herramienta se integra con firewalls para bloquear IPs después de múltiples intentos fallidos?", difficulty: "hard", points: 30, answer: "fail2ban", hint: "Escanea los logs y actualiza las reglas del firewall para bloquear IPs maliciosas."},
            {module: 2, title: "Firewall con nftables", description: "¿Qué comando crea una tabla en nftables?", difficulty: "hard", points: 30, answer: "nft add table ip filter", hint: "nftables utiliza una sintaxis diferente a iptables."},
            {module: 2, title: "Firewall de capa 7", description: "¿Qué tipo de firewall puede filtrar tráfico basado en el contenido de la capa de aplicación?", difficulty: "hard", points: 30, answer: "Layer 7 firewall", hint: "Puede inspeccionar el contenido de los paquetes a nivel de aplicación."},
            {module: 2, title: "Firewall clustering", description: "¿Qué tecnología permite sincronizar el estado entre múltiples firewalls?", difficulty: "hard", points: 30, answer: "Stateful failover", hint: "Permite alta disponibilidad en configuraciones de firewall."},
            {module: 2, title: "Firewall virtual", description: "¿Qué tipo de firewall se implementa como una máquina virtual?", difficulty: "hard", points: 30, answer: "Virtual firewall", hint: "Se ejecuta en un entorno virtualizado."},
            {module: 2, title: "Firewall en la nube", description: "¿Qué servicio de AWS proporciona funcionalidad de firewall?", difficulty: "hard", points: 30, answer: "AWS Network Firewall", hint: "Servicio de firewall gestionado en AWS."},
            {module: 3, title: "IDS significado", description: "¿Qué significa IDS en ciberseguridad?", difficulty: "easy", points: 10, answer: "Intrusion Detection System", hint: "Sistema de Detección de Intrusos."},
            {module: 3, title: "IPS significado", description: "¿Qué significa IPS en ciberseguridad?", difficulty: "easy", points: 10, answer: "Intrusion Prevention System", hint: "Sistema de Prevención de Intrusos."},
            {module: 3, title: "Snort tipo", description: "¿Qué tipo de sistema es Snort?", difficulty: "easy", points: 10, answer: "IDS/IPS", hint: "Puede funcionar como IDS o IPS."},
            {module: 3, title: "Suricata propósito", description: "¿Para qué se utiliza Suricata?", difficulty: "easy", points: 10, answer: "Monitoreo de red", hint: "Motor de detección de intrusos de alta performance."},
            {module: 3, title: "SIEM significado", description: "¿Qué significa SIEM?", difficulty: "easy", points: 10, answer: "Security Information and Event Management", hint: "Gestión de Información y Eventos de Seguridad."},
            {module: 3, title: "OSSEC tipo", description: "¿Qué tipo de sistema es OSSEC?", difficulty: "easy", points: 10, answer: "HIDS", hint: "Host-based Intrusion Detection System."},
            {module: 3, title: "Wazuh relación con OSSEC", description: "¿Qué relación tiene Wazuh con OSSEC?", difficulty: "easy", points: 10, answer: "Fork", hint: "Wazuh es un fork de OSSEC con funcionalidades adicionales."},
            {module: 3, title: "Zeek propósito", description: "¿Para qué se utiliza Zeek (anteriormente Bro)?", difficulty: "easy", points: 10, answer: "Análisis de tráfico de red", hint: "Motor de análisis de red pasivo."},
            {module: 3, title: "Regla Snort básica", description: "¿Qué palabra clave inicia una regla en Snort?", difficulty: "easy", points: 10, answer: "alert", hint: "Las reglas de Snort comienzan con action: alert, drop, etc."},
            {module: 3, title: "Falsa positiva", description: "¿Qué término describe cuando un IDS alerta sobre actividad legítima?", difficulty: "easy", points: 10, answer: "False positive", hint: "Alerta falsa."},
            {module: 3, title: "Configurar Snort en modo IDS", description: "¿Qué comando ejecuta Snort en modo IDS?", difficulty: "medium", points: 20, answer: "snort -A console -q -c /etc/snort/snort.conf -i eth0", hint: "Usa la opción -A para el modo de alerta y -i para la interfaz."},
            {module: 3, title: "Snort modo IPS", description: "¿Qué opción convierte Snort en un IPS?", difficulty: "medium", points: 20, answer: "-Q", hint: "Modo inline para bloquear tráfico."},
            {module: 3, title: "Suricata reglas", description: "¿Dónde se almacenan las reglas de Suricata por defecto?", difficulty: "medium", points: 20, answer: "/etc/suricata/rules/", hint: "Directorio de reglas estándar."},
            {module: 3, title: "OSSEC configuración", description: "¿Cuál es el archivo de configuración principal de OSSEC?", difficulty: "medium", points: 20, answer: "ossec.conf", hint: "Archivo de configuración en el directorio etc."},
            {module: 3, title: "Wazuh agente", description: "¿Qué componente de Wazuh se instala en los sistemas monitoreados?", difficulty: "medium", points: 20, answer: "Agent", hint: "El agente recopila logs y envía alertas al servidor."},
            {module: 3, title: "SIEM popular", description: "¿Qué SIEM de código abierto es popular para el análisis de logs?", difficulty: "medium", points: 20, answer: "ELK Stack", hint: "Elasticsearch, Logstash, Kibana."},
            {module: 3, title: "Regla Suricata", description: "¿Qué formato utilizan las reglas de Suricata?", difficulty: "medium", points: 20, answer: "Snort", hint: "Suricata es compatible con el formato de reglas de Snort."},
            {module: 3, title: "Análisis de logs", description: "¿Qué herramienta se utiliza comúnmente para analizar logs en tiempo real?", difficulty: "medium", points: 20, answer: "grep", hint: "Herramienta de línea de comandos para buscar patrones."},
            {module: 3, title: "Regla Snort avanzada", description: "¿Qué regla de Snort detecta un escaneo de puertos SYN?", difficulty: "hard", points: 30, answer: "alert tcp any any -> any any (flags:S; msg:\"SYN Scan\"; sid:1000001;)", hint: "Usa el flag S para detectar paquetes SYN sin ACK."},
            {module: 3, title: "Suricata AF_PACKET", description: "¿Qué modo de captura utiliza Suricata para máximo rendimiento?", difficulty: "hard", points: 30, answer: "AF_PACKET", hint: "Interfaz de socket de bajo nivel en Linux."},
            {module: 3, title: "OSSEC integración", description: "¿Cómo se integra OSSEC con un SIEM como ELK?", difficulty: "hard", points: 30, answer: "Filebeat", hint: "Agente ligero que envía logs a Logstash o Elasticsearch."},
            {module: 3, title: "Wazuh reglas personalizadas", description: "¿Dónde se definen las reglas personalizadas en Wazuh?", difficulty: "hard", points: 30, answer: "/var/ossec/rules/local_rules.xml", hint: "Archivo para reglas personalizadas."},
            {module: 3, title: "Zeek scripts", description: "¿En qué lenguaje se escriben los scripts de Zeek?", difficulty: "hard", points: 30, answer: "Zeek script", hint: "Lenguaje de scripting específico de Zeek."},
            {module: 3, title: "Snort preprocessors", description: "¿Qué componente de Snort procesa el tráfico antes de aplicar las reglas?", difficulty: "hard", points: 30, answer: "Preprocessors", hint: "Procesadores previos como Stream5, HTTP Inspect, etc."},
            {module: 3, title: "IPS evasión", description: "¿Qué técnica utilizan los atacantes para evadir sistemas IPS?", difficulty: "hard", points: 30, answer: "Fragmentation", hint: "Fragmentación de paquetes para evitar la detección."},
            {module: 4, title: "Log de autenticación Linux", description: "¿Qué archivo contiene los logs de autenticación en sistemas Linux?", difficulty: "easy", points: 10, answer: "/var/log/auth.log", hint: "En distribuciones basadas en Debian. En Red Hat es /var/log/secure."},
            {module: 4, title: "Log de sistema", description: "¿Qué comando muestra los logs del sistema en tiempo real?", difficulty: "easy", points: 10, answer: "tail -f /var/log/syslog", hint: "Usa tail con la opción -f para seguir el archivo."},
            {module: 4, title: "Log de Apache", description: "¿Dónde se almacenan los logs de acceso de Apache por defecto?", difficulty: "easy", points: 10, answer: "/var/log/apache2/access.log", hint: "Directorio de logs de Apache."},
            {module: 4, title: "Log de errores Apache", description: "¿Dónde se almacenan los logs de errores de Apache por defecto?", difficulty: "easy", points: 10, answer: "/var/log/apache2/error.log", hint: "Archivo de errores del servidor web."},
            {module: 4, title: "Log de Nginx", description: "¿Dónde se almacenan los logs de acceso de Nginx por defecto?", difficulty: "easy", points: 10, answer: "/var/log/nginx/access.log", hint: "Directorio de logs de Nginx."},
            {module: 4, title: "Log de Windows", description: "¿Qué herramienta se utiliza para ver logs en Windows?", difficulty: "easy", points: 10, answer: "Event Viewer", hint: "Visor de eventos de Windows."},
            {module: 4, title: "Buscar errores en logs", description: "¿Qué comando busca la palabra 'error' en los logs del sistema?", difficulty: "medium", points: 20, answer: "grep error /var/log/syslog", hint: "Usa grep para buscar patrones en archivos."},
            {module: 4, title: "Log rotation", description: "¿Qué herramienta se utiliza para rotar logs en Linux?", difficulty: "medium", points: 20, answer: "logrotate", hint: "Herramienta para gestionar la rotación de logs."},
            {module: 4, title: "Log de firewall", description: "¿Dónde se almacenan los logs del firewall en Linux?", difficulty: "medium", points: 20, answer: "/var/log/kern.log", hint: "Los logs del kernel incluyen mensajes del firewall."},
            {module: 4, title: "Analizar logs con awk", description: "¿Qué comando cuenta el número de conexiones por IP en access.log?", difficulty: "medium", points: 20, answer: "awk '{print $1}' /var/log/apache2/access.log | sort | uniq -c | sort -nr", hint: "Usa awk para extraer IPs, sort y uniq para contar."},
            {module: 4, title: "Log centralizado", description: "¿Qué protocolo se utiliza comúnmente para enviar logs a un servidor central?", difficulty: "hard", points: 30, answer: "syslog", hint: "Protocolo estándar para el envío de mensajes de log."},
            {module: 4, title: "ELK Stack configuración", description: "¿Qué componente de ELK recopila y envía logs?", difficulty: "hard", points: 30, answer: "Filebeat", hint: "Agente ligero para recolección de logs."},
            {module: 5, title: "Escáner de vulnerabilidades", description: "¿Qué herramienta escanea vulnerabilidades en redes?", difficulty: "easy", points: 10, answer: "Nessus", hint: "Escáner de vulnerabilidades comercial popular."},
            {module: 5, title: "Escáner open source", description: "¿Qué escáner de vulnerabilidades es de código abierto?", difficulty: "easy", points: 10, answer: "OpenVAS", hint: "Open Vulnerability Assessment System."},
            {module: 5, title: "CVE significado", description: "¿Qué significa CVE?", difficulty: "easy", points: 10, answer: "Common Vulnerabilities and Exposures", hint: "Base de datos de vulnerabilidades de seguridad conocidas."},
            {module: 5, title: "CVSS significado", description: "¿Qué significa CVSS?", difficulty: "easy", points: 10, answer: "Common Vulnerability Scoring System", hint: "Sistema de puntuación de vulnerabilidades."},
            {module: 5, title: "Nmap propósito", description: "¿Para qué se utiliza Nmap?", difficulty: "easy", points: 10, answer: "Escaneo de red", hint: "Network Mapper, herramienta de descubrimiento de red."},
            {module: 5, title: "Metasploit propósito", description: "¿Para qué se utiliza Metasploit?", difficulty: "easy", points: 10, answer: "Pruebas de penetración", hint: "Framework para desarrollo y ejecución de exploits."},
            {module: 5, title: "Escaneo básico con Nmap", description: "¿Qué comando realiza un escaneo básico de puertos abiertos?", difficulty: "medium", points: 20, answer: "nmap -sS 192.168.1.1", hint: "Usa -sS para escaneo SYN stealth."},
            {module: 5, title: "Detectar sistema operativo", description: "¿Qué opción de Nmap detecta el sistema operativo?", difficulty: "medium", points: 20, answer: "-O", hint: "OS detection."},
            {module: 5, title: "Escaneo de vulnerabilidades", description: "¿Qué comando ejecuta un escaneo de vulnerabilidades con OpenVAS?", difficulty: "medium", points: 20, answer: "omp -u admin -w password -h 127.0.0.1 -p 9390 --scan-id scan_id", hint: "OpenVAS Management Protocol."},
            {module: 5, title: "Base de datos CVE", description: "¿Dónde se puede buscar información sobre CVEs?", difficulty: "medium", points: 20, answer: "https://cve.mitre.org", hint: "Sitio web oficial de CVE."},
            {module: 5, title: "Explotar vulnerabilidad", description: "¿Qué comando de Metasploit explota una vulnerabilidad?", difficulty: "hard", points: 30, answer: "exploit", hint: "Comando para ejecutar el exploit seleccionado."},
            {module: 5, title: "Nmap scripts", description: "¿Qué opción de Nmap permite ejecutar scripts NSE?", difficulty: "hard", points: 30, answer: "--script", hint: "Nmap Scripting Engine."},
            {module: 6, title: "Incident Response significado", description: "¿Qué significa IR en ciberseguridad?", difficulty: "easy", points: 10, answer: "Incident Response", hint: "Respuesta a incidentes."},
            {module: 6, title: "Primera acción en un incidente", description: "¿Cuál es la primera acción al detectar un incidente de seguridad?", difficulty: "easy", points: 10, answer: "Contener", hint: "Contener el incidente para evitar más daños."},
            {module: 6, title: "Forense digital", description: "¿Qué disciplina investiga incidentes de seguridad?", difficulty: "easy", points: 10, answer: "Forense digital", hint: "Análisis forense de sistemas digitales."},
            {module: 6, title: "Cadena de custodia", description: "¿Qué concepto es crucial para mantener la integridad de la evidencia?", difficulty: "easy", points: 10, answer: "Cadena de custodia", hint: "Registro cronológico de quién ha tenido acceso a la evidencia."},
            {module: 6, title: "Imagen forense", description: "¿Qué herramienta crea imágenes forenses de discos?", difficulty: "easy", points: 10, answer: "dd", hint: "Comando para copiar datos a nivel de bloque."},
            {module: 6, title: "Análisis de memoria", description: "¿Qué herramienta analiza la memoria RAM en forense?", difficulty: "easy", points: 10, answer: "Volatility", hint: "Framework para análisis forense de memoria."},
            {module: 6, title: "Proceso de IR", description: "¿Cuáles son las 6 fases del proceso de respuesta a incidentes? (separadas por coma)", difficulty: "medium", points: 20, answer: "Preparación,Detección,Contención,Erradicación,Recuperación,Lecciones aprendidas", hint: "Modelo estándar de NIST para respuesta a incidentes."},
            {module: 6, title: "Contener un ataque", description: "¿Qué acción desconnecta un sistema comprometido de la red?", difficulty: "medium", points: 20, answer: "Aislar", hint: "Aislar el sistema de la red."},
            {module: 6, title: "Recopilar evidencia", description: "¿Qué información es crucial recopilar durante un incidente?", difficulty: "medium", points: 20, answer: "Logs, imágenes de disco, capturas de red", hint: "Evidencia digital que puede ser utilizada en una investigación."},
            {module: 6, title: "Forense en vivo", description: "¿Qué técnica recopila evidencia de un sistema en ejecución?", difficulty: "medium", points: 20, answer: "Live forensics", hint: "Análisis forense de sistemas en ejecución."},
            {module: 6, title: "Crear imagen forense", description: "¿Qué comando crea una imagen forense de un disco con dd?", difficulty: "hard", points: 30, answer: "dd if=/dev/sda of=/evidencia.img bs=4096 hash=sha256", hint: "Usa dd con opciones para crear un hash de verificación."},
            {module: 6, title: "Análisis con Volatility", description: "¿Qué comando de Volatility lista los procesos en una imagen de memoria?", difficulty: "hard", points: 30, answer: "volatility -f memoria.raw pslist", hint: "Plugin pslist para listar procesos."},
            {module: 7, title: "ISO 27001", description: "¿Qué estándar internacional define los requisitos para un SGSI?", difficulty: "easy", points: 10, answer: "ISO 27001", hint: "Sistema de Gestión de Seguridad de la Información."},
            {module: 7, title: "SGSI significado", description: "¿Qué significa SGSI?", difficulty: "easy", points: 10, answer: "Sistema de Gestión de Seguridad de la Información", hint: "Information Security Management System."},
            {module: 7, title: "RGPD significado", description: "¿Qué significa RGPD?", difficulty: "easy", points: 10, answer: "Reglamento General de Protección de Datos", hint: "Regulación de la UE sobre protección de datos."},
            {module: 7, title: "GDPR significado", description: "¿Qué significa GDPR?", difficulty: "easy", points: 10, answer: "General Data Protection Regulation", hint: "Equivalente en inglés del RGPD."},
            {module: 7, title: "Política de contraseñas", description: "¿Qué documento define los requisitos para las contraseñas en una organización?", difficulty: "easy", points: 10, answer: "Política de contraseñas", hint: "Password policy."},
            {module: 7, title: "Clasificación de datos", description: "¿Qué proceso categoriza la información según su sensibilidad?", difficulty: "easy", points: 10, answer: "Clasificación de datos", hint: "Data classification."},
            {module: 7, title: "Requisitos ISO 27001", description: "¿Cuántos controles tiene el Anexo A de ISO 27001:2022?", difficulty: "medium", points: 20, answer: "93", hint: "El Anexo A contiene los controles de seguridad."},
            {module: 7, title: "RGPD multas", description: "¿Cuál es la multa máxima por incumplimiento del RGPD?", difficulty: "medium", points: 20, answer: "20 millones de euros o 4% de la facturación anual global", hint: "La que sea mayor."},
            {module: 7, title: "Política de acceso", description: "¿Qué documento define quién puede acceder a qué recursos?", difficulty: "medium", points: 20, answer: "Política de control de acceso", hint: "Access control policy."},
            {module: 7, title: "Auditoría de seguridad", description: "¿Qué proceso evalúa el cumplimiento de las políticas de seguridad?", difficulty: "medium", points: 20, answer: "Auditoría de seguridad", hint: "Security audit."},
            {module: 7, title: "Implementar ISO 27001", description: "¿Cuál es el primer paso para implementar ISO 27001?", difficulty: "hard", points: 30, answer: "Definir el alcance del SGSI", hint: "Establecer los límites y aplicabilidad del sistema."},
            {module: 7, title: "Cumplimiento RGPD", description: "¿Qué documento debe mantenerse según el RGPD para demostrar el cumplimiento?", difficulty: "hard", points: 30, answer: "Registro de actividades de tratamiento", hint: "Article 30 del RGPD."}
        ];

        const modules = {
            1: { title: "Fundamentos de Seguridad de Red", description: "Conceptos básicos de seguridad en redes, protocolos y tecnologías de protección." },
            2: { title: "Configuración de Firewall", description: "Configuración y gestión de firewalls para proteger redes." },
            3: { title: "Detección y Prevención de Intrusos", description: "Sistemas IDS/IPS, monitoreo de red y respuesta a amenazas." },
            4: { title: "Análisis de Logs", description: "Técnicas para analizar registros de sistema y detectar actividades sospechosas." },
            5: { title: "Gestión de Vulnerabilidades", description: "Identificación, evaluación y mitigación de vulnerabilidades." },
            6: { title: "Respuesta a Incidentes", description: "Procesos y técnicas para responder a incidentes de seguridad." },
            7: { title: "Políticas de Seguridad y Cumplimiento", description: "Normativas, estándares y mejores prácticas en ciberseguridad." }
        };

        let userAnswers = {};
        let solvedExercises = new Set();

        const modulesContainer = document.getElementById('modules-container');
        const moduleFilter = document.getElementById('module-filter');
        const difficultyFilter = document.getElementById('difficulty-filter');
        const searchInput = document.getElementById('search');
        const resetFiltersBtn = document.getElementById('reset-filters');
        const moduleChips = document.getElementById('module-chips');

        const totalExercisesEl = document.getElementById('total-exercises');
        const solvedExercisesEl = document.getElementById('solved-exercises');
        const totalPointsEl = document.getElementById('total-points');
        const progressPercentEl = document.getElementById('progress-percent');

        function init() {
            renderModules();
            populateFilters();
            updateStats();
            loadProgress();
            setupEventListeners();
        }

        function renderModules() {
            modulesContainer.innerHTML = '';
            for (const moduleId in modules) {
                const module = modules[moduleId];
                const moduleExercises = exercises.filter(e => e.module === parseInt(moduleId));
                if (moduleExercises.length === 0) continue;

                const moduleElement = document.createElement('div');
                moduleElement.className = 'module';
                moduleElement.id = `module-${moduleId}`;
                moduleElement.dataset.module = moduleId;

                let moduleHTML = `
                    <h2>📚 ${module.title}</h2>
                    <p class="module-description">${module.description}</p>
                    <div class="progress-container">
                        <div class="progress-bar">
                            <div class="progress-fill" id="progress-${moduleId}" style="width: 0%"></div>
                        </div>
                        <div class="progress-text">
                            <span>${moduleExercises.filter(e => solvedExercises.has(getExerciseId(e))).length}/${moduleExercises.length} ejercicios completados</span>
                        </div>
                    </div>
                    <div class="exercises-container">
                `;

                moduleExercises.forEach(exercise => {
                    moduleHTML += renderExercise(exercise);
                });

                moduleHTML += '</div>';
                moduleElement.innerHTML = moduleHTML;
                modulesContainer.appendChild(moduleElement);
            }
        }

        function renderExercise(exercise) {
            const exerciseId = getExerciseId(exercise);
            const isSolved = solvedExercises.has(exerciseId);
            const userAnswer = userAnswers[exerciseId] || '';

            return `
                <div class="exercise ${isSolved ? 'solved' : ''}" data-module="${exercise.module}" data-difficulty="${exercise.difficulty}" data-id="${exerciseId}">
                    <div class="exercise-header">
                        <div class="exercise-title">${exercise.title}</div>
                        <div>
                            <span class="difficulty ${exercise.difficulty}">${exercise.difficulty}</span>
                            <span class="points">+${exercise.points} pts</span>
                        </div>
                    </div>
                    <div class="exercise-content">${exercise.description}</div>
                    <div class="answer-section">
                        <label for="answer-${exerciseId}">Respuesta:</label>
                        <input type="text" id="answer-${exerciseId}" class="answer-input" value="${userAnswer}" ${isSolved ? 'disabled' : ''}>
                        <button class="verify-btn" onclick="verifyAnswer(${exercise.module}, '${exercise.title.replace(/'/g, "\\'")}')" ${isSolved ? 'disabled' : ''}>
                            ${isSolved ? '✓ Resuelto' : 'Verificar'}
                        </button>
                        <div id="result-${exerciseId}" class="result"></div>
                    </div>
                    <details class="hint-section">
                        <summary>💡 Pista</summary>
                        <div class="hint-content">${exercise.hint}</div>
                    </details>
                </div>
            `;
        }

        function getExerciseId(exercise) {
            return `${exercise.module}-${exercise.title.substring(0, 20).replace(/\s+/g, '-').toLowerCase()}`;
        }

        function verifyAnswer(module, title) {
            const exercise = exercises.find(e => e.module === module && e.title === title);
            if (!exercise) return;

            const exerciseId = getExerciseId(exercise);
            const inputElement = document.getElementById(`answer-${exerciseId}`);
            const resultElement = document.getElementById(`result-${exerciseId}`);
            const userAnswer = inputElement.value.trim();

            const isCorrect = userAnswer.toLowerCase() === exercise.answer.toLowerCase();

            if (isCorrect) {
                solvedExercises.add(exerciseId);
                userAnswers[exerciseId] = userAnswer;
                resultElement.className = 'result correct';
                resultElement.textContent = '✓ Correcto';
                inputElement.disabled = true;
                const button = resultElement.previousElementSibling;
                button.textContent = '✓ Resuelto';
                button.disabled = true;
                resultElement.closest('.exercise').classList.add('solved');
                saveProgress();
                updateStats();
            } else {
                resultElement.className = 'result incorrect';
                resultElement.textContent = '✗ Incorrecto. Intenta de nuevo.';
            }
        }

        function updateStats() {
            const totalExercises = exercises.length;
            const solvedCount = solvedExercises.size;
            const totalPoints = exercises.filter(e => solvedExercises.has(getExerciseId(e))).reduce((sum, e) => sum + e.points, 0);
            const maxPoints = exercises.reduce((sum, e) => sum + e.points, 0);
            const progressPercent = totalExercises > 0 ? Math.round((solvedCount / totalExercises) * 100) : 0;

            totalExercisesEl.textContent = totalExercises;
            solvedExercisesEl.textContent = solvedCount;
            totalPointsEl.textContent = totalPoints;
            progressPercentEl.textContent = `${progressPercent}%`;

            for (const moduleId in modules) {
                const moduleExercises = exercises.filter(e => e.module === parseInt(moduleId));
                const solvedInModule = moduleExercises.filter(e => solvedExercises.has(getExerciseId(e))).length;
                const moduleProgress = moduleExercises.length > 0 ? (solvedInModule / moduleExercises.length) * 100 : 0;
                const progressFill = document.getElementById(`progress-${moduleId}`);
                if (progressFill) {
                    progressFill.style.width = `${moduleProgress}%`;
                }
            }
            saveProgress();
        }

        function saveProgress() {
            try {
                localStorage.setItem('ctf-solved', JSON.stringify(Array.from(solvedExercises)));
                localStorage.setItem('ctf-answers', JSON.stringify(userAnswers));
            } catch (e) {
                console.log('No se pudo guardar el progreso:', e);
            }
        }

        function loadProgress() {
            try {
                const savedSolved = localStorage.getItem('ctf-solved');
                const savedAnswers = localStorage.getItem('ctf-answers');
                if (savedSolved) {
                    solvedExercises = new Set(JSON.parse(savedSolved));
                }
                if (savedAnswers) {
                    userAnswers = JSON.parse(savedAnswers);
                }
            } catch (e) {
                console.log('No se pudo cargar el progreso:', e);
            }
        }

        function populateFilters() {
            moduleFilter.innerHTML = '<option value="">Todos los módulos</option>';
            for (const moduleId in modules) {
                const option = document.createElement('option');
                option.value = moduleId;
                option.textContent = modules[moduleId].title;
                moduleFilter.appendChild(option);
            }
            for (const moduleId in modules) {
                const chip = document.createElement('div');
                chip.className = 'chip';
                chip.textContent = modules[moduleId].title;
                chip.dataset.module = moduleId;
                chip.onclick = () => filterByModule(moduleId);
                moduleChips.appendChild(chip);
            }
        }

        function filterByModule(moduleId) {
            moduleFilter.value = moduleId;
            document.querySelectorAll('.chip').forEach(chip => {
                chip.classList.toggle('active', chip.dataset.module === moduleId);
            });
            applyFilters();
        }

        function applyFilters() {
            const searchTerm = searchInput.value.toLowerCase();
            const selectedModule = moduleFilter.value;
            const selectedDifficulty = difficultyFilter.value;

            document.querySelectorAll('.exercise').forEach(exercise => {
                const module = exercise.dataset.module;
                const difficulty = exercise.dataset.difficulty;
                const title = exercise.querySelector('.exercise-title').textContent.toLowerCase();
                const description = exercise.querySelector('.exercise-content').textContent.toLowerCase();

                let visible = true;
                if (searchTerm && !title.includes(searchTerm) && !description.includes(searchTerm)) {
                    visible = false;
                }
                if (selectedModule && module !== selectedModule) {
                    visible = false;
                }
                if (selectedDifficulty && difficulty !== selectedDifficulty) {
                    visible = false;
                }
                exercise.classList.toggle('hidden', !visible);
            });

            document.querySelectorAll('.module').forEach(module => {
                const visibleExercises = module.querySelectorAll('.exercise:not(.hidden)');
                module.classList.toggle('hidden', visibleExercises.length === 0);
            });
        }

        function setupEventListeners() {
            searchInput.addEventListener('input', applyFilters);
            moduleFilter.addEventListener('change', applyFilters);
            difficultyFilter.addEventListener('change', applyFilters);
            resetFiltersBtn.addEventListener('click', () => {
                searchInput.value = '';
                moduleFilter.value = '';
                difficultyFilter.value = '';
                document.querySelectorAll('.chip').forEach(chip => {
                    chip.classList.remove('active');
                });
                applyFilters();
            });
        }

        window.verifyAnswer = verifyAnswer;
        window.filterByModule = filterByModule;
        document.addEventListener('DOMContentLoaded', init);
    