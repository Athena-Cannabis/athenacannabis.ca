<template>
  <div>
    <section>
      <div class="bg-gray-100 sm:bg-gray-50">
        <div class="pt-5 pb-10 md:pt-10 px-4 sm:px-5 2xl:px-8 2xl:container ">

          <!-- Render only if the category object is true -->
          <div v-if="category">

            <h2
              class="mt-16 mb-10
                      md:text-left text-4xl sm:text-6xl lg:text-7xl
                      font-bold text-gray-900 tracking-tight">
              {{ category.title }}
            </h2>

            <category-products-grid :category="category"></category-products-grid>

          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { reactive, toRefs, watch, watchEffect, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useStore } from 'vuex';
import CategoryProductsGrid from '../components/CategoryProducts/CategoryProductsGrid.vue';

export default {
  components: {
    CategoryProductsGrid
  },
  // Check that the relevant category title exists
  // otherwise push to an error page
  setup() {

    const { category } = checkCategorySlugValidity();

    return {
      category,
    }

  }
}

// Is the current category slug parameter
// wired up to a valid category
function checkCategorySlugValidity() {

  // Setup reactive elements
  const state = reactive({
    category: null,
  });

  const router = useRouter();
  const store = useStore();

  // Get the current page parameter
  var slug = useRoute().params.slug;

  // Check the categories in the store to see if they are valid
  state.category = computed(() => store.getters['productCategory/getCategoryBySlug'](slug));

  // Watch function to track the category object
  // If category is undefined forward user to the not-found page
  watch(
    () => state.category,
    (category, prevCategory) => {
      if (!category) {
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
