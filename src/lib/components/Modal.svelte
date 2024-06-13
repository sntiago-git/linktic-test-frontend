<!-- Modal.svelte -->
<script lang="ts">
  import { blur } from "svelte/transition";

  export let show: boolean;
  export let width: string = "600px";
  export let close: () => void;
</script>

{#if show}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="modal-overlay" transition:blur>
    <div class="modal-content" style="width:{width}" on:click|stopPropagation>
      <button
        type="button"
        class="modal-close hover:bg-gray-100 font-medium rounded-full p-2 text-center inline-flex items-center"
        on:click={close}
      >
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
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>

        <span class="sr-only">Close</span>
      </button>
      <slot></slot>
    </div>
  </div>
{/if}

<style>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2000;
  }
  .modal-content {
    background: white;
    padding: 1rem;
    max-width: 800px;
    margin: 0.5rem;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    position: relative;
  }
  .modal-close {
    position: absolute;
    top: 10px;
    right: 10px;
  }
</style>
