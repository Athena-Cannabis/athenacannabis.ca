<template>
  <!-- Cart List -->
  <ul
    class="
      mt-2 pt-2
      list-none w-full
      border-t-4 border-gray-300
    ">
    <!-- Header row -->
    <li>

      <p class="sr-only">The following column headings are for presentation purposes only</p>

      <div class="mt-5 grid grid-cols-12 gap-2">
        <div class="col-span-6">
          <p class="uppercase font-bold text-gray-400 text-left">Product</p>
        </div>
        <div class="col-span-2">
          <p class="uppercase font-bold text-gray-400 text-right">Price</p>
        </div>
        <div class="col-span-2">
          <p class="uppercase font-bold text-gray-400 text-right">Quantity</p>
        </div>
        <div class="col-span-2">
          <p class="uppercase font-bold text-gray-400 text-right">Total</p>
        </div>
      </div>
    </li>
    <!-- All of the cart items -->
    <li
      v-for="cartItem in cartItems"
      v-bind:key="cartItem.productId"
      >
      <cart-list-item v-bind:productId="cartItem.productId" />
    </li>
  </ul>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import CartListItem from './CartListItem.vue';

export default {
  components: {
    CartListItem
  },
  setup() {

    const store = useStore();

    const cartItems = computed(() => store.getters['cart/getCartItems']);

    return {
      cartItems,
    }
  },
}
</script>
