# SvelteKit TypeScript TailwindCss Frontend

Esta es una interfaz de usuario construida con SvelteKit, TypeScript y TailwindCss que proporciona gestión de productos y pedidos, incluyendo operaciones CRUD y un carrito de compras.
Cuenta con conexión a API. Para eso debes clonar y correr el siguiente repositorio: [`Backend Linktic Test`](https://github.com/sntiago-git/linktic-test-backend).  

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

- Svelte
- Node.js (v14 o superior)
- npm (v6 o superior) o yarn
- TailwindCss

## Variables de entorno
Crea un archivo .env en la raíz del proyecto y define las variables de entorno necesarias:

  ```plaintext
    VITE_API_URL = tu_api_url (La url donde esta corriendo tu backend, por defecto es http://localhost:3000)
  ```
  
## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
