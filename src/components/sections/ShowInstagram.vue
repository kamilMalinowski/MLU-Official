<template>
  <section>
    <div class="icon">
      <v-icon name="bi-instagram" scale="2.8" />
    </div>
    <h2>Instagram Gallery</h2>
    <ul class="ul"></ul>
  </section>
</template>

<script>
// vanilla js - temporary solution
fetch(
  "https://graph.instagram.com/me/media?fields=media_url&access_token=IGQVJXYXpuOE9xVWtRRGJQUnFILU9TeWE2VWNXcnJERUlLZAHhDWmFXbXRRZA1lpb3N4WkxIYWVpd1RGVl94d2NyX21vd0I4cmN4WXBuRjc2aXE5c2VtbjRqRERNYkVqMHdHeEVCU2oxVTNZAaTU5N2l5aQZDZD"
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
          <li style="overflow: hidden; border-radius: 4px;">
            <img
              style="width: 100%; height: 100%; object-fit: cover;"
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
section {
  padding: 6rem 3rem;
}

h2{
  text-align: center;
    margin-bottom: 6rem;
}

ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
}

li {
  display: flex;
  width: 100%;
}

.img {
  width: 100%;
  height: auto;
}

.icon{
  text-align: center;
}
</style>
