<template>
  <section>

    <div
      v-if="loaded == false"
      class="bg-gray-100">
      Loading...
    </div>

    <div
      v-else>
      <!-- Content Page Heading -->
      <content-page-heading>
        <template v-slot:header>
          <span class="sr-only">Category: </span>{{ category.title }}
        </template>
        <template v-slot:description>
          Explore all the things
        </template>
      </content-page-heading>

      <!-- Background fluid container -->
      <div class="bg-white">

        <!-- Content container -->
        <div class="py-5 md:py-10 px-4 md:px-12 lg:px-20 xl:px-32 2xl:container">

          <!-- Content box -->
          <div class="pt-0 mb-28">

            <h2 class="sr-only">Products</h2>

            <category-products-list :category="category"></category-products-list>

          </div>
        </div>
      </div>

    </div>
  </section>
</template>


<script>
import { reactive, toRefs, watch, watchEffect, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useStore } from 'vuex';
import ContentPageHeading from '../components/Content/PageHeading.vue';
import CategoryProductsList from '../components/CategoryProducts/CategoryProductsList.vue';

export default {
  components : {
    ContentPageHeading,
    CategoryProductsList,
  },
  setup() {

    const { category, loaded } = checkCategorySlugValidity();

    return {
      category,
      loaded,
    }

  }
}

// Is the current category slug parameter
// wired up to a valid category
function checkCategorySlugValidity() {

  // Setup reactive elements
  const state = reactive({
    category: null,
    loaded: null,
  });

  const router = useRouter();
  const store = useStore();

  // Get the current page parameter
  var slug = useRoute().params.slug;

  // Check the categories in the store to see if they are valid
  state.category = computed(() => store.getters['category/getCategoryBySlug'](slug));

  // Get the loaded state
  state.loaded = computed(() => store.getters['category/getLoadedState']);

  // Watch function to track the category object
  // Check if the categories have been loaded - if not wait
  // If category is undefined forward user to the not-found page
  watch(
    () => state.loaded,
    (loaded, prevLoaded) => {
      // Check if the categories have been loaded
      if (loaded && !state.category) {
        router.push({ path: '/404' })
      }
    },
    { immediate: true }
  );
  return {
    ...toRefs(state),
  }
}
</script>
