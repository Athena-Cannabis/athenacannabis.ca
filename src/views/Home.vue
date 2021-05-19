<template>
  <div>

    <home-hero />
    <home-product-categories />
    <home-location />
    <home-team />
    <home-gallery />
    <home-contact />

  </div>
</template>

<script>
import HomeHero from '../components/Home/HomeHero.vue';
import HomeGallery from '../components/Home/HomeGallery.vue';
import HomeLocation from '../components/Home/HomeLocation.vue';
import HomeTeam from '../components/Home/HomeTeam.vue';
import HomeContact from '../components/Home/HomeContact.vue';
import HomeProductCategories from '../components/Home/HomeProductCategories.vue';


export default {
  components : {
    HomeHero,
    HomeProductCategories,
    HomeGallery,
    HomeLocation,
    HomeTeam,
    HomeContact,
  },
  setup() {

  }
}
</script>
