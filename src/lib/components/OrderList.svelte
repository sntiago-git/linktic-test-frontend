<script lang="ts">
  import type { Order } from "../../models/order";
  import { loading, noOrders } from "../../stores/orders";
  import { createEventDispatcher } from "svelte";
  import Loading from "./Loading.svelte";

  //Props
  export let orders: Order[] = [];

  //Emits
  const dispatch = createEventDispatcher();

  const orderEvent = (_id: string | undefined, type: string) => {
    dispatch("orderEvent", {
      _id,
      type,
    });
  };
</script>

{#if $loading}
  <Loading />
{:else if orders.length === 0 && $noOrders}
  <div class="flex justify-start items-center">
    <h2 class="w-60 text-start text-2xl sm:text-5xl">
      You have not created any order yet
    </h2>
  </div>
{:else}
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4"
  >
    {#each orders as order (order._id)}
      <div class="bg-white shadow-md rounded-lg p-4 mb-4">
        <div class="flex justify-end items-center space-x-1">
          <button
            type="button"
            class="hover:bg-gray-100 font-medium rounded-full text-sm p-2 text-center inline-flex items-center"
            on:click={() => orderEvent(order._id, "remove")}
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
        </div>

        <h3 class="mb-2">
          <span class="font-bold">Order Number:</span>
          {order._id}
        </h3>
        <!-- <p class="mb-1"><strong>Customer Name:</strong> {order.customerName}</p>
        <p class="mb-1">
          <strong>Customer Email:</strong>
          {order.customerEmail}
        </p> -->
        <p class="mb-2">
          <span class="font-bold mb-2">Total Amount:</span>
          ${order.totalAmount.toFixed(2)}
        </p>
        <div>
          <h4 class="font-bold mb-2">Products:</h4>
          <ul class="list-disc list-inside">
            {#each order.products as { product, quantity }}
              <li>{product.name} - Quantity: {quantity}</li>
            {/each}
          </ul>
        </div>
      </div>
    {/each}
  </div>
{/if}

<style>
</style>
