import { createApp } from "vue";
import "./styles/globals.css";
import App from "./App.vue";
import router from "./routes";
import "vue-toast-notification/dist/theme-bootstrap.css";
import ToastPlugin from "vue-toast-notification";

const app = createApp(App);
app.use(ToastPlugin);
app.use(router);
app.mount("#app");
