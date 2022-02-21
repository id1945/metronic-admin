<template>
  <KTModalCard
    title="Two-factor Authentication"
    description="Click on the below buttons to launch <br/>two-factor authentication setup example."
    image="media/illustrations/sketchy-1/4.png"
    button-text="Enable Two-factor Authentication"
    modal-id="kt_modal_two_factor_authentication"
  ></KTModalCard>

  <KTTwoFactorAuthModal></KTTwoFactorAuthModal>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import KTModalCard from "@/components/cards/Card.vue";
import KTTwoFactorAuthModal from "@/components/modals/wizards/TwoFactorAuthModal.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";

export default defineComponent({
  name: "two-factor-auth",
  components: {
    KTModalCard,
    KTTwoFactorAuthModal,
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Two Factor Auth", ["Modals", "Wizards"]);
    });
  },
});
</script>
