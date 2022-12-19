<template>
  <section>
    <div>
      <v-icon name="bi-instagram" scale="2.6" />
    </div>
    <h2>INSTAGRAM GALLERY</h2>
    <ul class="ul">
      <li v-for="img in imagesList" :key="img.id">
        <img :src="img.media_url" alt="instagram-img" />
      </li>
    </ul>
    <ul class="ul">
      <li v-for="video in videosList" :key="video.id">
        <video class="special" controls>
          <source :src="video.media_url" type="video/mp4" />
        </video>
      </li>
    </ul>
  </section>
</template>

<script>
import { key } from "../ui/key.js";

export default {
  data() {
    return {
      url:
        "https://graph.instagram.com/me/media?fields=media_url&access_token=" +
        key,
      imagesList: [],
      videosList: [],
    };
  },
  methods: {
    fetchUrl() {
      fetch(this.url)
        .then((response) => response.json())
        .then((response) => {
          const { data } = response;
          const resultsImages = [];
          const resultsVideos = [];
          for (let img of data) {
            const { id, media_url } = img;
            if (String(img.media_url).slice(0, 13) === "https://video") {
              resultsVideos.push(img);
            } else {
              resultsImages.push(img);
            }
          }
          this.imagesList = resultsImages;
          this.videosList = resultsVideos;
        })
        .catch((error) => {
          console.error("nie udało się pobrać");
        });
    },
  },
  mounted() {
    this.fetchUrl();
  },
};
</script>

<style lang="scss" scoped>
ul {
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
  margin: 6rem auto 0;
}

li {
  display: flex;
  width: 100%;
  overflow: hidden;
  border-radius: var(--round);
  border: 1px solid var(--c-secondary);
}

video {
  position: static;
}

img,
video {
  border-radius: var(--round);
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 1/1;
  background-color: var(--c-dark);
  filter: saturate(0.2);
  opacity: 0.7;
  transform: scale(1);
  transition: var(--transition);
  &:hover,
  &:focus {
    filter: saturate(1);
    opacity: 1;
    transform: scale(1.2);
  }
}

div {
  text-align: center;
}
</style>
