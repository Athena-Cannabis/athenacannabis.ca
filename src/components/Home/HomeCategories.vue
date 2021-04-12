<template>
  <div>
    <section>
      <div class="bg-gray-50">
        <div class="py-20 px-4 sm:px-5 2xl:px-8 2xl:container">

            <!-- Text section -->
            <div class="text-left max-w-prose">
              <h2 class="text-3xl tracking-tight font-bold text-gray-900 sm:text-4xl">
                Browse by categories
              </h2>

              <p class="mt-3 text-xl text-gray-500 sm:mt-4">
                As we're in lockdown, we can't invite you into the store just yet, but we're excited to share some pictures now that construction is complete.
              </p>
            </div>

            <div class="mt-10">

                <ul
                  class="list-none grid grid-cols-3 lg:grid-cols-4 gap-5">

                  <li
                    v-for="category in parentCategories"
                    :key="category.id"
                    class=" bg-white rounded-xl">

                      <router-link
                        :to="{ name: 'category', params: { slug: category.slug }}"
                        class="flex flex-col border border-gray-100 rounded-xl hover:border-gray-300">

                        <div class="order-2 text-center mb-16">

                          <h3
                            class="text-center tracking-wide text-xl text-gray-800 font-bold">
                            {{ category.title }}
                          </h3>

                          <p class="text-gray-600">Lorem ipsum dolar</p>

                        </div>

                        <div class="order-1">
                          <img
                            class="my-16 h-52 w-full object-contain object-center"
                            :src="category.image.src"
                            :alt="category.image.alt" />

                        </div>


                      </router-link>

                  </li>

                </ul>

            </div>


            <!-- Images section
            <div class="mt-12 grid gap-10 lg:grid-cols-3 lg:max-w-none">

              <img class="h-36 md:h-72 w-full object-cover rounded-lg shadow-xl" src="/images/home/gallery-a.jpg" alt="">

              <img class="h-36 md:h-72 w-full object-cover rounded-lg shadow-xl" src="/images/home/gallery-b.jpg" alt="">

              <img class="h-36 md:h-72 w-full object-cover object-left rounded-lg shadow-xl" src="/images/home/gallery-c.jpg" alt="">

            </div>
            -->

        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {

    const store = useStore()

    const productsCategories = computed(() => store.getters['productCategory/getCategories']);

    const parentCategories = computed(() => store.getters['productCategory/getParentCategories']);

    store.dispatch('productCategory/fetchCatagories');

    return {
      productsCategories,
      parentCategories,
    }

  },
}
</script>
