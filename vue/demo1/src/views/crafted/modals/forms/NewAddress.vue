<template>
  <KTModalCard
    title="New Address Modal Example"
    description="Click on the below buttons to launch <br/>a new address example."
    image="media/illustrations/sketchy-1/19.png"
    button-text="Add New Address"
    modal-id="kt_modal_new_address"
  ></KTModalCard>

  <KTNewAddressModal></KTNewAddressModal>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import KTModalCard from "@/components/cards/Card.vue";
import KTNewAddressModal from "@/components/modals/forms/NewAddressModal.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";

export default defineComponent({
  name: "new-address",
  components: {
    KTModalCard,
    KTNewAddressModal,
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("New Address", ["Modals", "Forms"]);
    });
  },
});
</script>
