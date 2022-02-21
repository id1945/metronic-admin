<template>
  <!--begin::Tables Widget 4-->
  <div :class="widgetClasses" class="card">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bolder fs-3 mb-1">New Members</span>

        <span class="text-muted mt-1 fw-bold fs-7"
          >More than 400 new members</span
        >
      </h3>
      <div class="card-toolbar">
        <ul class="nav">
          <li class="nav-item">
            <a
              class="
                nav-link
                btn btn-sm btn-color-muted btn-active btn-active-light-primary
                active
                fw-bolder
                px-4
                me-1
              "
              data-bs-toggle="tab"
              href="#kt_table_widget_4_tab_1"
              >Month</a
            >
          </li>

          <li class="nav-item">
            <a
              class="
                nav-link
                btn btn-sm btn-color-muted btn-active btn-active-light-primary
                fw-bolder
                px-4
                me-1
              "
              data-bs-toggle="tab"
              href="#kt_table_widget_4_tab_2"
              >Week</a
            >
          </li>

          <li class="nav-item">
            <a
              class="
                nav-link
                btn btn-sm btn-color-muted btn-active btn-active-light-primary
                fw-bolder
                px-4
              "
              data-bs-toggle="tab"
              href="#kt_table_widget_4_tab_3"
              >Day</a
            >
          </li>
        </ul>
      </div>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body py-3">
      <div class="tab-content">
        <template v-for="(item, index) in items" :key="index">
          <!--begin::Tap pane-->
          <div
            :class="[index === 0 && 'show active']"
            class="tab-pane fade"
            :id="`kt_table_widget_4_tab_${index + 1}`"
          >
            <!--begin::Table container-->
            <div class="table-responsive">
              <!--begin::Table-->
              <table class="table align-middle gs-0 gy-3">
                <!--begin::Table head-->
                <thead>
                  <tr>
                    <th class="p-0 w-50px"></th>
                    <th class="p-0 min-w-150px"></th>
                    <th class="p-0 min-w-140px"></th>
                    <th class="p-0 min-w-120px"></th>
                  </tr>
                </thead>
                <!--end::Table head-->

                <!--begin::Table body-->
                <tbody>
                  <template v-for="(item1, index1) in item" :key="index1">
                    <tr>
                      <td>
                        <div class="symbol symbol-50px">
                          <img :src="item1.image" alt="" />
                        </div>
                      </td>
                      <td>
                        <a
                          href="#"
                          class="
                            text-dark
                            fw-bolder
                            text-hover-primary
                            mb-1
                            fs-6
                          "
                          >{{ item1.user.name }}</a
                        >
                        <span class="text-muted fw-bold d-block fs-7">{{
                          item1.user.position
                        }}</span>
                      </td>
                      <td>
                        <span class="text-muted fw-bold d-block fs-7">
                          Rating
                        </span>

                        <div class="rating">
                          <template v-for="i in 5" :key="i">
                            <div
                              :class="[item1.rating >= i && 'checked']"
                              class="rating-label me-2"
                            >
                              <i class="bi bi-star-fill fs-5"></i>
                            </div>
                          </template>
                        </div>
                      </td>
                      <td class="text-end">
                        <a
                          href="#"
                          class="btn btn-icon btn-light-twitter btn-sm me-3"
                        >
                          <i class="bi bi-twitter fs-4"></i>
                        </a>
                        <a
                          href="#"
                          class="btn btn-icon btn-light-facebook btn-sm"
                        >
                          <i class="bi bi-facebook fs-4"></i>
                        </a>
                      </td>
                    </tr>
                  </template>
                </tbody>
                <!--end::Table body-->
              </table>
            </div>
            <!--end::Table-->
          </div>
          <!--end::Tap pane-->
        </template>
      </div>
    </div>
    <!--end::Body-->
  </div>
  <!--end::Tables Widget 4-->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "kt-widget-4",
  components: {},
  props: {
    widgetClasses: String,
  },
  setup() {
    const items = [
      [
        {
          image: "media/avatars/150-11.jpg",
          user: {
            name: "Brad Simmons",
            position: "Movie Creator",
          },
          rating: 5,
        },
        {
          image: "media/avatars/150-4.jpg",
          user: {
            name: "Jessie Clarcson",
            position: "HTML, CSS Coding",
          },
          rating: 5,
        },
        {
          image: "media/avatars/150-5.jpg",
          user: {
            name: "Lebron Wayde",
            position: "ReactJS Developer",
          },
          rating: 4,
        },
        {
          image: "media/avatars/150-6.jpg",
          user: {
            name: "Natali Trump",
            position: "UI/UX Designer",
          },
          rating: 5,
        },
        {
          image: "media/avatars/150-9.jpg",
          user: {
            name: "Kevin Leonard",
            position: "Art Director",
          },
          rating: 3,
        },
      ],

      [
        {
          image: "media/svg/avatars/043-boy-18.svg",
          user: {
            name: "Kevin Leonard",
            position: "Art Director",
          },
          rating: 3,
        },
        {
          image: "media/svg/avatars/014-girl-7.svg",
          user: {
            name: "Natali Trump",
            position: "UI/UX Designer",
          },
          rating: 5,
        },
        {
          image: "media/svg/avatars/018-girl-9.svg",
          user: {
            name: "Jessie Clarcson",
            position: "HTML, CSS Coding",
          },
          rating: 5,
        },
        {
          image: "media/svg/avatars/001-boy.svg",
          user: {
            name: "Brad Simmons",
            position: "Movie Creator",
          },
          rating: 5,
        },
      ],

      [
        {
          image: "media/svg/avatars/018-girl-9.svg",
          user: {
            name: "Jessie Clarcson",
            position: "HTML, CSS Coding",
          },
          rating: 5,
        },
        {
          image: "media/svg/avatars/047-girl-25.svg",
          user: {
            name: "Lebron Wayde",
            position: "ReactJS Developer",
          },
          rating: 4,
        },
        {
          image: "media/svg/avatars/014-girl-7.svg",
          user: {
            name: "Natali Trump",
            position: "UI/UX Designer",
          },
          rating: 5,
        },
      ],
    ];

    return {
      items,
    };
  },
});
</script>
