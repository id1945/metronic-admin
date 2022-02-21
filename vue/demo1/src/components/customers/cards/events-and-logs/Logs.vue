<template>
  <!--begin::Card-->
  <div :class="`card pt-4 ${cardClasses}`">
    <!--begin::Card header-->
    <div class="card-header border-0">
      <!--begin::Card title-->
      <div class="card-title">
        <h2>Logs</h2>
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
      <!--begin::Table wrapper-->
      <div class="table-responsive">
        <!--begin::Table-->
        <table
          class="
            table
            align-middle
            table-row-dashed
            fw-bold
            text-gray-600
            fs-6
            gy-5
          "
          id="kt_table_customers_logs"
        >
          <!--begin::Table body-->
          <tbody>
            <template v-for="(log, i) in logs" :key="i">
              <tr>
                <!--begin::Badge--->
                <td class="min-w-70px">
                  <div :class="`badge badge-light-${log.color}`">
                    {{ log.code }}
                  </div>
                </td>
                <!--end::Badge--->

                <!--begin::Status--->
                <td>
                  {{ log.message }}
                </td>
                <!--end::Status--->

                <!--begin::Timestamp--->
                <td class="pe-0 text-end min-w-200px">
                  {{ log.date }}
                </td>
                <!--end::Timestamp--->
              </tr>
            </template>
          </tbody>
          <!--end::Table body-->
        </table>
        <!--end::Table-->
      </div>
      <!--end::Table wrapper-->
    </div>
    <!--end::Card body-->
  </div>
  <!--end::Card-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "logs",
  components: {},
  props: {
    cardClasses: String,
  },
  setup() {
    const logs = ref([
      {
        code: "200 OK",
        color: "success",
        message: "POST /v1/invoices/in_5806_7068/payment",
        date: "10 Mar 2021, 11:05 am",
      },
      {
        code: "404 WRN",
        color: "warning",
        message: "POST /v1/customer/in_9092_7391/not_found",
        date: "15 Apr 2021, 6:43 am",
      },
      {
        code: "200 OK",
        color: "success",
        message: "POST /v1/invoices/in_9757_6897/payment",
        date: "15 Apr 2021, 6:43 am",
      },
      {
        code: "500 ERR",
        color: "danger",
        message: "POST /v1/invoice/c_6140090460c97/invalid",
        date: "10 Nov 2021, 2:40 pm",
      },
      {
        code: "200 OK",
        color: "success",
        message: "POST /v1/invoices/c_6140090460c99/payment",
        date: "05 May 2021, 10:10 pm",
      },
      {
        code: "500 ERR",
        color: "danger",
        message: "POST /v1/invoice/c_6140090460c97/invalid",
        date: "20 Dec 2021, 11:05 am",
      },
      {
        code: "200 OK",
        color: "success",
        message: "POST /v1/invoices/in_5806_7068/payment",
        date: "10 Mar 2021, 8:43 pm",
      },
      {
        code: "404 WRN",
        color: "warning",
        message: "POST /v1/customer/c_6140090460c99/not_found",
        date: "20 Dec 2021, 2:40 pm",
      },
      {
        code: "200 OK",
        color: "success",
        message: "POST /v1/invoices/c_6140090460c97/payment",
        date: "25 Oct 2021, 11:05 am",
      },
      {
        code: "404 WRN",
        color: "warning",
        message: "POST /v1/customer/in_8377_7366/not_found",
        date: "19 Aug 2021, 6:43 am",
      },
      {
        code: "200 OK",
        color: "success",
        message: "POST /v1/invoices/in_6370_5796/payment",
        date: "25 Oct 2021, 11:05 am",
      },
      {
        code: "500 ERR",
        color: "danger",
        message: "POST /v1/invoice/in_9092_7391/invalid",
        date: "20 Dec 2021, 11:05 am",
      },
    ]);

    return {
      logs,
    };
  },
});
</script>
