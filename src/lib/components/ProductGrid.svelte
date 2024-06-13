<script lang="ts">
  import type { Product } from "../../models/product";
  import { loading, noProducts } from "../../stores/products";
  import { cartStore, isOpen } from "../../stores/cart";
  import { createEventDispatcher } from "svelte";
  import Loading from "./Loading.svelte";

  //Props
  export let products: Product[] = [];

  //Emits
  const dispatch = createEventDispatcher();

  const productEvent = (_id: string | undefined, type: string) => {
    dispatch("productEvent", {
      _id,
      type,
    });
  };

  const addToCart = (product: Product) => {
    cartStore.add(product);
    $isOpen = true;
  };
</script>

<div class="flex justify-end align-middle mb-2">
  <button
    class="bg-white hover:bg-gray-100 py-2 px-4 borde rounded-full font-medium text-black inline-flex items-center shadow gap-1"
    on:click={() => productEvent(undefined, "create")}
  >
    Create
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="size-5"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  </button>
</div>
  
{#if $loading}
  <Loading />
{:else if products.length === 0 && $noProducts}
  <div class="flex justify-start items-center">
    <h2 class="w-60 text-start text-2xl sm:text-5xl">
      You have not created any product yet, you can do it by clicking on the
      "create" button
    </h2>
  </div>
{:else}
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4"
  >
    {#each products as product (product._id)}
      <div class="relative group bg-white rounded-3xl overflow-hidden shadow">
        <div class="flex justify-end items-center space-x-1 m-1">
          <button
            type="button"
            class="hover:bg-gray-100 font-medium rounded-full text-sm p-2 text-center inline-flex items-center"
            on:click={() => productEvent(product._id, "remove")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
            <span class="sr-only">Remove</span>
          </button>

          <button
            type="button"
            class="hover:bg-gray-100 font-medium rounded-full text-sm p-2 text-center inline-flex items-center"
            on:click={() => productEvent(product._id, "update")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
              />
            </svg>
            <span class="sr-only">Update</span>
          </button>
        </div>

        <img
          src={product.imageUrl}
          alt={product.name}
          class="w-full h-64 object-cover object-center"
        />

        <div class="p-4">
          <small class="pb-2">#{product.sku}</small>
          <h3 class="text-xl font-bold">{product.name}</h3>
          <p>{product.description}</p>

          {#if product.stock <= 0}
            <h3 class="font-bold my-2">Out of stock</h3>
          {:else}
            <div class="flex justify-between items-center">
              <p class="my-2 block">${product.price.toFixed(2)}</p>

              <button
                class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full text-sm font-medium"
                on:click={() => addToCart(product)}
              >
                Get
              </button>
            </div>
          {/if}
        </div>
      </div>
    {/each}
  </div>
{/if}

<style>
</style>
