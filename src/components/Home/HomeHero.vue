<template>
    <section>
    <!-- Background fluid container -->
    <div class="bg-gray-100">

      <!-- Content container -->
      <div class="py-5 md:py-10 px-4 md:px-12 xl:px-20 2xl:container">

        <div class="pt-10 pb-48 w-full lg:w-2/3 mx-auto text-center">

          <h1 class="sr-only">Athena Cannabis</h1>

          <p class="mb-8 uppercase text-lg text-gray-700 tracking-widest">A recreational cannabis store</p>

          <p class="text-center text-4xl sm:text-6xl lg:text-7xl xl:text-7xl
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
          <p class="text-center mt-10">
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

        <!--
        <div class="w-full flex items-center">
          <img
            class="object-cover object-center lg:object-center w-full h-72 sm:h-full md:h-96 rounded-lg shadow-xl"
            src="/images/home/hero-a.jpg" alt="">
        </div>
        -->

         <div class="grid grid-cols-2 gap-8">

          <div class=" ">
            <img class="h-56 w-full object-cover lg:object-center sm:h-72 md:h-96 lg:w-full lg:h-full rounded-xl " src="/images/home/hero-g.jpg" alt="">
          </div>
<!--
          <div class="">
            <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-xl shadow-xl" src="/images/home/hero-g.jpg" alt="">
          </div>
-->
            <div class="">
            <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-xl " src="/images/home/hero-f.jpg" alt="">
          </div>



        </div>


      </div>



    </div>
  </section>
  <section>

     <!-- Background fluid container -->
    <div class="bg-gray-100">

      <!-- Content container -->
      <div class="py-5 md:py-10 px-4 md:px-12 xl:px-20 2xl:container">

        <div class="grid grid-cols-2 gap-5">

          <!-- Hero text -->
          <div class=" bg-gray-200 rounded-xl py-32 px-10">

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

          <div class="">
            <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-xl shadow-xl" src="/images/home/hero-g.jpg" alt="">
          </div>

        </div>

      </div>

    </div>

  </section>
  <section>

     <!-- Background fluid container -->
    <div class="bg-gray-100">

      <div class="relative">

        <!-- Content container -->
        <div class="py-5 md:py-10 px-4 md:px-12 xl:px-20 2xl:container relative z-20">

          <div class="grid grid-cols-2 gap-8">

            <!-- Hero text -->
            <div class="bg-gray-200 rounded-xl py-20 px-10">

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

            <!--<div class="">
              <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-l-xl" src="/images/home/hero-a.jpg" alt="">
            </div>-->

          </div>

        </div>

          <!-- Image container -->
          <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 z-10 py-5 md:py-10">
            <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-l-xl" src="/images/home/hero-a.jpg" alt="">
          </div>

      </div>

    </div>

  </section>
  <section>
    <!-- Background fluid container -->
    <div class="bg-gray-100">

      <div class="relative">

        <!-- Content container -->
        <div class="py-5 md:py-10 px-4 md:px-12 xl:px-20 2xl:container relative z-20">


          <div class="flex flex-row flex-nowrap items-center">

            <!-- Hero text -->
            <div class="w-2/5 pt-10 pb-20  bg-gray-200 rounded-xl">

              <h1 class="sr-only">Athena Cannabis</h1>

              <p class="mb-8 uppercase text-lg text-gray-700 tracking-widest">A recreational cannabis store</p>

              <p class="text-4xl sm:text-6xl lg:text-7xl xl:text-7xl bg-gray-100
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

          </div>

        </div>

        <!-- Image container -->
        <div class="lg:absolute lg:inset-y-0 lg:left-0 lg:w-full z-10 px-20 ">
          <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-l-xl" src="/images/home/hero-a.jpg" alt="">
        </div>

      </div>
    </div>
  </section>
  <section v-if="false">
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="relative bg-gray-100 overflow-hidden">
      <div class="max-w-7xl mx-auto">
        <div class="relative z-10 pb-8 bg-gray-100 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">

          <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div class="sm:text-center lg:text-left">
              <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span class="block xl:inline">Data to enrich your</span>
                <span class="block text-indigo-600 xl:inline">online business</span>
              </h1>
              <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
              </p>
              <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div class="rounded-md shadow">
                  <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                    Get started
                  </a>
                </div>
                <div class="mt-3 sm:mt-0 sm:ml-3">
                  <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                    Live demo
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="/images/home/hero-a.jpg" alt="">
      </div>
    </div>

  </section>
  <section>
    <!-- Background fluid container -->
    <div class="bg-gray-100">
      <!-- Content container -->
      <div class="py-5 md:py-10 px-4 md:px-12 xl:px-20 2xl:container">

        <div class="flex flex-row flex-nowrap items-center">

          <!-- Hero text -->
          <div class="w-1/2">

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

          <!-- Hero image -->
          <div class="w-1/2">

            <div class="grid grid-cols-12 grid-rows-5 relative h-full pl-32">

              <div class="col-start-1 row-start-1 row-span-4 col-span-8 z-10 pt-30 pt-36">
                <img
                  class="relative object-cover object-center lg:object-left w-full h-full rounded-xl shadow-xl"
                  src="/images/home/hero-a.jpg" alt="">
              </div>

              <div class="col-start-8 col-span-full row-start-1 row-span-2 z-20">
                <img
                  class="relative object-cover lg:object-left w-full h-full rounded-xl shadow-xl"
                  src="/images/home/hero-c.jpg" alt="">
              </div>

               <div class="col-start-5 col-span-6 row-start-4 row-span-full z-30 mt-10">
                <img
                  class="relative object-cover lg:object-left w-full rounded-xl shadow-xl"
                  src="/images/home/hero-b.jpg" alt="">
              </div>

            </div>
<!--
            <div class="hidden sm:block sm:absolute sm:inset-0" aria-hidden="true">
              <svg width="400" height="800" class="z-0 absolute bottom-0 right-0 transform translate-x-1/2 mb-48 text-blue-700 lg:top-0 lg:mt-28 lg:mb-0 xl:translate-x-0 xl:scale-150  fill-current" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path  d="M64.2,-22.3C68,-9.2,45.3,11,25.2,22.8C5.1,34.6,-12.5,38,-30.2,28.3C-47.8,18.6,-65.6,-4.2,-60.5,-19C-55.5,-33.8,-27.8,-40.4,1.2,-40.8C30.2,-41.2,60.4,-35.3,64.2,-22.3Z" transform="translate(100 100)" />
              </svg>

            </div>

            <img
              class="relative object-cover object-center  lg:object-left w-full sm:h-full rounded-xl shadow-xl z-50"
              src="/images/home/hero.jpg" alt="">
-->
          </div>

        </div>

      </div>
    </div>
  </section>
  <section>
    <!-- Background fluid container -->
    <div class="bg-gray-100">
      <!-- Content container -->
      <div class="py-5 md:py-10 px-4 md:px-12 xl:px-20 2xl:container">

        <div class="pt-10 pb-48 w-full lg:w-2/3 mx-auto text-center">

          <h1 class="sr-only">Athena Cannabis</h1>

          <p class="mb-8 uppercase text-lg text-gray-700 tracking-widest">A recreational cannabis store</p>

          <p class="text-center text-4xl sm:text-6xl lg:text-7xl xl:text-7xl
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
          <p class="text-center mt-10">
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

        <div class="w-full flex items-center">
        <img
          class="object-cover object-center lg:object-top w-full h-72 sm:h-full md:h-96 rounded-sm shadow-xl"
          src="/images/home/hero.jpg" alt="">
      </div>

      </div>
    </div>
  </section>
  <div v-if="false">
    <section>
      <div class="bg-gray-50">
        <div class="pt-5 pb-10 md:pt-10 content-container">

          <h1 class="sr-only">Athena Cannabis Home Page</h1>

          <div class="my-5 sm:my-10 flex flex-col md:flex-row">
            <div class="w-full md:pr-5 md:w-1/2 xl:w-2/5 pt-16 pb-36 md:pt-0 md:pb-52">
              <!--
              <div>
                <div class="inline-flex space-x-4">
                  <span class="rounded bg-brand-blue-50 px-2.5 py-1 text-xs font-semibold text-brand-blue-700 tracking-wide uppercase">
                    Opening soon!
                  </span>
                </div>
              </div>
              -->
              <h3 class="text-center md:text-left text-4xl font-bold md:text-gray-900 tracking-tight sm:text-6xl lg:text-7xl">
                <span class="sm:block">Shop online, </span>
                <span class="sm:block text-brand-blue-600"> pickup in under 25 minutes</span>
              </h3>
              <p class="md:w-full lg:w-3/4 mt-5 text-2xl md:text-5xl text-gray-500 text-center md:text-left tracking-normal">
                We are now open for store pickup!
              </p>
              <p class="sr-only md:w-full lg:w-3/4 mt-5 text-2xl md:text-5xl text-gray-500 text-center md:text-left tracking-normal">
                It's not quite the grand opening we had in mind, but due to the latest lockdown we've had to change our plans.
              </p>
              <p class="text-center md:text-left mt-8">
                <a
                  rel="external"
                  href="https://athenawebmenu.azurewebsites.net/"
                  class="inline-flex align-bottom py-4 px-4 md:py-6 md:px-8 border border-transparent shadow-sm text-2xl
                  font-medium rounded-md text-white bg-brand-blue-800 hover:bg-brand-blue-900
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                  transition-all duration-150 ease-in-out">
                    <span class="pt-1 pr-3">Shop now</span>
                    <svg class="h-12 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" x="0px" y="0px"><title>shopping, paper, bag, cart</title><g data-name="Shopping Bag"><path d="M50.051,10.64a1,1,0,0,0-1-.9H17.921a1.008,1.008,0,0,0-.99.83l-6.79,39.52a1.017,1.017,0,0,0,.88,1.17l28.7,3h.11a.892.892,0,0,0,.22-.03.743.743,0,0,0,.27-.1l5.99-3.38,6.35,1.42a1,1,0,0,0,.88-.22,1.017,1.017,0,0,0,.33-.85ZM38.921,52.16l-26.63-2.78,6.47-37.64h23.77ZM24.937,23.787a5.359,5.359,0,0,1-1.284-4.227l.616-4.71a1,1,0,0,1,1.983.259l-.617,4.71a3.356,3.356,0,1,0,6.659.835l.693-5.793a1,1,0,0,1,1.986.237l-.693,5.793a5.356,5.356,0,0,1-9.343,2.9Z"></path></g></svg>
                </a>
              </p>
            </div>
            <div class="w-full md:w-3/5 flex items-center">
            <img
              class="object-cover object-center lg:object-left w-full h-72 sm:h-full rounded-md shadow-xl"
              src="/images/home/hero.jpg" alt="">
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>
