<template>
  <div>

    <div v-if="isAllowed === false">

      <!-- The age gate component -->
      <the-age-gate />

    </div>
    <div v-else>

      <!-- The skip nav component -->
      <the-skip-nav />

      <!-- The header component -->
      <the-header />

      <!-- Page content -->
      <main>
        <router-view />
      </main>

      <!-- The footer component -->
      <the-footer />

    </div>

  </div>
</template>

<script>
import TheAgeGate from './components/AgeGate.vue';
import TheSkipNav from './components/TheSkipNav.vue';
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';

import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  components: {
    TheAgeGate,
    TheHeader,
    TheSkipNav,
    TheFooter,
  },
  setup() {


    // Use Identity Store Age Check to see if the user is allowed in
    const { isAllowed }  = useIdentityStoreAgeCheck();


    // Use the Products Store and load initial categories and products for the shop
    // const { isLoaded } = useProductsStore();
    useProductsStore();

    return {
      isAllowed,
    }

  }
}


// Use the Products Store and load
// initial categories and products for the shop
//
function useProductsStore() {

  // Use the store
  const store = useStore();

  // Initialise the categories
  store.dispatch('category/initialiseCategories');

}


// Use Identity Store Age Check
//
function useIdentityStoreAgeCheck() {
  // Use the store
  const store = useStore();

  // Initialise the store
  store.dispatch('identity/initialiseStore');

  // Get the is allowed flag
  const isAllowed = computed(() => store.getters['identity/getIsAllowed']);

  return {
    isAllowed,
  }
}

</script>
