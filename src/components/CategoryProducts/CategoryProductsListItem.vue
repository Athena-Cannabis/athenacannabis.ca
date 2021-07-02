<template>
  <div
    v-if="!product">
    Loading
  </div>
  <!-- TODO: Add Error Handling -->
  <div
    v-else
    >

    <!-- Wrap in a link to the product page -->
    <router-link
      :to="{ name: 'product', params: { slug: product.slug }}">

       <!-- Outer wrapper -->
      <div
        class="
          pt-0 pb-3 px-3
          border border-gray-200 rounded-xl shadow-sm
          flex flex-col
          ">

        <!-- Image -->
        <div
          class="
            mt-3 mb-3
            w-1/2 self-center
            ">
          <img
                :src="product.images[0].src"
                :alt="product.images[0].alt"
                class="h-40 mx-auto object-contain" />
        </div>

        <div class="border-t border-gray-100 pt-3">

          <h3
            class="
              text-base
              text-left text-gray-600
              font-semibold
              ">
              {{ product.title }}
          </h3>

          <p
            class="
              font-light
              text-left text-sm text-gray-600 uppercase
              ">
              {{ product.brand }}
          </p>


          <!-- Cannabis specific information "pills" -->
          <div
            v-if="product.cannabis"
            class="text-sm my-4">

            <!-- Definition list of terms -->
            <dl class="flex flex-row">

              <div class="bg-gray-100 rounded-xl px-3 py-1 flex flex-row">
                <dt class="sr-only">Species</dt>
                <dd>{{ product.cannabis.species }}</dd>
              </div>

              <div class="m-1 bg-gray-100 rounded-xl px-3 py-1 flex flex-row">
                <dt class="text-gray-500">THC</dt>
                <dd
                  class="
                    ml-2
                    text-gray-800
                    ">
                  {{ product.cannabis.thc_value }}</dd>
              </div>

              <div class="m-1 bg-gray-100 rounded-xl px-3 py-1 flex flex-row">
                <dt class="text-gray-500">CBD</dt>
                <dd
                  class="
                    ml-2
                    text-gray-800
                    ">
                  {{ product.cannabis.cbd_value }}</dd>
              </div>

            </dl>


          </div>




        </div>


        <div class="border-t border-gray-100 pt-3 flex flex-row">

          <p class="text-xl mb-5 mr-10 font-semibold">
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

               <!-- Add to cart button -->
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

    </router-link>


    <!-- Wrap in a link to the product page -->
    <router-link
      v-if="false"
      :to="{ name: 'product', params: { slug: product.slug }}">

        <!-- Outer wrapper -->
        <div
          class="
            py-2
            pb-5
            px-2
            my-3
            border-b
            flex flex-col
            ">



          <!-- Image -->
          <div
            class="
              my-2
              w-1/2 self-center
              ">
            <img
                  :src="product.images[0].src"
                  :alt="product.images[0].alt"
                  class="h-40 mx-auto object-contain" />
          </div>

          <div
            class="
              bg-gray-100
              rounded-xl
              p-5
              ">

              <p
            class="
              order-first
              font-light
              text-left text-sm text-gray-600 uppercase
              ">
              {{ product.brand }}
          </p>

              <h3
            class="
              text-lg md:text-lg
              text-left  text-gray-800
              font-bold
              ">
              {{ product.title }}
          </h3>



          <p
            class="
              mt-2 mb-2
              font-normal
              text-left text-xs text-gray-600
              ">
              {{ product.cannabis.species }}
          </p>

            <div
              class="
                mb-5
                bg-gray-100
                text-center
                flex flex-row flex-wrap justify-between">

              <div class="bsorder rounded-3xl border-gray-400 bg-grsay-100 ">
                <p class="text-xs font-bold">THC</p>
                <p class="text-lg text-gray-600">{{ product.cannabis.thc_value }}</p>
              </div>

              <div class="  bsorder rounded-3xl border-gray-400 bg-gsray-100 ">
                <p class="text-xs font-bold">CBD</p>
                <p class="text-lg text-gray-600">0.5%</p>
              </div>

              <div class=" bsorder rounded-3xl border-gray-400 bg-gsray-100">
                <p class="text-xs font-bold">Weight</p>
                <p class="text-lg text-gray-600">{{ product.cannabis.weight }}g</p>
              </div>

            </div>

            <p class="order-4 text-4xl mb-5">
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

               <!-- Add to cart button -->
            <button
              v-on:click.prevent="handleAddToCart"
              class="
                w-full
                py-2 px-4 md:py-3 md:px-4
                align-bottom
                border-2 border-brand-blue-900 shadow rounded-md
                text-base font-medium text-white
                bg-brand-blue-800
                hover:bg-brand-blue-900 hover:text-gray-100
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                transition-all duration-150 ease-in-out
                ">
              Add to cart<span class="sr-only"> to cart {{ product.title }} | {{ product.brand }}</span>
            </button>


          </div>








        </div>


        <!-- Outer wrapper -->
        <div
          v-if="false"
          class="
            sm:h-full
          bg-white
            border-b
            sm:border border-gray-200
            rounded-md md:rounded-3xl
            md:shadow-lg
            ">

          <!-- Inner flex container -->
          <div
            class="
              py-2 px-2 md:py-8 md:px-5
              flex flex-wrap flex-row-reverse md:flex-col
              ">

              <h3
                class="w-full
                  font-bold text-left md:text-center text-lg text-gray-800">
                  {{ product.title }}
              </h3>

               <p
                class="w-full
                  mb-2
                  font-light text-left md:text-center text-sm text-gray-600 uppercase
                  ">
                  {{ product.brand }}
              </p>


            <!-- Mobile right column // Full display in anything larger -->
            <div
              class="
                w-2/3 md:w-full
                pl-5 md:pl-0
                flex flex-col
                ">
<!--
              <h3
                class="
                  order-2 font-bold text-left md:text-center text-lg text-gray-800">
                  {{ product.title }}
              </h3>

              <p
                class="
                  order-1
                  mb-2
                  font-light text-left md:text-center text-sm text-gray-600 uppercase
                  ">
                  {{ product.brand }}
              </p>-->

               <!-- Product Price -->
               <p class="order-4 text-4xl mb-10">
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

              <!-- Product Cannabis: Species -->
              <p
                class="
                  order-3
                  mt-2 mb-2
                  font-normal text-left md:text-center text-xs text-gray-600
                  ">
                  {{ product.cannabis.species }}
              </p>

              <!-- Product Image -->
              <div
                class="
                  hidden
                  md:mt-3 md:mb-4
                  w-full sm:flex flex-row justify-center
                  ">
                <img
                      :src="product.images[0].src"
                      :alt="product.images[0].alt"
                      class="h-40 object-fit object-contain" />
              </div>

              <!-- Product Cannabis: Details -->
              <div
                class="
                  order-5
                  flex flex-row flex-wrap justify-around mb-8 text-xs rounded-2xl ">

                <div class="bordesr rounded-full border-grasy-400 p-4 text-center bg-gray-100">
                  <p class="font-bold">THC</p>
                  <p>{{ product.cannabis.thc_value }}</p>
                </div>

                <div class="  borsder rounded-full border-gsray-400 p-4 text-center bg-gray-100">
                  <p class="font-bold">CBD</p>
                  <p>0.5%</p>
                </div>

                <div class=" bordser rounded-full border-grasy-400 px-3 py-4 text-center bg-gray-100">
                  <p class="font-bold">Weight</p>
                  <p>{{ product.cannabis.weight }}g</p>
                </div>



              </div>




            </div>

            <!-- Mobile left column // hidden in anything larger -->
            <div
              class="w-1/3 sm:hidden"
              >
              <!-- Product Image -->
              <div

                class="
                  md:mt-3 md:mb-4
                  w-full flex flex-row justify-center
                  ">
                <img
                      :src="product.images[0].src"
                      :alt="product.images[0].alt"
                      class="h-40 object-contain" />
              </div>
            </div>

            <!-- Mobile bottom column // hidden in anything larger -->
            <div
              class="w-full "
              >

              <!-- Add to cart button -->
              <button
                v-on:click.stop.prevent="handleAddToCart"
                class="
                  order-last
                  w-full
                  py-6 px-4 md:py-3 md:px-4
                  align-bottom
                  border-2 border-brand-blue-900 shadow-sm rounded-md
                  text-base font-medium text-white
                  bg-brand-blue-800
                  hover:bg-brand-blue-900 hover:text-gray-100
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                  transition-all duration-150 ease-in-out
                  ">
                Add to cart<span class="sr-only"> to cart {{ product.title }} | {{ product.brand }}</span>
              </button>

            </div>




          </div>

        </div>



        <!-- Outer container -->
        <div
          v-if="false"
          class="
            sm:mx-0
            h-full
            bg-white border border-gray-200
            sm:rounded-3xl
            sm:shadow-lg
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
              <div class="flex flex-row flex-nowrap justify-around mb-8 text-xs rounded-2xl">


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
