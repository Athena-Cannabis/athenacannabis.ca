<template>
  <div>
    <section>
      <div class="bg-gray-50">
        <div class="py-20 px-4 sm:px-5 2xl:px-8 2xl:container">

            <!-- Text section -->
            <div class="text-left max-w-prose">
              <h2 class="text-3xl tracking-tight font-bold text-gray-900 sm:text-4xl">
                Explore cannabis
              </h2>

              <p class="mt-3 text-xl text-gray-500 sm:mt-4">
                As we're in lockdown, we can't invite you into the store just yet, but we're excited to share some pictures now that construction is complete.
              </p>
            </div>

            <div class="mt-10">

                <ul
                  class="list-none grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">

                  <li
                    v-for="category in productsCategories"
                    :key="category.id"
                    class="">

                      <router-link
                        :to="{ name: 'category-products', params: { slug: category.slug }}"
                        class="flex flex-col items-center
                              border-2 border-blue-900 rounded-2xl
                              p-5 h-full hover:shadow-2xl">

                        <!-- Title and description -->
                        <div class="order-2 text-left mt-5 w-full">

                          <h3
                            class="text-left text-xl text-brand-blue-800 font-bold">
                            {{ category.title }}
                          </h3>

                          <p class="hidden md:block text-gray-600">{{ category.description }}</p>

                        </div>

                        <!-- SVG Icon if it exists -->
                        <div
                          v-if="category.icon"
                          class="order-1"
                        >

                          <svg class="h-12 fill-current text-brand-blue-700" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" :view-box.camel="category.icon.viewbox" xml:space="preserve" v-html="category.icon.contents"></svg>

                        </div>
                        <div
                          v-else
                          class="order-1">

                          <!-- Placeholder SVG -->
                          <svg class=" h-12 fill-current text-brand-blue-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" x="0px" y="0px"><title>Artboard 34</title><g data-name="Layer 2"><path d="M4.33,15h7.34A3.34,3.34,0,0,0,15,11.67V4.33A3.34,3.34,0,0,0,11.67,1H4.33A3.34,3.34,0,0,0,1,4.33v7.34A3.34,3.34,0,0,0,4.33,15ZM3,4.33A1.34,1.34,0,0,1,4.33,3h7.34A1.34,1.34,0,0,1,13,4.33v7.34A1.34,1.34,0,0,1,11.67,13H4.33A1.34,1.34,0,0,1,3,11.67Z"></path><path d="M27.67,1H20.33A3.34,3.34,0,0,0,17,4.33v7.34A3.34,3.34,0,0,0,20.33,15h7.34A3.34,3.34,0,0,0,31,11.67V4.33A3.34,3.34,0,0,0,27.67,1ZM29,11.67A1.34,1.34,0,0,1,27.67,13H20.33A1.34,1.34,0,0,1,19,11.67V4.33A1.34,1.34,0,0,1,20.33,3h7.34A1.34,1.34,0,0,1,29,4.33Z"></path><path d="M4.33,31h7.34A3.34,3.34,0,0,0,15,27.67V20.33A3.34,3.34,0,0,0,11.67,17H4.33A3.34,3.34,0,0,0,1,20.33v7.34A3.34,3.34,0,0,0,4.33,31ZM3,20.33A1.34,1.34,0,0,1,4.33,19h7.34A1.34,1.34,0,0,1,13,20.33v7.34A1.34,1.34,0,0,1,11.67,29H4.33A1.34,1.34,0,0,1,3,27.67Z"></path><path d="M24,17a7,7,0,1,0,7,7A7,7,0,0,0,24,17Zm0,12a5,5,0,1,1,5-5A5,5,0,0,1,24,29Z"></path></g></svg>

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

    const CANNABIS_CATEGORY_ID = 16;

    const store = useStore()

    const productsCategories = computed(() => store.getters['productCategory/getChildCategoriesById'](CANNABIS_CATEGORY_ID));

    return {
      productsCategories,
    }

  },
}
</script>
