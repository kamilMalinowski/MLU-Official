<template>
  <the-header></the-header>
  <the-sections></the-sections>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheSections from "./components/layout/TheSections.vue";
import TheFooter from "./components/layout/TheFooter.vue";
export default {
  components: {
    TheHeader,
    TheSections,
    TheFooter,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;900&display=swap");
:root {
  --c-light: #fff2fe;
  --c-dark: #1a1a1a;
  --c-primary: #1d0c32;
  --c-secondary: #c960e1;

  --transition: all 0.4s;

  --shadow: 0 0.5rem 3rem rgba(255, 255, 255, 0.3);
  --shadow-hover: 0 0.5rem 3rem rgba(239, 17, 247, 0.3);

  --gradient: linear-gradient(45deg, rgba(177, 84, 198, 0.4), rgb(29, 12, 50));

  --round: 4px;
}

html {
  scroll-behavior: smooth;
  font-size: 62.5%;
}

*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
}

body {
  box-sizing: border-box;
  font-size: 1.6rem;
  background-color: var(--c-primary);
  color: var(--c-secondary);
  font-family: "Orbitron", sans-serif;
  position: relative;
}

button {
  cursor: pointer;
}

h2 {
  padding-bottom: 1rem;
}

h1,
h3 {
  color: var(--c-light);
}

h1,
h2,
h3,
button,
a {
  text-align: center;
  text-transform: uppercase;
}

a,
button,
iframe {
  transition: var(--transition);
}

section {
  padding: 6rem 3rem;
  min-height: 100vh;
}

p {
  text-align: center;
}

video {
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
