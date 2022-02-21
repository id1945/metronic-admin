<template>
  <!--begin::Card-->
  <div :class="`card pt-4 ${cardClasses}`">
    <!--begin::Card header-->
    <div class="card-header border-0">
      <!--begin::Card title-->
      <div class="card-title">
        <h2>Payment Records</h2>
      </div>
      <!--end::Card title-->

      <!--begin::Card toolbar-->
      <div class="card-toolbar">
        <!--begin::Filter-->
        <button
          type="button"
          class="btn btn-sm btn-flex btn-light-primary"
          data-bs-toggle="modal"
          data-bs-target="#kt_modal_add_payment"
        >
          <span class="svg-icon svg-icon-3">
            <inline-svg src="media/icons/duotune/general/gen035.svg" />
          </span>
          Add payment
        </button>
        <!--end::Filter-->
      </div>
      <!--end::Card toolbar-->
    </div>
    <!--end::Card header-->

    <!--begin::Card body-->
    <div class="card-body pt-0 pb-5">
      <Datatable
        :table-header="tableHeader"
        :table-data="tableData"
        :rows-per-page="5"
      >
        <template v-slot:cell-invoice="{ row: payment }">
          {{ payment.invoice }}
        </template>
        <template v-slot:cell-status="{ row: payment }">
          <span :class="`badge badge-light-${payment.status.state}`">{{
            payment.status.label
          }}</span>
        </template>
        <template v-slot:cell-amount="{ row: payment }">
          {{ payment.amount }}
        </template>
        <template v-slot:cell-date="{ row: payment }">
          {{ payment.date }}
        </template>
        <template v-slot:cell-actions="{ row: payment }">
          <a
            href="#"
            class="btn btn-sm btn-light btn-active-light-primary"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-flip="top-end"
            >Actions
            <span class="svg-icon svg-icon-5 m-0">
              <inline-svg src="media/icons/duotune/arrows/arr072.svg" />
            </span>
          </a>
          <!--begin::Menu-->
          <div
            class="
              menu
              menu-sub
              menu-sub-dropdown
              menu-column
              menu-rounded
              menu-gray-600
              menu-state-bg-light-primary
              fw-bold
              fs-7
              w-125px
              py-4
            "
            data-kt-menu="true"
          >
            <!--begin::Menu item-->
            <div class="menu-item px-3">
              <router-link
                to="/apps/customers/customer-details"
                class="menu-link px-3"
                >View</router-link
              >
            </div>
            <!--end::Menu item-->
            <!--begin::Menu item-->
            <div class="menu-item px-3">
              <a @click="deleteRecord(payment.invoice)" class="menu-link px-3"
                >Delete</a
              >
            </div>
            <!--end::Menu item-->
          </div>
          <!--end::Menu-->
        </template>
      </Datatable>
    </div>
    <!--end::Card body-->
  </div>
  <!--end::Card-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Datatable from "@/components/kt-datatable/Datatable.vue";

export default defineComponent({
  name: "payment-records",
  props: {
    cardClasses: String,
  },
  components: {
    Datatable,
  },
  setup() {
    const tableHeader = ref([
      {
        name: "Invoice No.",
        key: "invoice",
        sortable: true,
      },
      {
        name: "Status",
        key: "status",
        sortingField: "status.label",
        sortable: true,
      },
      {
        name: "Amount",
        key: "amount",
        sortable: true,
      },
      {
        name: "Date",
        key: "date",
        sortable: true,
      },
      {
        name: "Actions",
        key: "actions",
        sortable: false,
      },
    ]);
    const tableData = ref([
      {
        invoice:
          Math.floor(Math.random() * (9999 - 1000 + 1) + 1000) +
          "-" +
          Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
        description: "Payment for invoice",
        amount: "$880.00",
        status: {
          label: "Pending",
          state: "warning",
        },
        date: "21 Oct 2020, 5:54 pm",
      },
      {
        invoice:
          Math.floor(Math.random() * (9999 - 1000 + 1) + 1000) +
          "-" +
          Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
        description: "Monthly utilites",
        amount: "$7,650.00",
        status: {
          label: "Successful",
          state: "success",
        },
        date: "19 Oct 2020, 7:32 am",
      },
      {
        invoice:
          Math.floor(Math.random() * (9999 - 1000 + 1) + 1000) +
          "-" +
          Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
        description: "Payment for invoice",
        amount: "$375.00",
        status: {
          label: "Successful",
          state: "success",
        },
        date: "23 Sep 2020, 12:38 am",
      },
      {
        invoice:
          Math.floor(Math.random() * (9999 - 1000 + 1) + 1000) +
          "-" +
          Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
        description: "Hosting Fees",
        amount: "$129.00",
        status: {
          label: "Successful",
          state: "success",
        },
        date: "11 Sep 2020, 3:18 pm",
      },
      {
        invoice:
          Math.floor(Math.random() * (9999 - 1000 + 1) + 1000) +
          "-" +
          Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
        description: "Marketing automation",
        amount: "$450.00",
        status: {
          label: "Rejected",
          state: "danger",
        },
        date: "03 Sep 2020, 1:08 am",
      },
      {
        invoice:
          Math.floor(Math.random() * (9999 - 1000 + 1) + 1000) +
          "-" +
          Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
        description: "Sales injection",
        amount: "$8,700.00",
        status: {
          label: "Pending",
          state: "warning",
        },
        date: "01 Sep 2020, 4:58 pm",
      },
      {
        invoice:
          Math.floor(Math.random() * (9999 - 1000 + 1) + 1000) +
          "-" +
          Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
        description: "Payment for invoice",
        amount: "$1,200.00",
        status: {
          label: "Successful",
          state: "success",
        },
        date: "14 Dec 2020, 8:43 pm",
      },
      {
        invoice:
          Math.floor(Math.random() * (9999 - 1000 + 1) + 1000) +
          "-" +
          Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
        description: "Google cloud subscription",
        amount: "$79.00",
        status: {
          label: "Successful",
          state: "success",
        },
        date: "01 Dec 2020, 10:12 am",
      },
      {
        invoice:
          Math.floor(Math.random() * (9999 - 1000 + 1) + 1000) +
          "-" +
          Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
        description: "Capital investment",
        amount: "$5,500.00",
        status: {
          label: "Successful",
          state: "success",
        },
        date: "12 Nov 2020, 2:01 pm",
      },
      {
        invoice:
          Math.floor(Math.random() * (9999 - 1000 + 1) + 1000) +
          "-" +
          Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
        description: "Payment for invoice",
        amount: "$880.00",
        status: {
          label: "Pending",
          state: "warning",
        },
        date: "21 Oct 2020, 5:54 pm",
      },
      {
        invoice:
          Math.floor(Math.random() * (9999 - 1000 + 1) + 1000) +
          "-" +
          Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
        description: "Monthly utilites",
        amount: "$7,650.00",
        status: {
          label: "Successful",
          state: "success",
        },
        date: "19 Oct 2020, 7:32 am",
      },
      {
        invoice:
          Math.floor(Math.random() * (9999 - 1000 + 1) + 1000) +
          "-" +
          Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
        description: "Payment for invoice",
        amount: "$375.00",
        status: {
          label: "Successful",
          state: "success",
        },
        date: "23 Sep 2020, 12:38 am",
      },
      {
        invoice:
          Math.floor(Math.random() * (9999 - 1000 + 1) + 1000) +
          "-" +
          Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
        description: "Hosting Fees",
        amount: "$129.00",
        status: {
          label: "Successful",
          state: "success",
        },
        date: "11 Sep 2020, 3:18 pm",
      },
      {
        invoice:
          Math.floor(Math.random() * (9999 - 1000 + 1) + 1000) +
          "-" +
          Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
        description: "Marketing automation",
        amount: "$450.00",
        status: {
          label: "Rejected",
          state: "danger",
        },
        date: "03 Sep 2020, 1:08 am",
      },
      {
        invoice:
          Math.floor(Math.random() * (9999 - 1000 + 1) + 1000) +
          "-" +
          Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
        description: "Sales injection",
        amount: "$8,700.00",
        status: {
          label: "Pending",
          state: "warning",
        },
        date: "01 Sep 2020, 4:58 pm",
      },
    ]);

    const deleteRecord = (invoice) => {
      for (let i = 0; i < tableData.value.length; i++) {
        if (tableData.value[i].invoice === invoice) {
          tableData.value.splice(i, 1);
        }
      }
    };

    return { tableHeader, tableData, deleteRecord };
  },
});
</script>
