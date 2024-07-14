<template>
  <main>
    <order-now id="order-now"></order-now>
    <single-release id="single-release"></single-release>
    <tour-dates id="tour-dates"></tour-dates>
    <my-picture></my-picture>
    <!-- <show-instagram id="gallery"></show-instagram> -->
  </main>
</template>

<script>
import OrderNow from "../sections/OrderNow.vue";
import singleRelease from "../sections/SingleRelease.vue";
import TourDates from "../sections/TourDates.vue";
import MyPicture from "../sections/MyPicture.vue";
// import ShowInstagram from "../sections/ShowInstagram.vue";

export default {
  components: {
    OrderNow,
    singleRelease,
    TourDates,
    MyPicture,
    
  },
};
</script>
