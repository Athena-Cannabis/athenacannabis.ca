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
            class="list-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-20">

            <li
              v-for="product in products"
              :key="product.id">

              <router-link
                :to="{ name: 'product', params: { slug: product.slug }}">

                  <!-- Outer container -->
                  <div
                    class="
                      h-full
                      bg-white border border-gray-200
                      rounded-3xl
                      shadow-lg
                      ">

                    <!-- Inner flex container -->
                    <div class="py-8 px-5 flex flex-col">

                      <!-- Top Half -->
                      <div class="flex flex-col">

                        <h3 class="order-2 font-bold text-center text-lg text-gray-800">{{ product.title }}</h3>

                        <p
                          class="
                            order-1
                            mb-2
                            font-light text-center text-sm text-gray-600 uppercase
                            ">
                            {{ product.brand }}
                        </p>

                        <p
                          class="
                            order-3
                            mt-2 mb-2
                            font-normal text-center text-xs text-gray-600
                            ">
                            {{ product.cannabis.species }}
                        </p>

                        <div
                          class="
                            order-4
                            mt-3 mb-4
                            w-full flex flex-row justify-center
                            ">
                          <img
                                :src="product.images[0].src"
                                :alt="product.images[0].alt"
                                class="h-40 object-fit" />
                        </div>

                      </div>

                      <!-- Bottom Half -->
                      <div class="">

                        <!-- Cannabis data section -->
                        <div class="flex flex-row flex-nowrap justify-between mb-8 text-xs bg-grsay-100 rounded-2xl borsder">

                          <div class=" bordesr rounded-full border-grasy-400 p-4 text-center bg-gray-100">
                            <p class="font-bold">THC</p>
                            <p>{{ product.cannabis.thc_value }}</p>
                          </div>

                          <div class="  borsder rounded-full border-gsray-400 p-4 text-center bg-gray-100">
                            <p class="font-bold">CBD</p>
                            <p>0.5%</p>
                          </div>

                          <div class=" bordser rounded-full border-grasy-400 px-3 py-4 text-center bg-gray-100">
                            <p class="font-bold">Weight</p>
                            <p>3g</p>
                          </div>

                        </div>


                         <button
                            v-if="false"
                            class="
                              mt-6 md:mt-6 py-6 px-4 md:py-3 md:px-4
                              inline-flex justify-center align-bottom
                              border-2 border-brand-blue-900 shadow-sm rounded-md
                              text-base font-medium text-brand-blue-800
                              bg-white
                              hover:bg-brand-blue-900 hover:text-gray-100
                              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                              transition-all duration-150 ease-in-out">
                              View <span class="sr-only">{{ product.title }} | {{ product.brand }}</span>
                            <!--<svg class="h-12 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" x="0px" y="0px"><title>shopping, paper, bag, cart</title><g data-name="Shopping Bag"><path d="M50.051,10.64a1,1,0,0,0-1-.9H17.921a1.008,1.008,0,0,0-.99.83l-6.79,39.52a1.017,1.017,0,0,0,.88,1.17l28.7,3h.11a.892.892,0,0,0,.22-.03.743.743,0,0,0,.27-.1l5.99-3.38,6.35,1.42a1,1,0,0,0,.88-.22,1.017,1.017,0,0,0,.33-.85ZM38.921,52.16l-26.63-2.78,6.47-37.64h23.77ZM24.937,23.787a5.359,5.359,0,0,1-1.284-4.227l.616-4.71a1,1,0,0,1,1.983.259l-.617,4.71a3.356,3.356,0,1,0,6.659.835l.693-5.793a1,1,0,0,1,1.986.237l-.693,5.793a5.356,5.356,0,0,1-9.343,2.9Z"></path></g></svg>-->
                        </button>

                         <button
                      class="
                        w-full
                        py-6 px-4 md:py-3 md:px-4
                        align-bottom
                        border-2 border-brand-blue-900 shadow-sm rounded-md
                        text-base font-medium text-white
                        bg-brand-blue-800
                        hover:bg-brand-blue-900 hover:text-gray-100
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                        transition-all duration-150 ease-in-out">
                        Add to cart<span class="sr-only"> to cart {{ product.title }} | {{ product.brand }}</span>
                    </button>

                      </div>

                    </div>

                  </div>

                 <div
                  v-if="false"
                  class="
                    h-full
                    p-5
                    flex flex-col
                    bg-white

                  ">

                  <!-- Product Image -->
                    <div
                      class="
                        w-full flex flex-row justify-center
                        mt-8 mb-4
                        ">
                      <img
                            :src="product.images[0].src"
                            :alt="product.images[0].alt"
                            class="h-40 object-fit" />
                    </div>

                  <!-- Top of the product card -->
                  <div
                    class="
                      px-2
                      rounded-md
                      flex-grow flex flex-col
                      bg-white
                      ">

                    <h3 class="font-bold text-base text-gray-800">{{ product.title }}</h3>

                    <p class="font-light text-sm text-gray-600">{{ product.brand }}</p>

                    <p class="text-lg">
                      <!-- Check to see if the product is on sale -->
                      <span
                        v-if="product.onSale === true"
                        class="text-red-600">
                        $&nbsp;{{ product.price.sale }}
                      </span>
                      <span v-else>
                        $&nbsp;{{ product.price.regular }}
                      </span>
                    </p>


                  </div>

                </div>

              </router-link>

            </li>

          </ul>

          <ul
            class="list-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-6 gap-y-6">

            <li
              v-for="product in products"
              :key="product.id">

              <router-link
                :to="{ name: 'product', params: { slug: product.slug }}">

                <div
                  class="
                    h-full
                    flex flex-col
                    bg-white rounded-md
                  ">

                  <!-- Top of the product card -->
                  <div class="flex-grow flex flex-col px-3">

                    <!-- Product Title -->
                    <div
                      class="
                        order-3
                      ">
                      <h3 class="font-bold text-center text-base text-gray-800">{{ product.title }}</h3>
                    </div>

                    <!-- Product Image -->
                    <div
                      class="
                        order-2
                        w-full flex flex-row justify-center
                        my-8
                        border-b border-gray-50
                        ">
                      <img
                            :src="product.images[0].src"
                            :alt="product.images[0].alt"
                            class="h-40 object-fit" />
                    </div>

                    <!-- Product Brand -->
                    <div class="pt-3 order-4">
                      <p class="font-light text-center text-xs text-gray-500">{{ product.brand }}</p>
                    </div>

                    <!-- Product Species -->
                    <div
                      v-if="product.cannabis.species !== null"
                      class="
                        order-1
                        pt-3
                      ">
                      <p class="px-3 rounded-md text-xs ont-light text-gray-400 inline-flex bg-gray-100">{{ product.cannabis.species }}</p>
                    </div>

                    <!-- Product THC | CBD Values -->
                    <div
                      class="
                        order-4
                        pt-2
                      ">
                      <dl>

                        <div
                          v-if="product.cannabis.thc_value"
                          class="w-full flex flex-row justify-start place-items-center bg-brand-blue-100 rounded-md py-1 px-2">
                          <dt class="text-sm font-medium text-gray-500">
                            THC
                          </dt>
                          <dd class="pl-3 text-lg text-gray-900 col-span-2">
                            {{ product.cannabis.thc_value }}
                          </dd>
                        </div>

                        <div
                          v-if="product.cannabis.cbd_value"
                          class="w-full flex flex-row justify-start place-items-center">
                          <dt class="text-sm font-medium text-gray-500">
                            CBD
                          </dt>
                          <dd class="pl-3 text-lg text-gray-900 col-span-2">
                            {{ product.cannabis.cbd_value }}
                          </dd>
                        </div>

                      </dl>


                    </div>




                  </div>

                  <!-- Bottom fo the product bard - Price and Add to cart button -->
                  <div class="flex-grow-0 self-center mt-6 mb-3 flex flex-col w-full">

                    <!-- Product Price -->
                    <div
                      class="
                        pt-3 pb-5
                      ">

                      <div
                        class="">
                        <p class="text-center text-lg">
                          <!-- Check to see if the product is on sale -->
                          <span
                            v-if="product.onSale === true"
                            class="text-red-600">
                            $&nbsp;{{ product.price.sale }}
                          </span>
                          <span v-else>
                            $&nbsp;{{ product.price.regular }}
                          </span>
                        </p>
                      </div>

                      <!-- Regular Price
                      <p class="text-lg font-semibold text-gray-900 inline-flex">$&nbsp;{{ product.price.regular }}</p>
                      <div
                        v-if="product.onSale === true"
                        class="">
                        <p class="text-lg font-semibold text-gray-900 inline-flex">$&nbsp;{{ product.price.sale }}</p>
                      </div>
                      -->
                    </div>

                    <button
                      class="
                        mx-5
                        py-6 px-4 md:py-3 md:px-4
                        justify-center align-bottom
                        border-2 border-brand-blue-900 shadow-sm rounded-md
                        text-base font-medium text-white
                        bg-brand-blue-800
                        hover:bg-brand-blue-900 hover:text-gray-100
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                        transition-all duration-150 ease-in-out">
                        Add<span class="sr-only"> to cart {{ product.title }} | {{ product.brand }}</span>
                    </button>

                  </div>
                </div>


                <div
                  v-if="false"
                  class="
                    h-full
                    flex flex-col items-stretch content-end
                    bg-white rounded-lg
                    ">




                  <!-- Product Image -->
                  <div
                    class="
                      order-2
                      w-full flex flex-row justify-center
                      my-8
                      ">
                    <img
                          :src="product.images[0].src"
                          :alt="product.images[0].alt"
                          class="h-40 object-fit rounded-xl" />
                  </div>





                  <!-- Add to cart button -->
                  <div class="justify-self-end mb-auto">
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
                        Add<span class="sr-only"> to cart {{ product.title }} | {{ product.brand }}</span>
                    </button>
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
