<template>
  <div>

    <p>Number of products: {{ products.length }}</p>

    <div class="flex flex-row flex-nowrap">

       <!-- Category Filters -->
      <aside
        class="w-1/4">
        <p>Hello</p>
      </aside>

      <!-- Product list -->
      <section
        class="w-3/4">
        <h2 class="sr-only">Products</h2>
        <ul
          class="grid grid-cols-4 gap-10">

          <li
            v-for="product in products"
            :key="product.id">

            <div class="flex flex-col">

              <h3 class="font-bold text-sm order-2">{{ product.title }}</h3>

              <div class="order-1
                        bg-gray-200 p-5 mb-5 rounded-xl flex flex-row
                          justify-center align-middle">
                <img
                  :src="product.images[0].src"
                  :alt="product.images[0].alt"
                  class="h-44 object-cover rounded-xl" />
              </div>



            </div>

          </li>

        </ul>
      </section>

    </div>

  </div>
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

    const products = computed(() => store.getters['products/getProductsByCategoryId'](props.category.id));

    store.dispatch('products/fetchProductsByCategoryId', props.category.id );

    return {
      products,
    }

  },
}
</script>
