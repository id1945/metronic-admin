<template>
  <!--begin::Section-->
  <div class="py-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5" id="sizes">
      <a href="#sizes"></a>
      Sizes
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Assign responsive-friendly size to a symbol element with shorthand
      classes. The classes are named using the format
      <code>.symbol-{size}</code> for <code>xs</code> and
      <code>.symbol-{breakpoint}-{size}</code> for <code>sm</code>,
      <code>md</code>, <code>lg</code>, <code>xl</code>, and <code>xxl</code>.
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      Where <code>size</code> is one of:
      <ul class="pt-3">
        <template v-for="(item, i) in symbolSizes" :key="i">
          <li class="py-2">
            <code>{{ item }}</code> - for classes that set height and width to
            {{ item }}
          </li>
        </template>
      </ul>
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      <div class="rounded border p-10 pb-0 d-flex flex-wrap align-items-center">
        <template v-for="(item, i) in sizes" :key="i">
          <div :class="`symbol-${item}`" class="symbol me-10 mb-10">
            <div class="symbol-label fs-2 fw-bold text-success">A</div>
          </div>
        </template>
      </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
      <CodeHighlighter lang="html"
        >{{`
        <div class="symbol symbol-30px">
          <div class="symbol-label fs-2 fw-bold text-success">A</div>
        </div>
        <div class="symbol symbol-50px">
          <div class="symbol-label fs-2 fw-bold text-success">A</div>
        </div>
        <div class="symbol symbol-75px">
          <div class="symbol-label fs-2 fw-bold text-success">A</div>
        </div>
        <div class="symbol symbol-100px">
          <div class="symbol-label fs-2 fw-bold text-success">A</div>
        </div>
        <div class="symbol symbol-125px">
          <div class="symbol-label fs-2 fw-bold text-success">A</div>
        </div>
        <div class="symbol symbol-150px">
          <div class="symbol-label fs-2 fw-bold text-success">A</div>
        </div>
        `}}</CodeHighlighter
      >
    </div>
    <!--end::Code-->
  </div>
  <!--end::Section-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";

export default defineComponent({
  name: "sizes",
  components: {
    CodeHighlighter,
  },
  setup() {
    const sizes = ref(["30px", "50px", "75px", "100px", "125px", "150px"]);

    const symbolSizes = ref([
      "20px",
      "25px",
      "30px",
      "35px",
      "40px",
      "45px",
      "50px",
      "55px",
      "60px",
      "65px",
      "70px",
      "75px",
      "100px",
      "125px",
      "150px",
      "175px",
      "200px",
    ]);

    return {
      sizes,
      symbolSizes,
    };
  },
});
</script>
