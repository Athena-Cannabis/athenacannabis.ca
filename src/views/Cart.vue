<template>
  <section>

    <!-- Content Page Heading -->
    <content-page-heading>
      <template v-slot:header>
        Cart
      </template>
      <template v-slot:description>
        Everything in your cart
      </template>
    </content-page-heading>

    <!-- Background fluid container -->
    <div class="bg-white">

      <!-- Content container -->
      <div class="py-5 md:py-10 px-4 md:px-12 lg:px-20 xl:px-32 2xl:container">

        <!-- Content box -->
        <div class="pt-0 mb-28">

        <h2>List of cart items</h2>

        <ul>

          <li
            v-for="cartItem in cartItems"
            v-bind:key="cartItem.productId"
            >
            {{ cartItem }}
          </li>

        </ul>

        </div>

      </div>

    </div>

  </section>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import ContentPageHeading from '../components/Content/PageHeading.vue';

export default {
  components: {
    ContentPageHeading,
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
