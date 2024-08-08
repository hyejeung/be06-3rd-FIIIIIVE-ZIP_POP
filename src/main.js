import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import piniaPersistedstate from "pinia-plugin-persistedstate";

import "./assets/css/main.css";
import "./assets/css/385.18f53a9f58282d65b021.css";

const pinia = createPinia();
pinia.use(piniaPersistedstate);

const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount("#app");
