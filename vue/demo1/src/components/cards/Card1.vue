<template>
  <!--begin::Card-->
  <a href="#" class="card border border-2 border-gray-300 border-hover">
    <!--begin::Card header-->
    <div class="card-header border-0 pt-9">
      <!--begin::Card Title-->
      <div class="card-title m-0">
        <!--begin::Avatar-->
        <div class="symbol symbol-50px w-50px bg-light">
          <img :src="icon" alt="image" class="p-3" />
        </div>
        <!--end::Avatar-->
      </div>
      <!--end::Car Title-->

      <!--begin::Card toolbar-->
      <div class="card-toolbar">
        <span
          :class="getStatusDataBadgeColor"
          class="badge fw-bolder me-auto px-4 py-3"
          >{{ getStatus }}</span
        >
      </div>
      <!--end::Card toolbar-->
    </div>
    <!--end:: Card header-->

    <!--begin:: Card body-->
    <div class="card-body p-9">
      <!--begin::Name-->
      <div class="fs-3 fw-bolder text-dark">
        {{ title }}
      </div>
      <!--end::Name-->

      <!--begin::Description-->
      <p class="text-gray-400 fw-bold fs-5 mt-1 mb-7">
        {{ getDescription }}
      </p>
      <!--end::Description-->

      <!--begin::Info-->
      <div class="d-flex flex-wrap mb-5">
        <!--begin::Due-->
        <div
          class="
            border border-gray-300 border-dashed
            rounded
            min-w-125px
            py-3
            px-4
            me-7
            mb-3
          "
        >
          <div class="fs-6 text-gray-800 fw-bolder">{{ getDate }}</div>
          <div class="fw-bold text-gray-400">Due Date</div>
        </div>
        <!--end::Due-->

        <!--begin::Budget-->
        <div
          class="
            border border-gray-300 border-dashed
            rounded
            min-w-125px
            py-3
            px-4
            mb-3
          "
        >
          <div class="fs-6 text-gray-800 fw-bolder">{{ getBudget }}</div>
          <div class="fw-bold text-gray-400">Budget</div>
        </div>
        <!--end::Budget-->
      </div>
      <!--end::Info-->

      <!--begin::Progress-->
      <div
        class="h-4px w-100 bg-light mb-5"
        data-bs-toggle="tooltip"
        :title="`This project ${progress}% completed`"
      >
        <div
          :class="getStatusDataColor"
          class="rounded h-4px"
          role="progressbar"
          :style="{ width: progress + `%` }"
          :aria-valuenow="progress"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <!--end::Progress-->

      <template v-if="users">
        <!--begin::Users-->
        <div class="symbol-group symbol-hover">
          <template v-for="(user, index) in users" :key="index">
            <!--begin::User-->
            <div
              class="symbol symbol-35px symbol-circle"
              data-bs-toggle="tooltip"
              :title="user.title"
            >
              <img v-if="user.src" alt="Pic" :src="user.src" />
              <span
                v-else
                class="symbol-label fw-bolder"
                :class="`bg-${user.state} text-inverse-${user.state}`"
                >{{ user.initials }}</span
              >
            </div>
            <!--begin::User-->
          </template>
        </div>
        <!--end::Users-->
      </template>
    </div>
    <!--end:: Card body-->
  </a>
  <!--end::Card-->
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "card-1",
  components: {},
  props: {
    progress: Number,

    statusDataBadgeColor: String,

    statusDataColor: String,

    status: String,

    icon: String,

    title: String,

    description: String,

    date: String,

    budget: String,

    users: Array,
  },
  setup(props) {
    const getDescription = computed(() => {
      return props.description
        ? props.description
        : "CRM App application to HR efficiency";
    });

    const getDate = computed(() => {
      return props.date ? props.date : "Feb 21, 2021";
    });

    const getBudget = computed(() => {
      return props.budget ? props.budget : "$284,900.00";
    });

    const getStatus = computed(() => {
      return props.status ? props.status : "In Progress";
    });

    const getStatusDataBadgeColor = computed(() => {
      return props.statusDataBadgeColor
        ? props.statusDataBadgeColor
        : "badge-light-primary";
    });

    const getStatusDataColor = computed(() => {
      return props.statusDataColor ? props.statusDataColor : "bg-primary";
    });

    return {
      getDescription,
      getDate,
      getBudget,
      getStatus,
      getStatusDataBadgeColor,
      getStatusDataColor,
    };
  },
});
</script>
