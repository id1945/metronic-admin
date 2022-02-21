<template>
  <KTModalCard
    title="Create Account Modal Example"
    description="Click on the below buttons to launch <br/>create account modal example."
    image="media/illustrations/sketchy-1/3.png"
    button-text="Create Account"
    modal-id="kt_modal_create_account"
  ></KTModalCard>

  <KTCreateAccountModal></KTCreateAccountModal>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import KTModalCard from "@/components/cards/Card.vue";
import KTCreateAccountModal from "@/components/modals/wizards/CreateAccountModal.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";

export default defineComponent({
  name: "create-account",
  components: {
    KTModalCard,
    KTCreateAccountModal,
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Create Account", ["Modals", "Wizards"]);
    });
  },
});
</script>
