<template>
  <section>
    <base-wrapper class="order-now-wrapper">
      <base-logo class="order-now-logo">
        <icon-kamilm></icon-kamilm>
      </base-logo>
      <h1>Kamil Malinowski <span>∞</span> Evil Touch</h1>
      <base-button>order now</base-button>
    </base-wrapper>
  </section>
</template>

<style lang="scss" scoped>
section {
  padding: 3rem;
  background-image: var(--gradient), url("/music/order-now-bg.jpg");
  background-size: cover;
  background-position: center;
}

span {
  display: block;
  @media screen and (min-width: 768px) {
    display: inline-block;
  }
}
</style>
