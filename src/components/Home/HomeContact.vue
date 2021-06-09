<template>
  <section>

     <!-- Background fluid container -->
    <div class="bg-brand-bslue-700 bg-white ">

      <!-- Content container -->
      <div class="py-5 px-4 md:px-12 lg:px-20 xl:px-32 2xl:container">

        <!-- Flex box two handle 2 cols -->
        <div class="mb-20 flex flex-col lg:flex-row items-center">

          <!-- Column 1 -->
          <div class="mb-10 lg:mb-0 w-full lg:w-2/5">

            <div class="max-w-prose">

              <h2 class="text-3xl sm:text-2xl lg:text-4xl xl:text-5xl text-black font-semibold">
                <span class="block">Let's connect!</span>

              </h2>

              <p class="pt-2 block text-black text-3xl font-normal">Have a question, comment, or concern?</p>

              <h3 class="sr-only">Contact information</h3>

              <dl class="mt-8 space-y-6">
                <dt><span class="sr-only">Phone number</span></dt>
                <dd class="flex text-base text-teal-50">
                  <!-- Heroicon name: outline/phone -->
                  <svg class="flex-shrink-0 w-6 h-6 text-teal-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a class="ml-3" href="tel:16135951420">+1 (613) 595-1420</a>
                </dd>
                <dt><span class="sr-only">Email</span></dt>
                <dd class="flex text-base text-teal-50">
                  <!-- Heroicon name: outline/mail -->
                  <svg class="flex-shrink-0 w-6 h-6 text-teal-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a class="ml-3" href="mailto:hello@athenacannabis.ca">hello@athenacannabis.ca</a>
                </dd>
              </dl>

            </div>
          </div>

          <!-- Column 2 -->
          <div class="w-full lg:w-3/5 ">
            <div class="p-10 lg:ml-10 bg-gray-100 white rounded-md">

              <p class="mt-4 text-xl text-gray-500 sm:mt-4 not-italic">
                Reach out to us using the form below. We're pretty busy with the store reopening so it may take us up to 48 hours to reply back.
              </p>

              <!-- Form -->
               <form
                name="athena-cannabis-contact-form"
                data-netlify="true"
                method="post"
                class="mt-10 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">

                <input type="hidden" name="form-name" value="athena-cannabis-contact-form" />

                <div>
                  <label for="first_name" class="block text-md font-medium text-gray-500">First name</label>
                  <div class="mt-1">
                    <input type="text" name="first_name" id="first_name" autocomplete="given-name" class="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                  </div>
                </div>
                <div>
                  <div class="flex justify-between">
                    <label for="last_name" class="block text-md font-medium text-gray-500">Last name</label>
                    <span id="how_can_we_help_description" class="text-sm text-gray-400">Optional</span>
                  </div>
                  <div class="mt-1">
                    <input type="text" name="last_name" id="last_name" autocomplete="family-name" class="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label for="email" class="block text-md font-medium text-gray-500">Email</label>
                  <div class="mt-1">
                    <input id="email" name="email" type="email" autocomplete="email" class="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label for="how_can_we_help" class="block text-md font-medium text-gray-500">How can we help?</label>
                  <div class="mt-1">
                    <textarea id="how_can_we_help" name="how_can_we_help" aria-describedby="how_can_we_help_description" rows="4" class="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"></textarea>
                  </div>
                </div>
                <div class="text-right sm:col-span-2">
                  <button type="submit" class="inline-flex justify-center py-4 px-8 border border-transparent shadow-sm text-lg
                  font-medium rounded-md text-white bg-brand-blue-800 hover:bg-brand-blue-900
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                  transition-all duration-150 ease-in-out">
                    Submit
                  </button>
                </div>
              </form>



            </div>
          </div>


        </div>


      </div>

    </div>

  </section>
  <section v-if="false">

    <!-- Background fluid container -->
    <div class="bg-brand-blue-700 mt-32">

      <!-- Content container -->
      <div class="py-5 md:py-10 px-4 md:px-12 xl:px-20 2xl:container">

        <div class="mt-20 mb-20 bg-none rounded-md lg:flex lg:items-center lg:justify-between">

          <h2 class="text-3xl tracking-tight text-white md:text-4xl">
            <span class="font-extrabold block">Let's connect!</span>
            <span class="pt-2 block text-gray-100"> Have a question, comment, or concern?</span>
          </h2>
          <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div class="bg-white p-20">
              <div class="inline-flex rounded-md shadow">
                <router-link
                  to="contact"
                  class="
                      justify-center
                      inline-flex align-bottom py-6 px-4 md:py-5 md:px-6 border-2 border-brand-blue-600 shadow-sm text-2xl
                      font-medium
                      rounded-lg text-brand-blue-900 bg-white hover:bg-brand-blue-100 hover:border-brand-blue-800
                      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                      transition-all duration-150 ease-in-out">
                  Contact
                </router-link>
              </div>
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

        <!-- Actual panel -->
        <div class="mt-20 mb-20 p-20 bg-gray-200 rounded-xl lg:flex lg:items-center lg:justify-between">

          <h2 class="text-3xl tracking-tight text-gray-900 md:text-4xl">
            <span class="font-extrabold block">Let's connect!</span>
            <span class="pt-2 block text-brand-blue-600"> Have a question, comment, or concern?</span>
          </h2>
          <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div class="inline-flex rounded-md shadow">
              <router-link
                to="contact"
                class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-blue-800 hover:bg-brand-blue-900">
                Contact
              </router-link>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
  <section v-if="false">
    <!-- Background fluid container -->
    <div class="bg-gray-100">
      <!-- Content container -->
      <div class="py-5 md:py-10 px-4 md:px-12 xl:px-20 2xl:container">

         <!-- Text section -->
          <div class="text-left max-w-prose">

            <h2 class="text-3xl sm:text-2xl lg:text-4xl xl:text-6xl text-gray-900">
              Let’s take the next step
            </h2>

            <p class="mt-4 text-xl text-gray-500 sm:mt-4 not-italic">
              Have a question, comment, or concern? Would you like to learn more about the store? Want us to carry a specific product or brand? Excited about an idea we haven't thought of?
            </p>

            <p class="mt-4 text-xl text-gray-500 sm:mt-4 not-italic">
              Reach out to us using the form below. We're pretty busy with the store opening so it may take us up to 48 hours to reply back.
            </p>


            <form
              name="athena-cannabis-contact-form"
              data-netlify="true"
              method="post"
              class="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">

              <input type="hidden" name="form-name" value="athena-cannabis-contact-form" />

              <div>
                <label for="first_name" class="block text-md font-medium text-gray-500">First name</label>
                <div class="mt-1">
                  <input type="text" name="first_name" id="first_name" autocomplete="given-name" class="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                </div>
              </div>
              <div>
                <div class="flex justify-between">
                  <label for="last_name" class="block text-md font-medium text-gray-500">Last name</label>
                  <span id="how_can_we_help_description" class="text-sm text-gray-400">Optional</span>
                </div>
                <div class="mt-1">
                  <input type="text" name="last_name" id="last_name" autocomplete="family-name" class="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="email" class="block text-md font-medium text-gray-500">Email</label>
                <div class="mt-1">
                  <input id="email" name="email" type="email" autocomplete="email" class="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="how_can_we_help" class="block text-md font-medium text-gray-500">How can we help?</label>
                <div class="mt-1">
                  <textarea id="how_can_we_help" name="how_can_we_help" aria-describedby="how_can_we_help_description" rows="4" class="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"></textarea>
                </div>
              </div>
              <div class="text-right sm:col-span-2">
                <button type="submit" class="inline-flex justify-center py-4 px-8 border border-transparent shadow-sm text-lg
                font-medium rounded-md text-white bg-brand-blue-800 hover:bg-brand-blue-900
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                transition-all duration-150 ease-in-out">
                  Submit
                </button>
              </div>
            </form>

          </div>

      </div>
    </div>
  </section>
  <section
    v-if="false"
    id="contact">
    <div class=" bg-white">
      <div class="container xl:py-32">
        <div class="mb-20 flex flex-col lg:flex-row flex-nowrap">
          <!-- First column  -->
          <div class="w-full lg:w-1/2">
            <div class="pb-20 lg:pr-20">

              <h2 class="tracking-normal font-bold text-brand-blue-800 text-4xl sm:text-5xl md:text-6xl xl:text-5xl">
                Get in touch
              </h2>

              <p class="mt-10 text-xl text-gray-700 leading-loose max-w-prose">
                We would love to hear from you to learn about your organisation and how we can support you.
              </p>

              <dl class="mt-8 text-base text-gray-500">
                <div class="mt-6">
                  <dt class="sr-only">Twitter</dt>
                  <dd class="flex">
                    <!-- Heroicon name: outline/phone -->
                    <svg class="flex-shrink-0 h-8 w-8 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 100 100" stroke="currentColor" aria-hidden="true">
                      <path d="M97.903,26.352c-0.275-0.947-1.094-1.634-2.073-1.741l-11.793-1.298C80.833,15.414,75.54,9.837,68.655,7.136  c-2.321-0.91-4.796-1.371-7.354-1.371c-11.307,0-21.485,8.891-22.688,19.82c-0.263,2.388-0.15,4.751,0.312,7.022L20.23,17.048  c-0.521-0.434-1.197-0.629-1.871-0.544c-0.672,0.087-1.278,0.45-1.671,1.002c-0.19,0.267-18.212,26.148,2.035,47.7  C13.354,69.614,5.006,76.153,3.195,77.569c-0.568,0.444-0.909,1.116-0.934,1.837c-0.025,0.719,0.271,1.413,0.807,1.895  c7.898,7.096,17.667,11.462,28.25,12.626c1.855,0.204,3.738,0.308,5.595,0.308c0.002,0,0.001,0,0.003,0  c25.806,0,47.4-19.372,50.229-45.062c0.443-4.042,0.47-8.275,0.079-12.33l9.864-7.909C97.856,28.317,98.178,27.298,97.903,26.352z   M83.133,33.875c-0.657,0.527-0.996,1.356-0.896,2.193c0.494,4.095,0.517,8.442,0.062,12.572  c-2.556,23.217-22.068,40.723-45.387,40.721c-1.68,0-3.383-0.093-5.063-0.278c-8.589-0.944-16.584-4.223-23.293-9.524  c3.991-3.137,11.395-8.987,15.349-12.321c0.532-0.448,0.847-1.102,0.865-1.797c0.019-0.694-0.26-1.364-0.767-1.841  c-16.798-15.795-8.421-34.607-4.749-41.024l26.475,22.032c1.012,0.843,2.512,0.728,3.384-0.26c0.873-0.988,0.802-2.49-0.161-3.391  c-4.106-3.846-6.109-9.255-5.496-14.84c0.939-8.536,8.944-15.48,17.844-15.48c1.947,0,3.823,0.348,5.575,1.035  c6.038,2.369,10.457,7.329,13.133,14.742c0.348,0.963,1.246,1.578,2.228,1.602l7.215,0.794L83.133,33.875z"></path><path d="M63.789,19.709c-3.949-0.436-7.401,2.418-7.827,6.275c-0.429,3.887,2.387,7.398,6.274,7.826  c0.263,0.029,0.523,0.043,0.782,0.043c3.62,0,6.649-2.715,7.046-6.317C70.492,23.649,67.678,20.138,63.789,19.709z M65.221,27.003  c-0.134,1.21-1.226,2.094-2.451,1.964c-1.216-0.134-2.098-1.233-1.963-2.449c0.123-1.128,1.07-1.979,2.203-1.979  c0.081,0,0.164,0.004,0.246,0.013C64.473,24.687,65.354,25.787,65.221,27.003z"></path>
                    </svg>
                    <a href="https://twitter.com/feminist_dev?lang=en">
                      <span class="ml-3 text-lg text-brand-blue-800">
                        @Feminist_Dev
                      </span>
                    </a>
                  </dd>
                </div>
                 <div class="mt-3">
                  <dt class="sr-only">LinkedIn</dt>
                  <dd class="flex">
                    <!-- Heroicon name: outline/mail -->
                    <svg class="flex-shrink-0 h-8 w-8 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span class="ml-3 text-lg text-brand-green-800">
                      LinkedIn
                    </span>
                  </dd>
                </div>
                <div class="mt-3">
                  <dt class="sr-only">Instagram</dt>
                  <dd class="flex">
                    <!-- Heroicon name: outline/mail -->
                    <svg class="flex-shrink-0 h-8 w-8 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span class="ml-3 text-lg text-brand-blue-800">
                      @Feminist_Dev
                    </span>
                  </dd>
                </div>
                <div class="mt-3">
                  <dt class="sr-only">Email</dt>
                  <dd class="flex">
                    <!-- Heroicon name: outline/mail -->
                    <svg class="flex-shrink-0 h-8 w-8 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span class="ml-3 text-lg text-brand-blue-800">
                      support@example.com
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <!-- Second column -->
          <div class="w-full lg:w-1/2">
            <div class="p-10 bg-brand-blue-200 rounded-2xl">

              <h2 class="sr-only">
                Contact Us
              </h2>

              <p class="mb-5 text-lg text-gray-900 leading-relaxed">
                Reach out to us using the form below. We'll reply back within 24 hours.
              </p>


              <form
                method="POST"
                class="grid grid-cols-1 gap-y-6"
                name="contact"
                data-netlify="true">



                <div>
                  <label for="full_name" class="block text-sm font-medium text-gray-700 mb-2">Name
                    <span class="sr-only">(Required field)</span>
                    <span class="text-gray-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="full_name"
                    id="full_name"
                    autocomplete="name"
                    placeholder="Harley Quinn"
                    required
                    class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-brand-blue-500
                      focus:border-brand-blue-500 border-gray-300 rounded-md">
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email
                    <span class="sr-only">(Required field)</span>
                    <span class="text-gray-600">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    placeholder="harley.quinn@justiceleague.com"
                    required
                    class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-brand-blue-500
                      focus:border-brand-blue-500 border-gray-300 rounded-md">
                </div>
                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message
                    <span class="sr-only">(Required field)</span>
                    <span class="text-gray-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="How can we help?"
                    required
                    class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-brand-blue-500
                    focus:border-brand-blue-500 border-gray-300 rounded-md" ></textarea>
                </div>
                <div>
                  <button type="submit" class="inline-flex justify-center py-3 px-6 border border-transparent
                  text-base font-medium rounded-md
                  text-white bg-brand-blue-700 hover:bg-brand-blue-700
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
