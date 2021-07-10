<template>
  <!-- Loading State -->
  <div
    v-if="!product">
    Loading
  </div>
  <!-- TODO: Add Error Handling -->
  <!-- Display Product Card -->
  <div
    v-else
    >

    <!-- Wrap in a link to the product page -->
    <router-link
      :to="{ name: 'product', params: { slug: product.slug }}">

       <!-- Outer wrapper -->
      <div
        class="
          h-full
          p-5
        bg-white border border-gray-200 rounded-2xl
          hover:shadow-xl transition-all duration-200 ease-in-out
          flex flex-col
          ">

        <!-- Product Image Container -->
        <div
          class="
            py-10
            w-full self-center
            ">
          <img
                :src="product.images[0].src"
                :alt="product.images[0].alt"
                class="h-40 mx-auto object-contain" />
        </div>

        <!-- Product Information Container -->
        <div
          class="
            h-full
            flex flex-col
            ">

          <!-- Product Title -->
          <h3
            class="
              order-2 flex-grow
              text-base
              text-left text-gray-500
              font-semibold
              ">
              {{ product.title }}
          </h3>

          <!-- Product Brand Name -->
          <p
            class="
              order-1
              pt-3
              border-t border-gray-200
              font-light
              text-left text-sm text-gray-600 uppercase
              ">
              {{ product.brand }}
          </p>

          <!-- Cannabis specific information "pills" -->
          <div
            class="
              order-3
              pt-5
              mb-5
              text-center
              flex flex-row flex-wrap justify-between">

            <div class="bsorder rounded-3xl border-gray-400 bg-gray-100 p-3 ">
              <p class="text-xs font-bold">THC</p>
              <p class="text-lg text-gray-600">{{ product.cannabis.thc_value }}</p>
            </div>

            <div class="  bsorder rounded-3xl border-gray-400 bg-gray-100 p-3 ">
              <p class="text-xs font-bold">CBD</p>
              <p class="text-lg text-gray-600">{{ product.cannabis.cbd_value }}%</p>
            </div>

            <div class=" bsorder rounded-3xl border-gray-400 bg-gray-100 p-3 ">
              <p class="text-xs font-bold">Weight</p>
              <p class="text-lg text-gray-600">{{ product.cannabis.weight }}g</p>
            </div>

          </div>

          <!-- Product Price -->
          <div class="order-4">

            <div
               v-if="product.onSale === true"
              >
              <p class="sr-only">Product is on sale!</p>
              <p class="mb-4">
                <span class="sr-only">Sale price:</span>
                <span class="text-2xl text-red-600 font-semibold">
                $&nbsp;{{ product.price.sale }}
                </span>
                <span class="sr-only">Regular price:</span>
                <span class="ml-2 text-sm text-gray-500 line-through font-light">
                 $&nbsp;{{ product.price.regular }}
              </span>
              </p>
            </div>
            <div
              v-else>
              <p class="mb-5 text-2xl font-semibold">
                <span class="sr-only">Regular price:</span>
                $&nbsp;{{ product.price.regular }}
              </p>
            </div>

          </div>

          <!-- Add to cart button -->
          <div class="order-5">

             <button
              v-on:click.prevent="handleAddToCart"
              class="
                w-full
                py-2 px-4 md:py-3 md:px-4
                align-bottom
                border-2 border-brand-blue-900 shadow rounded-md
                text-base font-medium text-brand-blue-900
                bg-white
                hover:bg-brand-blue-900 hover:text-gray-100
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                transition-all duration-150 ease-in-out
                ">
              Add to cart<span class="sr-only"> to cart {{ product.title }} | {{ product.brand }}</span>
            </button>


          </div>

        </div>

      </div>

    </router-link>

  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  props: {
    product: Object,
  },
  setup(props) {

    // Fetch Products
    // Get list of product ids to display
    // const store = useStore()

    //const products = computed(() => store.getters['products/getProductsByCategoryId'], props.category.id);
    //const products = computed(() => store.getters['product/getProductsByCategoryId'](props.category.id));

    //store.dispatch('product/fetchProductsByCategoryId', props.category.id );

    function handleAddToCart(e) {
      console.log('Add to cart', e);

      // Remove the focus ring that the browser puts on it after a button click
      e.target.blur();


    }


    return {
    //  products,
      handleAddToCart,
    }

  },
}
</script>
