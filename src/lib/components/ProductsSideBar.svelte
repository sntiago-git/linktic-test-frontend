<script lang="ts">
  import { cartStore, isOpen } from "../../stores/cart";
  import { addOrder } from "../../stores/orders";
  import { goto } from "$app/navigation";
  import type { Order } from "../models/order";

  const toggleSidebar = () => {
    $isOpen = !$isOpen;
  };

  const closeSidebar = () => {
    $isOpen = false;
  };

  const totalAmount = (productsOrder) => {
    let total: number = 0;
    productsOrder.forEach((item) => {
      total += item.quantity * item.product.price;
    });
    return total;
  };
  const createOrder = async (order: Order) => {
    let products = order.map((item) => item);

    const newOrder = {
      products: [...products],
      totalAmount: totalAmount([...products]),
      customerName: "Test",
      customerEmail: "Test",
    };

    try {
      await addOrder(newOrder);
      cartStore.clear();
      closeSidebar();
      goToOrders();
    } catch (error) {
      console.error("Error adding order:", error);
    }
  };

  const goToOrders = () => {
    goto(`/orders`);
  };
</script>

<div class="flex">
  <!-- Sidebar -->
  <div
    class={`fixed inset-y-0 right-0 transform ${$isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out sm:mt-16 product-side-bar w-80 shadow`}
  >
    <div class="flex justify-between items-center px-4 pt-4">
      <h2 class="text-xl">Products</h2>
      <button class="text-black" on:click={closeSidebar}> &#x2715; </button>
    </div>

    <div class="p-4">
      <ul class="space-y-2">
        {#each $cartStore.items as item}
          <li
            class="flex justify-start gap-2 items-start group bg-white rounded-lg overflow-hidden shadow p-2"
          >
            <button
              class="text-black"
              on:click={() => cartStore.remove(item.product._id)}
            >
              &#x2715;</button
            >
            <div>
              <h2>
                <span class="font-bold">{item.product.name}</span>
              </h2>
              <p>
                ${item.product.price} x {item.quantity}
              </p>
            </div>
          </li>
        {/each}
      </ul>
    </div>

    <hr />

    <div class="p-4 flex flex-col sm:flex-row justify-between items-start">
      <div>
        <h2 class="font-bold">Total: ${$cartStore.total}</h2>
        <button class="hover:underline" on:click={() => cartStore.clear()}
          >Clear Cart</button
        >
      </div>

      {#if $cartStore.items.length > 0}
        <button
          type="button"
          class="mt-2 sm:mt-0 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700"
          on:click={createOrder($cartStore.items)}
        >
          Create Order
        </button>
      {/if}
    </div>
  </div>
</div>
<!-- Main Content -->
<div class="flex justify-end items-end m-2">
  <button
    class="bg-white hover:bg-gray-100 py-2 px-4 borde rounded-full font-medium text-black inline-flex items-center shadow gap-1"
    on:click={toggleSidebar}
  >
    Shopping Cart
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="size-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
      />
    </svg>
  </button>
</div>

<style>
  .product-side-bar {
    background-color: hsl(0, 0%, 95%);
    z-index: 1000;
  }
</style>
