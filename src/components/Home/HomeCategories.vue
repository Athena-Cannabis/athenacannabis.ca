<template>
  <div>
    <section>
      <div class="bg-gray-50">
        <div class="py-20 px-4 sm:px-5 2xl:px-8 2xl:container">

            <!-- Text section -->
            <div class="text-left max-w-prose">
              <h2 class="text-3xl tracking-tight font-bold text-gray-900 sm:text-4xl">
                Browse the categories
              </h2>

              <p class="mt-3 text-xl text-gray-500 sm:mt-4">
                As we're in lockdown, we can't invite you into the store just yet, but we're excited to share some pictures now that construction is complete.
              </p>
            </div>

            <div class="">

              <ul>

                <li>
                  Category 1
                </li>

                <li>
                  Category 2
                </li>

                <li>
                  Category 3
                </li>

                <li>
                  Category 4
                </li>

                <li>
                  Category 5
                </li>

              </ul>

            </div>

            <!-- Images section -->
            <div class="mt-12 grid gap-10 lg:grid-cols-3 lg:max-w-none">

              <img class="h-36 md:h-72 w-full object-cover rounded-lg shadow-xl" src="/images/home/gallery-a.jpg" alt="">

              <img class="h-36 md:h-72 w-full object-cover rounded-lg shadow-xl" src="/images/home/gallery-b.jpg" alt="">

              <img class="h-36 md:h-72 w-full object-cover object-left rounded-lg shadow-xl" src="/images/home/gallery-c.jpg" alt="">

            </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
  setup() {

    const store = useStore()

    console.log('Hello');

    store.dispatch('productCategories/fetchCatagories');

  },
}
</script>
