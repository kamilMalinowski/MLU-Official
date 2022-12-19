<template>
  <div>
    <base-video></base-video>
    <img src="/kamil.jpg" alt="Kamil Malinowski" />
  </div>
</template>

<style lang="scss" scoped>
div {
  position: relative;
  min-height: 100vh;
  opacity: 0.7;
  img {
    position: absolute;
    width: 100%;
    object-fit: cover;
    height: 100%;
  }
}
</style>
