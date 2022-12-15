<template>
  <main>
    <order-now></order-now>
    <single-release></single-release>
    <show-youtube></show-youtube>
    <show-instagram></show-instagram>
  </main>
</template>

<script>
import OrderNow from "../sections/OrderNow.vue";
import singleRelease from "../sections/SingleRelease.vue";
import ShowYoutube from "../sections/ShowYoutube.vue";
import ShowInstagram from "../sections/ShowInstagram.vue";

export default {
  components: {
    OrderNow,
    singleRelease,
    ShowYoutube,
    ShowInstagram,
  },
};
</script>

<style lang="scss" scoped>
section {
  min-height: 100vh;
}
</style>
