<template>
  <section>
    <base-wrapper>
      <h2>TOUR DATES</h2>
      <h3>There are no upcoming events.</h3>

      <icon-tour class="icon-tour"></icon-tour>
      <p>Get notified when new events are announced in your area</p>
      <base-button>follow</base-button>
    </base-wrapper>
  </section>
</template>

<script>
import IconTour from '../icons/IconTour.vue'
export default {
  components: {
    IconTour,
  },
};
</script>

<style lang="scss" scoped>
section {
  background-image: var(--gradient), url("../youtube-bg.jpg");
  background-size: cover;
  background-position: center;
}

a {
  color: inherit;
}

p {
  padding-bottom: 2rem;
  color: var(--c-light);
}

.icon-tour {
  display: block;
  width: 100%;
  max-width: 20rem;
  margin: 6rem auto;
}
</style>
