<template>
  <KTModalCard
    title="New Target Modal Example"
    description="Click on the below buttons to launch <br/>a new target example."
    image="media/illustrations/sketchy-1/17.png"
    button-text="Add New Target"
    modal-id="kt_modal_new_target"
  ></KTModalCard>

  <KTNewTargetModal></KTNewTargetModal>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import KTModalCard from "@/components/cards/Card.vue";
import KTNewTargetModal from "@/components/modals/forms/NewTargetModal.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";

export default defineComponent({
  name: "new-target",
  components: {
    KTModalCard,
    KTNewTargetModal,
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("New Target", ["Modals", "Forms"]);
    });
  },
});
</script>
