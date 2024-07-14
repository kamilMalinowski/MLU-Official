<template>
  <footer>
    <base-wrapper class="footer-wrapper">
      <base-logo class="footer-logo">
        <icon-kamilm></icon-kamilm>
      </base-logo>
      <p>
        WEBSITE DESIGN BY
        <a href="/" rel="noopener noreferrer">KAMIL MALINOWSKI</a>
      </p>
    </base-wrapper>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  border-top: 1px dashed var(--c-secondary);
  background-image: var(--gradient), url("./footer-bg.jpg");
  background-size: cover;
  background-position: center;
  padding: 6rem 3rem;
  text-align: center;
}

a {
  color: var(--c-light);
}
</style>
