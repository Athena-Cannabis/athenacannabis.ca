<template>
  <!-- Sorting options -->
  <aside>

    <div
      class="
        my-10
        flex flex-row justify-end
      ">

      <div class="p-5 bg-gray-100 rounded-md">
        <h2 class="sr-only">Sorting options:</h2>

       <label id="sortby-label" class="block text-sm font-medium text-gray-700">
        Sort by
      </label>

        <select
          class="
            mt-2
            border border-gray-400 rounded-xl
            text-sm
          "
          v-model="sortBy">
          <option
            v-for="(item, key) in sortingValues"
            v-bind:key="key"
            :value="key">
            {{item.description}}
          </option>
        </select>

      </div>

    </div>

  </aside>
  <!-- Product list -->
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
  // THC from High to low
  thcDown: {
    description: 'THC: Low to High',
    comparisonFn: (a,b) => { return a.cannabis.thc_value - b.cannabis.thc_value; },
  },
  // THC from Low to High
  thcUp: {
    description: 'THC: High to Low',
    comparisonFn: (a,b) => { return b.cannabis.thc_value - a.cannabis.thc_value; },
  },
  // Alphabetical from Z-A
  cbdDown: {
    description: 'CBD: Low to High',
    comparisonFn: (a,b) => { return a.cannabis.cbd_value - b.cannabis.cbd_value; },
  },
  // Alphabetical from Z-A
  cbdUp: {
    description: 'CBD: High to Low',
    comparisonFn: (a,b) => { return b.cannabis.cbd_value - a.cannabis.cbd_value; },
  },
}


export default {
  components: {
    CollectionsProductsListItem
  },
  props: {
    category: Object
  },
  setup(props) {

    // Default is set to Alphabetical Up
    const sortBy = ref('alphaUp');

    // Use the Vuex Store
    const store = useStore()

    // Grab the products for the category
    // TODO: Component currently is category based - this may have to change in the future
    const products = computed(() => store.getters['product/getProductsByCategoryId'](props.category.id));

    // Computed property that is the list of sorted products
    // which are sorted in order based on the sortBy ref
    const sortedProducts = computed(() => {

      // Copy the products so we have a local array
      var sortedProds = products.value;

      // Apply the appropriate sorting algorith
      // TODO: Test if the sortBy.value is valid
      sortedProds.sort(sortingValues[sortBy.value].comparisonFn);

      // Return the sorted list
      return sortedProds;
    });

    store.dispatch('product/fetchProductsByCategoryId', props.category.id );

    return {
      sortBy,
      products,
      sortedProducts,
      sortingValues,
    }

  },
}

</script>
