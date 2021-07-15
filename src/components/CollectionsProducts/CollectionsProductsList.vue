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
        <option
          v-for="(item) in sortOptions"
          v-bind:key="item.key"
          :value="item.key">
          {{item.description}}
        </option>
      </select>
      <span>Selected: {{ sortBy }}</span>

      <select v-model="sortBy">
         <option
          v-for="(item, key) in sortingValues"
          v-bind:key="key"
          :value="key">
          {{item.description}}
        </option>
      </select>

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


const sortingValues = {
  // Price from Low to High
  priceUp: {
    description: 'Price: Low to High',
    comparisonFn: (a,b) => { return a.price.currentFloat - b.price.currentFloat; },
  },
  // Price from High to Low
  priceDown: {
    description: 'Price: High to Low',
    comparisonFn: (a,b) => { return b.price.currentFloat - a.price.currentFloat; },
  },
  // Alphabetical from A-Z
  alphaUp: {
    description: 'Alphabetically: A - Z',
    comparisonFn: (a,b) => { return a.title.localeCompare(b.title); },
  },
  // Alphabetical from Z-A
  alphaDown: {
    description: 'Alphabetically: Z - A',
    comparisonFn: (a,b) => { return b.title.localeCompare(a.title); },
  },
  // Alphabetical from Z-A
  thcDown: {
    description: 'THC: Low to High',
    comparisonFn: (a,b) => { return a.cannabis.thc_value - b.cannabis.thc_value; },
  },
  // Alphabetical from Z-A
  thcUp: {
    description: 'THC: High to Low',
    comparisonFn: (a,b) => { return b.cannabis.thc_value - a.cannabis.thc_value; },
  },
  // Alphabetical from Z-A
  cbdDown: {
    description: 'CBD: Low to High',
    comparisonFn: (a,b) => { console.log(a.cannabis.cbd_value, b.cannabis.cbd_value); return a.cannabis.cbd_value - b.cannabis.cbd_value; },
  },
  // Alphabetical from Z-A
  cbdUp: {
    description: 'CBD: High to Low',
    comparisonFn: (a,b) => { return b.cannabis.cbd_value - a.cannabis.cbd_value; },
  },
}


const sortOptions = [
  {
    key: 'pUp',
    description: 'Price: Low to High',
    comparisonFn: (a,b) => { a.title.localeCompare(b.title);},
  },
  {
    key: 'pDown',
    description: 'Price: High to Low',
    comparisonFn: (a,b) => { a.title.localeCompare(b.title);},
  },
  {
    key: 'az',
    description: 'Alphabetically: A - Z',
    comparisonFn: (a,b) => { a.title.localeCompare(b.title);},
  },
  {
    key: 'za',
    description: 'Alphabetically: Z - A',
    comparisonFn: (a,b) => { b.title.localeCompare(a.title);},
  },
  {
    key: 'thcUp',
    description: 'THC %: Low to High',
    comparisonFn: (a,b) => { b.title.localeCompare(a.title);},
  },
  {
    key: 'thcDown',
    description: 'THC %: High to Low',
    comparisonFn: (a,b) => { b.title.localeCompare(a.title);},
  },
  {
    key: 'cbdUp',
    description: 'CBD %: Low to High',
    comparisonFn: (a,b) => { b.title.localeCompare(a.title);},
  },
  {
    description: 'CBD %: High to Low',
    key: 'cbdDown',
    comparisonFn: (a,b) => { b.title.localeCompare(a.title);},
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

    const sortBy = ref('alphaUp');

    // Fetch Products
    // Get list of product ids to display
    const store = useStore()

    //const products = computed(() => store.getters['products/getProductsByCategoryId'], props.category.id);
    const products = computed(() => store.getters['product/getProductsByCategoryId'](props.category.id));

    const sortedProducts = computed(() => {

      // Copy the items from vuex
      var sortedProds = products.value;

      sortedProds.sort(sortingValues[sortBy.value].comparisonFn);

      return sortedProds;
    });

    store.dispatch('product/fetchProductsByCategoryId', props.category.id );

    return {
      sortBy,
      products,
      sortedProducts,
      sortOptions,
      sortingValues,
    }

  },
}


</script>
