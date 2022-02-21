<template>
  <div :class="`card pt-4 ${cardClasses}`">
    <!--begin::Card header-->
    <div class="card-header border-0">
      <!--begin::Card title-->
      <div class="card-title">
        <h2>Events</h2>
      </div>
      <!--end::Card title-->

      <!--begin::Card toolbar-->
      <div class="card-toolbar">
        <!--begin::Button-->
        <button type="button" class="btn btn-sm btn-light-primary">
          <span class="svg-icon svg-icon-3">
            <inline-svg src="media/icons/duotune/files/fil021.svg" />
          </span>
          Download Report
        </button>
        <!--end::Button-->
      </div>
      <!--end::Card toolbar-->
    </div>
    <!--end::Card header-->

    <!--begin::Card body-->
    <div class="card-body py-0">
      <!--begin::Table-->
      <table
        class="
          table
          align-middle
          table-row-dashed
          fs-6
          text-gray-600
          fw-bold
          gy-5
        "
        id="kt_table_customers_events"
      >
        <!--begin::Table body-->
        <tbody>
          <template v-for="(event, i) in events" :key="i">
            <tr>
              <!--begin::Event--->
              <td class="min-w-400px" v-html="event.event"></td>
              <!--end::Event--->

              <!--begin::Timestamp--->
              <td class="pe-0 text-gray-600 text-end min-w-200px">
                {{ event.date }}
              </td>
              <!--end::Timestamp--->
            </tr>
          </template>
        </tbody>
        <!--end::Table body-->
      </table>
      <!--end::Table-->
    </div>
    <!--end::Card body-->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "events",
  props: {
    cardClasses: String,
  },
  components: {},
  setup() {
    const events = ref([
      {
        event:
          'Invoice <a href="#" class="fw-bolder text-gray-900 text-hover-primary me-1">#LOP-45640</a> has been <span class="badge badge-light-danger">Declined</span>',
        date: "20 Dec 2021, 5:30 pm",
      },
      {
        event:
          'Invoice <a href="#" class="fw-bolder text-gray-900 text-hover-primary me-1">#DER-45645</a> status has changed from <span class="badge badge-light-info me-1">In Progress</span> to <span class="badge badge-light-primary">In Transit</span>',
        date: "24 Jun 2021, 5:20 pm",
      },
      {
        event:
          '<a href="#" class="text-gray-600 text-hover-primary me-1">Melody Macy</a> has made payment to <a href="#" class="fw-bolder text-gray-900 text-hover-primary">#XRS-45670</a>',
        date: "05 May 2021, 11:05 am",
      },
      {
        event:
          'Invoice <a href="#" class="fw-bolder text-gray-900 text-hover-primary me-1">#KIO-45656</a> status has changed from <span class="badge badge-light-succees me-1">In Transit</span> to <span class="badge badge-light-success">Approved</span>',
        date: "20 Dec 2021, 6:43 am",
      },
      {
        event:
          '<a href="#" class="text-gray-600 text-hover-primary me-1">Max Smith</a> has made payment to <a href="#" class="fw-bolder text-gray-900 text-hover-primary">#XRS-45670</a>',
        date: "10 Nov 2021, 9:23 pm",
      },
      {
        event:
          'Invoice <a href="#" class="fw-bolder text-gray-900 text-hover-primary me-1">#SEP-45656</a> status has changed from <span class="badge badge-light-warning me-1">Pending</span> to <span class="badge badge-light-info">In Progress</span>',
        date: "22 Sep 2021, 5:30 pm",
      },
      {
        event:
          '<a href="#" class="text-gray-600 text-hover-primary me-1">Emma Smith</a> has made payment to <a href="#" class="fw-bolder text-gray-900 text-hover-primary">#SDK-45670</a>',
        date: "25 Jul 2021, 8:43 pm",
      },
      {
        event:
          '<a href="#" class="text-gray-600 text-hover-primary me-1">Melody Macy</a> has made payment to <a href="#" class="fw-bolder text-gray-900 text-hover-primary">#XRS-45670</a>',
        date: "05 May 2021, 2:40 pm",
      },
      {
        event:
          '<a href="#" class="text-gray-600 text-hover-primary me-1">Emma Smith</a> has made payment to <a href="#" class="fw-bolder text-gray-900 text-hover-primary">#OLP-45690</a>',
        date: "25 Oct 2021, 10:30 am",
      },
      {
        event:
          'Invoice <a href="#" class="fw-bolder text-gray-900 text-hover-primary me-1">#WER-45670</a> is <span class="badge badge-light-info">In Progress</span>',
        date: "10 Mar 2021, 9:23 pm",
      },
    ]);

    return {
      events,
    };
  },
});
</script>
