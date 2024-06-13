<script>
  import { page } from "$app/stores";
  import logo from "$lib/images/svelte-logo.svg";
  import github from "$lib/images/github.svg";
</script>

<header class="hidden sm:flex justify-between items-center px-4">
  <div class="corner flex justify-center items-center">
    <img src={logo} alt="SvelteKit" />
    <span class="title pl-1">Linktic Test</span>
  </div>

  <nav>
    <ul>
      <li aria-current={$page.url.pathname === "/" ? "page" : undefined}>
        <a href="/">Home</a>
      </li>
      <li
        aria-current={$page.url.pathname === "/products" ? "page" : undefined}
      >
        <a href="/products">Products</a>
      </li>
      <li aria-current={$page.url.pathname === "/orders" ? "page" : undefined}>
        <a href="/orders">Orders</a>
      </li>
    </ul>
  </nav>

  <div class="corner flex justify-center items-center">
    <a href="https://github.com/sntiago-git/linktic-test-frontend">
      <img src={github} alt="GitHub" />
    </a>
  </div>
</header>

<style>
  header {
    position: fixed;
    top: 0;
    height: 60px;
    width: 100%;
    background-color: hsl(
      0,
      0%,
      95%
    ); /* Puedes cambiar el color de fondo según tu diseño */
    z-index: 1000; /* Asegura que el header esté siempre encima de otros elementos */
  }

  .title {
    font-size: 1.2rem;
    text-align: center;
    font-weight: 700;
  }

  .corner {
    width: 9em;
    height: 100%;
  }

  .corner img {
    width: 2em;
    height: 2em;
    object-fit: contain;
  }

  nav {
    display: flex;
    justify-content: center;
  }

  ul {
    position: relative;
    padding: 0;
    margin: 0;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    background-size: contain;
  }

  li {
    position: relative;
    height: 100%;
  }

  li[aria-current="page"] a {
    color: var(--color-black);
    font-weight: 700;
  }

  nav a {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 1rem;
    color: var(--color-text);
    font-weight: 500;
    font-size: 1rem;
    text-transform: capitalize;
    text-decoration: none;
    transition: color 0.2s linear;
  }

  a:hover {
    color: var(--color-black);
  }
</style>
