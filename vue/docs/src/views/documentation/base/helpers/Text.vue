<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Card Body-->
    <div class="card-body p-10 p-lg-15">
      <!--begin::Section-->
      <div class="pb-10">
        <!--begin::Heading-->
        <h1 class="anchor fw-bolder mb-3" id="text-colors">
          <a href="#text-colors"></a>
          Text Colors
        </h1>
        <!--end::Heading-->

        <!--begin::Block-->
        <div class="py-5">
          Use extended text helper classes defined in
          <code>sass/helpers/_text.scss</code> for more advance use cases.
          Colorize text with color utilities as shown
        </div>
        <!--end::Block-->

        <!--begin::Block-->
        <div class="py-5">
          <div class="rounded border p-10">
            <template v-for="(item, i) in colors.textColors" :key="i">
              <p
                :class="[
                  `text-${item}`,
                  item === 'white' && `bg-dark`,
                  item === 'light' && `bg-dark`,
                  item === 'gray-100' && `bg-dark`,
                ]"
                class="p-3 fw-bold fw-6"
              >
                .text-{{ item }}
              </p>
            </template>
          </div>
        </div>
        <!--end::Block-->

        <!--begin::Code-->
        <div class="py-5">
          <CodeHighlighter lang="html"
            >{{`
            <div class="text-white"></div>
            <div class="text-primary"></div>
            <div class="text-secondary"></div>
            <div class="text-light"></div>
            <div class="text-success"></div>
            <div class="text-info"></div>
            <div class="text-warning"></div>
            <div class="text-danger"></div>
            <div class="text-dark"></div>
            <div class="text-muted"></div>
            <div class="text-gray-100"></div>
            <div class="text-gray-200"></div>
            <div class="text-gray-300"></div>
            <div class="text-gray-400"></div>
            <div class="text-gray-500"></div>
            <div class="text-gray-600"></div>
            <div class="text-gray-700"></div>
            <div class="text-gray-800"></div>
            <div class="text-gray-900"></div>
            `}}</CodeHighlighter
          >
        </div>
        <!--end::Code-->
      </div>
      <!--end::Section-->

      <!--begin::Section-->
      <div class="py-10">
        <!--begin::Heading-->
        <h1 class="anchor fw-bolder mb-3" id="light-colors">
          <a href="#light-colors"></a>
          Light Colors
        </h1>
        <!--end::Heading-->

        <!--begin::Block-->
        <div class="py-5">
          Use <code>.text-light-{color}</code> class to set an element's light
          color defined with <code>$theme-light-colors</code> in
          <code>sass/_variables.scss</code>:
        </div>
        <!--end::Block-->

        <!--begin::Block-->
        <div class="py-5">
          <div class="rounded border p-10">
            <template v-for="(item, i) in colors.lightColors" :key="i">
              <p
                :class="`text-light-${item} bg-${item}`"
                class="p-3 fw-bold fw-6"
              >
                .text-light-{{ item }}
              </p>
            </template>
          </div>
        </div>
        <!--end::Block-->

        <!--begin::Code-->
        <div class="py-5">
          <CodeHighlighter lang="html"
            >{{`
            <div class="text-light-primary bg-primary"></div>
            <div class="text-light-success bg-success"></div>
            <div class="text-light-info bg-info"></div>
            <div class="text-light-warning bg-warning"></div>
            <div class="text-light-danger bg-danger"></div>
            <div class="text-light-dark bg-dark"></div>
            `}}</CodeHighlighter
          >
        </div>
        <!--end::Code-->
      </div>
      <!--end::Section-->

      <!--begin::Section-->
      <div class="pt-10">
        <!--begin::Heading-->
        <h1 class="anchor fw-bolder mb-3" id="inverse-colors">
          <a href="#inverse-colors"></a>
          Inverse Colors
        </h1>
        <!--end::Heading-->

        <!--begin::Block-->
        <div class="py-5">
          Use <code>.text-inverse-{color}</code> class to set an element's
          inverse color defined with <code>$theme-inverse-colors</code> in
          <code>sass/_variables.scss</code>:
        </div>
        <!--end::Block-->

        <!--begin::Block-->
        <div class="py-5">
          <div class="rounded border p-10">
            <template v-for="(item, i) in colors.inverseColors" :key="i">
              <p
                :class="`text-inverse-${item} bg-${item}`"
                class="p-3 fw-bold fw-6"
              >
                .text-inverse-{{ item }}
              </p>
            </template>
          </div>
        </div>
        <!--end::Block-->

        <!--begin::Code-->
        <div class="py-5">
          <CodeHighlighter lang="html"
            >{{`
            <div class="text-inverse-white bg-white"></div>
            <div class="text-inverse-primary bg-primary"></div>
            <div class="text-inverse-secondary bg-secondary"></div>
            <div class="text-inverse-light bg-light"></div>
            <div class="text-inverse-success bg-success"></div>
            <div class="text-inverse-info bg-info"></div>
            <div class="text-inverse-warning bg-warning"></div>
            <div class="text-inverse-danger bg-danger"></div>
            <div class="text-inverse-dark bg-dark"></div>
            `}}</CodeHighlighter
          >
        </div>
        <!--end::Code-->
      </div>
      <!--end::Section-->

      <!--begin::Section-->
      <div class="pt-10">
        <!--begin::Heading-->
        <h1 class="anchor fw-bolder mb-3" id="inverse-hover-colors">
          <a href="#inverse-hover-colors"></a>
          Inverse Hover Colors
        </h1>
        <!--end::Heading-->

        <!--begin::Block-->
        <div class="py-5">
          Use <code>.text-hover-inverse-{color}</code> class to set an element's
          hover inverse color defined with <code>$theme-inverse-colors</code> in
          <code>sass/_variables.scss</code>:
        </div>
        <!--end::Block-->

        <!--begin::Block-->
        <div class="py-5">
          <div class="rounded border p-10">
            <template v-for="(item, i) in colors.inverseColors" :key="i">
              <p
                :class="`text-hover-inverse-${item} bg-hover-${item}`"
                class="p-3 fw-bold fw-6"
              >
                .text-hover-inverse-{{ item }}
              </p>
            </template>
          </div>
        </div>
        <!--end::Block-->

        <!--begin::Code-->
        <div class="py-5">
          <CodeHighlighter lang="html"
            >{{`
            <div class="text-hover-inverse-white bg-hover-white"></div>
            <div class="text-hover-inverse-primary bg-hover-primary"></div>
            <div class="text-hover-inverse-secondary bg-hover-secondary"></div>
            <div class="text-hover-inverse-light bg-hover-light"></div>
            <div class="text-hover-inverse-success bg-hover-success"></div>
            <div class="text-hover-inverse-info bg-hover-info"></div>
            <div class="text-hover-inverse-warning bg-hover-warning"></div>
            <div class="text-hover-inverse-danger bg-hover-danger"></div>
            <div class="text-hover-inverse-dark bg-hover-dark"></div>
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
import { defineComponent, onMounted, ref } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";

export default defineComponent({
  name: "kt-text",
  components: {
    CodeHighlighter,
  },
  setup() {
    const colors = ref({
      textColors: [
        "white",
        "primary",
        "secondary",
        "light",
        "success",
        "info",
        "warning",
        "danger",
        "dark",
        "muted",
        "gray-100",
        "gray-200",
        "gray-300",
        "gray-400",
        "gray-500",
        "gray-600",
        "gray-700",
        "gray-800",
        "gray-900",
      ],
      lightColors: ["primary", "success", "info", "warning", "danger", "dark"],
      inverseColors: [
        "white",
        "primary",
        "secondary",
        "light",
        "success",
        "info",
        "warning",
        "danger",
        "dark",
      ],
    });

    onMounted(() => {
      setCurrentPageBreadcrumbs("Text", ["Base", "Helpers"]);
    });

    return {
      colors,
    };
  },
});
</script>
