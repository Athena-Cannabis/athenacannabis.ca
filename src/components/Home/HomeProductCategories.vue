<template>
  <section>

     <!-- Background fluid container -->
    <div class=" bg-gray-100 ">

      <!-- Content container -->
      <div class="py-5 md:py-10 px-4 md:px-12 xl:px-20 2xl:container relative">

        <h2 class="text-center text-3xl sm:text-2xl lg:text-4xl xl:text-6xl text-gray-800 font-semibold">
          Explore products
        </h2>

        <div class="mt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4 lg:gap-4">

          <div
            v-for="category in categories"
            :key="category.name">
            <a
              :href="category.url"
              class="py-10 px-5 w-full h-full
                    bg-white rounded-xl
                    flex flex-col
                    group hover:shadow-xl transition-all ease-in-out duration-200
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue-600
                    focus:shadow-xl">
              <div class="text-center font-medium text-xl no-underline
                        group-hover:text-brand-blue-800">
                <span class="sr-only">Category name: </span>
                {{ category.name }}
              </div>
              <div class="">
                <img class="pt-10 w-1/2 mx-auto" :src="category.image.src" alt="" />
              </div>
            </a>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script>
export default {
  setup() {

    const categories = categoriesData;

    return {
      categories,
    }

  },
}

const categoriesData = [

  // Cannabis - Flower
  {
    weight: 900,
    name: 'Flower',
    url: 'https://athenawebmenu.azurewebsites.net/productGroup/1',
    image: {
      src: '/images/category/AthenaCannabis-Website-Icons-Category-DriedFlower-NoCircle.svg',
      alt: 'Cannabis dried flower',
    },
  },

  // Cannabis - Pre-rolls
  {
    weight: 800,
    name: 'Pre-rolls',
    url: 'https://athenawebmenu.azurewebsites.net/productGroup/2',
    image: {
      src: '/images/category/AthenaCannabis-Website-Icons-Category-PreRolls-NoCircle.svg',
      alt: 'Pre-rolled cannabis joint',
    },
  },

  // Cannabis - Edibles
  {
    weight: 700,
    name: 'Edibles',
    url: 'https://athenawebmenu.azurewebsites.net/productGroup/5',
    image: {
      src: '/images/category/AthenaCannabis-Website-Icons-Category-Edibles-NoCircle.svg',
      alt: 'Cannabis infused edibles',
    },
  },

  // Cannabis - Beverages
  // https://thenounproject.com/search/?q=can&i=1460273
  {
    weight: 600,
    name: 'Beverages',
    url: 'https://athenawebmenu.azurewebsites.net/productGroup/9',
    image: {
      src: '/images/category/AthenaCannabis-Website-Icons-Category-Beverages.svg',
      alt: 'Cannabis infused beverage',
    },
  },

  // Cannabis - Vapes
  {
    weight: 100,
    name: 'Vapes',
    url: 'https://athenawebmenu.azurewebsites.net/productGroup/3',
    image: {
      src: '/images/category/AthenaCannabis-Website-Icons-Category-Vapes-NoCircle.svg',
      alt: 'Vapes',
    },
  },

  // Cannabis - Topicals
  {
    weight: 100,
    name: 'Topicals',
    url: 'https://athenawebmenu.azurewebsites.net/productGroup/6',
    image: {
      src: '/images/category/AthenaCannabis-Website-Icons-Category-Topicals-NoCircle.svg',
      alt: 'Topicals',
    },
  },

  // Cannabis - Oils
  {
    weight: 100,
    name: 'Oils',
    url: 'https://athenawebmenu.azurewebsites.net/productGroup/11',
    image: {
      src: '/images/category/AthenaCannabis-Website-Icons-Category-Extracts-NoCircle.svg',
      alt: 'Oils',
    },
  },

  // Cannabis - Seeds
  {
    weight: 100,
    name: 'Seeds',
    url: 'https://athenawebmenu.azurewebsites.net/productGroup/8',
    image: {
      src: '/images/category/AthenaCannabis-Website-Icons-Category-Seeds-NoCircle.svg',
      alt: 'Seeds',
    },
  },

  // Cannabis - Capsules
  {
    weight: 100,
    name: 'Capsules',
    url: 'https://athenawebmenu.azurewebsites.net/productGroup/12',
    image: {
      src: '/images/category/AthenaCannabis-Website-Icons-Category-Capsules-NoCircle.svg',
      alt: 'Capsules',
    },
  },


  // Accessories
  {
    weight: 0,
    name: 'Accessories',
    url: 'https://athenawebmenu.azurewebsites.net/productGroup/7',
    image: {
      src: '/images/category/AthenaCannabis-Website-Icons-Category-Vapes-NoCircle.svg',
      alt: 'Accessories',
    },
  },

]
</script>
