Food App

Aplicación web de recetas desarrollada con React, Redux, Node.js, Express, Sequelize y PostgreSQL.

Food App permite explorar una amplia variedad de recetas, buscar platos por nombre, filtrar y ordenar resultados, consultar información detallada y crear recetas personalizadas.

La aplicación combina información obtenida desde una API externa con recetas creadas y almacenadas en una base de datos propia.

✨ Funcionalidades
🏠 Inicio
Landing page de presentación.
Acceso directo al listado principal de recetas.
Interfaz orientada a la exploración de diferentes platos.
🔎 Búsqueda
Búsqueda de recetas por nombre.
Resultados obtenidos desde una API externa.
Integración de recetas externas con recetas propias.
Mensaje informativo cuando no existen resultados.
🍽️ Exploración de recetas

El listado principal permite visualizar diferentes recetas mostrando:

Imagen.
Nombre.
Tipos de dieta.
Información general del plato.

Las recetas pueden provenir tanto de la API externa como de la base de datos de la aplicación.

🥗 Filtros por dieta

Los usuarios pueden filtrar las recetas según sus características alimenticias:

Vegetariana.
Vegana.
Sin gluten.
Otros tipos de dieta disponibles.
↕️ Ordenamiento

La aplicación permite organizar las recetas según diferentes criterios:

Nombre de A-Z.
Nombre de Z-A.
Health Score de menor a mayor.
Health Score de mayor a menor.
📄 Paginación

El listado de recetas cuenta con paginación para facilitar la navegación y mejorar la experiencia de usuario al trabajar con una gran cantidad de resultados.

📖 Detalle de receta

Cada receta cuenta con una página de detalle donde se puede consultar:

Imagen del plato.
Nombre.
Tipo de plato.
Tipos de dieta.
Descripción y resumen.
Health Score.
Instrucciones de preparación paso a paso.
➕ Crear receta

Food App permite crear recetas personalizadas mediante un formulario interactivo.

El formulario incluye:

Nombre de la receta.
Resumen del plato.
Health Score.
Instrucciones de preparación.
Selección de uno o varios tipos de dieta.

Los datos son validados antes de ser enviados al backend y las recetas creadas quedan almacenadas en la base de datos.

🗃️ Gestión de recetas

Las recetas propias se almacenan en PostgreSQL y se integran con las recetas obtenidas desde la API, permitiendo que ambas fuentes se visualicen dentro de la misma aplicación.

🌐 Integración con API

La aplicación utiliza Spoonacular API para obtener información sobre diferentes recetas y platos.

Los datos obtenidos son procesados por la aplicación para permitir:

Búsqueda.
Filtrado.
Ordenamiento.
Paginación.
Visualización de detalles.

La lógica de filtrado y ordenamiento se gestiona dentro de la propia aplicación para tener un mayor control sobre la experiencia de usuario.

🗄️ Base de datos

La persistencia de datos se realiza utilizando PostgreSQL y Sequelize.

Recipe

Cada receta almacena información como:

ID.
Nombre.
Resumen.
Health Score.
Instrucciones.
Diet

Cada tipo de dieta contiene:

ID.
Nombre.

Las recetas y dietas tienen una relación muchos a muchos, permitiendo asociar múltiples dietas a una misma receta.

Por ejemplo, una receta puede ser simultáneamente:

Vegetariana + Vegana + Sin gluten

🔌 Backend

El backend fue desarrollado con Node.js y Express, implementando una API REST para gestionar las recetas y los tipos de dieta.

Principales endpoints
GET /recipes

Obtiene las recetas disponibles y permite realizar búsquedas por nombre.

GET /recipes/:id

Obtiene la información detallada de una receta junto con sus tipos de dieta.

POST /recipes

Crea una nueva receta y establece las relaciones correspondientes con los tipos de dieta.

GET /diets

Obtiene los tipos de dieta disponibles en la aplicación.

⚛️ Frontend

El frontend está desarrollado con React y utiliza Redux para administrar el estado global de la aplicación.

La navegación se organiza mediante diferentes vistas:

Home.
Detalle de receta.
Creación de receta.

La interfaz fue desarrollada buscando una experiencia simple e intuitiva para descubrir, consultar y crear recetas.

🛠️ Tecnologías
Frontend
React
Redux
React Router
JavaScript
CSS
Backend
Node.js
Express
Sequelize
PostgreSQL
APIs y herramientas
Spoonacular API
Git
GitHub
Postman
Testing
Testing de componentes del frontend.
Testing de rutas del backend.
Testing de modelos de base de datos.
📂 Estructura del proyecto
Food-App/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── views/
│   │   ├── redux/
│   │   └── ...
│   │
│   └── ...
│
├── api/
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── models/
│   │   └── ...
│   │
│   └── ...
│
└── README.md
⚙️ Instalación
Clonar el repositorio
git clone <URL_DEL_REPOSITORIO>
cd Food-App
Instalar dependencias

Backend:

cd api
npm install

Frontend:

cd client
npm install
Configurar variables de entorno

Crear un archivo .env dentro de api:

DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
DB_NAME=food
DB_PORT=5432

SPOONACULAR_API_KEY=tu_api_key
Ejecutar el proyecto

Backend:

cd api
npm start

Frontend:

cd client
npm start
🎯 Sobre el proyecto

Food App es una aplicación Full Stack que integra frontend, backend y base de datos en una misma solución.

El proyecto demuestra el uso de React y Redux para construir una interfaz dinámica, Node.js y Express para desarrollar una API REST, PostgreSQL y Sequelize para la persistencia y relaciones de datos, además del consumo y procesamiento de información proveniente de una API externa.

Entre sus principales características se encuentran la búsqueda y exploración de recetas, filtrado por dietas, ordenamiento, paginación, visualización de detalles y creación de recetas personalizadas.
