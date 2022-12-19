<template>
  <button>
    <base-video></base-video>
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
button {
  border: 1px solid var(--c-secondary);
  font-family: inherit;
  font-weight: bold;
  font-size: 2rem;
  letter-spacing: 0.7rem;
  padding: 1rem 3rem 1rem;
  text-align: center;
  margin: 0 auto;
  display: grid;
  place-content: center;
  border-radius: var(--round);
  background-color: var(--c-dark);
  color: var(--c-light);
  box-shadow: var(--shadow);
  position: relative;
  &:hover {
    color: var(--c-secondary);
    box-shadow: var(--shadow-hover);
  }
  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
}
</style>
