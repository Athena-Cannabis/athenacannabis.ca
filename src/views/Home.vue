<template>
  <div>

    <home-hero />
    <home-gallery />
    <home-location />
    <home-team />
    <home-contact />

  </div>
</template>

<script>
import HomeHero from '../components/Home/HomeHero.vue';
import HomeGallery from '../components/Home/HomeGallery.vue';
import HomeLocation from '../components/Home/HomeLocation.vue';
import HomeAbout from '../components/Home/HomeAbout.vue';
import HomeTeam from '../components/Home/HomeTeam.vue';
import HomeContact from '../components/Home/HomeContact.vue';


export default {
  components : {
    HomeHero,
    HomeGallery,
    HomeLocation,
    HomeAbout,
    HomeTeam,
    HomeContact,
  },
  setup() {

  }
}
</script>
