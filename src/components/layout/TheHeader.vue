<template>
  <header>
    <video autoplay loop muted>
      <source
        src="https://www.kamil--m.com/music/header-bg.mp4"
        type="video/mp4"
      />
    </video>

    <base-wrapper class="header-wrapper">
      <base-logo class="header-logo">
        <a href="https://www.kamil--m.com/music/" rel="noopener noreferrer">
          <icon-kamilm></icon-kamilm>
        </a>
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
  z-index: 999;
  width: 100%;
  position: fixed;
  background-color: var(--c-dark);
  padding: 3rem;
  border-bottom: 1px dashed var(--c-secondary);
  box-shadow: 0 1rem 4rem rgba(255, 255, 255, 0.1);
  overflow: hidden;
  * {
    z-index: 1;
  }
}

video {
  z-index: 0;
  mix-blend-mode: screen;
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
  &:hover {
    color: var(--c-light);
  }
}

a:hover {
  svg {
    fill: var(--c-light);
    transform: skew(-180deg , -180deg);
  }
}
</style>
