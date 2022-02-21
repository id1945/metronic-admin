<template>
  <!--begin::Section-->
  <div class="py-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5" id="spacing">
      <a href="#spacing"></a>
      Spacing
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      <b>{{ themeName }}</b> extends
      <a
        href="https://getbootstrap.com/docs/5.0/utilities/spacing/"
        class="fw-bold"
        >Bootstrap Spacing Classes</a
      >&nbsp; to provide additonal spacing options by overidding the default
      spacing SASS variable as shown below:
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
      <CodeHighlighter :fieldHeight="200" lang="scss">{{
        `$spacers: (
    0: 0,
    1: ($spacer * .25),
    2: ($spacer * .5),
    3: ($spacer * .75),
    4: ($spacer * 1),
    5: ($spacer * 1.25),
    6: ($spacer * 1.5),
    7: ($spacer * 1.75),
    8: ($spacer * 2),
    9: ($spacer * 2.25),
    10: ($spacer * 2.5),
    11: ($spacer * 2.75),
    12: ($spacer * 3),
    13: ($spacer * 3.25),
    14: ($spacer * 3.5),
    15: ($spacer * 3.75),
    16: ($spacer * 4),
    17: ($spacer * 4.25),
    18: ($spacer * 4.5),
    19: ($spacer * 4.75),
    20: ($spacer * 5)
);`
      }}</CodeHighlighter>
    </div>
    <!--end::Code-->
  </div>
  <!--end::Section-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { themeName } from "@/core/helpers/documentation";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";

export default defineComponent({
  name: "spacing",
  components: {
    CodeHighlighter,
  },
  setup() {
    return {
      themeName,
    };
  },
});
</script>
