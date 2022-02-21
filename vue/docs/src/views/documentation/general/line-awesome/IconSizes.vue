<template>
  <!--begin::Section-->
  <div class="pt-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-3" id="icon-sizes">
      <a href="#icon-sizes"></a>
      Icon Sizes
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      The font icons can be sized using <code>.fs-{size}</code> class that
      defined with <code>$font-sizes</code> variable in
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
            <code>h{{ i++ }}</code> font size
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
              <i :class="`fs-${item}`" class="las la-tint"></i>
            </div>
            <div class="fw-bold py-2 text-center">.fs-{{ item }}</div>
          </div>
        </template>
      </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
      <CodeHighlighter lang="html"
        >{{`<i class="las la-tint fs-5x"></i>
        <i class="las la-tint fs-4x"></i>
        <i class="las la-tint fs-3x"></i>
        <i class="las la-tint fs-2tx"></i>
        <i class="las la-tint fs-2hx"></i>
        <i class="las la-tint fs-2qx"></i>
        <i class="las la-tint fs-2x"></i>
        <i class="las la-tint fs-1"></i>
        <i class="las la-tint fs-2"></i>
        <i class="las la-tint fs-3"></i>
        <i class="las la-tint fs-5"></i>
        <i class="las la-tint fs-6"></i>`}}</CodeHighlighter
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

    return {
      sizes,
    };
  },
});
</script>
