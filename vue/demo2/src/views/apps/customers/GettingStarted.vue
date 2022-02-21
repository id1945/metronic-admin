<template>
  <KTModalCard
    title="Welcome!"
    description="There are no customers added yet. <br/>Kickstart your CRM by adding a your first customer"
    image="media/illustrations/sketchy-1/2.png"
    button-text="Add Customer"
    modal-id="kt_modal_add_customer"
  ></KTModalCard>

  <AddCustomerModal></AddCustomerModal>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import KTModalCard from "@/components/cards/Card.vue";
import AddCustomerModal from "@/components/modals/forms/AddCustomerModal.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";

export default defineComponent({
  name: "getting-started",
  components: {
    KTModalCard,
    AddCustomerModal,
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Getting Started", ["Apps", "Customers"]);
    });

    return {};
  },
});
</script>
