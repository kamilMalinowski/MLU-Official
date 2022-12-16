<template>
  <div>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
div{
  display: flex;
  margin: 0 auto;
  width: 100%;
  height: auto;
}

.header-logo {
  max-width: 3rem;
  grid-column: 1/2;
  grid-row: 1/2;
  @media screen and (min-width: 768px) {
    grid-column: 2/3;
    grid-row: 1/2;
  }
}

.order-now-logo{
  max-width: 20rem;
}

.show-youtube-logo{
  max-width: 15rem;
}

.footer-logo{
  max-width: 15rem;
}
</style>
