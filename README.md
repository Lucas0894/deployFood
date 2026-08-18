
🍴 Food App

Aplicación web de recetas desarrollada con React, Redux, Node.js, Express, Sequelize y PostgreSQL.

Food App permite explorar recetas, buscar platos por nombre, aplicar filtros y ordenamientos, consultar información detallada y crear recetas personalizadas.

La aplicación combina recetas obtenidas desde una API externa con recetas almacenadas en una base de datos propia.

✨ Funcionalidades
🏠 Inicio
Landing page de presentación.
Acceso al listado principal de recetas.
🔎 Búsqueda
Búsqueda de recetas por nombre.
Integración con Spoonacular API.
Visualización de recetas provenientes de la API y de la base de datos.
Manejo de búsquedas sin resultados.
🥗 Filtros

Filtrado de recetas según diferentes tipos de dieta:

Vegetariana
Vegana
Sin gluten
Otros tipos de dieta disponibles
↕️ Ordenamiento

Las recetas pueden ordenarse según:

Nombre de A-Z.
Nombre de Z-A.
Health Score de menor a mayor.
Health Score de mayor a menor.
📄 Paginación

Sistema de paginación para organizar los resultados y facilitar la navegación entre las diferentes recetas.

📖 Detalle de receta

Cada receta cuenta con una vista detallada que incluye:

Imagen
Nombre
Tipo de plato
Tipos de dieta
Resumen
Health Score
Instrucciones paso a paso
➕ Crear recetas

Los usuarios pueden crear sus propias recetas mediante un formulario controlado.

El formulario permite ingresar:

Nombre
Resumen
Health Score
Instrucciones
Uno o varios tipos de dieta

Los datos son validados antes de ser enviados al backend y las recetas creadas quedan almacenadas en PostgreSQL.

🌐 API

La aplicación utiliza Spoonacular API para obtener información sobre diferentes recetas.

Los datos obtenidos son procesados dentro de la aplicación para implementar:

Búsqueda
Filtrado
Ordenamiento
Paginación
Visualización de detalles
🗄️ Base de datos

La aplicación utiliza PostgreSQL como sistema de almacenamiento y Sequelize como ORM.

Recipe
ID
Nombre
Resumen
Health Score
Instrucciones
Diet
ID
Nombre

Las recetas y dietas mantienen una relación muchos a muchos, permitiendo que una receta pueda pertenecer a diferentes tipos de dieta.

Por ejemplo:

Vegetariana + Vegana + Sin gluten

🔌 Backend

El backend fue desarrollado con Node.js y Express mediante una API REST.

Endpoints principales
Método	Endpoint	Descripción
GET	/recipes	Obtiene las recetas y permite realizar búsquedas
GET	/recipes/:id	Obtiene el detalle de una receta
POST	/recipes	Crea una nueva receta
GET	/diets	Obtiene los tipos de dieta disponibles
⚛️ Frontend

El frontend está desarrollado con React y Redux.

La aplicación cuenta con diferentes vistas:

Home
Detalle de receta
Creación de receta

Redux se utiliza para gestionar el estado global y facilitar el manejo de las recetas y filtros.

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
API
Spoonacular API
Herramientas
Git
GitHub
Postman
Testing
Testing de componentes del frontend
Testing de rutas del backend
Testing de modelos de base de datos
📂 Estructura
Food-App/
├── client/
│   └── src/
│       ├── components/
│       ├── views/
│       ├── redux/
│       └── ...
│
├── api/
│   └── src/
│       ├── routes/
│       ├── controllers/
│       ├── models/
│       └── ...
│
└── README.md
⚙️ Instalación
1. Clonar el repositorio
git clone <URL_DEL_REPOSITORIO>
cd Food-App
2. Instalar dependencias

Backend:

cd api
npm install

Frontend:

cd client
npm install
3. Configurar variables de entorno

Crear un archivo .env dentro de api:

DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
DB_NAME=food
DB_PORT=5432
SPOONACULAR_API_KEY=tu_api_key
4. Ejecutar el proyecto

Backend:

cd api
npm start

Frontend:

cd client
npm start
🎯 Sobre el proyecto

Food App es un proyecto Full Stack que integra frontend, backend, base de datos y una API externa.

El proyecto permite trabajar con React y Redux en el frontend, desarrollar una API REST con Node.js y Express, gestionar relaciones entre entidades mediante Sequelize y PostgreSQL, y consumir y procesar información proveniente de Spoonacular.

Entre sus principales funcionalidades se encuentran la búsqueda de recetas, filtrado por dietas, ordenamiento, paginación, consulta de detalles y creación de recetas personalizadas.
