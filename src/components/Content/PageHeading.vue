<template>
  <div class="max-w-prose mt-20 mb-20">

    <h1 class="text-4xl sm:text-6xl lg:text-7xl xl:text-7xl text-gray-900 font-medium">
      <slot name="header">No heading provided</slot>
    </h1>

    <div class="my-10 h-2 w-16 bg-black"></div>

    <p class="mt-5 text-2xl md:text-2xl text-gray-600 lesading-loose">
      <slot name="description">No description provided</slot>
    </p>

  </div>
</template>

<script>
export default {
  setup() {

  },
}
</script>
