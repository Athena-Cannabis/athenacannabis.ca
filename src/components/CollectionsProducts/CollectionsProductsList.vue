<template>
  <aside>
    <p>Sort: </p>

     <label for="cars">Choose a car:</label>

      <select name="cars" id="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>

      <select v-model="sortBy">
        <option disabled value="">Please select one</option>
        <option
          v-for="(item) in sortOptions"
          v-bind:key="item.key"
          :value="item.key">
          {{item.description}}
        </option>
      </select>
      <span>Selected: {{ sortBy }}</span>
  </aside>
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

          <collections-products-list-item
            v-for="product in sortedProducts"
            :key="product.id"
            :product="product" />

        </ul>

      </section>

    </div>

  </section>
</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import CollectionsProductsListItem from './CollectionsProductsListItem.vue';

const sortOptions = [
  {
    description: 'A',
    key: 'a',
  },
  {
    description: 'B',
    key: 'b'
  },
  {
    description: 'C',
    key: 'c'
  },
  {
    description: 'D',
    key: 'd'
  },
];


export default {
  components: {
    CollectionsProductsListItem
  },
  props: {
    category: Object
  },
  setup(props) {

    const sortBy = ref('A');

    // Fetch Products
    // Get list of product ids to display
    const store = useStore()

    //const products = computed(() => store.getters['products/getProductsByCategoryId'], props.category.id);
    const products = computed(() => store.getters['product/getProductsByCategoryId'](props.category.id));

    const sortedProducts = computed(() => {

      // Copy the items from vuex
      var sortedProds = products.value;

      switch(sortBy.value) {
        case sortOptions[0].key:
          // code block
          console.log('Sort By', sortBy.value);
          break;
        case sortOptions[1].key:
          console.log('Sort By', sortBy.value);
           sortedProds.sort((a,b) => {
            return a.title.localeCompare(b.title);
          });
          // code block
          break;
        case sortOptions[2].key:
          console.log('Sort By', sortBy.value);
           sortedProds.sort((a,b) => {
            return b.title.localeCompare(a.title);
          });
          // code block
          break;
        case sortOptions[3].key:
          console.log('Sort By', sortBy.value);
          // code block
          break;
        default:
          // code block
          console.log('Sort By', sortBy.value);
      }

      return sortedProds;
    });

    store.dispatch('product/fetchProductsByCategoryId', props.category.id );

    return {
      sortBy,
      products,
      sortedProducts,
      sortOptions,
    }

  },
}


</script>
