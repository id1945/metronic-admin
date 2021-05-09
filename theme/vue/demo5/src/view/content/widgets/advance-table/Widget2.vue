<template>
  <div
    class="card card-custom bg-light-success gutter-b card-stretch card-shadowless"
  >
    <!--begin::Header-->
    <div class="card-header border-0">
      <h3 class="card-title font-weight-bolder text-success">People</h3>
      <div class="card-toolbar">
        <Dropdown5></Dropdown5>
      </div>
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body pt-2">
      <template v-for="(item, i) in list">
        <!--begin::Item-->
        <div class="d-flex align-items-center mb-10" v-bind:key="i">
          <!--begin::Symbol-->
          <div class="symbol symbol-40 symbol-light-white mr-5">
            <span class="symbol-label">
              <inline-svg
                :src="item.svg"
                class="h-75 align-self-end"
              ></inline-svg>
            </span>
          </div>
          <!--end::Symbol-->
          <!--begin::Text-->
          <div class="d-flex flex-column flex-grow-1 font-weight-bold">
            <a href="#" class="text-dark text-hover-primary mb-1 font-size-lg">
              {{ item.title }}
            </a>
            <span class="text-muted">
              {{ item.desc }}
            </span>
          </div>
          <!--end::Text-->
        </div>
        <!--end::Item-->
      </template>
    </div>
    <!--end::Body-->
  </div>
</template>

<script>
import Dropdown5 from "@/view/content/dropdown/Dropdown5.vue";

export default {
  name: "widget-2",
  components: {
    Dropdown5
  },
  data() {
    return {
      list: [
        {
          title: "Ricky Hunt",
          desc: "Business Analyst",
          svg: "media/svg/avatars/004-boy-1.svg"
        },
        {
          title: "Anne Clarc",
          desc: "Creative Director",
          svg: "media/svg/avatars/002-girl.svg"
        },
        {
          title: "Kristaps Zumman",
          desc: "Lead Developer",
          svg: "media/svg/avatars/007-boy-2.svg"
        },
        {
          title: "Randy Trent",
          desc: "Backend Developer",
          svg: "media/svg/avatars/008-boy-3.svg"
        },
        {
          title: "Carles Puyol",
          desc: "Project Manager",
          svg: "media/svg/avatars/009-boy-4.svg"
        }
      ]
    };
  }
};
</script>
