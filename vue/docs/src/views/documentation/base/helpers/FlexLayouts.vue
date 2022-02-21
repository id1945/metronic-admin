<template>
  <div class="card">
    <!--begin::Card Body-->
    <div class="card-body p-10 p-lg-15">
      <!--begin::Section-->
      <div class="py-0">
        <!--begin::Heading-->
        <h1 class="anchor fw-bolder mb-5" id="overview">
          <a href="#overview"></a>
          Overview
        </h1>
        <!--end::Heading-->

        <!--begin::Block-->
        <div class="py-5">
          Use responsive-friendly custom flex classes to build nested layouts
          with fixed and fluid columns. The classes are named using the format
          <code>flex-{property}</code> for <code>xs</code> and
          <code>flex-{breakpoint}-{property}</code> for <code>sm</code>,
          <code>md</code>, <code>lg</code>, <code>xl</code>, and
          <code>xxl</code>.
        </div>
        <!--end::Block-->

        <!--begin::Block-->
        <div class="py-5">
          Where <code>property</code> is one of:
          <ul class="pt-3">
            <li class="py-2">
              <code>root</code> - to define the root node of the flex
              layout(usually it's used when the layout is placed as a direct
              child of the body element in order to fully occupy the window
              height)
            </li>
            <li class="py-2">
              <code>column-auto</code> - to set a column with auto height
            </li>
            <li class="py-2">
              <code>column-fluid</code> - to set a column with fluid height
            </li>
            <li class="py-2">
              <code>row-auto</code> - to set a column with auto width
            </li>
            <li class="py-2">
              <code>row-fluid</code> - to set a column with fluid width
            </li>
            <li class="py-2">
              <code>center</code> - to set a column's content vertically and
              horizontally centered
            </li>
          </ul>
        </div>
        <!--end::Block-->

        <!--begin::Block-->
        <div class="py-5">
          <div class="rounded border p-10">
            <div class="d-flex flex-row h-300px">
              <div class="d-flex flex-column flex-row-auto w-200px">
                <div
                  class="d-flex flex-column-auto flex-center h-50px bg-primary"
                >
                  <span class="text-white">Fixed Height</span>
                </div>

                <div class="d-flex flex-column-fluid bg-success flex-center">
                  <span class="text-white">Fluid Height</span>
                </div>
              </div>

              <div class="d-flex flex-column flex-row-fluid">
                <div class="d-flex flex-column-auto h-70px bg-info flex-center">
                  <span class="text-white">Fixed Height</span>
                </div>

                <div class="d-flex flex-row flex-column-fluid">
                  <div class="d-flex flex-row-fluid bg-dark flex-center">
                    <span class="text-white">Fluid Width</span>
                  </div>

                  <div
                    class="d-flex flex-row-auto w-200px bg-warning flex-center"
                  >
                    <span class="text-white">Fixed Width</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--end::Block-->

        <!--begin::Code-->
        <div class="py-5">
          <CodeHighlighter lang="html"
            >{{`
            <div class="d-flex flex-row h-300px">
              <div class="d-flex flex-column flex-row-auto w-200px">
                <div class="d-flex flex-column-auto h-50px bg-primary">
                  <span class="text-white">Fixed Height</span>
                </div>

                <div class="d-flex flex-column-fluid bg-success flex-center">
                  <span class="text-white">Fluid Height</span>
                </div>
              </div>

              <div class="d-flex flex-column flex-row-fluid">
                <div class="d-flex flex-column-auto h-70px bg-info flex-center">
                  <span class="text-white">Fixed Height</span>
                </div>

                <div class="d-flex flex-row flex-column-fluid">
                  <div class="d-flex flex-row-fluid bg-dark flex-center">
                    <span class="text-white">Fluid Width</span>
                  </div>

                  <div
                    class="d-flex flex-row-auto w-200px bg-warning flex-center"
                  >
                    <span class="text-white">Fixed Width</span>
                  </div>
                </div>
              </div>
            </div>
            `}}</CodeHighlighter
          >
        </div>
        <!--end::Code-->
      </div>
      <!--end::Section-->
    </div>
  </div>
  <!--end::Card Body-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";

export default defineComponent({
  name: "flex-layout",
  components: {
    CodeHighlighter,
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Flex Layout", ["Base", "Helpers"]);
    });
  },
});
</script>
