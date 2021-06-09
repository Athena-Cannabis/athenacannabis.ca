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
            class="list-none grid grid-cols-3 gap-10">

            <li
              v-for="product in products"
              :key="product.id">

              <router-link
                :to="{ name: 'product', params: { slug: product.slug }}">

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
