<script>
  import Footer from "../lib/components/Footer.svelte";
  import Header from "../lib/components/Header.svelte";
  import "../styles/global.css";
</script>

<div class="app">
  <Header />

  <main>
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
    margin: 60px auto auto auto;
    box-sizing: border-box;
  }
</style>
