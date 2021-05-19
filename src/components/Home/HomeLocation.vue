<template>
  <section>

     <!-- Background fluid container -->
    <div class="bg-gray-100">

      <!-- Content container -->
      <div class="py-5 md:py-10 px-4 md:px-12 xl:px-20 2xl:container">

        <div class="grid grid-cols-2 gap-5 my-52">

          <!-- Text -->
          <div class="col-start-2 p-10 rounded-xl ">

            <h2 class="text-3xl sm:text-2xl lg:text-4xl xl:text-5xl text-gray-800 font-semibold">
              Find us here
            </h2>

            <!-- Text section -->
            <div class="text-left max-w-prose">

              <p class="mt-4 max-w-lg text-xl text-gray-500 sm:mt-4 not-italic">
                Our store is located in Kanata South, close to the Metro off Eagleson.
              </p>

              <address>
                <p class="mt-4 max-w-lg text-xl text-gray-500 sm:mt-4 not-italic">
                  <span class="sr-only">Store address:</span>
                  782 Eagleson Road, Unit D4<br />
                  Ottawa, Canada<br />
                  K2M&nbsp;0N2
                </p>
              </address>

              <p class="mt-4">
                <a
                  href="https://goo.gl/maps/rG3U2kfMMjundn8P6"
                  class=" text-brand-blue-700 font-medium text-xl underline hover:text-brand-blue-900
                        transition-all ease-in-out duration-150">
                  Get Directions
                </a>
              </p>
            </div>

          </div>

          <!-- Image -->
          <div class="col-start-1 row-start-1 p-10 bg-white rounded-xl">
            Image
          </div>

          <div v-if="false">
          <!-- Hero text -->
          <div class=" bg-gray-100 rounded-xl py-32 px-10">

            <h1 class="sr-only">Athena Cannabis</h1>

              <p class="mb-8 uppercase text-lg text-gray-700 tracking-widest">A recreational cannabis store</p>

              <p class="text-4xl sm:text-6xl lg:text-7xl xl:text-7xl
                        font-medium md:text-gray-800">
                <span class="sm:block md:inline">Shop online, </span>
                <span class="sm:block md:inline text-brand-blue-600"> pickup in under 25 minutes</span>
              </p>

              <!--
              <h3 class="text-center msd:text-left text-4xl sm:text-6xl lg:text-7xl
                        font-medium md:text-gray-900 tracking-tight ">
                <span class="sm:block">Shop online, </span>
                <span class="sm:block text-brand-blue-600"> pickup in under 25 minutes</span>
              </h3>
              -->

              <p class="sr-only md:w-full mt-5 text-2xl md:text-5xl text-gray-500 text-center md:text-left tracking-normal">
                We are now open for store pickup!
              </p>
              <p class="sr-only md:w-full lg:w-3/4 mt-5 text-2xl md:text-5xl text-gray-500 text-center md:text-left tracking-normal">
                It's not quite the grand opening we had in mind, but due to the latest lockdown we've had to change our plans.
              </p>
              <p class="mt-10">
                <a
                  rel="external"
                  href="https://athenawebmenu.azurewebsites.net/"
                  class="inline-flex align-bottom py-4 px-4 md:py-6 md:px-8 border-2 border-brand-blue-900 shadow-sm text-2xl
                  font-medium rounded-lg text-white bg-brand-blue-800 hover:bg-brand-blue-900
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                  transition-all duration-150 ease-in-out">
                    <span class="pr-4">Shop now</span>
                    <svg class="h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" x="0px" y="0px"><title>shopping, paper, bag, cart</title><g data-name="Shopping Bag"><path d="M50.051,10.64a1,1,0,0,0-1-.9H17.921a1.008,1.008,0,0,0-.99.83l-6.79,39.52a1.017,1.017,0,0,0,.88,1.17l28.7,3h.11a.892.892,0,0,0,.22-.03.743.743,0,0,0,.27-.1l5.99-3.38,6.35,1.42a1,1,0,0,0,.88-.22,1.017,1.017,0,0,0,.33-.85ZM38.921,52.16l-26.63-2.78,6.47-37.64h23.77ZM24.937,23.787a5.359,5.359,0,0,1-1.284-4.227l.616-4.71a1,1,0,0,1,1.983.259l-.617,4.71a3.356,3.356,0,1,0,6.659.835l.693-5.793a1,1,0,0,1,1.986.237l-.693,5.793a5.356,5.356,0,0,1-9.343,2.9Z"></path></g></svg>
                </a>

                <router-link
                  to="/how-to-shop"
                  class="ml-5 inline-flex align-bottom py-4 px-4 md:py-6 md:px-8 border-2 border-brand-blue-900 shadow-sm text-2xl
                  font-medium rounded-lg text-brand-blue-800 bg-gray-100 hover:bg-brand-blue-700 hover:text-gray-100
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                  transition-all duration-150 ease-in-out">
                    <span class="">Learn more</span><span class="sr-only"> about our store pickup process</span>
                    <!--<svg class="h-12 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" x="0px" y="0px"><title>shopping, paper, bag, cart</title><g data-name="Shopping Bag"><path d="M50.051,10.64a1,1,0,0,0-1-.9H17.921a1.008,1.008,0,0,0-.99.83l-6.79,39.52a1.017,1.017,0,0,0,.88,1.17l28.7,3h.11a.892.892,0,0,0,.22-.03.743.743,0,0,0,.27-.1l5.99-3.38,6.35,1.42a1,1,0,0,0,.88-.22,1.017,1.017,0,0,0,.33-.85ZM38.921,52.16l-26.63-2.78,6.47-37.64h23.77ZM24.937,23.787a5.359,5.359,0,0,1-1.284-4.227l.616-4.71a1,1,0,0,1,1.983.259l-.617,4.71a3.356,3.356,0,1,0,6.659.835l.693-5.793a1,1,0,0,1,1.986.237l-.693,5.793a5.356,5.356,0,0,1-9.343,2.9Z"></path></g></svg>-->
                </router-link>
              </p>

          </div>

          <div class="relative px-10 transform translate-y-52">
            <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full  rounded-xl shadow-xl filter grayscale" src="/images/home/hero-f.jpg" alt="">
            <div class="mx-10 absolute inset-0 bg-brand-blue-500 mix-blend-multiply rounded-xl"></div>


          </div>
          </div>
        </div>

      </div>

    </div>

  </section>
</template>
