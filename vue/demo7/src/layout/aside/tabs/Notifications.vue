<template>
  <div class="card-header border-0">
    <h3 class="card-title fw-bolder text-dark">Notifications</h3>
  </div>

  <div class="card-body pt-0">
    <template v-for="(item, index) in list" :key="index">
      <!--begin::Item-->
      <div
        :class="['mb-7' && list.length - 1 !== index, `bg-light-${item.color}`]"
        class="d-flex align-items-center rounded p-5 mb-7"
      >
        <!--begin::Icon-->
        <span :class="`svg-icon-${item.color}`" class="svg-icon me-5">
          <span class="svg-icon svg-icon-1">
            <inline-svg :src="item.icon" />
          </span>
        </span>
        <!--end::Icon-->

        <!--begin::Title-->
        <div class="flex-grow-1 me-2">
          <a href="#" class="fw-bolder text-gray-800 text-hover-primary fs-6">{{
            item.title
          }}</a>

          <span class="text-muted fw-bold d-block">{{ item.text }}</span>
        </div>
        <!--end::Title-->

        <!--begin::Lable-->
        <span :class="`text-${item.color}`" class="fw-bolder py-1">{{
          item.number
        }}</span>
        <!--end::Lable-->
      </div>
      <!--end::Item-->
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "kt-notifications",
  components: {},
  setup() {
    const list = ref([
      {
        color: "warning",
        icon: "media/icons/duotune/abstract/abs027.svg",
        title: "Group lunch celebration",
        text: "Due in 2 Days",
        number: "+28%",
      },
      {
        color: "primary",
        icon: "media/icons/duotune/files/fil008.svg",
        title: "Navigation optimization",
        text: "Due in 2 Days",
        number: "+50%",
      },
      {
        color: "danger",
        icon: "media/icons/duotune/communication/com012.svg",
        title: "Humbert Bresnen",
        text: "Due in 5 Days",
        number: "-27%",
      },
      {
        color: "info",
        icon: "media/icons/duotune/finance/fin006.svg",
        title: "Air B & B - Real Estate",
        text: "Due in 8 Days",
        number: "+21%",
      },
      {
        color: "primary",
        icon: "media/icons/duotune/arrows/arr031.svg",
        title: "B & Q - Food Company",
        text: "Due in 6 Days",
        number: "+12%",
      },
      {
        color: "danger",
        icon: "media/icons/duotune/art/art005.svg",
        title: "Nexa - Next generation",
        text: "Due in 4 Days",
        number: "+34%",
      },
    ]);

    return {
      list,
    };
  },
});
</script>
