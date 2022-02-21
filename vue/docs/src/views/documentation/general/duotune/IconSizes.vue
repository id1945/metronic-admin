<template>
  <!--begin::Section-->
  <div class="py-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-3" id="icon-sizes">
      <a href="#icon-sizes"></a>
      Icon Sizes
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      The inline icons can be sized using <code>.svg-icon-{size}</code> class
      that defined with <code>$font-sizes</code> variable in
      <code>sass/_variables.scss</code>
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      Where <code>size</code> is one of:
      <ul class="pt-3">
        <template v-for="i in 7" :key="i">
          <li class="py-2">
            <code>{{ i }}</code> - sets icon size that equals to
            <code>&lt;h{{ i++ }}&gt;</code> font size
          </li>
        </template>

        <li class="py-2">
          <code>7</code> - sets icon size that equals to
          <code>0.95 of $font-size-base</code> where
          <code>$font-size-base: 1rem</code>
        </li>
        <li class="py-2">
          <code>8</code> - sets icon size that equals to
          <code>0.85 of $font-size-base</code> where
          <code>$font-size-base: 1rem</code>
        </li>
        <li class="py-2">
          <code>9</code> - sets icon size that equals to
          <code>0.75 of $font-size-base</code> where
          <code>$font-size-base: 1rem</code>
        </li>
        <li class="py-2">
          <code>10</code> - sets icon size that equals to
          <code>0.5 of $font-size-base</code> where
          <code>$font-size-base: 1rem</code>
        </li>

        <li class="py-2">
          <code>base</code> - sets icon size that equals to
          <code>$font-size-base</code> where <code>$font-size-base: 1rem</code>
        </li>
        <li class="py-2">
          <code>fluid</code> - sets icon size that equals to <code>100%</code>
        </li>

        <template v-for="i in [2, 3, 4, 5]" :key="i">
          <li class="py-2">
            <code>{{ i }}x</code> - sets icon size that equals to
            <code>{{ i }} of $font-size-base</code> where
            <code>$font-size-base: 1rem</code>
          </li>
          <li class="py-2">
            <code>{{ i }}qx</code> - sets icon size that equals to
            <code>{{ i }}.25 of $font-size-base</code> where
            <code>$font-size-base: 1rem</code>
          </li>
          <li class="py-2">
            <code>{{ i }}hx</code> - sets icon size that equals to
            <code>{{ i }}.5 of $font-size-base</code> where
            <code>$font-size-base: 1rem</code>
          </li>
          <li class="py-2">
            <code>{{ i }}tx</code> - sets icon size that equals to
            <code>{{ i }}.75 of $font-size-base</code> where
            <code>$font-size-base: 1rem</code>
          </li>
        </template>
      </ul>
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      <div class="rounded border d-flex flex-wrap p-10">
        <template v-for="(item, i) in sizes" :key="i">
          <div class="d-flex flex-column h-100px w-100px me-10 mb-5">
            <div class="d-flex flex-center flex-grow-1">
              <span :class="`svg-${item}`" class="svg-icon">
                <inline-svg src="media/icons/duotune/art/art007.svg" />
              </span>
            </div>
            <div class="fw-bold py-2 text-center">.icon-size-{{ item }}</div>
          </div>
        </template>
      </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="pt-5 pb-15">
      <CodeHighlighter lang="html"
        >{{`<span class="svg-icon svg-icon-5x"><svg>...</svg></span>
        <span class="svg-icon svg-icon-4x"><svg>...</svg></span>
        <span class="svg-icon svg-icon-3x"><svg>...</svg></span>
        <span class="svg-icon svg-icon-2tx"><svg>...</svg></span>
        <span class="svg-icon svg-icon-2hx"><svg>...</svg></span>
        <span class="svg-icon svg-icon-2qx"><svg>...</svg></span>
        <span class="svg-icon svg-icon-2x"><svg>...</svg></span>
        <span class="svg-icon svg-icon-1"><svg>...</svg></span>
        <span class="svg-icon svg-icon-2"><svg>...</svg></span>
        <span class="svg-icon svg-icon-3"><svg>...</svg></span>
        <span class="svg-icon svg-icon-5"><svg>...</svg></span>
        <span class="svg-icon svg-icon-6"><svg>...</svg></span
        >`}}</CodeHighlighter
      >
    </div>
    <!--end::Code-->

    <!--begin::Block-->
    <div class="py-5">
      Use
      <a href="#" class="fw-bolder" target="_blank">Height & Width</a>&nbsp;
      classes <code>.w-{size} .h-{size}</code>
      to set an svg element's height and width explicitly:
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      <div class="rounded border d-flex flex-wrap p-10">
        <template v-for="(item, i) in sizes2" :key="i">
          <div class="d-flex flex-column me-10 mb-5">
            <div class="d-flex flex-center flex-grow-1">
              <span :class="[`h-${item}`, `w-${item}`]" class="svg-icon"></span>
            </div>
            <div class="fw-bold py-2 text-center">
              .h-{{ item }}&nbsp;.w-{{ item }}
            </div>
          </div>
        </template>
      </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="pt-5 pb-15">
      <CodeHighlighter lang="html"
        >{{`<span class="svg-icon"><svg class="h-20px w-20px">...</svg></span>
        <span class="svg-icon"><svg class="h-30px w-30px">...</svg></span>
        <span class="svg-icon"><svg class="h-40px w-40px">...</svg></span>
        <span class="svg-icon"><svg class="h-50px w-50px">...</svg></span>
        <span class="svg-icon"><svg class="h-75px w-75px">...</svg></span>
        <span class="svg-icon"><svg class="h-100px w-100px">...</svg></span
        >`}}</CodeHighlighter
      >
    </div>
    <!--end::Code-->
  </div>
  <!--end::Section-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";

export default defineComponent({
  name: "icon-sizes",
  components: {
    CodeHighlighter,
  },
  setup() {
    const sizes = [
      "5x",
      "4x",
      "3x",
      "2tx",
      "2hx",
      "2qx",
      "2x",
      "1",
      "2",
      "3",
      "5",
      "6",
    ];

    const sizes2 = [20, 30, 50, 75, 100];

    return {
      sizes,
      sizes2,
    };
  },
});
</script>
