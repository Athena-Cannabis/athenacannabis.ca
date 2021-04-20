<template>
  <div>

    <home-hero />
    <!-- <home-about /> -->
    <home-curbside />
    <home-FAQ />
    <home-gallery />
    <home-location />
    <home-team />
    <home-contact />

  </div>
</template>

<script>
import HomeHero from '../components/Home/HomeHero.vue';
// import HomeAbout from '../components/Home/HomeAbout.vue';
import HomeCurbside from '../components/Home/HomeCurbside.vue';
import HomeGallery from '../components/Home/HomeGallery.vue';
import HomeLocation from '../components/Home/HomeLocation.vue';
import HomeTeam from '../components/Home/HomeTeam.vue';
import HomeContact from '../components/Home/HomeContact.vue';
import HomeFAQ from '../components/Home/HomeFAQ.vue';


export default {
  components : {
    HomeHero,
    HomeCurbside,
    HomeGallery,
    HomeLocation,
    HomeTeam,
    HomeContact,
    HomeFAQ,
  },
  setup() {

  }
}
</script>
