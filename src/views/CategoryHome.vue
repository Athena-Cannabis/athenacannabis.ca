<template>
  <section>

    <!-- Content Page Heading -->
    <content-page-heading>
      <template v-slot:header>
        Categories
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

          <h2 class="text-4xl">Cannabis</h2>

          <ul
            class="">

            <li
              v-for="category in cannabisCategories"
              :key="category.id"
              class="pt-6">


              <router-link
                :to="{ name: 'category-products', params: { slug: category.slug }}"
                class="underline text-brand-blue-700 hover:text-brand-blue-900">
                {{ category.title }}
              </router-link>

            </li>

          </ul>



          <h2 class="text-4xl">ALL</h2>

          <ul
            class="">

            <li
              v-for="category in accessoryCategories"
              :key="category.id"
              class="pt-6">

              {{ category.title }} || {{ category.description }}

            </li>

          </ul>

        </div>

      </div>

    </div>

  </section>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import ContentPageHeading from '../components/Content/PageHeading.vue';

export default {
  components : {
    ContentPageHeading,
  },
  setup() {

    const CANNABIS_CATEGORY_ID = 16;
    const store = useStore()

    const cannabisCategories = computed(() => store.getters['category/getCannabisCategories']);
    const accessoryCategories = computed(() => store.getters['category/getAccessoryCategories']);
    // const productsCategories = computed(() => store.getters['category/getChildCategoriesById'](CANNABIS_CATEGORY_ID));

    return {
      cannabisCategories,
      accessoryCategories,
    }
  },
}
</script>
