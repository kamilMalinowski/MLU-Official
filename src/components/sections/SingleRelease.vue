<template>
  <section>
    <base-wrapper>
      <h2>MLU - Alone</h2>
      <h3>new single + video out now</h3>
      <article>
        <base-video>
          <iframe
            id="single"
            title="single"
            src="https://www.youtube.com/embed/SzYiiN7GNJc"
          >
          </iframe>
        </base-video>
        <p>
          "This composition would not have been created if not for friends who
          helped me. Ah those bass awful were tamed by MG."
          <b> Kamil Malinowski </b>
        </p>
      </article>
    </base-wrapper>
  </section>
</template>

<style lang="scss" scoped>
section {
  padding: 6rem 3rem;
  text-align: center;
}

h2 {
  text-transform: uppercase;
  padding-bottom: 1rem;
}

h3 {
  text-transform: uppercase;
  color: var(--c-light);
}

article {
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-top: 6rem;
    align-items: center;
  }
}

iframe {
  border: none;
  border-radius: 4px;
  box-shadow: var(--shadow);
  transition: var(--transition);
  width:40rem;
            height:26rem;
  &:hover {
    box-shadow: var(--shadow-hover);
  }
  @media screen and (min-width: 1024px) {
    width:50rem;
            height:36rem;
  }
}

p {
  color: var(--c-light);
  letter-spacing: 1rem;
  line-height: 2rem;
  font-style: italic;
}

b {
  display: block;
  margin-top: 3rem;
  text-transform: uppercase;
  font-weight: bold;
  font-style: normal;
  color: var(--c-secondary);
  text-shadow: var(--shadow);
}
</style>
