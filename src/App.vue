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
// @import url('https://fonts.googleapis.com/css2?family=Overpass:wght@200;400;500;600;900&display=swap');
@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;900&display=swap");
:root {
  --c-light: #fff2fe;
  --c-dark: #1a1a1a;
  --c-primary: #57036b;
  --c-secondary: #11f7a2;

  --transition: all 0.4s;

  --shadow: 0 0.5rem 3rem rgba(255, 255, 255, 0.3);
  --shadow-hover: 0 0.5rem 3rem rgba(17, 247, 163, 0.3);
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
  // font-family: 'Overpass', sans-serif;
  font-family: "Orbitron", sans-serif;
  position: relative;
}

button {
  cursor: pointer;
}
</style>
