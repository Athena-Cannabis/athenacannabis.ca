<template>
  <div>

    <home-hero />
    <!-- <home-about /> -->
    <home-categories />
    <home-gallery />
    <home-location />
    <home-team />
    <home-contact />

  </div>
</template>

<script>
import HomeHero from '../components/Home/HomeHero.vue';
import HomeAbout from '../components/Home/HomeAbout.vue';
import HomeGallery from '../components/Home/HomeGallery.vue';
import HomeLocation from '../components/Home/HomeLocation.vue';
import HomeTeam from '../components/Home/HomeTeam.vue';
import HomeContact from '../components/Home/HomeContact.vue';
import HomeCategories from '../components/Home/HomeCategories.vue';

export default {
  components : {
    HomeHero,
    HomeAbout,
    HomeGallery,
    HomeLocation,
    HomeTeam,
    HomeContact,
    HomeCategories,
  },
  setup() {

  }
}
</script>
