# SvelteKit TypeScript TailwindCss Frontend

Esta es una interfaz de usuario construida con SvelteKit, TypeScript y TailwindCss que proporciona gestión de productos y pedidos, incluyendo operaciones CRUD y un carrito de compras.
Cuenta con conexión a API. Para eso debes instalar y correr el siguiente repositorio: [`Backend Linktic Test`](https://github.com/sntiago-git/linktic-test-backend).  

## Características

- Gestión de productos: listar, crear, actualizar y eliminar productos.
- Gestión de pedidos: listar, crear y eliminar pedidos.
- Conexión a API mediante REST.
- Seguridad mejorada utilizando variables de entorno para datos sensibles.
- Tipado estático con TypeScript.
- Protección CORS

## Requisitos

- Svelte
- Node.js (v14 o superior)
- npm (v6 o superior) o yarn
- TailwindCss

## Recomendaciones

Recomiendo usar las siguientes url de imágenes (ImageUrl) a la hora de crear un producto, esto para que cada producto se vea más estético y bonito. 
```plaintext
https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-40-pro-202405?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1713920820026
https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-40-air-202405?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1713920820139
https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-40-ipad-202405?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1714596612326
https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-40-ipad-mini-202109?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1674662574477
```

## Instalación

Sigue estos pasos para clonar y configurar el proyecto localmente:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/sntiago-git/linktic-test-frontend.git
   cd linktic-test-frontend

2. Instala las dependencias del proyecto:

    ```bash
    npm install
    ```
    
    o si usas yarn:
   
    ```bash
    yarn install
    ```
    
3. Crea un archivo .env en la raíz del proyecto y define las variables de entorno necesarias:

    ```plaintext
    VITE_API_URL = tu_api_url (La url donde esta corriendo tu backend, por defecto es http://localhost:3000)
    ```

4. Ejecuta el servidor en modo de desarrollo:

    ```bash
    npm run dev
    ```

    o si usas yarn:

    ```bash
    yarn dev
    ```

## Scripts Disponibles

- npm run build o yarn build: Compila el código TypeScript a JavaScript.
- npm run dev o yarn dev: Ejecuta el servidor en modo de desarrollo.

## Estructura del Proyecto

```plaintext
├── src
|   ├── lib
│   │   ├── components
│   │   |   ├── Footer.svelte
|   │   │   ├── Header.svelte
|   │   │   ├── Loading.svelte
|   │   │   ├── Modal.svelte
|   │   │   ├── OrderList.svelte
|   │   │   ├── ProductGrid.svelte
|   │   │   └── ProductsSideBar.svelte
│   │   └── images
|   │       ├── broken-img.png
|   │       ├── github.svg
|   │       ├── svelte-logo.svg
|   │       ├── svelte-welcome.png
|   │       └── svelte-welcome.webp
│   ├── models
│   │   ├── order.ts 
│   │   └── product.ts
│   ├── routes
│   │   ├── orders
|   │   │   └── +page.svelte
│   │   ├── products
|   │   |   └── +page.svelte
│   │   ├── +layout.svelte
│   │   ├── +page.svelte
│   │   └── +page.ts
│   ├── services
│   │   ├── orderService.ts
│   │   └── productService.ts
│   ├── stores
│   │   ├── cart.ts
│   │   ├── orders.ts
│   │   └── products.ts
│   ├── styles
│   │   └── global.css
│   ├── app.d.ts
│   └── app.html
├── static
|   ├── favicon.png
|   └── robots.txt
├── .env
├── .gitignore
├── .npmrc
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── svelte.config.js
├── tailwind.config.cjs
├── tsconfig.json
└── vite.config.ts
```

## Contribución

Si deseas contribuir a este proyecto, por favor abre un issue o envía un pull request con tus cambios.
