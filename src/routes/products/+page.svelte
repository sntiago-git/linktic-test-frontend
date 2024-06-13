<script lang="ts">
  import { onMount } from "svelte";
  import {
    products,
    product,
    loading,
    fetchProducts,
    fetchProduct,
    editProduct,
    addProduct,
    removeProduct,
  } from "../../stores/products";
  import ProductGrid from "$lib/components/ProductGrid.svelte";
  import Modal from "$lib/components/Modal.svelte";
  import type { Product } from "../../models/product";

  onMount(fetchProducts);

  let showModal: boolean = false;
  let showRemoveModal: boolean = false;
  let removingProduct_id: string = "";
  let newProduct: Product = {
    _id: "",
    sku: "",
    name: "",
    description: "",
    price: 0,
    stock: 0,
    imageUrl: "",
  };
  let isUpdating: boolean = false;

  const handleProductEvent = (event: any) => {
    const _id: string = event.detail._id;
    const type: string = event.detail.type;

    switch (type) {
      case "create":
        isUpdating = false;
        openModal("product");
        break;
      case "remove":
        removingProduct_id = _id;
        openModal("remove");
        break;
      case "update":
        isUpdating = true;
        updateProduct(_id);
        break;
      default:
        console.warn("Event type Error");
    }
  };

  const openModal = (type: string) => {
    switch (type) {
      case "product":
        showModal = true;
        break;
      case "remove":
        showRemoveModal = true;
        break;
      default:
        console.warn("Event type Error");
    }
  };

  const closeModal = (type: string) => {
    switch (type) {
      case "product":
        resetProduct();
        showModal = false;
        break;
      case "remove":
        removingProduct_id = "";
        showRemoveModal = false;
        break;
      default:
        console.warn("Event type Error");
    }
  };

  const resetProduct = () => {
    newProduct = {
      _id: "",
      sku: "",
      name: "",
      description: "",
      price: 0,
      stock: 0,
      imageUrl: "",
    }; // Resetear el formulario
  };

  const updateProduct = async (_id: string) => {
    await fetchProduct(_id);
    newProduct = { ...$product };
    openModal("product");
  };

  const handleFormSubmit = async () => {
    if (isUpdating) {
      await editProduct(newProduct._id, newProduct);
    } else {
      await addProduct(newProduct);
    }
    resetProduct();
    closeModal("product");
  };

  const handleRemoveProduct = async (_id: string) => {
    await removeProduct(_id);
    closeModal("remove");
  };
</script>

<svelte:head>
  <title>Products</title>
  <meta name="description" content="Products" />
</svelte:head>

<section>
  <h1 class="font-bold mb-10 mt-4 text-left">Shop Products</h1>
  <ProductGrid products={$products} on:productEvent={handleProductEvent} />

  <Modal show={showModal} close={() => closeModal("product")}>
    <h2 class="mt-2 mb-6 font-bold">
      {isUpdating ? "Update the product" : "Create a new product"}
    </h2>
    <form class="space-y-4" on:submit|preventDefault={handleFormSubmit}>
      <div class="grid grid-cols-1 gap-4">
        <div>
          <label for="name" class="block text-sm font-medium"
            >Product name</label
          >
          <input
            id="name"
            type="text"
            placeholder="Name"
            bind:value={newProduct.name}
            required
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
          />
        </div>

        <div>
          <label for="description" class="block text-sm font-medium"
            >Description</label
          >
          <textarea
            id="description"
            bind:value={newProduct.description}
            placeholder="Some product description..."
            required
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
          ></textarea>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label for="sku" class="block text-sm font-medium">SKU</label>
          <input
            id="sku"
            type="text"
            placeholder="#"
            bind:value={newProduct.sku}
            required
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm sm:text-sm uppercase"
          />
        </div>

        <div>
          <label for="imageUrl" class="block text-sm font-medium"
            >Image Url
          </label>
          <input
            id="imageUrl"
            type="text"
            placeholder="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-40-pro-202405?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1713920820026"
            bind:value={newProduct.imageUrl}
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
          />
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label for="price" class="block text-sm font-medium">Price</label>
          <input
            id="price"
            type="number"
            bind:value={newProduct.price}
            required
            min="0"
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
          />
        </div>

        <div>
          <label for="stock" class="block text-sm font-medium">Stock</label>
          <input
            id="stock"
            type="number"
            bind:value={newProduct.stock}
            required
            min="0"
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
          />
        </div>
      </div>

      <div class="flex justify-end gap-2">
        <button
          type="submit"
          class="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700"
        >
          {isUpdating ? "Update" : "Create "}</button
        >
        <button
          type="button"
          on:click={() => closeModal("product")}
          class="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-300"
          >Cancel</button
        >
      </div>
    </form>
    <small class="text-red-600 mt-5">
      Se recomienda usar la siguiente Imagen URL para pruebas:
    </small>
    <br />
    <small class="text-red-600">
      https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-40-pro-202405?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1713920820026
    </small>
  </Modal>

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
          on:click={() => handleRemoveProduct(removingProduct_id)}
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
