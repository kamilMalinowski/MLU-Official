<template>
  <footer>
    <base-wrapper class="footer-wrapper">
      <base-logo class="footer-logo">
        <icon-kamilm></icon-kamilm>
      </base-logo>
      <p>
        WEBSITE DESIGN BY
        <a href="https://www.kamil--m.com/" rel="noopener noreferrer"
          >KAMIL MALINOWSKI</a
        >
      </p>
    </base-wrapper>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background-image: linear-gradient(
      180deg,
      rgba(26, 26, 26, 0.7),
      rgba(26, 26, 26, 0.9)
    ),
    url("./footer-bg.jpg");
  background-size: cover;
  background-position: center;
  padding: 6rem 3rem;
  text-align: center;
}
a {
  color: var(--c-light);
}
</style>
