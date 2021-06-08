<template>
  <section>
    <!-- Background fluid container -->
    <div class="bg-gray-100">

      <!-- Content container -->
      <div class="py-5 md:py-10 px-4 md:px-12 xl:px-20 2xl:container">

        <content-page-heading>
          <template v-slot:header>
            Let's connect
          </template>
          <template v-slot:description>
            Contact us information
          </template>
        </content-page-heading>

        <div class="grid grid-cols-2 gap-5">
          <img class="col-span-1 h-96  object-cover w-full" src="https://via.placeholder.com/950x400" alt="" />
          <img class="col-span-1 object-cover h-96 w-full" src="https://via.placeholder.com/950x300" alt="" />
        </div>

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
</template>

<script>
import ContentPageHeading from '../components/Content/PageHeading.vue';

export default {
  components : {
    ContentPageHeading,
  },
  setup() {

  }
}
</script>
