<script lang="ts">
  import { onMount } from "svelte";
  import {
    orders,
    order,
    loading,
    fetchOrders,
    fetchOrder,
    removeOrder,
  } from "../../stores/orders";
  import OrderList from "$lib/components/OrderList.svelte";
  import Modal from "$lib/components/Modal.svelte";

  onMount(fetchOrders);

  let showRemoveModal: boolean = false;
  let removingOrder_id: string = "";

  const handleOrderEvent = (event: any) => {
    const _id: string = event.detail._id;
    const type: string = event.detail.type;

    switch (type) {
      case "remove":
        removingOrder_id = _id;
        openModal("remove");
        break;
      default:
        console.warn("Event type Error");
    }
  };

  const openModal = (type: string) => {
    switch (type) {
      case "remove":
        showRemoveModal = true;
        break;
      default:
        console.warn("Event type Error");
    }
  };

  const closeModal = (type: string) => {
    switch (type) {
      case "remove":
        removingOrder_id = "";
        showRemoveModal = false;
        break;
      default:
        console.warn("Event type Error");
    }
  };

  const handleRemoveOrder = async (_id: string) => {
    await removeOrder(_id);
    closeModal("remove");
  };
</script>

<svelte:head>
  <title>Orders</title>
  <meta name="description" content="Orders" />
</svelte:head>

<section>
  <h1 class="font-bold my-10 text-left">Your Orders</h1>
  <OrderList orders={$orders} on:orderEvent={handleOrderEvent} />

  <Modal
    show={showRemoveModal}
    width="300px"
    close={() => closeModal("remove")}
  >
    <div class="mt-8 space-y-4">
      <h2 class="px-4 py-2">Are you sure you want to remove this item?</h2>

      <div class="flex justify-end gap-2">
        <button
          type="button"
          on:click={() => handleRemoveOrder(removingOrder_id)}
          class="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-700"
        >
          Remove</button
        >
        <button
          type="button"
          on:click={() => closeModal("remove")}
          class="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-300"
          >Cancel</button
        >
      </div>
    </div>
  </Modal>
</section>
