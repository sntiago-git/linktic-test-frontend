<script>
  import Footer from "../lib/components/Footer.svelte";
  import Header from "../lib/components/Header.svelte";
  import ProductsSideBar from "$lib/components/ProductsSideBar.svelte";
  import "../styles/global.css";
</script>

<div class="app">
  <Header />

  <main class="sm:mt-16">
    <ProductsSideBar/>
    <slot />
  </main>

  <Footer />
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    max-width: 1366px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: auto;
    box-sizing: border-box;
  }
</style>
