<template>
  <section>
    <base-wrapper>
      <h2>Album Gallery</h2>
      <div class="pictures">
        <img class="album" src="/km-ep.png" alt="Evil Touch EP" />
        <img class="album" src="/mlu-ep.png" alt="MLU Alone EP" />
        <img class="album" src="/mlu-demo.png" alt="MLU demo" />
      </div>
    </base-wrapper>
  </section>
  <div class="picture">
    <img src="/kamil.jpg" alt="Kamil Malinowski" />
  </div>
</template>

<style lang="scss" scoped>
section {
  padding: 6rem 3rem;
  background-image: linear-gradient(
      180deg,
      rgba(26, 26, 26, 0.7),
      rgba(26, 26, 26, 0.9)
    ),
    url("./youtube-bg.jpg");
  background-size: cover;
  background-position: center;
}

h2{
    text-align: center;
    margin-bottom: 6rem;
}

.album {
  border-radius: 4px;
  width: 100%;
  box-shadow: var(--shadow);
}

.pictures {
  display: grid;
  place-content: center;
  grid-gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  height: 100%;
}

.picture {
  width: 100%;
  img {
    width: 100%;
    height: auto;
  }
}
</style>
