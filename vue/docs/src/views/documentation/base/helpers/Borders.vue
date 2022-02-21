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
        <div class="py-5">
          <b>{{ themeName }}</b> extends
          <a
            href="https://getbootstrap.com/docs/5.0/utilities/borders/"
            class="fw-bold"
            >Bootstrap Borders</a
          >; in <code>src/sass/helpers/_borders.scss</code> to provide
          additional border utility classes to cover its own design system.
        </div>
        <!--end::Block-->
      </div>
      <!--end::Section-->

      <!--begin::Section-->
      <div class="py-10">
        <!--begin::Heading-->
        <h1 class="anchor fw-bolder mb-3" id="border-styles">
          <a href="#border-styles"></a>
          Border Styles
        </h1>
        <!--end::Heading-->

        <!--begin::Block-->
        <div class="py-5">
          Use <code>.border-dashed</code> or <code>.border-dotted</code> classes
          to set an element's border style.
        </div>
        <!--end::Block-->

        <!--begin::Block-->
        <div class="py-5">
          <div class="rounded border p-10">
            <div class="d-flex flex-wrap align-items-center">
              <div
                class="
                  border
                  w-150px
                  h-150px
                  d-flex
                  flex-center
                  me-5
                  mb-5
                  fw-bold
                "
              >
                default style
              </div>

              <div
                class="
                  border border-dashed
                  w-150px
                  h-150px
                  d-flex
                  flex-center
                  me-5
                  mb-5
                  fw-bold
                "
              >
                .border-dashed
              </div>

              <div
                class="
                  border border-dotted
                  w-150px
                  h-150px
                  d-flex
                  flex-center
                  me-5
                  mb-5
                  fw-bold
                "
              >
                .border-dotted
              </div>
            </div>
          </div>
        </div>
        <!--end::Block-->

        <!--begin::Code-->
        <div class="py-5">
          <CodeHighlighter lang="html"
            >{{`
            <div class="border">default style</div>

            <div class="border border-dashed">.border-dashed</div>

            <div class="border border-dotted">.border-dotted</div>
            `}}</CodeHighlighter
          >
        </div>
        <!--end::Code-->
      </div>
      <!--end::Section-->

      <!--begin::Section-->
      <div class="py-10">
        <!--begin::Heading-->
        <h1 class="anchor fw-bolder mb-3" id="border-states">
          <a href="#border-states"></a>
          Border States
        </h1>
        <!--end::Heading-->

        <!--begin::Block-->
        <div class="py-5">
          Use <code>.border-hover</code> to display an element's border on hover
          and <code>.border-active</code> to enable the border when
          <code>.active</code> class is applied.
        </div>
        <!--end::Block-->

        <!--begin::Block-->
        <div class="py-5">
          <div class="rounded border p-10">
            <div class="d-flex flex-wrap align-items-center">
              <div
                class="
                  border border-primary border-hover
                  w-150px
                  h-150px
                  d-flex
                  flex-center
                  me-5
                  mb-5
                  fw-bold
                "
              >
                .border-hover
              </div>

              <div
                class="
                  border border-primary border-active
                  active
                  w-150px
                  h-150px
                  d-flex
                  flex-center
                  me-5
                  mb-5
                  fw-bold
                "
              >
                .border-active<br />.active
              </div>
            </div>
          </div>
        </div>
        <!--end::Block-->

        <!--begin::Code-->
        <div class="py-5">
          <CodeHighlighter lang="html"
            >{{`
            <div class="border border-primary border-hover">.border-hover</div>

            <div class="border border-primary border-active active">
              .border-dashed
            </div>
            `}}</CodeHighlighter
          >
        </div>
        <!--end::Code-->
      </div>
      <!--end::Section-->

      <!--begin::Section-->
      <div class="pt-10">
        <!--begin::Heading-->
        <h1 class="anchor fw-bolder mb-3" id="border-gray-colors">
          <a href="#border-gray-colors"></a>
          Border Gray Colors
        </h1>
        <!--end::Heading-->

        <!--begin::Block-->
        <div class="py-5">
          Use
          <code
            >.border-gray-{100, 200, 300, 400, 500, 600, 700, 800, 900}</code
          >
          to set an element's border color.
        </div>
        <!--end::Block-->

        <!--begin::Block-->
        <div class="py-5">
          <div class="rounded border p-10">
            <div class="d-flex flex-wrap align-items-center">
              <template v-for="(item, i) in gray" :key="i">
                <div
                  :class="`border-${item}`"
                  class="
                    w-100px
                    h-100px
                    d-flex
                    flex-center
                    p-3
                    me-5
                    mb-5
                    fw-bold
                    border
                  "
                >
                  .border-{{ item }}
                </div>
              </template>
            </div>
          </div>
        </div>
        <!--end::Block-->

        <!--begin::Code-->
        <div class="pt-5">
          <CodeHighlighter lang="html"
            >{{`
            <div class="border border-gray-100"></div>
            <div class="border border-gray-200"></div>
            <div class="border border-gray-300"></div>
            <div class="border border-gray-400"></div>
            <div class="border border-gray-500"></div>
            <div class="border border-gray-600"></div>
            <div class="border border-gray-700"></div>
            <div class="border border-gray-800"></div>
            <div class="border border-gray-900"></div>
            `}}</CodeHighlighter
          >
        </div>
        <!--end::Code-->
      </div>
      <!--end::Section-->
    </div>
    <!--end::Card Body-->
  </div>
  <!--end::Card-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import { themeName } from "@/core/helpers/documentation";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";

export default defineComponent({
  name: "borders",
  components: {
    CodeHighlighter,
  },
  setup() {
    const gray = [
      "gray-100",
      "gray-200",
      "gray-300",
      "gray-400",
      "gray-500",
      "gray-600",
      "gray-700",
      "gray-800",
      "gray-900",
    ];

    onMounted(() => {
      setCurrentPageBreadcrumbs("Borders", ["Base", "Helpers"]);
    });

    return {
      themeName,
      gray,
    };
  },
});
</script>
