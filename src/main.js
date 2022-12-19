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
  IoClose
} from "oh-vue-icons/icons";

addIcons(
  BiYoutube,
  BiInstagram,
  BiFacebook,
  BiSpotify,
  FaBandcamp,
  CoHamburgerMenu,
  IoClose
);



import BaseWrapper from "./components/ui/BaseWrapper.vue";
import BaseButton from "./components/ui/BaseButton.vue";
import BaseLogo from "./components/ui/BaseLogo.vue";
import BaseVideo from "./components/ui/BaseVideo.vue";
import BaseIframe from "./components/ui/BaseIframe.vue";
import BaseList from "./components/ui/BaseList.vue";
import IconKamilM from "./components/icons/IconKamilM.vue";
const app = createApp(App);

app.component("v-icon", OhVueIcon);
app.component("base-wrapper", BaseWrapper);
app.component("base-button", BaseButton);
app.component("base-logo", BaseLogo);
app.component("base-video", BaseVideo);
app.component("base-iframe", BaseIframe);
app.component("base-list", BaseList);
app.component("icon-kamilm", IconKamilM);

app.mount("#app");
