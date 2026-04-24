import * as THREE from 'three';
window.THREE = THREE;

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";

createApp(App).use(router).mount("#app");
