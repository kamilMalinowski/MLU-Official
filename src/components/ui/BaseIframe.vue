<template>
  <div>
    <iframe
      id="single"
      title="single"
      src="https://www.youtube.com/embed/SzYiiN7GNJc"
    >
    </iframe>
  </div>
</template>

<style lang="scss" scoped>
div {
  width: 100%;
  margin: 0 auto;
}

iframe {
  border: 1px solid var(--c-secondary);
  border-radius: var(--round);
  box-shadow: var(--shadow);
  transition: var(--transition);
  width: 100%;
  aspect-ratio: 16/9;
  &:hover {
    box-shadow: var(--shadow-hover);
  }
}
</style>
