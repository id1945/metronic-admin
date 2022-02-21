<template>
  <!--begin::Section-->
  <div class="pt-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5" id="utilities">
      <a href="#utilities"></a>
      Utility Classes
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Use <code>.card-{property}</code> class on other elements to required card
      style properties defined through the SASS variables in
      <code>src/sass/_variables.scss</code> and
      <code>src/sass/_card.scss/</code>.
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      Where <code>property</code> is one of:
      <ul class="pt-3">
        <li class="py-2"><code>p</code> - to set paddings from card</li>
        <li class="py-2">
          <code>px</code> - to set left and right paddings of card
        </li>
        <li class="py-2">
          <code>py</code> - to set top and bottom paddings of card
        </li>
        <li class="py-2">
          <code>card-rounded</code> - to set border radiuses of card
        </li>
        <li class="py-2">
          <code>card-rounded-top</code> - to set top left and top right radiuses
          of card
        </li>
        <li class="py-2">
          <code>card-rounded-bottom</code> - to set bottom left and top right
          radiuses of card
        </li>
      </ul>
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      <div class="row g-5">
        <div class="col-lg-6">
          <div class="card shadow">
            <div class="card-header">
              <h3 class="card-title">Fluid Image</h3>
              <div class="card-toolbar">
                <button type="button" class="btn btn-sm btn-light">
                  Action
                </button>
              </div>
            </div>
            <div class="card-body p-0">
              <div class="card-p">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>

              <img
                class="w-100 card-rounded-bottom"
                alt=""
                src="media/svg/illustrations/bg-4.svg"
              />
            </div>
          </div>
        </div>

        <div class="col-lg-6"></div>
      </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
      <CodeHighlighter lang="html"
        >{{`
        <div class="card shadow">
          <div class="card-header">
            <h3 class="card-title">Fluid Image</h3>
            <div class="card-toolbar">
              <button type="button" class="btn btn-sm btn-light">Action</button>
            </div>
          </div>
          <div class="card-body p-0">
            <div class="card-p">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
            <img
              class="w-100 card-rounded-bottom"
              alt=""
              src="assets/media/svg/illustrations/bg-4.svg"
            />
          </div>
        </div>
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
  name: "utility-classes",
  components: {
    CodeHighlighter,
  },
});
</script>
