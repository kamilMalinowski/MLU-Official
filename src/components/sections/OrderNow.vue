<template>
  <section>
    <base-wrapper class="order-now-wrapper">
      <base-logo class="order-now-logo">
        <icon-kamilm></icon-kamilm>
      </base-logo>
      <h2>Kamil Malinowski - Evil Touch</h2>
      <button>ORDER NOW</button>
    </base-wrapper>
  </section>
</template>

<style lang="scss" scoped>
section {
  padding: 3rem;
  background-image: linear-gradient(
      180deg,
      rgba(26, 26, 26, 0.4),
      rgba(26, 26, 26, 0.6)
    ),
    url("./order-now-bg.jpg");
  background-size: cover;
  background-position: center;
}

button {
  max-width: max-content;
  font-family: inherit;
  border: none;
  font-size: 2.4rem;
  letter-spacing: 1rem;
  padding: 1rem 5rem 1rem;
  text-align: center;
  margin: 0 auto;
  display: grid;
  place-content: center;
  border-radius: 50px;
  background-color: var(--c-dark);
  color: var(--c-light);
  box-shadow: var(--shadow);
  transition:var(--transition);
  &:hover {
    color: var(--c-secondary);
    box-shadow: var(--shadow-hover)
  }
  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
}
</style>
