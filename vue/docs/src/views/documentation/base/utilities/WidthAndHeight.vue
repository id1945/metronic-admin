<template>
  <!--begin::Section-->
  <div class="py-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5" id="width-and-height">
      <a href="#width-and-height"></a>
      Width & Height
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Assign responsive-friendly <code>height</code>, <code>min-height</code>,
      <code>max-height</code>, <code>width</code> , <code>min-with</code> and
      <code>max-width</code> values to an element with shorthand classes. The
      classes are named using the format <code>{property}-{size}</code> for
      <code>xs</code> and <code>{property}-{breakpoint}-{size}</code> for
      <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>, and
      <code>xxl</code>.
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      Where <code>property</code> is one of:
      <ul class="pt-3">
        <li class="py-2"><code>h</code> - for classes that set height</li>
        <li class="py-2"><code>mh</code> - for classes that set max height</li>
        <li class="py-2">
          <code>min-h</code> - for classes that set min height
        </li>
        <li class="py-2"><code>w</code> - for classes that set width</li>
        <li class="py-2"><code>mw</code> - for classes that set max width</li>
        <li class="py-2">
          <code>min-w</code> - for classes that set min width
        </li>
      </ul>
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      Where <code>size</code> defined with <code>$custom-sizes</code> variable
      in <code>sass/_variables.scss</code> is one of-
      <ul class="pt-3">
        <li class="py-2"><code>25</code> - for 25%</li>
        <li class="py-2"><code>50</code> - for 50%</li>
        <li class="py-2"><code>75</code> - for 75%</li>
        <li class="py-2"><code>100</code> - for 100%</li>
        <li class="py-2"><code>auto</code> - for auto</li>
        <li class="py-2"><code>1px</code></li>
        <li class="py-2"><code>2px</code></li>
        <li class="py-2"><code>3px</code></li>
        <li class="py-2"><code>4px</code></li>
        <li class="py-2"><code>5px</code></li>
        <li class="py-2"><code>6px</code></li>
        <li class="py-2"><code>7px</code></li>
        <li class="py-2"><code>8px</code></li>
        <li class="py-2"><code>9px</code></li>
        <li class="py-2"><code>10px</code></li>
        <li class="py-2"><code>15px</code></li>
        <li class="py-2"><code>20px</code></li>
        <li class="py-2"><code>25px</code></li>
        <li class="py-2"><code>30px</code></li>
        <li class="py-2"><code>35px</code></li>
        <li class="py-2"><code>40px</code></li>
        <li class="py-2"><code>45px</code></li>
        <li class="py-2"><code>50px</code></li>
        <li class="py-2"><code>55px</code></li>
        <li class="py-2"><code>60px</code></li>
        <li class="py-2"><code>65px</code></li>
        <li class="py-2"><code>70px</code></li>
        <li class="py-2"><code>75px</code></li>
        <li class="py-2"><code>80px</code></li>
        <li class="py-2"><code>85px</code></li>
        <li class="py-2"><code>90px</code></li>
        <li class="py-2"><code>95px</code></li>
        <li class="py-2"><code>100px</code></li>
        <li class="py-2"><code>125px</code></li>
        <li class="py-2"><code>150px</code></li>
        <li class="py-2"><code>175px</code></li>
        <li class="py-2"><code>200px</code></li>
        <li class="py-2"><code>225px</code></li>
        <li class="py-2"><code>250px</code></li>
        <li class="py-2"><code>275px</code></li>
        <li class="py-2"><code>300px</code></li>
        <li class="py-2"><code>325px</code></li>
        <li class="py-2"><code>350px</code></li>
        <li class="py-2"><code>375px</code></li>
        <li class="py-2"><code>400px</code></li>
        <li class="py-2"><code>425px</code></li>
        <li class="py-2"><code>450px</code></li>
        <li class="py-2"><code>475px</code></li>
        <li class="py-2"><code>500px</code></li>
        <li class="py-2"><code>550px</code></li>
        <li class="py-2"><code>600px</code></li>
        <li class="py-2"><code>650px</code></li>
        <li class="py-2"><code>700px</code></li>
        <li class="py-2"><code>750px</code></li>
        <li class="py-2"><code>800px</code></li>
        <li class="py-2"><code>850px</code></li>
        <li class="py-2"><code>900px</code></li>
        <li class="py-2"><code>950px</code></li>
        <li class="py-2"><code>1000px</code></li>
      </ul>
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      <div class="rounded border p-10">
        <template> </template>
        <div class="d-flex flex-wrap align-items-center">
          <template v-for="(value, i) in widthAndHeightValues" :key="i">
            <div
              :class="`w-${value}px h-${value}px`"
              class="d-flex flex-column flex-center me-5 mb-5 bg-light fw-bold"
            >
              w-{{ value }}px<br />
              h-{{ value }}px
            </div>
          </template>
        </div>

        <div class="separator border-solid mt-10 mb-12"></div>

        <div class="d-flex flex-wrap align-items-center">
          <template v-for="(value, i) in widthAndHeightValues" :key="i">
            <div
              :class="`min-w-${value}px min-h-${value}px mw-${value}px mh-${value}px`"
              class="d-flex flex-column flex-center me-5 mb-5 bg-light fw-bold"
            >
              min-w-{{ value }}px<br />
              min-h-{{ value }}px<br />
              mw-{{ value }}px<br />
              mh-{{ value }}px
            </div>
          </template>
        </div>
      </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
      <CodeHighlighter lang="html"
        >{{`
        <div class="w-100px h-100px"></div>
        <div class="w-150px h-150px"></div>
        <div class="w-200px h-200px"></div>
        <div class="w-250px h-250px"></div>
        <div class="min-w-100px min-h-100px mw-100px mh-100px"></div>
        <div class="min-w-150px min-h-150px mw-150px mh-150px"></div>
        <div class="min-w-200px min-h-200px mw-200px mh-200px"></div>
        <div class="min-w-250px min-h-250px mw-250px mh-250px"></div>
        `}}</CodeHighlighter
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
  name: "width-and-height",
  components: {
    CodeHighlighter,
  },
  setup() {
    const widthAndHeightValues = [100, 150, 200, 250];

    return {
      widthAndHeightValues,
    };
  },
});
</script>
