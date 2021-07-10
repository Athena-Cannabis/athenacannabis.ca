<template>
  <section>

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
          class="
            list-none
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4
            gap-x-0
            gap-y-3
            sm:gap-x-8 sm:gap-y-10 md:gap-y-20

            ">

          <category-products-list-item
            v-for="product in products"
            :key="product.id"
            :product="product" />

        </ul>

      </section>

    </div>

  </section>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import CategoryProductsListItem from './CategoryProductsListItem.vue';

export default {
  components: {
    CategoryProductsListItem
  },
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
