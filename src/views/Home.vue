<template>
  <div>

    <home-hero />
    <home-product-categories />
    <home-location />
    <home-team />
    <home-opening />
    <home-contact />

  </div>
</template>

<script>
import HomeHero from '../components/Home/HomeHero.vue';
import HomeOpening from '../components/Home/HomeOpening.vue';
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
    HomeOpening,
    HomeContact,
  },
  setup() {

  }
}
</script>
