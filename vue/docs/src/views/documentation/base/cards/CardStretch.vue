<template>
  <!--begin::Section-->
  <div class="py-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5" id="stretch">
      <a href="#stretch"></a>
      Card Stretch
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      To have same height cards within <a href="" class="">Bootstrap</a> Grid
      use <code>.card-{mode}}</code> or responsive
      <code>.card-{breakpoint}-{mode}}</code> for <code>sm</code>,
      <code>md</code>, <code>lg</code>, <code>xl</code>, and <code>xxl</code>.
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      Where <code>mode</code> is one of:
      <ul class="pt-3">
        <li class="py-2">
          <code>stretch</code> - for setting 100% stretch height
        </li>
        <li class="py-2">
          <code>stretch-75</code> - for setting 75% stretch height
        </li>
        <li class="py-2">
          <code>stretch-50</code> - for setting 50% stretch height
        </li>
        <li class="py-2">
          <code>stretch-33</code> - for setting 33.333% stretch height
        </li>
        <li class="py-2">
          <code>stretch-25</code> - for setting 25% stretch height
        </li>
      </ul>
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      <div class="row g-5">
        <div class="col-lg-4">
          <div class="card card-stretch shadow mb-5">
            <div class="card-header">
              <h3 class="card-title">Height 100%</h3>
            </div>
            <div class="card-body">Lorem Ipsum is simply dummy text</div>
            <div class="card-footer">Footer</div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="card card-stretch-50 shadow mb-5">
            <div class="card-header">
              <h3 class="card-title">Height 50%</h3>
            </div>
            <div class="card-body">Lorem Ipsum is simply dummy text</div>
            <div class="card-footer">Footer</div>
          </div>

          <div class="card card-stretch-50 shadow mb-5">
            <div class="card-header">
              <h3 class="card-title">Height 50%</h3>
            </div>
            <div class="card-body">Lorem Ipsum is simply dummy text</div>
            <div class="card-footer">Footer</div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="card card-stretch-33 shadow mb-5">
            <div class="card-header">
              <h3 class="card-title">Height 33.333%</h3>
            </div>
            <div class="card-body">Lorem Ipsum is simply dummy text</div>
            <div class="card-footer">Footer</div>
          </div>

          <div class="card card-stretch-33 shadow mb-5">
            <div class="card-header">
              <h3 class="card-title">Height 33.333%</h3>
            </div>
            <div class="card-body">Lorem Ipsum is simply dummy text</div>
            <div class="card-footer">Footer</div>
          </div>

          <div class="card card-stretch-33 shadow mb-5">
            <div class="card-header">
              <h3 class="card-title">Height 33.333%</h3>
            </div>
            <div class="card-body">Lorem Ipsum is simply dummy text</div>
            <div class="card-footer">Footer</div>
          </div>
        </div>
      </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
      <CodeHighlighter :fieldHeight="500" lang="html"
        >{{`
        <div class="row g-5">
          <div class="col-lg-4">
            <div class="card card-stretch shadow mb-5">
              <div class="card-header">
                <h3 class="card-title">Height 100%</h3>
              </div>
              <div class="card-body">Lorem Ipsum is simply dummy text</div>
              <div class="card-footer">Footer</div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="card card-stretch-50 shadow mb-5">
              <div class="card-header">
                <h3 class="card-title">Height 100%</h3>
              </div>
              <div class="card-body">Lorem Ipsum is simply dummy text</div>
              <div class="card-footer">Footer</div>
            </div>

            <div class="card card-stretch-50 shadow mb-5">
              <div class="card-header">
                <h3 class="card-title">Height 100%</h3>
              </div>
              <div class="card-body">Lorem Ipsum is simply dummy text</div>
              <div class="card-footer">Footer</div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="card card-stretch-33 shadow mb-5">
              <div class="card-header">
                <h3 class="card-title">Height 33.333%</h3>
              </div>
              <div class="card-body">Lorem Ipsum is simply dummy text</div>
              <div class="card-footer">Footer</div>
            </div>

            <div class="card card-stretch-33 shadow mb-5">
              <div class="card-header">
                <h3 class="card-title">Height 33.333%</h3>
              </div>
              <div class="card-body">Lorem Ipsum is simply dummy text</div>
              <div class="card-footer">Footer</div>
            </div>

            <div class="card card-stretch-33 shadow mb-5">
              <div class="card-header">
                <h3 class="card-title">Height 33.333%</h3>
              </div>
              <div class="card-body">Lorem Ipsum is simply dummy text</div>
              <div class="card-footer">Footer</div>
            </div>
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
  name: "card-stretch",
  components: {
    CodeHighlighter,
  },
});
</script>
