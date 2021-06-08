<template>
  <section>
    <!-- Background fluid container -->
    <div class="bg-white">

      <!-- Content container -->
      <div class="pt-5 pb-32 px-4 md:px-12 lg:px-20 xl:px-32 2xl:container">

        <h1 class="sr-only">Athena Cannabis - Error Page</h1>

        <div class="my-5 sm:my-10 flex flex-col md:flex-row items-center">
          <div class="w-full lg:w-2/5 pb-10">
            <!--
            <div>
              <div class="inline-flex space-x-4">
                <span class="rounded bg-brand-blue-50 px-2.5 py-1 text-xs font-semibold text-brand-blue-700 tracking-wide uppercase">
                  Opening soon!
                </span>
              </div>
            </div>
            -->
            <h2 class="text-center md:text-left text-4xl font-bold md:text-gray-900 tracking-tight sm:text-6xl lg:text-7xl">
              Sorry Bud
            </h2>

            <p class="md:w-full lg:w-3/4 mt-5 text-2xl md:text-5xl text-gray-500 text-center md:text-left tracking-normal">
              Clearly something went wrong.
            </p>

            <router-link
              to="/"
              class="inline-block mt-5 text-brand-blue-700 font-medium text-2xl underline
                  hover:text-brand-blue-900 transition-all ease-in-out duration-150">
              Return to the home page
            </router-link>

          </div>
          <div class="w-full md:w-3/5 flex justify-center items-top">

            <svg class="h-56 md:h-96 fill-current text-brand-blue-800 " xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 100 100" x="0px" y="0px"><title>website icon</title><path d="M50,95A45,45,0,1,1,95,50,45.05,45.05,0,0,1,50,95Zm0-84.71A39.71,39.71,0,1,0,89.71,50,39.75,39.75,0,0,0,50,10.29Z"></path><circle cx="33.19" cy="41.53" r="5.43"></circle><circle cx="66.81" cy="41.53" r="5.43"></circle><path d="M33.19,74.88a2.65,2.65,0,0,1-2-4.36,25.9,25.9,0,0,1,16.48-8.27c7-.56,14,2.13,20.88,8a2.65,2.65,0,0,1-3.45,4c-5.72-4.9-11.44-7.16-17-6.72a20.57,20.57,0,0,0-12.87,6.42A2.64,2.64,0,0,1,33.19,74.88Z"></path></svg>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script>
export default {
  setup() {

  }
}
</script>
