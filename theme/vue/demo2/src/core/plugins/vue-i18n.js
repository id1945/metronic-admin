import Vue from "vue";
import VueI18n from "vue-i18n";

// Localisation language list
import { locale as en } from "@/core/config/i18n/en";
import { locale as ch } from "@/core/config/i18n/ch";
import { locale as es } from "@/core/config/i18n/es";
import { locale as jp } from "@/core/config/i18n/jp";
import { locale as de } from "@/core/config/i18n/de";
import { locale as fr } from "@/core/config/i18n/fr";

Vue.use(VueI18n);

let messages = {};
messages = { ...messages, en, ch, es, jp, de, fr };

// get current selected language
const lang = localStorage.getItem("language") || "en";

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: lang, // set locale
  messages // set locale messages
});

export default i18n;
