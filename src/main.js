import { createApp } from "vue";
import App from "./App.vue";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  BiYoutube,
  BiInstagram,
  BiFacebook,
  BiSpotify,
  FaBandcamp,
  CoHamburgerMenu,
} from "oh-vue-icons/icons";

addIcons(
  BiYoutube,
  BiInstagram,
  BiFacebook,
  BiSpotify,
  FaBandcamp,
  CoHamburgerMenu
);



import BaseWrapper from "./components/ui/BaseWrapper.vue";
import BaseLogo from "./components/ui/BaseLogo.vue";
import BaseVideo from "./components/ui/BaseVideo.vue";
import BaseList from "./components/ui/BaseList.vue";
import IconKamilM from "./components/icons/IconKamilM.vue";
const app = createApp(App);

app.component("v-icon", OhVueIcon);
app.component("base-wrapper", BaseWrapper);
app.component("base-logo", BaseLogo);
app.component("base-video", BaseVideo);
app.component("base-list", BaseList);
app.component("icon-kamilm", IconKamilM);

app.mount("#app");
