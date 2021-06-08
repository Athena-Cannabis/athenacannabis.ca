<template>
  <section>

    <!-- Background fluid container -->
    <div class="bg-white my-5">

      <!-- Content container -->
      <div class="py-5 md:py-0 px-4 md:px-12 lg:py-20 xl:px-20 2xl:container">

        <div class="flex flex-row justify-center items-center">

          <!-- Image box -->
          <div class="w-3/5">
            <img class="h-72 md:h-full w-full object-cover rounded-md" src="/images/home/hero-c.jpg" alt="" />
          </div>

          <!-- Text box -->
          <div class="w-2/5 pl-20">

            <div class="text-left max-w-prose">

              <h2 class="text-3xl sm:text-2xl lg:text-4xl xl:text-5xl text-gray-800 font-semibold">
                 What we've built
              </h2>

              <p class="mt-3 sm:mt-8 text-xl text-gray-500">
                Due to the provincial lockdown we can't invite you into the store, but we're excited to share some pre-construction renderings from our design phase.
              </p>

              <p class="mt-3 sm:mt-4 text-xl text-gray-500">
                The store features an elegant and inviting hotel inspired lobby which connects to the age restricted retail space.
              </p>

              <p class="mt-3 sm:mt-4 text-xl text-gray-500">
                Throughout the store, we are showcasing lots of warm light, natural materials, understated aesthetics and some innovative ideas that we are sure will create a welcoming customer experience.
              </p>

            </div>

          </div>

        </div>

      </div>


    </div>

  </section>
  <section v-if="false">
    <!-- Background fluid container -->
    <div class="bg-white">
      <!-- Content container -->
      <div class="py-5 md:py-10 px-4 md:px-12 xl:px-20 2xl:container">

        <div class="grid grid-cols-2 gap-8">

          <!-- Text Box -->
          <div class="row-span-1 p-10">

            <div class="text-left max-w-prose">

              <h2 class="text-3xl sm:text-2xl lg:text-4xl xl:text-5xl text-gray-800 font-semibold">
                 What we've built
              </h2>

              <p class="mt-3 sm:mt-8 text-xl text-gray-500">
                Due to the provincial lockdown we can't invite you into the store, but we're excited to share some pre-construction renderings from our design phase.
              </p>

              <p class="mt-3 sm:mt-4 text-xl text-gray-500">
                The store features an elegant and inviting hotel inspired lobby which connects to the age restricted retail space.
              </p>

              <p class="mt-3 sm:mt-4 text-xl text-gray-500">
                Throughout the store, we are showcasing lots of warm light, natural materials, understated aesthetics and some innovative ideas that we are sure will create a welcoming customer experience.
              </p>

            </div>



          </div>

          <!-- Picture 1 -->
          <div class="col-start-2 row-span-3">
            <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-xl" src="/images/home/hero-b.jpg" alt="">
          </div>

          <!-- Picture 2 -->
          <div class="col-start-1 row-span-3 bg-white">

            <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-xl" src="/images/home/hero-a.jpg" alt="">

          </div>

          <!-- Picture 3 -->
           <div class="col-start-2 row-span-4 bg-white">

            <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-xl" src="/images/home/hero-c.jpg" alt="">

          </div>

           <!-- Picture 4
          <div class="col-start-1 row-span-4 bg-white">

            <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-xl" src="/images/home/hero-g.jpg" alt="">

          </div>
          -->

        </div>

      </div>

    </div>

  </section>
</template>
