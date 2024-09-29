
# E-Commerce Backend

Este proyecto es un backend para una aplicación de e-commerce desarrollado con Node.js, Express, TypeORM, y PostgreSQL. Incluye funcionalidades para manejar productos y pedidos, junto con documentación de la API generada con Swagger.

## Tabla de Contenidos

- [Instalación](#instalación)
- [Configuración](#configuración)
- [Ejecución](#ejecución)
- [Endpoints de la API](#endpoints-de-la-api)
- [Pruebas](#pruebas)
- [Despliegue](#despliegue)
- [Contribuir](#contribuir)
- [Licencia](#licencia)

## Instalación

### Requisitos Previos
- Node.js (versión 14 o superior)
- npm (versión 6 o superior)
- PostgreSQL (versión 12 o superior)

### Clonar el Repositorio
Clona el repositorio del proyecto desde GitHub:
```bash
git clone https://github.com/jroargit/link-tic.git
cd link-tic/ecommerce-project/ecommerce-backend
```

### Instalar Dependencias
Ejecuta el siguiente comando para instalar todas las dependencias del proyecto:
```bash
npm install
```

## Configuración

### Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto y agrega las siguientes variables, reemplazando los valores con tus configuraciones locales o de producción:

```env
DATABASE_URL=postgres://USER:PASSWORD@HOST:5432/DATABASE_NAME
PORT=3000
NODE_ENV=development
```

- `DATABASE_URL`: La URL de conexión a tu base de datos PostgreSQL.
- `PORT`: El puerto en el que la aplicación escuchará.
- `NODE_ENV`: Establece el entorno (`development`, `test`, `production`).

## Ejecución

### Compilar el Proyecto (Solo si usas TypeScript)

Si estás utilizando TypeScript, compila el código antes de ejecutar la aplicación:
```bash
npm run build
```

### Iniciar la Aplicación

Ejecuta el siguiente comando para iniciar la aplicación en modo de desarrollo:
```bash
npm start
```

Si todo funciona correctamente, deberías ver un mensaje en la consola indicando que el servidor está corriendo en el puerto configurado.

## Endpoints de la API

### Documentación con Swagger

La API está documentada con Swagger. Puedes acceder a la documentación interactiva de Swagger en:
```
http://localhost:3000/api-docs
```

### Endpoints Principales

- **Productos**
  - `GET /api/products`: Obtiene todos los productos.
  - `GET /api/products/:id`: Obtiene un producto por su ID.
  - `POST /api/products`: Crea un nuevo producto.
  - `PUT /api/products/:id`: Actualiza un producto por su ID.
  - `DELETE /api/products/:id`: Elimina un producto por su ID.

- **Pedidos**
  - `GET /api/orders`: Obtiene todos los pedidos.
  - `GET /api/orders/:id`: Obtiene un pedido por su ID.
  - `POST /api/orders`: Crea un nuevo pedido.
  - `PUT /api/orders/:id`: Actualiza un pedido por su ID.
  - `DELETE /api/orders/:id`: Elimina un pedido por su ID.

## Pruebas

El proyecto incluye pruebas automatizadas para verificar la funcionalidad de la API. 

### Ejecutar Pruebas
Para ejecutar las pruebas, usa el siguiente comando:
```bash
npm test
```

Se utilizan `Jest` y `Supertest` para realizar pruebas unitarias e integración. Las pruebas verifican la funcionalidad completa de los endpoints de productos y pedidos.

## Despliegue

El backend está desplegado en **Render.com**. A continuación se indican los pasos básicos para desplegar tu aplicación en Render:

1. **Conectar el Repositorio a Render**: Autoriza a Render para acceder a tu repositorio de GitHub, GitLab o Bitbucket.
2. **Crear una Base de Datos PostgreSQL**: Configura una nueva base de datos en Render y guarda las credenciales de conexión.
3. **Crear un Servicio Web en Render**:
   - Configura el **Build Command** como `npm run build`.
   - Configura el **Start Command** como `npm start`.
   - Añade las variables de entorno, incluyendo `DATABASE_URL`.
4. **Iniciar el Despliegue**: Una vez configurado, Render comenzará a desplegar tu servicio.

### Variables de Entorno en Render

Asegúrate de configurar las mismas variables de entorno (`DATABASE_URL`, `PORT`, `NODE_ENV`) en la sección **Environment** de Render.

### Acceso al Servicio en Producción

Después del despliegue, tu aplicación estará accesible en la URL proporcionada por Render (ejemplo: `https://link-tic.onrender.com/api-docs/`).
