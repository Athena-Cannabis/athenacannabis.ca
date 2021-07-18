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
        bg-white border sm:border-gray-200 rounded-2xl
          hover:shadow-none sm:hover:shadow-xl transition-all duration-200 ease-in-out
          flex flex-row-reverse flex-nowrap sm:flex-col
          ">

        <!-- Product Image Container -->
        <div
          class="
            pt-5 sm:py-10
            ml-10 sm:ml-0 w-1/2 sm:w-full self-start sm:self-center
            ">
          <img
                :src="product.images[0].src"
                :alt="product.images[0].alt"
                class="h-auto sm:h-40 mx-auto object-contain" />
        </div>

        <!-- Product Information Container -->
        <div
          class="
             w-1/2 sm:w-full
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
              pt-3 pb-1
              sm:border-t sm:border-gray-200
              font-light
              text-left text-sm text-gray-600 uppercase
              ">
              {{ product.brand }}
          </p>

           <!-- Product Species -->
          <p
            class="
              mt-1
              order-3
              font-light
              text-left text-sm text-gray-400
              ">
              <span class="sr-only">Cannabis Species: </span>
              {{ product.cannabis.species }}
          </p>

          <!-- Cannabis specific information "pills" -->
          <div
            class="order-4">

              <dl
                class="
                  pt-5
                  mb-5
                  flex flex-row justify-between items-center
                  text-center
                  ">

                <!-- THC Value -->
                <div class="py-1 px-2 bg-gray-100 rounded-2xl text-gray-600 flex-grow flex items-center justify-center">
                  <dt class="text-xs font-bold">
                    THC
                  </dt>
                  <dd class="pl-2 text-xs ">
                    {{ product.cannabis.thc_value }}
                  </dd>
                </div>

                <!-- CBD Value -->
                <div class="py-1 px-2 bg-gray-100 rounded-2xl text-gray-600 mx-1 flex-grow flex items-center justify-center">
                  <dt class="text-xs font-bold">
                    CBD
                  </dt>
                  <dd class="pl-2 text-xs">
                    {{ product.cannabis.cbd_value }}
                  </dd>
                </div>

                <!-- Weight -->
                <div class="py-1 px-2 bg-gray-100 rounded-2xl text-gray-600 flex-grow flex items-center justify-center">
                  <dt class="text-xs font-bold">
                    Weight
                  </dt>
                  <dd class="pl-2 text-xs">
                    {{ product.cannabis.weight }}
                  </dd>
                </div>

              </dl>

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

    // Access the vuex store
    const store = useStore()

    //const products = computed(() => store.getters['products/getProductsByCategoryId'], props.category.id);
    //const products = computed(() => store.getters['product/getProductsByCategoryId'](props.category.id));

    //store.dispatch('product/fetchProductsByCategoryId', props.category.id );

    function handleAddToCart(e) {

      console.log('Product id: ', props.product.id);

      var payload = {
        productId: props.product.id,
        quantity: 1,
      }

      store.dispatch('cart/addToCart', payload );


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
