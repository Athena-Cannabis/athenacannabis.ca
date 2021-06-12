<template>
  <section>

    <div class="">

      <h2 class="sr-only">List of products</h2>

      <div class="flex flex-row flex-nowrap items-start">

        <!-- Category Filters -->
        <aside class="sr-only">
          <p>Hello</p>
        </aside>

        <!-- Product list -->
        <section
          class="w-full">

          <h2 class="sr-only">Products</h2>

          <ul
            class="list-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-10 gap-y-20">

            <li
              v-for="product in products"
              :key="product.id">

              <router-link
                :to="{ name: 'product', params: { slug: product.slug }}">

                <div
                  class="
                    h-full
                    flex flex-col items-stretch
                    bg-white rounded-lg
                    ">

                  <!-- Product Title -->
                  <div class="px-3 order-4">
                    <h3 class="font-bold text-base text-gray-800">{{ product.title }}</h3>
                  </div>

                  <!-- Product Brand -->
                  <div class="pt-3 px-3 order-3">
                    <p class="font-light text-xs text-gray-500">{{ product.brand }}</p>
                  </div>

                  <!-- Product Image -->
                  <div
                    class="
                      order-2
                      w-full flex flex-row justify-center
                      ">
                    <img
                          :src="product.images[0].src"
                          :alt="product.images[0].alt"
                          class="h-40 object-fit rounded-xl" />
                  </div>

                   <!-- Product Species -->
                  <div
                    class="
                      order-1
                      pt-3 px-3
                    ">
                    <p class="px-3 rounded-md text-xs ont-light text-gray-400 inline-flex bg-gray-100">{{ product.cannabis.species }}</p>
                  </div>

                </div>

                <div
                  v-if="false"
                  class="
                    h-full py-12 px-5
                  bg-white
                    borders border-gray-300
                    shadow-xl rounded-xl">

                  <div class="flex flex-col">

                    <h3 class="font-normal text-sm order-2">{{ product.title }}</h3>

                    <h3 class="font-normal text-xs">{{ product.brand }}</h3>

                    <div
                      class="order-1
                          p-5 mb-5 rounded-xl flex flex-row
                          justify-center align-middle">

                      <img
                        :src="product.images[0].src"
                        :alt="product.images[0].alt"
                        class="h-44 object-fit rounded-xl" />

                      <div class="bg-gray-100 rounded-md p-2 w-full">

                        <div
                          v-if="product.cannabis.thc_value">
                          {{ product.cannabis.thc_value }}
                        </div>

                        <div
                          v-if="product.cannabis.cbd_value">
                          {{ product.cannabis.cbd_value }}
                        </div>


                        <div>
                          {{ product.price.regular }}
                        </div>

                        <div
                          v-if="product.onSale === true"
                          class="text-red-600">
                          {{ product.price.sale }}
                        </div>

                      </div>
                    </div>

                  </div>

                  <button
                    class="
                      mt-6 md:mt-6 py-6 px-4 md:py-3 md:px-4
                      inline-flex justify-center align-bottom
                      border-2 border-brand-blue-900 shadow-sm rounded-md
                      text-base font-medium text-brand-blue-800
                      bg-white
                      hover:bg-brand-blue-900 hover:text-gray-100
                      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                      transition-all duration-150 ease-in-out">
                      Add to cart <span class="sr-only">{{ product.title }} | {{ product.brand }}</span>
                    <!--<svg class="h-12 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" x="0px" y="0px"><title>shopping, paper, bag, cart</title><g data-name="Shopping Bag"><path d="M50.051,10.64a1,1,0,0,0-1-.9H17.921a1.008,1.008,0,0,0-.99.83l-6.79,39.52a1.017,1.017,0,0,0,.88,1.17l28.7,3h.11a.892.892,0,0,0,.22-.03.743.743,0,0,0,.27-.1l5.99-3.38,6.35,1.42a1,1,0,0,0,.88-.22,1.017,1.017,0,0,0,.33-.85ZM38.921,52.16l-26.63-2.78,6.47-37.64h23.77ZM24.937,23.787a5.359,5.359,0,0,1-1.284-4.227l.616-4.71a1,1,0,0,1,1.983.259l-.617,4.71a3.356,3.356,0,1,0,6.659.835l.693-5.793a1,1,0,0,1,1.986.237l-.693,5.793a5.356,5.356,0,0,1-9.343,2.9Z"></path></g></svg>-->
                </button>

                </div>

              </router-link>

            </li>

          </ul>
        </section>

      </div>

    </div>

  </section>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  props: {
    category: Object
  },
  setup(props) {

    // Fetch Products
    // Get list of product ids to display
    const store = useStore()

    //const products = computed(() => store.getters['products/getProductsByCategoryId'], props.category.id);
    const products = computed(() => store.getters['product/getProductsByCategoryId'](props.category.id));

    store.dispatch('product/fetchProductsByCategoryId', props.category.id );

    return {
      products,
    }

  },
}
</script>
