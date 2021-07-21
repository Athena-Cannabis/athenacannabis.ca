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

          <!-- Flex Wrapper -->
          <div class="flex flex-col lg:flex-row flex-nowrap">

            <!-- Cart Contents -->
            <div class="w-full lg:w-3/4">

              <div class="bg-white">

                <section>

                  <h2 class="text-5xl font-semibold">
                    Your cart
                    <span class="pl-3 text-2xl text-gray-400">
                      {{ cartItemsCount }} item(s)
                    </span>
                  </h2>

                  <cart-list/>

                </section>

              </div>

            </div>

            <!-- Order Summary -->
            <div class="w-full lg:w-1/4 lg:ml-5">

              <div class="p-5 bg-gray-300">

                <section>

                  <h2 class="text-xl font-medium">Order Summary</h2>



                </section>

              </div>


            </div>

          </div>

        </div>

      </div>

    </div>

  </section>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import ContentPageHeading from '../components/Content/PageHeading.vue';
import CartList from '../components/Cart/CartList.vue';

export default {
  components: {
    CartList,
    ContentPageHeading,
  },
  setup() {

    const store = useStore();

    const cartItems = computed(() => store.getters['cart/getCartItems']);
    const cartItemsCount = computed(() => store.getters['cart/getCartItemsCount']);

     return {
       cartItems,
       cartItemsCount,
     }

  },
}
</script>
