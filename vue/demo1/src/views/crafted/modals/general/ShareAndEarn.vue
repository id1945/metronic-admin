<template>
  <KTModalsCard
    title="Share & Earn Modal Example"
    description="Click on the below buttons to launch <br/>a share & earn example."
    image="media/illustrations/sketchy-1/9.png"
    button-text="Share & Earn"
    modal-id="kt_modal_share_earn"
  ></KTModalsCard>

  <KTShareAndEarnModal></KTShareAndEarnModal>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import KTModalsCard from "@/components/cards/Card.vue";
import KTShareAndEarnModal from "@/components/modals/general/ShareAndEarnModal.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";

export default defineComponent({
  name: "share-and-earn",
  components: {
    KTModalsCard,
    KTShareAndEarnModal,
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Share & Earn", ["Modals", "General"]);
    });
  },
});
</script>
