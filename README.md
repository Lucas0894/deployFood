# 🍴 Food App

Aplicación web de recetas desarrollada con React, Redux, Node.js, Express, Sequelize y PostgreSQL.

Food App permite explorar recetas, buscar platos por nombre, aplicar filtros y ordenamientos, consultar información detallada y crear recetas personalizadas.

La aplicación combina recetas obtenidas desde una API externa con recetas almacenadas en una base de datos propia.

---

## ✨ Funcionalidades

### 🏠 Inicio

- Landing page de presentación.
- Acceso al listado principal de recetas.

### 🔎 Búsqueda

- Búsqueda de recetas por nombre.
- Integración con Spoonacular API.
- Visualización de recetas provenientes de la API y de la base de datos.
- Manejo de búsquedas sin resultados.

### 🥗 Filtros

Filtrado de recetas según diferentes tipos de dieta:

- Vegetariana
- Vegana
- Sin gluten
- Otros tipos de dieta disponibles

### ↕️ Ordenamiento

Las recetas pueden ordenarse según diferentes criterios:

- Nombre de A-Z.
- Nombre de Z-A.
- Health Score de menor a mayor.
- Health Score de mayor a menor.

### 📄 Paginación

Sistema de paginación para organizar los resultados y facilitar la navegación entre las diferentes recetas.

### 📖 Detalle de receta

Cada receta cuenta con una vista detallada que incluye:

- Imagen
- Nombre
- Tipo de plato
- Tipos de dieta
- Resumen
- Health Score
- Instrucciones paso a paso

### ➕ Crear recetas

Los usuarios pueden crear sus propias recetas mediante un formulario controlado.

El formulario permite ingresar:

- Nombre
- Resumen
- Health Score
- Instrucciones
- Uno o varios tipos de dieta

Los datos son validados antes de ser enviados al backend y las recetas creadas quedan almacenadas en PostgreSQL.

---

## 🌐 Integración con Spoonacular

La aplicación utiliza [Spoonacular API](https://spoonacular.com/food-api) para obtener información sobre diferentes recetas.

Los datos obtenidos son procesados dentro de la aplicación para implementar:

- Búsqueda
- Filtrado
- Ordenamiento
- Paginación
- Visualización de detalles

---

## 🗄️ Base de datos

La aplicación utiliza PostgreSQL como sistema de almacenamiento y Sequelize como ORM.

### Recipe

| Campo | Descripción |
|---|---|
| ID | Identificador de la receta |
| Nombre | Nombre de la receta |
| Resumen | Descripción del plato |
| Health Score | Nivel de comida saludable |
| Instrucciones | Preparación paso a paso |

### Diet

| Campo | Descripción |
|---|---|
| ID | Identificador de la dieta |
| Nombre | Nombre del tipo de dieta |

Las recetas y dietas mantienen una relación **muchos a muchos**, permitiendo que una receta pueda pertenecer a diferentes tipos de dieta.

Por ejemplo:

`Vegetariana + Vegana + Sin gluten`

---

## 🔌 Backend

El backend fue desarrollado con Node.js y Express mediante una API REST.

### Endpoints principales

| Método | Endpoint | Descripción |
|:---:|---|---|
| `GET` | `/recipes` | Obtiene las recetas y permite realizar búsquedas |
| `GET` | `/recipes/:id` | Obtiene el detalle de una receta |
| `POST` | `/recipes` | Crea una nueva receta |
| `GET` | `/diets` | Obtiene los tipos de dieta disponibles |

---

## ⚛️ Frontend

El frontend está desarrollado con React y Redux.

La aplicación cuenta con las siguientes vistas:

- Home
- Detalle de receta
- Creación de receta

Redux se utiliza para gestionar el estado global de la aplicación y facilitar el manejo de las recetas, búsquedas y filtros.

---

## 🛠️ Tecnologías

### Frontend

- React
- Redux
- React Router
- JavaScript
- CSS

### Backend

- Node.js
- Express
- Sequelize
- PostgreSQL

### API

- Spoonacular API

### Herramientas

- Git
- GitHub
- Postman

### Testing

- Testing de componentes del frontend
- Testing de rutas del backend
- Testing de modelos de base de datos

---

## 📂 Estructura del proyecto

```text
Food-App/
│
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
```

---

## ⚙️ Instalación

### Requisitos

Antes de comenzar, asegurate de tener instalado:

- Node.js
- npm
- PostgreSQL

### 1. Clonar el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
```

### 2. Ingresar al proyecto

```bash
cd Food-App
```

### 3. Instalar dependencias del backend

```bash
cd api
npm install
```

### 4. Instalar dependencias del frontend

```bash
cd ../client
npm install
```

### 5. Configurar la base de datos

Crear una base de datos PostgreSQL llamada:

```text
food
```

### 6. Configurar variables de entorno

Crear un archivo `.env` dentro de la carpeta `api`:

```env
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
DB_NAME=food
DB_PORT=5432

SPOONACULAR_API_KEY=tu_api_key
```

Reemplazá los valores correspondientes con tus credenciales de PostgreSQL y tu API Key de Spoonacular.

> El archivo `.env` contiene información sensible y no debe subirse al repositorio.

### 7. Ejecutar el backend

Desde la carpeta `api`:

```bash
npm start
```

### 8. Ejecutar el frontend

Abrí una nueva terminal y ejecutá:

```bash
cd client
npm start
```

La aplicación estará disponible en el puerto configurado por el servidor de desarrollo.

---

## 🧪 Testing

El proyecto incluye pruebas para diferentes partes de la aplicación:

- Componentes del frontend.
- Rutas del backend.
- Modelos de la base de datos.

---

## 🎯 Sobre el proyecto

Food App es un proyecto Full Stack que integra frontend, backend, base de datos y una API externa.

El proyecto combina React y Redux para construir una interfaz dinámica, Node.js y Express para desarrollar una API REST, Sequelize y PostgreSQL para la persistencia y las relaciones entre entidades, y Spoonacular para obtener información externa sobre recetas.

Entre sus principales funcionalidades se encuentran la búsqueda de recetas, filtrado por dietas, ordenamiento, paginación, consulta de detalles y creación de recetas personalizadas.
