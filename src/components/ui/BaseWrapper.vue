<template>
  <div>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
div {
  max-width: 1200px;
  margin: 0 auto;
}

.header-wrapper {
  display: grid;
  column-gap: 3rem;
  justify-content: center;
  align-items: center;
  grid-template-columns: 20rem 1fr;
  grid-template-rows: max-content;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 20rem 1fr;
  }
}

.order-now-wrapper {
  min-height: 100vh;
  display: grid;
  place-content: center;
  grid-gap: 3rem;
  padding-top: 10rem;
  text-transform: uppercase;
  text-align: center;
  color: var(--c-light);
}

.footer-wrapper {
  display: grid;
  grid-gap: 3rem;
}

</style>
