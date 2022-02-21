<template>
  <!--begin::Section-->
  <div class="pt-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5" id="icons">
      <a href="#icons"></a>
      Icons
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Use
      <a href="#" class="fw-bold">Duotune Svg Icons</a>&nbsp;in conbination with
      buttons as shown below:
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      <div class="rounded border p-10">
        <template v-for="(item, i) in colors" :key="i">
          <a href="#" :class="`btn-${item}`" class="btn me-2 mb-2">
            <span class="svg-icon svg-icon-2">
              <inline-svg src="media/icons/duotune/graphs/gra004.svg" /> </span
            >Caption
          </a>
        </template>

        <div class="separator my-10"></div>

        <template v-for="(item, i) in colors" :key="i">
          <a href="#" :class="`btn-${item}`" class="btn btn-icon me-2 mb-2">
            <span class="svg-icon svg-icon-2">
              <inline-svg src="media/icons/duotune/graphs/gra004.svg" />
            </span>
          </a>
        </template>
      </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="pt-5 pb-20">
      <CodeHighlighter lang="html"
        >{{`<a href="#" class="btn btn-primary"
          ><span class="svg-icon svg-icon-2"><svg>...</svg></span>Caption</a
        >
        <a href="#" class="btn btn-success"
          ><span class="svg-icon svg-icon-2"><svg>...</svg></span>Caption</a
        >
        <a href="#" class="btn btn-info"
          ><span class="svg-icon svg-icon-2"><svg>...</svg></span>Caption</a
        >
        <a href="#" class="btn btn-warning"
          ><span class="svg-icon svg-icon-2"><svg>...</svg></span>Caption</a
        >
        <a href="#" class="btn btn-danger"
          ><span class="svg-icon svg-icon-2"><svg>...</svg></span>Caption</a
        >
        <a href="#" class="btn btn-dark"
          ><span class="svg-icon svg-icon-2"><svg>...</svg></span>Caption</a
        >

        <a href="#" class="btn btn-icon btn-primary"
          ><span class="svg-icon svg-icon-2"><svg>...</svg></span></a
        >
        <a href="#" class="btn btn-icon btn-success"
          ><span class="svg-icon svg-icon-2"><svg>...</svg></span></a
        >
        <a href="#" class="btn btn-icon btn-info"
          ><span class="svg-icon svg-icon-2"><svg>...</svg></span></a
        >
        <a href="#" class="btn btn-icon btn-warning"
          ><span class="svg-icon svg-icon-2"><svg>...</svg></span></a
        >
        <a href="#" class="btn btn-icon btn-danger"
          ><span class="svg-icon svg-icon-2"><svg>...</svg></span></a
        >
        <a href="#" class="btn btn-icon btn-dark"
          ><span class="svg-icon svg-icon-2"><svg>...</svg></span></a
        >`}}</CodeHighlighter
      >
    </div>
    <!--end::Code-->

    <!--begin::Block-->
    <div class="py-5">
      Use
      <a href="#" class="fw-bold">Font Awesome Icons</a>&nbsp;in conbination
      with buttons as shown below:
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      <div class="rounded border p-10">
        <template v-for="(item, i) in colors" :key="i">
          <a href="#" :class="`btn-${item}`" class="btn me-2 mb-2">
            <i class="fas fa-envelope-open-text fs-4 me-2"></i> Caption
          </a>
        </template>

        <div class="separator my-10"></div>

        <template v-for="(item, i) in colors" :key="i">
          <a href="#" :class="`btn-${item}`" class="btn btn-icon me-2 mb-2">
            <i class="fas fa-envelope-open-text fs-4"></i>
          </a>
        </template>
      </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="pt-5 pb-20">
      <CodeHighlighter lang="html"
        >{{`<a href="#" class="btn btn-primary"
          ><i class="fas fa-envelope-open-text fs-4 me-2"></i> Caption</a
        >
        <a href="#" class="btn btn-success"
          ><i class="fas fa-envelope-open-text fs-4 me-2"></i> Caption</a
        >
        <a href="#" class="btn btn-info"
          ><i class="fas fa-envelope-open-text fs-4 me-2"></i> Caption</a
        >
        <a href="#" class="btn btn-warning"
          ><i class="fas fa-envelope-open-text fs-4 me-2"></i> Caption</a
        >
        <a href="#" class="btn btn-danger"
          ><i class="fas fa-envelope-open-text fs-4 me-2"></i> Caption</a
        >
        <a href="#" class="btn btn-dark"
          ><i class="fas fa-envelope-open-text fs-4 me-2"></i> Caption</a
        >

        <a href="#" class="btn btn-icon btn-primary"
          ><i class="fas fa-envelope-open-text fs-4 me-2"></i
        ></a>
        <a href="#" class="btn btn-icon btn-success"
          ><i class="fas fa-envelope-open-text fs-4 me-2"></i
        ></a>
        <a href="#" class="btn btn-icon btn-info"
          ><i class="fas fa-envelope-open-text fs-4 me-2"></i
        ></a>
        <a href="#" class="btn btn-icon btn-warning"
          ><i class="fas fa-envelope-open-text fs-4 me-2"></i
        ></a>
        <a href="#" class="btn btn-icon btn-danger"
          ><i class="fas fa-envelope-open-text fs-4 me-2"></i
        ></a>
        <a href="#" class="btn btn-icon btn-dark"
          ><i class="fas fa-envelope-open-text fs-4 me-2"></i></a
        >`}}</CodeHighlighter
      >
    </div>
    <!--end::Code-->

    <!--begin::Block-->
    <div class="py-5">
      Use
      <a href="#" class="fw-bold">Line Awesome Icons</a>&nbsp;in conbination
      with buttons as shown below:
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      <div class="rounded border p-10">
        <template v-for="(item, i) in colors" :key="i">
          <a href="#" :class="`btn-${item}`" class="btn me-2 mb-2">
            <i class="las la-wallet fs-2"></i> Caption
          </a>
        </template>

        <div class="separator my-10"></div>

        <template v-for="(item, i) in colors" :key="i">
          <a href="#" :class="`btn-${item}`" class="btn btn-icon me-2 mb-2">
            <i class="las la-wallet fs-2"></i>
          </a>
        </template>
      </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
      <CodeHighlighter lang="html"
        >{{`<a href="#" class="btn btn-icon btn-primary"
          ><i class="las la-wallet fs-2 me-2"></i> Caption</a
        >
        <a href="#" class="btn btn-icon btn-success"
          ><i class="las la-wallet fs-2 me-2"></i> Caption</a
        >
        <a href="#" class="btn btn-icon btn-info"
          ><i class="las la-wallet fs-2 me-2"></i> Caption</a
        >
        <a href="#" class="btn btn-icon btn-warning"
          ><i class="las la-wallet fs-2 me-2"></i> Caption</a
        >
        <a href="#" class="btn btn-icon btn-danger"
          ><i class="las la-wallet fs-2 me-2"></i> Caption</a
        >
        <a href="#" class="btn btn-icon btn-dark"
          ><i class="las la-wallet fs-2 me-2"></i> Caption</a
        >

        <a href="#" class="btn btn-icon btn-primary"
          ><i class="las la-wallet fs-2 me-2"></i
        ></a>
        <a href="#" class="btn btn-icon btn-success"
          ><i class="las la-wallet fs-3 me-2"></i
        ></a>
        <a href="#" class="btn btn-icon btn-info"
          ><i class="las la-wallet fs-3 me-2"></i
        ></a>
        <a href="#" class="btn btn-icon btn-warning"
          ><i class="las la-wallet fs-3 me-2"></i
        ></a>
        <a href="#" class="btn btn-icon btn-danger"
          ><i class="las la-wallet fs-3 me-2"></i
        ></a>
        <a href="#" class="btn btn-icon btn-dark"
          ><i class="las la-wallet fs-3 me-2"></i></a
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
  name: "overview",
  components: {
    CodeHighlighter,
  },
  setup() {
    const colors = ["primary", "success", "info", "warning", "danger", "dark"];

    return {
      colors,
    };
  },
});
</script>
