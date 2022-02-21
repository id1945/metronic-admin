<template>
  <!--begin::Section-->
  <div class="pt-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5" id="card-tabs">
      <a href="#card-tabs"></a>
      Card Tabs
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Add <code>.nav-stretch</code> class to use line tabs in card header:
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      <div class="rounded border p-10">
        <div class="card shadow">
          <div class="card-header card-header-stretch">
            <h3 class="card-title">Title</h3>
            <div class="card-toolbar">
              <ul class="nav nav-tabs nav-line-tabs nav-stretch fs-5 border-0">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    data-bs-toggle="tab"
                    href="#kt_tab_pane_7"
                    >Link 1</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_8"
                    >Link 2</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_9"
                    >Link 3</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="card-body">
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="kt_tab_pane_7"
                role="tabpanel"
              >
                Et et consectetur ipsum labore excepteur est proident excepteur
                ad velit occaecat qui minim occaecat veniam. Fugiat veniam
                incididunt anim aliqua enim pariatur veniam sunt est aute sit
                dolor anim. Velit non irure adipisicing aliqua ullamco irure
                incididunt irure non esse consectetur nostrud minim non minim
                occaecat. Amet duis do nisi duis veniam non est eiusmod tempor
                incididunt tempor dolor ipsum in qui sit.
              </div>

              <div class="tab-pane fade" id="kt_tab_pane_8" role="tabpanel">
                Nulla est ullamco ut irure incididunt nulla Lorem Lorem minim
                irure officia enim reprehenderit. Magna duis labore cillum sint
                adipisicing exercitation ipsum. Nostrud ut anim non exercitation
                velit laboris fugiat cupidatat. Commodo esse dolore fugiat sint
                velit ullamco magna consequat voluptate minim amet aliquip ipsum
                aute laboris nisi. Labore labore veniam irure irure ipsum
                pariatur mollit magna in cupidatat dolore magna irure esse
                tempor ad mollit. Dolore commodo nulla minim amet ipsum officia
                consectetur amet ullamco voluptate nisi commodo ea sit eu.
              </div>

              <div class="tab-pane fade" id="kt_tab_pane_9" role="tabpanel">
                Sint sit mollit irure quis est nostrud cillum consequat Lorem
                esse do quis dolor esse fugiat sunt do. Eu ex commodo veniam
                Lorem aliquip laborum occaecat qui Lorem esse mollit dolore anim
                cupidatat. eserunt officia id Lorem nostrud aute id commodo elit
                eiusmod enim irure amet eiusmod qui reprehenderit nostrud
                tempor. Fugiat ipsum excepteur in aliqua non et quis aliquip ad
                irure in labore cillum elit enim. Consequat aliquip incididunt
                ipsum et minim laborum laborum laborum et cillum labore.
                Deserunt adipisicing cillum id nulla minim nostrud labore
                eiusmod et amet.
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
        <div class="card">
          <div class="card-header card-header-stretch">
            <h3 class="card-title">Title</h3>
            <div class="card-toolbar">
              <ul class="nav nav-tabs nav-line-tabs nav-stretch fs-5 border-0">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    data-bs-toggle="tab"
                    href="#kt_tab_pane_7"
                    >Link 1</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_8"
                    >Link 2</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_9"
                    >Link 3</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="card-body">
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="kt_tab_pane_7"
                role="tabpanel"
              >
                ....
              </div>

              <div class="tab-pane fade" id="kt_tab_pane_8" role="tabpanel">
                ...
              </div>

              <div class="tab-pane fade" id="kt_tab_pane_9" role="tabpanel">
                ...
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
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";

export default defineComponent({
  name: "card-tabs",
  components: {
    CodeHighlighter,
  },
});
</script>
