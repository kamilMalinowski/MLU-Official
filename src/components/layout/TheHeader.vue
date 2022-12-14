<template>
  <header>
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
  backdrop-filter: blur(10px);
  width: 100%;
  position: fixed;
  background-color: rgba(86, 3, 107, 0.8);
  padding: 3rem;
  box-shadow: 0 1rem 4rem rgba(26, 26, 26, 0.4);
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
