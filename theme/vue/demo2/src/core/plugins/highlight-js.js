import Vue from "vue";
// Highlight js
import VueHighlightJS from "vue-highlight.js";
// Highlight.js languages (Only required languages)
import scss from "highlight.js/lib/languages/scss";
import javascript from "highlight.js/lib/languages/javascript";
import json from "highlight.js/lib/languages/json";
import vue from "vue-highlight.js/lib/languages/vue";
import "highlight.js/styles/github-gist.css";

// highlight js
Vue.use(VueHighlightJS, {
  // Register only languages that you want
  languages: {
    scss,
    javascript,
    json,
    vue
  }
});
