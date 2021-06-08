<template>
  <div>

    <home-hero />
    <home-product-categories />
    <home-opening-left />
    <!-- <home-team /> -->
    <home-location />
    <home-contact />

  </div>
</template>

<script>
import HomeHero from '../components/Home/HomeHero.vue';
import HomeOpeningLeft from '../components/Home/HomeOpeningLeft.vue';
import HomeLocation from '../components/Home/HomeLocation.vue';
import HomeTeam from '../components/Home/HomeTeam.vue';
import HomeContact from '../components/Home/HomeContact.vue';
import HomeProductCategories from '../components/Home/HomeProductCategories.vue';


export default {
  components : {
    HomeHero,
    HomeProductCategories,
    HomeLocation,
    HomeTeam,
    HomeOpeningLeft,
    HomeContact,
  },
  setup() {

  }
}
</script>
