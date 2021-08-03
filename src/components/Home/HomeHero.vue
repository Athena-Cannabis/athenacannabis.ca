<template>
  <section>

     <!-- Background fluid container -->
    <div class="bg-white">

      <!-- Content container -->
      <div class="py-5 md:py-10 px-4 md:px-12 xl:px-32 2xl:container relative">

        <!-- Text section -->
        <div class="relative py-12 md:py-32 w-full md:w-4/5 lg:w-2/3 z-10">

            <h1 class="sr-only">Athena Cannabis</h1>

              <p class="mb-8 uppercase text-xs md:text-lg text-gray-800 tracking-widest">A recreational cannabis store</p>

<!--
              <p class="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl
                        font-medium md:text-brand-blue-800 bg-white">

                <span class="sm:block md:inline font-bold">Now open </span>
                <span class="sm:block md:inline text-brand-blue-600">for in&#8209;store shopping</span>
              </p>
-->

               <p class="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl
                        font-medium md:text-brand-blue-800 bg-white">

                <span class="sm:block md:inline font-bold">Come in </span>
                <span class="sm:block md:inline text-brand-blue-600">we're open</span>
              </p>

              <p class="md:w-full pt-5 text-3xl md:text-5xl text-gray-500 text-left tracking-normal bg-white">
                Or, shop online, with in&#8209;store pickup in under 25 minutes
              </p>

              <p class="sr-only md:w-full lg:w-3/4 mt-5 text-2xl md:text-5xl text-gray-500 text-center md:text-left tracking-normal">
                Our doors are open, but we're operating at limited capacity due to Stage 3 restrictions.
              </p>
              <div class="mt-10 flex flex-col md:flex-row">

                <a
                  rel="external"
                  href="https://athenawebmenu.azurewebsites.net/"
                  class="
                    justify-center
                    inline-flex align-bottom py-6 px-4 md:py-6 md:px-8 border-2 border-brand-blue-900 shadow-sm text-2xl
                    font-medium
                    rounded-lg text-white bg-brand-blue-800 hover:bg-brand-blue-900
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                    transition-all duration-150 ease-in-out">
                    <span class="pr-4">Shop online</span>
                    <svg class="h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" x="0px" y="0px"><title>shopping, paper, bag, cart</title><g data-name="Shopping Bag"><path d="M50.051,10.64a1,1,0,0,0-1-.9H17.921a1.008,1.008,0,0,0-.99.83l-6.79,39.52a1.017,1.017,0,0,0,.88,1.17l28.7,3h.11a.892.892,0,0,0,.22-.03.743.743,0,0,0,.27-.1l5.99-3.38,6.35,1.42a1,1,0,0,0,.88-.22,1.017,1.017,0,0,0,.33-.85ZM38.921,52.16l-26.63-2.78,6.47-37.64h23.77ZM24.937,23.787a5.359,5.359,0,0,1-1.284-4.227l.616-4.71a1,1,0,0,1,1.983.259l-.617,4.71a3.356,3.356,0,1,0,6.659.835l.693-5.793a1,1,0,0,1,1.986.237l-.693,5.793a5.356,5.356,0,0,1-9.343,2.9Z"></path></g></svg>
                </a>

                <router-link
                  to="/how-to-shop"
                  class="mt-3 md:mt-0 ml-0 md:ml-5 inline-flex justify-center align-bottom py-6 px-4 md:py-6 md:px-8 border-2 border-brand-blue-900 shadow-sm text-2xl
                  font-medium rounded-lg text-brand-blue-800 bg-white hover:bg-brand-blue-900 hover:text-gray-100
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                  transition-all duration-150 ease-in-out">
                    <span class="">Learn more</span><span class="sr-only"> about our store pickup process</span>
                    <!--<svg class="h-12 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" x="0px" y="0px"><title>shopping, paper, bag, cart</title><g data-name="Shopping Bag"><path d="M50.051,10.64a1,1,0,0,0-1-.9H17.921a1.008,1.008,0,0,0-.99.83l-6.79,39.52a1.017,1.017,0,0,0,.88,1.17l28.7,3h.11a.892.892,0,0,0,.22-.03.743.743,0,0,0,.27-.1l5.99-3.38,6.35,1.42a1,1,0,0,0,.88-.22,1.017,1.017,0,0,0,.33-.85ZM38.921,52.16l-26.63-2.78,6.47-37.64h23.77ZM24.937,23.787a5.359,5.359,0,0,1-1.284-4.227l.616-4.71a1,1,0,0,1,1.983.259l-.617,4.71a3.356,3.356,0,1,0,6.659.835l.693-5.793a1,1,0,0,1,1.986.237l-.693,5.793a5.356,5.356,0,0,1-9.343,2.9Z"></path></g></svg>-->
                </router-link>

              </div>


        </div>

        <!-- Square pattern from tailwind ui
         <svg class="absolute right-0 bottom-0 transform translate-y-36" width="404" height="392" fill="none" viewBox="0 0 404 392">
          <defs>
            <pattern id="837c3e70-6c3a-44e6-8854-cc48c737b659" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-brand-blue-600" fill="currentColor" />

            </pattern>
          </defs>
          <rect width="404" height="392" fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)" />
        </svg>-->

        <!-- Floating image -->
        <svg class="h-44 w-20 md:w-auto md:h-auto absolute right-10 bottom-0  transform translaste-y-20 rounded-full text-gray-400 z-0" width="244" height="492">
          <defs>
            <pattern id="pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="8" cy="8" r="2" stroke="none" class=" fill-current" fill="currentColor" />
          </pattern>
          </defs>

          <rect width="244" height="492" fill="url(#pattern)" />
        </svg>
      </div>
    </div>
  </section>
</template>
