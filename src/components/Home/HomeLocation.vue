<template>
  <section>

     <!-- Background fluid container -->
    <div class="bg-white">

      <!-- Content container -->
      <div class="py-5 md:py-0 px-4 md:px-12 lg:py-0 xl:px-20 2xl:container">

        <div class="grid grid-cols-1 md:grid-cols-2 gap-y-20 md:gap-5 my-32 md:my-52">

          <!-- Text -->
          <div class="col-start-1 md:col-start-2 md:p-10 rounded-xl ">

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
          <div class="col-start-1 row-start-2 md:row-start-1 bg-white rounded-xl">
            <img class="h-72 md:h-full w-full object-cover rounded-xl" src="/images/home/location-a.jpg" alt="" />
          </div>

        </div>

      </div>

    </div>

  </section>
</template>
