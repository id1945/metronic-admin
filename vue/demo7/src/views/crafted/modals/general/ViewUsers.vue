<template>
  <KTModalCard
    title="View Users Modal Example"
    description="Click on the below buttons to launch <br/>user lists example."
    image="media/illustrations/sketchy-1/10.png"
    button-text="View Users"
    modal-id="kt_modal_view_users"
  ></KTModalCard>

  <KTViewUsersModal></KTViewUsersModal>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import KTModalCard from "@/components/cards/Card.vue";
import KTViewUsersModal from "@/components/modals/general/ViewUsersModal.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";

export default defineComponent({
  name: "view-users",
  components: {
    KTModalCard,
    KTViewUsersModal,
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("View Users", ["Modals", "General"]);
    });
  },
});
</script>
