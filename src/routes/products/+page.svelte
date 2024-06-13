<script lang="ts">
  import { onMount } from "svelte";
  import { products, fetchProducts } from "../../stores/products";
  import ProductGrid from "$lib/components/ProductGrid.svelte";

  const handleProductEvent = (event: any) => {
    const _id = event.detail._id;
    const type = event.detail.type;

    switch (type) {
      case "create":
        alert(type);
        break;
      case "remove":
        alert(type);
        break;
      case "update":
        alert(type);
        break;
      default:
        console.warn("Event type Error");
    }
  };

  onMount(fetchProducts);
</script>

<svelte:head>
  <title>Products</title>
  <meta name="description" content="Products" />
</svelte:head>

<section>
  <h1 class="font-bold my-10 text-left">Shop Products</h1>
  <ProductGrid products={$products} on:productEvent={handleProductEvent} />
</section>
