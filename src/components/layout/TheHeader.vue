<template>
  <header>
    <video autoplay loop muted>
      <source src="https://www.kamil--m.com/music/header-bg.mp4" type="video/mp4" />
    </video>

    <base-wrapper class="header-wrapper">
      <base-logo class="header-logo">
        <icon-kamilm></icon-kamilm>
      </base-logo>
      <base-list></base-list>
      <button>
        <v-icon name="co-hamburger-menu" scale="1.8" />
        <span>MENU</span>
      </button>
    </base-wrapper>
  </header>
</template>

<style lang="scss" scoped>
header {
  width: 100%;
  position: fixed;
  background-color: var(--c-dark);
  padding: 3rem;
  border-top: 1px dashed var(--c-secondary);
  border-bottom: 1px dashed var(--c-secondary);
  box-shadow: 0 1rem 4rem rgba(255, 255, 255, 0.1);
  overflow: hidden;
  *{
    z-index: 1;
  }
}

video {
  z-index: 0;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  mix-blend-mode: color;
}

button {
  font-family: inherit;
  border: none;
  background-color: transparent;
  color: var(--c-secondary);
  display: flex;
  align-items: center;
  font-size: 2.2rem;
  justify-self: flex-end;
  grid-column: 2/3;
  grid-row: 1/2;
  span {
    display: none;
  }
  @media screen and (min-width: 768px) {
    grid-column: 1/2;
    grid-row: 1/2;
    justify-self: flex-start;
    span {
      display: block;
    }
  }
}
</style>
