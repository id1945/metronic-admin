import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";

//imports for app initialization
import { initInlineSvg } from "@/core/plugins/inline-svg";
import { initVeeValidate } from "@/core/plugins/vee-validate";

import "@/core/plugins/keenthemes";
import "@/core/plugins/prismjs";
import "bootstrap";

const app = createApp(App);

app.use(store);
app.use(router);
app.use(ElementPlus);

initInlineSvg(app);
initVeeValidate();

app.mount("#app");
