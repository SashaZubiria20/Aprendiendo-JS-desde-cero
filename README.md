# Aprendiendo JavaScript desde Cero

¡Hola! Este es mi repositorio personal donde documento mi proceso de aprendizaje en **JavaScript**. Aquí guardo todos los ejercicios prácticos, retos y apuntes que voy realizando en mi curso de Udemy.

## 📂 Contenido del Repositorio

He dividido mi aprendizaje en bloques lógicos para dominar las bases del lenguaje:

### 1️⃣ Fundamentos y Sintaxis
*   **Sintaxis Básica:** Reglas de escritura, uso de `;` y Case Sensitivity.
*   **Variables y Constantes:** Uso profesional de `let` y `const`.
*   **Tipos de Datos:** Primitivos (Strings, Numbers, Booleans) y Operadores (Matemáticos, asignación, incrementos).

### 2️⃣ Herramientas Nativas
*   **Strings:** Manipulación de textos con la propiedad `.length` y métodos avanzados (`trim`, `slice`, `toUpperCase`, `replace`, etc.).
*   **Objeto Math:** Operaciones matemáticas complejas y fórmulas profesionales para generación de azar.

### 3️⃣ Estructuras de Control y Lógica
*   **Condicionales:** Toma de decisiones con `if / else`, `switch` y el `Operador Ternario`.
*   **Bucles (Loops):** Repetición de tareas con `while`, `do-while`, `for`, `for-of` y `for-in`.

### 4️⃣ Estructuras de Datos y Métodos Modernos
*   **Arrays:** Índices, propiedad `.length` y métodos de manipulación.
*   **Métodos Funcionales de Array:** Procesamiento avanzado con `.forEach()`, `.map()`, `.filter()`, `.some()`, `.every()` y el potente `.reduce()`.
*   **Objetos:** Estructuras clave-valor, Arrays de Objetos y recorrido dinámico.
*   **Spread Operator:** Expansión de datos, copias de seguridad (inmutabilidad) y unión de listas.

### 5️⃣ Modularización y Reutilización
*   **Funciones:** Bloques reutilizables, parámetros, retorno de valores (`return`) y diferencia entre funciones tradicionales y **Arrow Functions**.
*   **Parámetros REST:** Uso del Spread Operator para recibir argumentos indefinidos en funciones.

### 6️⃣ Programación Orientada a Objetos (POO)
*   **Clases:** Creación de plantillas o "moldes" para objetos.
*   **Constructor:** Inicialización de propiedades y uso de `this`.
*   **Métodos de Clase:** Definición de comportamientos específicos dentro del molde.

### 7️⃣ Interacción con el Navegador (DOM)
*   **Concepto de DOM:** El modelo de objetos que convierte el HTML en una estructura viva manipulable por JavaScript.
*   **Nodos:** Identificación de tipos de nodo fundamentales (1: Elemento, 3: Texto, 8: Comentario).
*   **Seleccionadores:** Métodos para capturar elementos específicos del HTML (`getElementById`, `querySelector`, `querySelectorAll`).
*   **Conversión de Colecciones:** Transformación de `NodeList` en Arrays reales mediante **Array.from()** o el **Spread Operator** para permitir el uso de métodos avanzados como `.map()` o `.filter()`.
*   **Modificación de Contenido:** Diferencia entre `textContent` (seguridad y texto plano) e `innerHTML` (inserción de etiquetas y estructuras HTML).
*   **Manipulación de Atributos:** Gestión técnica de las etiquetas mediante los métodos `getAttribute` y `setAttribute`.
*   **Gestión de Clases (classList):** Control dinámico de estilos y diseños mediante los métodos `add`, `remove`, `toggle`, `contains` y `replace`.
*   **Captura de Datos:** Uso de la propiedad `.value` para obtener y procesar información de formularios en tiempo real.
*   **Manejo de Eventos (Event Listeners):** Implementación de escuchadores activos mediante `addEventListener` para desacoplar la lógica del HTML.
*   **Eventos de Usuario:** Gestión de interacciones de ratón (`click`, `dblclick`, `mouseenter`) y teclado (`input`).
*   **Diferenciación de Propiedades:** Comprensión técnica de cuándo utilizar `.value` (elementos de formulario) frente a `.textContent` (nodos de texto).
*   **Lógica Reactiva:** Creación de funciones que responden en tiempo real a las acciones del usuario, permitiendo validaciones dinámicas y cambios estéticos aleatorios.
*   **El Objeto Evento (e):** Acceso a la información técnica detallada generada automáticamente por el navegador tras cada interacción del usuario.
*   **Identificación con e.target:** Localización precisa del elemento exacto que disparó el evento, facilitando su manipulación individual sin selecciones externas.
*   **Control del Navegador (preventDefault):** Uso del "freno de mano" para evitar comportamientos nativos como la recarga de página en formularios o la navegación automática en enlaces.
*   **Delegación de Eventos:** Técnica avanzada de optimización que consiste en asignar un solo evento a un elemento padre para gestionar las interacciones de todos sus hijos actuales y futuros.
*   **Investigación de Propiedades (console.dir):** Explorar el árbol completo de propiedades internas de los objetos del DOM.
*   **Creación de Elementos:** Fabricación dinámica de etiquetas desde la memoria del navegador mediante el método `document.createElement()`.
*   **Instanciación en el DOM:** Integración de nuevos nodos al árbol jerárquico mediante `appendChild()`, permitiendo la generación de interfaces reactivas.
*   **Fragmentos de Código (DocumentFragment):** Implementación de contenedores temporales de alto rendimiento para realizar inserciones masivas de elementos, optimizando el renderizado y los recursos del navegador.
*   **DOM Traversing (Recorrido del árbol):** Navegación técnica a través de la jerarquía de nodos para localizar elementos mediante sus relaciones familiares.
*   **Navegación Ascendente:** Uso de `parentElement` para acceder a contenedores superiores y `closest()` para búsquedas inteligentes de ancestros específicos.
*   **Navegación Descendente:** Gestión de colecciones de hijos mediante `children` y acceso directo a extremos con `firstElementChild` y `lastElementChild`.
*   **Navegación Lateral (Siblings):** Movimiento entre elementos del mismo nivel utilizando `nextElementSibling` y `previousElementSibling`.
*   **Diferenciación de Nodos:** Comprensión de la diferencia entre Nodos (que incluyen espacios y texto) y Elementos (etiquetas puras) para una navegación precisa y sin errores de renderizado.
*   **Manipulación Avanzada del DOM:** Dominio de técnicas para la reestructuración dinámica del árbol de nodos.
*   **Clonación de Estructuras:** Uso de `cloneNode(true)` para duplicar elementos complejos manteniendo su integridad y contenido.
*   **Inserción Precisa:** Implementación de métodos modernos (`before`, `prepend`, `append`, `after`) y técnicos (`insertAdjacentHTML`) para el posicionamiento exacto de nuevos componentes.
*   **Sustitución Dinámica:** Gestión de cambios de estado mediante `replaceWith()`, permitiendo el intercambio instantáneo de elementos en la interfaz.
*   **Eliminación Técnica:** Remoción definitiva de nodos mediante el método `remove()`, optimizando la limpieza del DOM tras interacciones del usuario.
*   **Gestión de Objetos Nativos:** Utilización de las APIs globales del navegador (`window`, `location`, `history`) para el control de la navegación y la interfaz de usuario.
*   **Visualización de Datos:** Implementación de métodos avanzados de consola como `console.table()` para el análisis de estructuras de datos complejas y `console.dir()` para la inspección de objetos.
*   **Manejo de Tiempo y Fechas:** Instanciación y manipulación del objeto `Date` para la gestión de marcas temporales.
*   **Programación Asíncrona (Timers):** Control del flujo temporal mediante `setTimeout()` para ejecuciones diferidas y `setInterval()` para procesos cíclicos, optimizando la interactividad cronometrada.

### 8️⃣ Comunicación Asíncrona (AJAX)
*   **Concepto de AJAX:** Implementación de técnicas de transferencia de datos en segundo plano para evitar recargas de página innecesarias.
*   **Peticiones HTTP:** Dominio del objeto `XMLHttpRequest` para la gestión de solicitudes `GET` a servidores externos.
*   **Consumo de APIs:** Conexión y extracción de datos en tiempo real desde servicios externos (JSONPlaceholder).
*   **Tratamiento de JSON:** Uso de `JSON.parse()` para la transformación de respuestas de texto plano en objetos manipulables por JavaScript.
*   **Optimización de Renderizado:** Integración de `DocumentFragment` con datos asíncronos para actualizar la interfaz de usuario de forma eficiente y limpia.
* **Dinamización de Peticiones:** Filtrado de datos mediante parámetros de consulta (Query Params) en la URL.
* **Control de Eventos de Formulario:** Uso de `preventDefault()` para la gestión de solicitudes asíncronas sin recarga de página.
* **Gestión de Colisiones:** Importancia de identificadores únicos en implementaciones múltiples para evitar conflictos de ejecución.
* **Plantillas Dinámicas:** Uso de Template Literals para la creación de estructuras HTML dinámicas de forma legible.
* **Envío de Datos (Método POST):** Implementación de peticiones para la creación de nuevos recursos en servidores externos.
* **Captura con FormData:** Uso del objeto `FormData` para empaquetar y enviar datos de formularios de manera automatizada y limpia.
* **Gestión de Respuestas (Status 201):** Procesamiento de confirmaciones de creación mediante `JSON.parse` y feedback visual en el DOM.
* **Mantenimiento de Interfaz:** Uso del método `reset()` para la limpieza de formularios tras envíos exitosos.

### 9️⃣ Programación Asíncrona: Callbacks y Promesas
* **Concepto de Callbacks:** Implementación de funciones pasadas como argumentos para gestionar la ejecución de tareas diferidas.
* **Callback Hell:** Identificación y comprensión de las limitaciones de legibilidad al anidar múltiples funciones asíncronas.
* **Objeto Promise:** Creación de estructuras asíncronas modernas mediante `new Promise()` para la gestión de estados (Pending, Fulfilled, Rejected).
* **Lógica Resolve y Reject:** Manejo de los "cables" internos de una promesa para determinar el éxito o fallo de una operación.
* **Consumo con Then y Catch:** Utilización de métodos `.then()` para procesar datos exitosos y `.catch()` para la captura centralizada de errores.
* **Encadenamiento de Promesas (Chaining):** Técnica de retorno de promesas para ejecutar procesos dependientes en una secuencia lineal y legible.

### 🔟 Fetch API:
* **Introducción a Fetch:** Sustitución de `XMLHttpRequest` por una interfaz más potente, limpia y basada nativamente en promesas.
* **Validación de Respuestas:** Implementación de la propiedad `res.ok` para el manejo preciso de códigos de estado HTTP (200-299).
* **Tratamiento de Datos:** Uso del método `.json()` para la conversión de flujos de datos (streams) en objetos manipulables por JavaScript.
* **Renderizado Dinámico:** Integración de Fetch con manipulación del DOM para la carga asíncrona de recursos multimedia (imágenes) y datos de usuarios.

### 1️⃣1️⃣ Fetch API: Peticiones POST y Envío de Datos
* **Configuración Avanzada:** Uso del objeto `init` para la definición de métodos HTTP, cabeceras y cuerpo de la solicitud.
* **Serialización con stringify:** Aplicación de `JSON.stringify()` para convertir objetos JavaScript en flujos de datos compatibles con servidores.
* **Protocolo de Cabeceras:** Implementación de `headers` y `Content-type` para la gestión precisa del intercambio de información en formato JSON.
* **Manejo de Estados de Respuesta:** Validación mediante `res.ok` y control de flujo con `Promise.resolve/reject` para la captura de errores 404/500.
* **Limpieza de Interfaz:** Uso del método `.reset()` para el mantenimiento del estado de los formularios tras envíos exitosos.

### 1️⃣2️⃣ Programación Asíncrona: Async / Await
* **Funciones Asíncronas:** Implementación del operador `async` para la creación de funciones que retornan promesas de forma implícita.
* **Control de Flujo con Await:** Uso del operador `await` para pausar la ejecución del código hasta la resolución de promesas, permitiendo una lectura secuencial.
* **Manejo de Errores con Try-Catch:** Estructuración de bloques de "intento" y "captura" para gestionar excepciones en procesos asíncronos de forma limpia.
* **Excepciones Personalizadas:** Uso de `throw new Error()` para disparar errores lógicos manuales y redirigir el flujo hacia el bloque `catch`.
* **Encadenamiento Secuencial:** Optimización de peticiones dependientes, eliminando el anidamiento excesivo y mejorando la mantenibilidad del código.

### 1️⃣3️⃣ Librería Axios: GET y POST
* **Integración Externa:** Implementación de Axios como alternativa optimizada a la Fetch API nativa.
* **Automatización de Procesos:** Aprovechamiento del parseo automático de JSON (eliminación de `.json()`) y serialización automática de objetos (eliminación de `stringify`).
* **Acceso a Datos:** Gestión del objeto de respuesta mediante la propiedad `.data` para una manipulación directa de la información.
* **Configuración Centralizada:** Uso de objetos de inicialización para definir métodos, URLs y cuerpos de solicitud de forma estructurada.
* **Optimización de Sintaxis:** Aplicación de métodos abreviados `axios.get()` y `axios.post()` para mejorar la legibilidad y mantenimiento del código asíncrono.

### 1️⃣4️⃣ Formularios y Validación de Datos
* **Control de Envío:** Uso de `e.preventDefault()` para anular el comportamiento nativo y gestionar el flujo de datos con JavaScript.
* **Eventos de Interacción:** Implementación de eventos `'input'` y `'change'` para la captura de datos en tiempo real y respuesta inmediata.
* **Lógica de Validación:** Creación de objetos de estado para centralizar la validez de múltiples campos y control de estados en botones (`disabled`).
* **Manipulación de DOM Crítica:** Aplicación de clases dinámicas (`classList.replace`) y retroalimentación visual basada en la validez de la información.
* **Limpieza de Interfaz:** Uso de `.reset()` y reinicio manual de estados lógicos para garantizar la consistencia tras envíos exitosos.

### 1️⃣5️⃣ Expresiones Regulares (RegEx)
* **Patrones de Búsqueda:** Implementación de sintaxis literal `/patron/` y constructor `new RegExp()` para la creación de filtros de texto dinámicos.
* **Validación de Datos:** Uso del método `.test()` para comprobaciones booleanas en tiempo real y anclajes `^` / `$` para validaciones exactas.
* **Extracción y Sustitución:** Aplicación de `.match()` para recuperación de datos masivos y `.replace()` con RegEx para limpieza o censura de información sensible.
* **Cuantificadores y Metacaracteres:** Dominio de rangos `[]`, repeticiones `{n}` y shorthands (`\d`, `\w`, `\s`) para la construcción de reglas complejas.
* **Banderas de Control:** Uso de `i` (ignore case) y `g` (global) para optimizar el alcance y precisión de las búsquedas en el DOM.

### 1️⃣6️⃣ Web Storage API (Persistencia de Datos)
* **Almacenamiento Local vs Sesión:** Implementación de `localStorage` para datos permanentes y `sessionStorage` para datos volátiles de una sola pestaña.
* **Gestión de Clave-Valor:** Uso de los métodos fundamentales `.setItem()`, `.getItem()`, `.removeItem()` y `.clear()` para el control del almacenamiento.
* **Serialización de Datos (JSON):** Manejo de objetos complejos mediante `JSON.stringify()` para almacenamiento y `JSON.parse()` para recuperación de estructuras.
* **Persistencia de Interfaz:** Aplicación de preferencias guardadas (colores, nombres) durante la carga del DOM para mejorar la experiencia de usuario.
* **Control de Sesión:** Creación de contadores y registros temporales para auditar el comportamiento del usuario durante su navegación actual.

### 1️⃣7️⃣ API Drag & Drop (Interactividad Avanzada)
* **Atributo Draggable:** Activación de elementos móviles mediante la propiedad `draggable="true"` en etiquetas HTML.
* **Ciclo de Eventos del Objeto:** Manejo de estados de arrastre con `dragstart`, `drag` y `dragend` para el control de la pieza móvil.
* **Gestión de Zonas de Destino:** Implementación de `dragover` con `preventDefault()` para habilitar áreas de recepción de datos (obligatorio).
* **Objeto DataTransfer:** Uso de la mochila virtual de información mediante `setData()` y `getData()` para el traspaso de IDs entre contenedores de forma compatible.
* **Manipulación del DOM Dinámica:** Traslado físico de elementos entre nodos padres usando métodos de inserción (`append` / `removeChild`) tras el evento de soltado.
* **Feedback Visual:** Uso de `dragenter` y `dragleave` para la modificación dinámica de estilos en la interfaz durante el proceso de arrastre.

### 1️⃣8️⃣ API File (Manipulación de Archivos)
* **Interfaz FileReader:** Uso de objetos de lectura para acceder a datos locales del sistema de archivos del usuario.
* **Formatos de Lectura:** Implementación de `readAsText()` para documentos y `readAsDataURL()` para previsualización multimedia.
* **Procesamiento Asíncrono:** Gestión de flujos de datos mediante eventos de carga (`load`) y captura de resultados con `target.result`.
* **Monitorización de Progreso:** Creación de barras de carga dinámicas utilizando las propiedades `loaded` y `total` del evento `progress`.
* **Carga Masiva:** Optimización del DOM mediante `DocumentFragment` para la visualización simultánea de múltiples archivos.
* **Integración con CSS:** Uso de variables personalizadas (`setProperty`) para animar interfaces basadas en el estado de la API.

### 1️⃣9️⃣ API IndexedDB (Bases de Datos Locales)
* **Arquitectura Orientada a Objetos:** Implementación de bases de datos NoSQL persistentes directamente en el navegador del cliente.
* **Ciclo de Vida de Conexión:** Manejo de peticiones asíncronas mediante el método `.open()` y control de versiones del esquema.
* **Gestión de Eventos DOM:** Uso de `onsuccess` para la apertura de flujos y `onerror` para la captura de excepciones en tiempo de ejecución.
* **Estructura de Almacenamiento:** Uso de `onupgradeneeded` como disparador crítico para la creación de `ObjectStores` mediante el método `createObjectStore()`.
* **Persistencia Avanzada:** Configuración de entornos de datos capaces de manejar grandes volúmenes de información y estados complejos de la aplicación.

### 2️⃣0️⃣ IndexedDB: Inserción y Gestión de Datos
* **Estrategias de Indexación:** Implementación de `keyPath` para identificadores únicos y `autoIncrement` para la generación automática de llaves.
* **Ciclo de Transacciones:** Manejo del método `.transaction()` con modos de acceso `'readwrite'` para garantizar la integridad de las operaciones.
* **Flujo de Trabajo Asíncrono:** Fragmentación del proceso de guardado en tres etapas: apertura de transacción, selección de `objectStore` y ejecución del método `.add()`.
* **Captura de Formularios:** Integración de eventos de interfaz para transformar entradas del usuario en objetos estructurados compatibles con la base de datos.

### 2️⃣1️⃣ IndexedDB: Lectura y Recuperación de Datos
* **Navegación con Cursores:** Implementación del método `.openCursor()` para el recorrido secuencial de registros en la base de datos.
* **Gestión de Transacciones Seguras:** Uso del modo `'readonly'` para optimizar las consultas y proteger la integridad del almacenamiento.
* **Lógica de Iteración Asíncrona:** Manejo del flujo de repetición mediante el método `.continue()` para procesar volúmenes masivos de datos.
* **Optimización del DOM:** Integración de `DocumentFragment` para renderizar colecciones de objetos de forma eficiente y fluida.
* **Control de Estados Finales:** Implementación de validaciones para detectar el cierre de flujos de datos (cuando el cursor retorna `null`).

### 2️⃣2️⃣ IndexedDB: Actualización y Gestión de Estados
* **Recuperación Selectiva:** Implementación del método `.get()` para la extracción puntual de registros mediante su `keyPath`.
* **Persistencia con PUT:** Uso del método inteligente `.put()` para la actualización de objetos existentes y prevención de duplicados.
* **Control de Interfaz Dinámica:** Uso de `dataset` para alternar comportamientos lógicos en botones y formularios de entrada.
* **Sincronización de Datos:** Implementación de flujos de retroalimentación donde la interfaz se actualiza automáticamente tras cada operación de escritura.
* **Manejo de Atributos HTML5:** Vinculación de datos de la base de datos con las propiedades `.value` de los elementos del DOM.

### 2️⃣3️⃣ IndexedDB: Eliminación y Consultas Avanzadas
* **Operaciones de Borrado:** Implementación del método `.delete()` para la remoción selectiva de registros mediante llaves únicas.
* **Mantenimiento de Almacenes:** Uso de `.clear()` para el vaciado completo de ObjectStores y `deleteDatabase()` para la gestión profunda del almacenamiento.
* **Consultas de Alto Rendimiento:** Introducción a `getAll()` y el uso de `IDBKeyRange` para filtrado eficiente de colecciones de datos.
* **Arquitectura de Índices:** Configuración de `createIndex` en la fase de actualización (`onupgradeneeded`) para búsquedas por campos secundarios.
* **Manipulación Dinámica del DOM:** Creación de interfaces reactivas mediante la generación de elementos en tiempo de ejecución y vinculación de datos con `dataset`.

### 2️⃣4️⃣ API Visibility Change (Gestión de Recursos)
* **Control de Atención:** Implementación del evento `'visibilitychange'` para detectar cambios en el foco de la pestaña del navegador.
* **Estados del Documento:** Uso de la propiedad `document.visibilityState` para diferenciar entre navegación activa (`visible`) y segundo plano (`hidden`).
* **Optimización de Consumo:** Automatización de pausa y reproducción en elementos multimedia para el ahorro de CPU, batería y datos.
* **Lógica Condicional Eficiente:** Aplicación de operadores ternarios para la gestión simplificada de estados en la interfaz de usuario.

### 2️⃣5️⃣ API Online / Offline (Estado de Red)
* **Detección de Conectividad:** Implementación de eventos globales `'online'` y `'offline'` para el monitoreo del estado de red en tiempo real.
* **Propiedades de Navegación:** Uso de `navigator.onLine` para la validación del estado de conexión durante la carga inicial del sitio.
* **Feedback Crítico:** Creación de sistemas de alertas dinámicas para prevenir la pérdida de datos del usuario ante fallos de internet.
* **Sincronización de Interfaz:** Uso de `setTimeout` para la gestión de ciclos de vida en animaciones CSS y transiciones de estado visual.

### 2️⃣6️⃣ API Intersection Observer (Detección de Visibilidad)
* **Monitoreo de Viewport:** Implementación de sensores de visibilidad para detectar la entrada y salida de elementos en el área de visualización.
* **Optimización de Rendimiento:** Sustitución de eventos de scroll pesados por una arquitectura de observación asíncrona y eficiente.
* **Configuración de Umbrales:** Uso de la propiedad `threshold` para calibrar la activación de eventos basada en el porcentaje de visibilidad del objeto.
* **Gestión de Entradas (Entries):** Manipulación de objetos de intersección y uso de la propiedad booleana `isIntersecting` para el control lógico.

### 2️⃣7️⃣ Intersection Observer: Scroll Infinito y Lazy Load
* **Estrategias de Optimización:** Implementación de carga diferida (Lazy Load) para mejorar el rendimiento y ahorro de datos.
* **Gestión de Ciclos:** Uso del método `.unobserve()` para el control de eventos únicos y prevención de peticiones infinitas.
* **Navegación Dinámica del DOM:** Uso de la propiedad `lastElementChild` para la identificación de disparadores (triggers) en listas dinámicas.
* **Arquitectura Recurrente:** Integración de peticiones asíncronas (Axios) con la lógica de observación para la creación de feeds infinitos.
* **Control de Alcance (Scope):** Aplicación de parámetros avanzados en funciones callback para la gestión autónoma del objeto `IntersectionObserver`.

### 2️⃣8️⃣ API Geolocation (Ubicación Geográfica)
* **Gestión de Permisos:** Implementación de protocolos de seguridad y privacidad para el acceso a datos de ubicación del usuario.
* **Captura de Coordenadas:** Uso del método `.getCurrentPosition()` para la obtención de Latitud y Longitud en tiempo real.
* **Manejo de Errores y Excepciones:** Control de flujos de salida ante denegaciones de permiso o fallos de hardware.
* **Optimización de Sensores:** Configuración de precisión (`highAccuracy`) y tiempos de espera (`timeout`) mediante el objeto de opciones.
* **Integración con Servicios Externos:** Preparación de datos geográficos para su uso en mapas y APIs de servicios locales.

### 2️⃣9️⃣ API Match Media (Lógica Responsiva)
* **Sincronización con CSS:** Implementación de `window.matchMedia()` para vincular la lógica de JavaScript con los breakpoints de diseño.
* **Control de Coincidencias:** Uso de la propiedad `.matches` para la aplicación condicional de estilos y comportamientos basados en el dispositivo.
* **Adaptabilidad en Tiempo Real:** Gestión del evento `'resize'` para garantizar una experiencia de usuario fluida durante la redimensión de la ventana.
* **Optimización de Carga:** Uso de `'DOMContentLoaded'` para la inicialización de estados responsivos durante el ciclo de vida de la página.
* **Manipulación Selectiva:** Aplicación de estilos dinámicos dirigidos a componentes específicos para evitar colisiones globales en el documento.

### 3️⃣0️⃣ Destructuring
* **Extracción de Objetos:** Implementación de la sintaxis `{}` para la creación de variables basadas en propiedades de objetos existentes.
* **Alias y Renombrado:** Uso de la reasignación de nombres durante la extracción para evitar conflictos de scope y mejorar el contexto.
* **Manejo de Estructuras de Lista:** Uso de la sintaxis `[]` para la captura posicional de elementos en arrays.
* **Limpieza de Funciones:** Aplicación de destructuración en la recepción de argumentos para simplificar el procesamiento de parámetros.
* **Optimización de APIs:** Integración de la técnica en respuestas de `Axios` para el acceso directo a los flujos de datos (`data`).

### 3️⃣1️⃣ Debugging y Herramientas de Desarrollo
* **Inspección de Flujos:** Uso de la pestaña 'Fuentes' (Sources) para la monitorización de la ejecución del script en tiempo real.
* **Puntos de Interrupción:** Implementación de breakpoints para la detección de errores lógicos y análisis de estados intermedios.
* **Monitorización de Variables:** Uso de expresiones vigiladas (Watch) para el seguimiento de datos críticos durante la depuración.
* **Análisis de Ámbito (Scope):** Gestión y verificación de la visibilidad de variables locales y globales en el hilo de ejecución.
* **Diagnóstico de Tipos:** Resolución de conflictos de tipos (String vs Number) mediante la inspección directa en el motor del navegador.

## 🛠️ Cómo ver los ejercicios

Para visualizar la ejecución del código y los resultados en la consola:
1.  Abre el archivo `index.html` en tu navegador.
2.  En el código del `index.html`, **descomenta** el `<script>` del tema que desees revisar.
3.  Abre la consola de desarrollador presionando `F12`.


---
*Mantenido por Sasha Zubiria*