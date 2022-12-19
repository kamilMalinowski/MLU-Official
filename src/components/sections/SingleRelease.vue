<template>
  <section>
    <base-wrapper>
      <h2>MLU - Alone</h2>
      <h3>new single + video out now</h3>
      <article>
        <base-iframe></base-iframe>
        <p>
          "The single Alone is the first track announcing a much larger project
          that has been sitting in my head for a couple of years waiting to come
          to light. I thank my wife, family and all my friends for their
          patience and for their support, without which these ideas would never
          have come into being."
          <b> Kamil Malinowski </b>
        </p>
      </article>
    </base-wrapper>
  </section>
</template>

<style lang="scss" scoped>
article {
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-top: 6rem;
    align-items: center;
    * {
      flex-basis: 100%;
    }
  }
}

p {
  color: var(--c-light);
  letter-spacing: 0.8rem;
  line-height: 2.5rem;
  font-size: 1.4rem;
  font-style: italic;
  text-align: center;
  @media screen and (min-width: 768px) {
    text-align: left;
    line-height: 2rem;
    font-size: 1.6rem;
  }
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
