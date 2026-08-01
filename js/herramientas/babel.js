//npm install @babel/cli @babel/core @babel/polyfill @babel/preset-env @babel/register gulp gulp-babel gulp-concat gulp-plumber gulp-uglify --save-dev

/* 
    APUNTES FINALIZACIÓN DE CURSO: TRANSPILACIÓN Y WORKFLOW PROFESIONAL

    CONCEPTOS CLAVE:
    - Node.js: Entorno que permite ejecutar JS fuera del navegador (en la PC).
    - npm (Node Package Manager): Gestor para instalar herramientas y librerías.
    - Babel: El "traductor" que convierte JS moderno (ES6+) a JS viejo (ES5) para navegadores antiguos.
    - Gulp: Automatizador de tareas (procesar archivos, minificar, mover carpetas).

    PASOS DEL FLUJO DE TRABAJO (WORKFLOW):
    1. npm init -y: Crea el archivo 'package.json' en la raíz del proyecto (el DNI del proyecto).
    2. npm install: Se descargan las herramientas (Babel, Gulp, etc.). Aparece 'node_modules'.
    3. .babelrc: Archivo de configuración que le dice a Babel qué reglas de traducción usar.
    4. gulpfile.babel.js: El manual de instrucciones para Gulp. Dice: "Toma lo que está en 'dev', 
        tradúcelo con Babel, júntalo todo, achícalo (uglify) y guárdalo en 'public'".

    ESTRUCTURA DE CARPETAS PROFESIONAL:
    - Carpeta /dev: Es nuestra mesa de trabajo. Aquí escribimos el código lindo y moderno.
    - Carpeta /public: Es el producto final. Aquí Gulp deja el código "traducido" y listo para el servidor.

    ACTUALIDAD (2026):
    Aunque herramientas como Gulp han sido reemplazadas por otras más automáticas como VITE o Webpack, 
    entender este proceso es fundamental. En el desarrollo moderno (React, Next.js, etc.), 
    la transpilación ocurre "bajo el capó", pero la lógica de tener un entorno de 
    desarrollo (dev) y uno de producción (public) sigue siendo el estándar de la industria.
*/

// Comando principal para iniciar el proceso (requiere instalación global de Gulp):
// npm install -g gulp
// Ejecución: gulp