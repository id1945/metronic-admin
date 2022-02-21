<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#service"></a>
      Service
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      You can also invoke Loading with a service. Import Loading service:
    </div>
    <!--end::Block-->

    <CodeHighlighter lang="html">{{
      `import { ElLoading } from 'element-plus';`
    }}</CodeHighlighter>

    <!--begin::Block-->
    <div class="py-5">Invoke it:</div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      The parameter <code>options</code> is the configuration of Loading, and
      its details can be found in the following table.
      <code>LoadingService</code> returns a Loading instance, and you can
      <code>close</code> it by invoking its close method:
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      Note that in this case the full screen Loading is singleton. If a new full
      screen Loading is invoked before an existing one is closed, the existing
      full screen Loading instance will be returned instead of actually creating
      another Loading instance:
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      Calling the <code>close</code> method on any one of them can close this
      full screen Loading.
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      If Element Plus is imported entirely, a globally method
      <code>$loading</code> will be registered to
      <code>app.config.globalProperties</code>. You can invoke it like this:
      <code>this.$loading(options)</code>, and it also returns a Loading
      instance.
    </div>
    <!--end::Block-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";

export default defineComponent({
  name: "service",
  components: {
    CodeHighlighter,
  },
  setup() {
    return {};
  },
});
</script>
