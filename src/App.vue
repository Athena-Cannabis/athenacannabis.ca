<template>
   <!-- The skip nav component -->
    <the-skip-nav />

    <!-- The header component -->
    <the-header />

    <!-- Page content -->
    <main>
      <router-view />
    </main>

    <!-- The footer component -->
    <the-footer />
</template>

<script>
import TheSkipNav from './components/TheSkipNav.vue';
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';

export default {
  components: {
    TheHeader,
    TheSkipNav,
    TheFooter,
  },
  setup() {

  }
}
</script>
