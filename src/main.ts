import { createApp } from "vue";
import "./styles/globals.css";
import App from "./App.vue";
import router from "./routes";

const app = createApp(App);
app.use(router);
app.mount("#app");
