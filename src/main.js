// src/main.js
import { createApp } from "vue";
import App from "./App.vue";
// import contextmenu from "./directives/contextmenu";

const app = createApp(App);
// app.directive("contextmenu", contextmenu);
app.mount("#app");