import { createApp } from "vue";

import App from "./App.vue";
import { router } from "@/router/index";

// Load Bootstrap modules
import * as bootstrap from "bootstrap";

// Load global stylesheet
import "./assets/main.scss";

const app = createApp(App);

// Use state management with pinia
import { createPinia } from "pinia";
const pinia = createPinia();
app.use(pinia);


// Load Vuetify
import vuetify from "./plugins/vuetify";

app.use(vuetify);

// Use routing
app.use(router);

app.mount("#app");
