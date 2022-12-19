<template>
  <section>
    <div class="icon">
      <v-icon name="bi-instagram" scale="2.6" />
    </div>
    <h2>INSTAGRAM GALLERY</h2>
    <ul class="ul"></ul>
  </section>
</template>

<script>
// vanilla js - temporary solution

import { key } from "../ui/key.js";
const token = key;
fetch(
  `https://graph.instagram.com/me/media?fields=media_url&access_token=${token}`
)
  .then((res) => res.json())
  .then((res) => {
    const { data } = res;

    for (let img of data) {
      const list = document.querySelector(".ul");
      const { media_url } = img;
      if (String(img.media_url).slice(0, 13) === "https://video") {
      } else {
        const html = `
          <li style="overflow: hidden; border-radius: var(--round);">
            <img
              style="width: 100%; height: 100%; object-fit: cover; aspect-ratio: 1/1;"
              class="img"
              src="${media_url}"
              alt="instagram-img">
          </li>
        `;

        list.innerHTML += html;
      }
    }
  })
  .catch((error) => {
    console.error("nie udało się pobrać");
  });
</script>

<style lang="scss" scoped>
ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
  margin-top: 6rem;
}

li {
  display: flex;
  width: 100%;
}

.icon {
  text-align: center;
}
</style>
