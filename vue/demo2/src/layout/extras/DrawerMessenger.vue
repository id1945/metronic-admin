<template>
  <!--begin::Chat drawer-->
  <div
    id="kt_drawer_chat"
    class="bg-white"
    data-kt-drawer="true"
    data-kt-drawer-name="chat"
    data-kt-drawer-activate="true"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'300px', 'md': '500px'}"
    data-kt-drawer-direction="end"
    data-kt-drawer-toggle="#kt_drawer_chat_toggle"
    data-kt-drawer-close="#kt_drawer_chat_close"
  >
    <!--begin::Messenger-->
    <div class="card w-100" id="kt_drawer_chat_messenger">
      <!--begin::Card header-->
      <div class="card-header pe-5" id="kt_drawer_chat_messenger_header">
        <!--begin::Title-->
        <div class="card-title">
          <!--begin::User-->
          <div class="d-flex justify-content-center flex-column me-3">
            <a
              href="#"
              class="
                fs-4
                fw-bolder
                text-gray-900 text-hover-primary
                me-1
                mb-2
                lh-1
              "
              >Brian Cox</a
            >

            <!--begin::Info-->
            <div class="mb-0 lh-1">
              <span
                class="badge badge-success badge-circle w-10px h-10px me-1"
              ></span>
              <span class="fs-7 fw-bold text-gray-400">Active</span>
            </div>
            <!--end::Info-->
          </div>
          <!--end::User-->
        </div>
        <!--end::Title-->

        <!--begin::Card toolbar-->
        <div class="card-toolbar">
          <!--begin::Menu-->
          <div class="me-2">
            <button
              class="btn btn-sm btn-icon btn-active-icon-primary"
              data-kt-menu-trigger="click"
              data-kt-menu-placement="bottom-end"
              data-kt-menu-flip="top-end"
            >
              <i class="bi bi-three-dots fs-3"></i>
            </button>
            <Dropdown4></Dropdown4>
          </div>
          <!--end::Menu-->

          <!--begin::Close-->
          <div
            class="btn btn-sm btn-icon btn-active-icon-primary"
            id="kt_drawer_chat_close"
          >
            <span class="svg-icon svg-icon-2x">
              <inline-svg src="media/icons/duotune/arrows/arr061.svg" />
            </span>
          </div>
          <!--end::Close-->
        </div>
        <!--end::Card toolbar-->
      </div>
      <!--end::Card header-->

      <!--begin::Card body-->
      <div class="card-body" id="kt_drawer_chat_messenger_body">
        <!--begin::Messages-->
        <div
          class="scroll-y me-n5 pe-5"
          ref="messagesRef"
          data-kt-element="messages"
          data-kt-scroll="true"
          data-kt-scroll-activate="true"
          data-kt-scroll-height="auto"
          data-kt-scroll-dependencies="#kt_drawer_chat_messenger_header, #kt_drawer_chat_messenger_footer"
          data-kt-scroll-wrappers="#kt_drawer_chat_messenger_body"
          data-kt-scroll-offset="0px"
        >
          <template v-for="(item, index) in messages" :key="index">
            <MessageIn
              ref="messagesInRef"
              v-if="item.type === 'in'"
              :name="item.name"
              :image="item.image"
              :time="item.time"
              :text="item.text"
            ></MessageIn>
            <MessageOut
              ref="messagesOutRef"
              v-if="item.type === 'out'"
              :image="item.image"
              :time="item.time"
              :text="item.text"
            ></MessageOut>
          </template>
        </div>
        <!--end::Messages-->
      </div>
      <!--end::Card body-->

      <!--begin::Card footer-->
      <div class="card-footer pt-4" id="kt_drawer_chat_messenger_footer">
        <!--begin::Input-->
        <input
          class="form-control form-control-flush mb-3"
          data-kt-element="input"
          placeholder="Type a message"
          v-model="newMessageText"
          @keydown.enter="addNewMessage"
        />
        <!--end::Input-->

        <!--begin:Toolbar-->
        <div class="d-flex flex-stack">
          <!--begin::Actions-->
          <div class="d-flex align-items-center me-2">
            <button
              class="btn btn-sm btn-icon btn-active-light-primary me-1"
              type="button"
              data-bs-toggle="tooltip"
              title="Coming soon"
            >
              <i class="bi bi-paperclip fs-3"></i>
            </button>
            <button
              class="btn btn-sm btn-icon btn-active-light-primary me-1"
              type="button"
              data-bs-toggle="tooltip"
              title="Coming soon"
            >
              <i class="bi bi-upload fs-3"></i>
            </button>
          </div>
          <!--end::Actions-->

          <!--begin::Send-->
          <button
            @click="addNewMessage"
            class="btn btn-primary"
            type="button"
            data-kt-element="send"
          >
            Send
          </button>
          <!--end::Send-->
        </div>
        <!--end::Toolbar-->
      </div>
      <!--end::Card footer-->
    </div>
    <!--end::Messenger-->
  </div>
  <!--end::Chat drawer-->
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { ScrollComponent } from "@/assets/ts/components/_ScrollComponent";
import MessageIn from "@/components/messenger-parts/MessageIn.vue";
import MessageOut from "@/components/messenger-parts/MessageOut.vue";
import Dropdown4 from "@/components/dropdown/Dropdown4.vue";

interface KTMessage {
  type: string;
  name?: string;
  image: string;
  time: string;
  text: string;
}

export default defineComponent({
  name: "upgrade-to-pro",
  components: {
    MessageIn,
    MessageOut,
    Dropdown4,
  },
  setup() {
    const messagesRef = ref<null | HTMLElement>(null);
    const messagesInRef = ref<null | HTMLElement>(null);
    const messagesOutRef = ref<null | HTMLElement>(null);

    const messages = ref<Array<KTMessage>>([
      {
        type: "in",
        name: "Brian Cox",
        image: "media/avatars/150-15.jpg",
        time: "5 Hours",
        text: "How likely are you to recommend our company to your friends and family ?",
      },
      {
        type: "out",
        image: "media/avatars/150-2.jpg",
        time: "2 Hours",
        text: "Hey there, we’re just writing to let you know that you’ve been subscribed to a repository on GitHub.",
      },
      {
        type: "in",
        name: "Brian Cox",
        image: "media/avatars/150-15.jpg",
        time: "2 Hour",
        text: "Ok, Understood!",
      },
      {
        type: "out",
        image: "media/avatars/150-2.jpg",
        time: "2 Hours",
        text: "You’ll receive notifications for all issues, pull requests!",
      },
      {
        type: "in",
        name: "Brian Cox",
        image: "media/avatars/150-15.jpg",
        time: "1 Hour",
        text: "You can unwatch this repository immediately by clicking here: Keenthemes.com",
      },
      {
        type: "out",
        image: "media/avatars/150-2.jpg",
        time: "4 mins",
        text: "Most purchased Business courses during this sale!",
      },
      {
        type: "in",
        name: "Brian Cox",
        image: "media/avatars/150-15.jpg",
        time: "2 mins",
        text: "Company BBQ to celebrate the last quater achievements and goals. Food and drinks provided",
      },
    ]);

    const newMessageText = ref("");

    const addNewMessage = () => {
      if (!newMessageText.value) {
        return;
      }
      messages.value.push({
        type: "out",
        image: "media/avatars/150-2.jpg",
        time: "Just now",
        text: newMessageText.value,
      });

      setTimeout(() => {
        if (messagesRef.value) {
          messagesRef.value.scrollTop = messagesRef.value.scrollHeight;
        }
      }, 1);

      newMessageText.value = "";
      setTimeout(() => {
        messages.value.push({
          type: "in",
          name: "Ja Morant",
          image: "media/avatars/150-15.jpg",
          time: "Just now",
          text: "Thank you for your awesome support!",
        });

        setTimeout(() => {
          if (messagesRef.value) {
            messagesRef.value.scrollTop = messagesRef.value.scrollHeight;
          }
        }, 1);
      }, 2000);
    };

    onMounted(() => {
      if (
        !messagesRef.value ||
        !ScrollComponent.getInstance(messagesRef.value)
      ) {
        return;
      }

      ScrollComponent.getInstance(messagesRef.value).update();
    });

    return {
      messages,
      messagesRef,
      newMessageText,
      addNewMessage,
      messagesInRef,
      messagesOutRef,
    };
  },
});
</script>
