<script lang="ts">
  import { onMount } from "svelte";
  import { products, fetchProducts } from "../../stores/products";
  //import ProductCard from '../components/ProductCard.svelte';

  onMount(fetchProducts);
</script>

<svelte:head>
  <title>Orders</title>
  <meta name="description" content="Products" />
</svelte:head>

<div class="p-4">
  <h1 class="text-2xl font-bold mb-4">Orders</h1>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    {#each $products as product}
      {product.name}
    {/each}
  </div>
</div>
