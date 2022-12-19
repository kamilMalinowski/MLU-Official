<template>
  <div>
    <ul>
      <li>
        <a
          href="https://www.facebook.com/kams.malinowski/"
          rel="noopener noreferrer"
        >
          <v-icon name="bi-facebook" scale="1.2" />
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/channel/UCAneZdZmv8eaLez3eCd4BOQ/"
          rel="noopener noreferrer"
        >
          <v-icon name="bi-youtube" scale="1.2" />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/mluofficial/"
          rel="noopener noreferrer"
        >
          <v-icon name="bi-instagram" scale="1.2" />
        </a>
      </li>
      <li>
        <!--! TODO please update -->
        <a href="https://open.spotify.com/" rel="noopener noreferrer">
          <v-icon name="bi-spotify" scale="1.2" />
        </a>
      </li>
      <li>
        <!--! TODO please update -->
        <a href="https://bandcamp.com/" rel="noopener noreferrer">
          <v-icon name="fa-bandcamp" scale="1.2" />
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
ul {
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
    gap: 3rem;
    grid-column: 3/4;
    grid-row: 1/2;
    a {
      color: var(--c-secondary);
      &:hover {
        color: var(--c-light);
      }
    }
  }
}
</style>
