<template>
  <section>
    <!-- Background fluid container -->
    <div class="bg-gray-100">

      <!-- Content container -->
      <div class="py-5 md:py-10 px-4 md:px-12 xl:px-20 2xl:container">

        <content-page-heading>
          <template v-slot:header>
            Contact
          </template>
          <template v-slot:description>
            Contact us information
          </template>
        </content-page-heading>

        <div class="grid grid-cols-2 gap-5">
          <img class="col-span-1 h-96  object-cover w-full" src="https://via.placeholder.com/950x400" alt="" />
          <img class="col-span-1 object-cover h-96 w-full" src="https://via.placeholder.com/950x300" alt="" />
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
