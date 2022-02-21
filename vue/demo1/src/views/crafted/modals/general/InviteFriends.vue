<template>
  <KTModalCard
    title="Invite Friends Modal Example"
    description="Click on the below buttons
  to launch <br />
  a friend invitation example."
    image="media/illustrations/sketchy-1/1.png"
    button-text="Invite Friends"
    modal-id="kt_modal_invite_friends"
  ></KTModalCard>

  <KTInviteFriendsModal></KTInviteFriendsModal>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import KTModalCard from "@/components/cards/Card.vue";
import KTInviteFriendsModal from "@/components/modals/general/InviteFriendsModal.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";

export default defineComponent({
  name: "invite-friends",
  components: {
    KTModalCard,
    KTInviteFriendsModal,
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Invite Friends", ["Modals", "General"]);
    });
  },
});
</script>
