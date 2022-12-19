<template>
  <div>
    <button @click="statusMenu">
      <v-icon name="io-close" scale="3" />
    </button>
    <ul>
      <li>
        <a @click="statusMenu" href="#order-now" rel="noopener noreferrer"
          >order now</a
        >
      </li>
      <li>
        <a @click="statusMenu" href="#single-release" rel="noopener noreferrer"
          >single release</a
        >
      </li>
      <li>
        <a @click="statusMenu" href="#tour-dates" rel="noopener noreferrer"
          >tour dates</a
        >
      </li>
      <li>
        <a @click="statusMenu" href="#gallery" rel="noopener noreferrer"
          >gallery</a
        >
      </li>
    </ul>
    <base-video></base-video>
  </div>
</template>

<script>
export default {
  methods: {
    statusMenu() {
      this.$emit("status-menu");
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  top: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 99999;
  background-color: var(--c-dark);
  transform: translateX(-100%);
  transition: var(--transition);
}

.active {
  transform: translateX(0);
}

button {
  z-index: 9;
  position: absolute;
  right: 2rem;
  top: 2rem;
  display: flex;
  background-color: transparent;
  border: none;
  color: var(--c-secondary);
  &:hover {
    color: var(--c-light);
  }
}

ul {
  width: 100%;
  padding: 0 1rem;
  z-index: 9;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  grid-gap: 4rem;
}

a {
  color: inherit;
  font-size: 3rem;
  display: block;
  font-weight: bold;
  &:hover {
    color: var(--c-light);
  }
}
</style>
