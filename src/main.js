import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { OhVueIcon, addIcons } from "oh-vue-icons";

import "./assets/main.css";
import "./assets/selectStyles.css";

const app = createApp(App);

app.use(router);

app.mount("#app");
