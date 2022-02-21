<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Card Body-->
    <div class="card-body p-10 p-lg-15">
      <Notice>
        <a href="https://docs.npmjs.com/about-npm">NPM</a> is the recommended
        installation method when building large scale applications with Vue. It
        pairs nicely with module bundlers such as Webpack or Browserify. Vue
        also provides accompanying tools for authoring Single File Components.
      </Notice>
      <!--begin::Section-->
      <div class="py-10">
        <!--begin::Heading-->
        <h1 class="anchor fw-bolder mb-5" id="overview">
          <router-link to="/build#quick_start"></router-link>
          Quick Start
        </h1>
        <!--end::Heading-->

        <!--begin::Block-->
        <ol class="py-5">
          <li class="pt-0">
            Start a command prompt window or terminal and change directory to
            <code
              >[unpacked path]/themes/{{ themeName.toLowerCase() }}/vue/</code
            >.
          </li>
          <div class="pb-5">
            <CodeHighlighter lang="bash">{{
              `cd themes/` + themeName.toLowerCase() + `/vue`
            }}</CodeHighlighter>
          </div>
          <li class="pt-0">
            Install the Vue local project dependencies by executing
            <code>npm install</code>
            command. This command will install the dependencies in the local
            <code>node_modules</code> folder. By default,
            <code>npm install</code> will install all modules listed as
            dependencies in <code>package.json</code>.
          </li>
          <div class="pb-5">
            <CodeHighlighter lang="bash">{{ `npm install` }}</CodeHighlighter>
          </div>
          <div class="pb-5">
            Execute <code>npm run serve</code> command to launch the server,
            watches your files, and rebuilds the app as you make changes to
            those files. Open your browser on
            <a href="http://localhost:8080/">http://localhost:8080/</a>.
          </div>
          <div class="pb-5">
            <CodeHighlighter lang="bash">{{ `npm run serve` }}</CodeHighlighter>
          </div>
          <div class="pb-5">
            This command will take some time to finsh. Please wait for it to
            complete.
          </div>
        </ol>
        <div class="pb-5">
          For more detailed information to install the Vue application, visit
          this official Vue
          <a href="https://v3.vuejs.org/guide/installation.html#installation"
            >documentation website</a
          >.
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
import Notice from "@/components/sections/Notice.vue";

export default defineComponent({
  name: "build",
  components: {
    CodeHighlighter,
    Notice,
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Build", ["Getting Started"]);
    });

    return {
      themeName,
    };
  },
});
</script>
