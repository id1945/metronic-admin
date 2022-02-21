<template>
  <div class="card">
    <!--begin::Card Body-->
    <div class="card-body p-10 p-lg-15">
      <!--begin::Section-->
      <div class="pt-5">
        <!--begin::Heading-->
        <h1 class="anchor fw-bolder mb-5" id="rtl">
          <a href="#rtl"></a>
          Vue Right-to-Left (RTL)
        </h1>
        <!--end::Heading-->

        <!--begin::Block-->
        <div class="pt-4">
          The RTL does not enabled by default and also the RTL CSS files does
          not included. You can use the prepared webpack bundler to convert the
          existing SCSS files into RTL CSS files. You can find the
          <code>webpack.config.js</code> in each of the RTL demo folder.
        </div>
        <!--end::Block-->

        <ol class="pt-4">
          <li class="pt-5">
            Go to <code>[metronic]/[vue]/[demo]/</code> folder.
            <CodeHighlighter lang="bash">{{
              `cd theme/vue/demo1`
            }}</CodeHighlighter>
          </li>
          <li>
            Run command to install Vue dependencies and extra webpack plugins
            for RTL generate.
            <CodeHighlighter lang="bash">{{ `npm install` }}</CodeHighlighter>
          </li>
          <li>
            Run npm script command to execute webpack with RTL.
            <CodeHighlighter lang="bash">{{ `npm run rtl` }}</CodeHighlighter>
          </li>
          <li class="pb-5">
            You will get the bundle CSS with for RTL version inside
            <code>[metronic]/[vue]/[demo]/src/assets/css/style.rtl.css</code>
            folder. To enabled, this RTL CSS need to be included in the Vue.
          </li>
          <li class="py-5">
            Open the Vue main file <code>App.vue</code> file from
            <code>[metronic]/[vue]/[demo]/src/App.vue</code>. Import RTL CSS
            <code>style.rtl.css</code> file. Change
            <code>@import "assets/sass/style";</code> to RTL CSS
            <code>@import "assets/css/style.rtl.css";</code>
          </li>
          <li class="pt-5">
            Open the Vue index.html file from
            <code>[metronic]/[vue]/[demo]/public/index.html</code>. Add the RTL
            attributes to the body tag.
            <CodeHighlighter lang="bash">{{ htmlCode }}</CodeHighlighter>
          </li>
          <li>Run the Vue as usual using <code>yarn serve</code> command.</li>
        </ol>
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
  name: "rtl",
  components: {
    CodeHighlighter,
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Vue Right-to-Left (RTL)", ["Getting Started"]);
    });

    const htmlCode = `<body direction="rtl" dir="rtl" style="direction: rtl">`;

    return {
      themeName,
      htmlCode,
    };
  },
});
</script>
