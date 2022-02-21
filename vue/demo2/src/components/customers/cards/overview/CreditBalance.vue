<template>
  <!--begin::Card-->
  <div :class="`card pt-4 ${cardClasses}`">
    <!--begin::Card header-->
    <div class="card-header border-0">
      <!--begin::Card title-->
      <div class="card-title">
        <h2 class="fw-bolder">Credit Balance</h2>
      </div>
      <!--end::Card title-->

      <!--begin::Card toolbar-->
      <div class="card-toolbar">
        <a
          href="#"
          class="btn btn-sm btn-flex btn-light-primary"
          data-bs-toggle="modal"
          data-bs-target="#kt_modal_adjust_balance"
        >
          <span class="svg-icon svg-icon-3">
            <inline-svg src="/media/icons/duotune/art/art005.svg" />
          </span>
          Adjust Balance
        </a>
      </div>
      <!--end::Card toolbar-->
    </div>
    <!--end::Card header-->

    <!--begin::Card body-->
    <div class="card-body pt-0">
      <div class="fw-bolder fs-2">
        $32,487.57 <span class="text-muted fs-4 fw-bold">USD</span>
        <div class="fs-7 fw-normal text-muted">
          Balance will increase the amount due on the customer's next invoice.
        </div>
      </div>
    </div>
    <!--end::Card body-->
  </div>
  <!--end::Card-->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "credit-bilance",
  props: {
    cardClasses: String,
  },
  components: {},
});
</script>
