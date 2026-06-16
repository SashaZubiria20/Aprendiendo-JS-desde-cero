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

## 🛠️ Cómo ver los ejercicios

Para visualizar la ejecución del código y los resultados en la consola:
1.  Abre el archivo `index.html` en tu navegador.
2.  En el código del `index.html`, **descomenta** el `<script>` del tema que desees revisar.
3.  Abre la consola de desarrollador presionando `F12`.


---
*Mantenido por Sasha Zubiria*