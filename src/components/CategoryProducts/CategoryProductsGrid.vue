<template>
  <div>
    <h2 class="text-xl">Category Products Grid</h2>

    <p>{{ category }}</p>

    <ul>

      <li
        v-for="product in products"
        :key="product.id">
        <p>{{ product.title }} - {{ product.id }}</p>
      </li>

    </ul>

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

    const products = computed(() => store.getters['products/getProducts']);

    //const { title } = toRefs(props)

    store.dispatch('products/fetchProductsByCategoryId', props.category.id );

    return {
      products,
    }

  },
}
</script>
