<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Card Body-->
    <div class="card-body p-10 p-lg-15">
      <!--begin::Section-->
      <div class="pb-10">
        <!--begin::Heading-->
        <h1 class="anchor fw-bolder mb-5" id="overview">
          <a href="#overview"></a>
          Overview
        </h1>
        <!--end::Heading-->

        <!--begin::Block-->
        <div class="pt-4">
          The internationalization (i18n) library for Vue is
          <code>vue-i18n</code> and defined in
          <code>demo1/src/core/plugins/i18n.ts</code>. Vue I18n is
          internationalization plugin of Vue.js. It easily integrates some
          localization features to your Vue.js Application. For more detailed
          check
          <a href="https://kazupon.github.io/vue-i18n/"
            >vue-i18n official documentation</a
          >.
        </div>
        <!--end::Block-->
      </div>
      <!--end::Section-->

      <!--begin::Section-->
      <div class="pb-10">
        <!--begin::Heading-->
        <h1
          class="anchor fw-bolder mb-5"
          id="add_new_language_with_translation_keys"
        >
          <a href="#add_new_language_with_translation_keys"></a>
          Add new language with translation keys
        </h1>
        <!--end::Heading-->

        <!--begin::Block-->
        <ol class="pt-4">
          <li>
            To add new language support we should add new object into the
            messages object there key will be language code and value object
            with translation keys.
            <CodeHighlighter lang="javascript">{{
              `
          const messages = {
  en: {
    dashboard: "Dashboard"
  },
  es: {
    dashboard: "Tablero",
  },
  de: {
    dashboard: "Instrumententafel",
  },
  ja: {
    dashboard: "ダッシュボード",
  },
  + fr: {
  +   dashboard: "Générateur de mise",
  + }
};
        `
            }}</CodeHighlighter>
          </li>
        </ol>
        <!--end::Block-->
      </div>
      <!--end::Section-->

      <!--begin::Section-->
      <div class="pb-10">
        <!--begin::Heading-->
        <h1 class="anchor fw-bolder mb-5" id="switching_languages_dynamically">
          <a href="#switching_languages_dynamically"></a>
          Switching language dynamically
        </h1>
        <!--end::Heading-->

        <!--begin::Block-->
        <div class="pt-4">
          To change theme language dynamically we can use i18n.locale.value
          property.
        </div>

        <ol class="pt-4">
          <li>
            Import <code>useI18n</code> function form <code>vue-i18n</code>

            <CodeHighlighter lang="javascript">{{
              `import { useI18n } from "vue-i18n";`
            }}</CodeHighlighter>
          </li>

          <li>
            Get i18n instance using useI18n function

            <CodeHighlighter lang="javascript">{{
              `const i18n = useI18n();`
            }}</CodeHighlighter>
          </li>

          <li>
            Set i18n.locale.value property and set required language

            <CodeHighlighter lang="javascript">{{
              `i18n.locale.value = "fr";`
            }}</CodeHighlighter>
          </li>
        </ol>

        <div class="pt-4">
          You can check ready language switching functionality inside file
          <code>demo1/src/layout/header/partials/UserMenu.vue</code>
        </div>
        <!--end::Block-->
      </div>
      <!--end::Section-->

      <!--begin::Section-->
      <div class="pb-10">
        <!--begin::Heading-->
        <h1
          class="anchor fw-bolder mb-5"
          id="translation_usage_inside_component"
        >
          <a href="#translation_usage_inside_component"></a>
          Translation usage inside component
        </h1>
        <!--end::Heading-->

        <!--begin::Block-->
        <ol class="pt-4">
          <li>
            Get t from the useI18n function which we have imported in a previous
            section.

            <CodeHighlighter lang="javascript">{{
              `const { t } = useI18n();`
            }}</CodeHighlighter>
          </li>

          <li>
            Use t function inside template section, t function receives a
            translation key as a parameter and returns translation value.

            <CodeHighlighter lang="javascript">{{
              `\{\{ t("dashboard") \}\}`
            }}</CodeHighlighter>
          </li>
        </ol>

        <div class="pt-4">
          Check examples of usage inside file
          <code>demo1/src/layout/aside/Menu.vue</code>.
        </div>
        <!--end::Block-->
      </div>
      <!--end::Section-->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import { themeName } from "@/core/helpers/documentation";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";

export default defineComponent({
  name: "internationalization",
  components: {
    CodeHighlighter,
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Internationalization", ["Getting Started"]);
    });

    return {
      themeName,
    };
  },
});
</script>
