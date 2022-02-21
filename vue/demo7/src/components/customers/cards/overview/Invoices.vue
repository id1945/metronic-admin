<template>
  <!--begin::Card-->
  <div :class="`card pt-2 ${cardClasses}`">
    <!--begin::Card header-->
    <div class="card-header border-0">
      <!--begin::Card title-->
      <div class="card-title">
        <h2>Invoices</h2>
      </div>
      <!--end::Card title-->

      <!--begin::Toolbar-->
      <div class="card-toolbar m-0">
        <!--begin::Tab nav-->
        <ul
          class="
            nav nav-stretch
            fs-5
            fw-bold
            nav-line-tabs nav-line-tabs-2x
            border-transparent
          "
          role="tablist"
        >
          <li class="nav-item" role="presentation">
            <a
              id="kt_referrals_year_tab"
              class="nav-link text-active-primary active"
              data-bs-toggle="tab"
              role="tab"
              href="#kt_customer_details_invoices_1"
            >
              This Year
            </a>
          </li>

          <li class="nav-item" role="presentation">
            <a
              id="kt_referrals_2019_tab"
              class="nav-link text-active-primary ms-3"
              data-bs-toggle="tab"
              role="tab"
              href="#kt_customer_details_invoices_2"
            >
              2020
            </a>
          </li>

          <li class="nav-item" role="presentation">
            <a
              id="kt_referrals_2018_tab"
              class="nav-link text-active-primary ms-3"
              data-bs-toggle="tab"
              role="tab"
              href="#kt_customer_details_invoices_3"
            >
              2019
            </a>
          </li>

          <li class="nav-item" role="presentation">
            <a
              id="kt_referrals_2017_tab"
              class="nav-link text-active-primary ms-3"
              data-bs-toggle="tab"
              role="tab"
              href="#kt_customer_details_invoices_4"
            >
              2018
            </a>
          </li>
        </ul>
        <!--end::Tab nav-->
      </div>
      <!--end::Toolbar-->
    </div>
    <!--end::Card header-->

    <!--begin::Card body-->
    <div class="card-body pt-0">
      <!--begin::Tab Content-->
      <div id="kt_referred_users_tab_content" class="tab-content">
        <div
          id="kt_customer_details_invoices_1"
          class="py-0 tab-pane fade active show"
          role="tabpanel"
        >
          <Datatable
            :table-header="tableHeader"
            :table-data="tableData1"
            :rows-per-page="5"
          >
            <template v-slot:cell-order="{ row: invoice }">
              {{ invoice.order }}
            </template>
            <template v-slot:cell-amount="{ row: invoice }">
              <span :class="`text-${invoice.color}`">
                {{ invoice.amount }}
              </span>
            </template>
            <template v-slot:cell-status="{ row: invoice }">
              <span :class="`badge badge-light-${invoice.status.state}`">{{
                invoice.status.label
              }}</span>
            </template>
            <template v-slot:cell-date="{ row: invoice }">
              {{ invoice.date }}
            </template>
            <template v-slot:cell-invoice>
              <button class="btn btn-sm btn-light btn-active-light-primary">
                Download
              </button>
            </template>
          </Datatable>
        </div>
        <div
          id="kt_customer_details_invoices_2"
          class="py-0 tab-pane fade"
          role="tabpanel"
        >
          <Datatable
            :table-header="tableHeader"
            :table-data="tableData2"
            :rows-per-page="5"
          >
            <template v-slot:cell-order="{ row: invoice }">
              {{ invoice.order }}
            </template>
            <template v-slot:cell-amount="{ row: invoice }">
              <span :class="`text-${invoice.color}`">
                {{ invoice.amount }}
              </span>
            </template>
            <template v-slot:cell-status="{ row: invoice }">
              <span :class="`badge badge-light-${invoice.status.state}`">{{
                invoice.status.label
              }}</span>
            </template>
            <template v-slot:cell-date="{ row: invoice }">
              {{ invoice.date }}
            </template>
            <template v-slot:cell-invoice>
              <button class="btn btn-sm btn-light btn-active-light-primary">
                Download
              </button>
            </template>
          </Datatable>
        </div>
        <div
          id="kt_customer_details_invoices_3"
          class="py-0 tab-pane fade"
          role="tabpanel"
        >
          <Datatable
            :table-header="tableHeader"
            :table-data="tableData3"
            :rows-per-page="5"
          >
            <template v-slot:cell-order="{ row: invoice }">
              {{ invoice.order }}
            </template>
            <template v-slot:cell-amount="{ row: invoice }">
              <span :class="`text-${invoice.color}`">
                {{ invoice.amount }}
              </span>
            </template>
            <template v-slot:cell-status="{ row: invoice }">
              <span :class="`badge badge-light-${invoice.status.state}`">{{
                invoice.status.label
              }}</span>
            </template>
            <template v-slot:cell-date="{ row: invoice }">
              {{ invoice.date }}
            </template>
            <template v-slot:cell-invoice>
              <button class="btn btn-sm btn-light btn-active-light-primary">
                Download
              </button>
            </template>
          </Datatable>
        </div>
        <div
          id="kt_customer_details_invoices_4"
          class="py-0 tab-pane fade"
          role="tabpanel"
        >
          <Datatable
            :table-header="tableHeader"
            :table-data="tableData4"
            :rows-per-page="5"
          >
            <template v-slot:cell-order="{ row: invoice }">
              {{ invoice.order }}
            </template>
            <template v-slot:cell-amount="{ row: invoice }">
              <span :class="`text-${invoice.color}`">
                {{ invoice.amount }}
              </span>
            </template>
            <template v-slot:cell-status="{ row: invoice }">
              <span :class="`badge badge-light-${invoice.status.state}`">{{
                invoice.status.label
              }}</span>
            </template>
            <template v-slot:cell-date="{ row: invoice }">
              {{ invoice.date }}
            </template>
            <template v-slot:cell-invoice>
              <button class="btn btn-sm btn-light btn-active-light-primary">
                Download
              </button>
            </template>
          </Datatable>
        </div>
      </div>
      <!--end::Tab Content-->
    </div>
    <!--end::Card body-->
  </div>
  <!--end::Card-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Datatable from "@/components/kt-datatable/Datatable.vue";

export default defineComponent({
  name: "invoices",
  props: {
    cardClasses: String,
  },
  components: {
    Datatable,
  },
  setup() {
    const tableHeader = ref([
      {
        name: "Order id",
        key: "order",
        sortable: true,
      },
      {
        name: "Amount",
        key: "amount",
        sortable: true,
      },
      {
        name: "Status",
        key: "status",
        sortingField: "status.label",
        sortable: true,
      },
      {
        name: "Date",
        key: "date",
        sortable: true,
      },
      {
        name: "Invoice",
        key: "invoice",
        sortable: false,
      },
    ]);
    const tableData1 = ref([
      {
        date: "Nov 01, 2020",
        order: "102445788",
        details: "Darknight transparency  36 Icons Pack",
        color: "success",
        amount: "$38.00",
        status: {
          label: "Pending",
          state: "warning",
        },
      },
      {
        date: "Oct 24, 2020",
        order: "423445721",
        details: "Seller Fee",
        color: "danger",
        amount: "$-2.60",
        status: {
          label: "Pending",
          state: "warning",
        },
      },
      {
        date: "Oct 08, 2020",
        order: "312445984",
        details: "Cartoon Mobile Emoji Phone Pack",
        color: "success",
        amount: "$76.00",
        status: {
          label: "Pending",
          state: "warning",
        },
      },
      {
        date: "Sep 15, 2020",
        order: "312445984",
        details: "Iphone 12 Pro Mockup  Mega Bundle",
        color: "success",
        amount: "$5.00",
        status: {
          label: "Pending",
          state: "warning",
        },
      },
      {
        date: "May 30, 2020",
        order: "523445943",
        details: "Seller Fee",
        color: "danger",
        amount: "$-1.30",
        status: {
          label: "Pending",
          state: "warning",
        },
      },
      {
        date: "Apr 22, 2020",
        order: "231445943",
        details: "Parcel Shipping / Delivery Service App",
        color: "success",
        amount: "$204.00",
        status: {
          label: "Pending",
          state: "warning",
        },
      },
      {
        date: "Feb 09, 2020",
        order: "426445943",
        details: "Visual Design Illustration",
        color: "success",
        amount: "$31.00",
        status: {
          label: "Pending",
          state: "warning",
        },
      },
      {
        date: "Nov 01, 2020",
        order: "984445943",
        details: "Abstract Vusial Pack",
        color: "success",
        amount: "$52.00",
        status: {
          label: "Pending",
          state: "warning",
        },
      },
      {
        date: "Jan 04, 2020",
        order: "324442313",
        details: "Seller Fee",
        color: "danger",
        amount: "$-0.80",
        status: {
          label: "Pending",
          state: "warning",
        },
      },
    ]);
    const tableData2 = ref([
      {
        date: "May 30, 2020",
        order: "523445943",
        details: "Seller Fee",
        color: "danger",
        amount: "$-1.30",
        status: {
          label: "Pending",
          state: "warning",
        },
      },
      {
        date: "Apr 22, 2020",
        order: "231445943",
        details: "Parcel Shipping / Delivery Service App",
        color: "success",
        amount: "$204.00",
        status: {
          label: "Pending",
          state: "warning",
        },
      },
      {
        date: "Feb 09, 2020",
        order: "426445943",
        details: "Visual Design Illustration",
        color: "success",
        amount: "$31.00",
        status: {
          label: "Pending",
          state: "warning",
        },
      },
      {
        date: "Nov 01, 2020",
        order: "984445943",
        details: "Abstract Vusial Pack",
        color: "success",
        amount: "$52.00",
        status: {
          label: "Pending",
          state: "warning",
        },
      },
      {
        date: "Jan 04, 2020",
        order: "324442313",
        details: "Seller Fee",
        color: "danger",
        amount: "$-0.80",
        status: {
          label: "Pending",
          state: "warning",
        },
      },
      {
        date: "Nov 01, 2020",
        order: "102445788",
        details: "Darknight transparency  36 Icons Pack",
        color: "success",
        amount: "$38.00",
        status: {
          label: "Pending",
          state: "warning",
        },
      },
      {
        date: "Oct 24, 2020",
        order: "423445721",
        details: "Seller Fee",
        color: "danger",
        amount: "$-2.60",
        status: {
          label: "Pending",
          state: "warning",
        },
      },
      {
        date: "Oct 08, 2020",
        order: "312445984",
        details: "Cartoon Mobile Emoji Phone Pack",
        color: "success",
        amount: "$76.00",
        status: {
          label: "Pending",
          state: "warning",
        },
      },
      {
        date: "Sep 15, 2020",
        order: "312445984",
        details: "Iphone 12 Pro Mockup  Mega Bundle",
        color: "success",
        amount: "$5.00",
        status: {
          label: "Pending",
          state: "warning",
        },
      },
    ]);
    const tableData3 = ref([
      {
        date: "Feb 09, 2020",
        order: "426445943",
        details: "Visual Design Illustration",
        color: "success",
        amount: "$31.00",
        status: {
          label: "Successful",
          state: "success",
        },
      },
      {
        date: "Nov 01, 2020",
        order: "984445943",
        details: "Abstract Vusial Pack",
        color: "success",
        amount: "$52.00",
        status: {
          label: "Pending",
          state: "warning",
        },
      },
      {
        date: "Jan 04, 2020",
        order: "324442313",
        details: "Seller Fee",
        color: "danger",
        amount: "$-0.80",
        status: {
          label: "Pending",
          state: "warning",
        },
      },
      {
        date: "Sep 15, 2020",
        order: "312445984",
        details: "Iphone 12 Pro Mockup  Mega Bundle",
        color: "success",
        amount: "$5.00",
        status: {
          label: "Pending",
          state: "warning",
        },
      },
      {
        date: "Nov 01, 2020",
        order: "102445788",
        details: "Darknight transparency  36 Icons Pack",
        color: "success",
        amount: "$38.00",
        status: {
          label: "Pending",
          state: "warning",
        },
      },
      {
        date: "Oct 24, 2020",
        order: "423445721",
        details: "Seller Fee",
        color: "danger",
        amount: "$-2.60",
        status: {
          label: "Pending",
          state: "warning",
        },
      },
      {
        date: "Oct 08, 2020",
        order: "312445984",
        details: "Cartoon Mobile Emoji Phone Pack",
        color: "success",
        amount: "$76.00",
        status: {
          label: "Pending",
          state: "warning",
        },
      },
      {
        date: "May 30, 2020",
        order: "523445943",
        details: "Seller Fee",
        color: "danger",
        amount: "$-1.30",
        status: {
          label: "Pending",
          state: "warning",
        },
      },
      {
        date: "Apr 22, 2020",
        order: "231445943",
        details: "Parcel Shipping / Delivery Service App",
        color: "success",
        amount: "$204.00",
        status: {
          label: "Pending",
          state: "warning",
        },
      },
    ]);
    const tableData4 = ref([
      {
        date: "Nov 01, 2020",
        order: "102445788",
        details: "Darknight transparency  36 Icons Pack",
        color: "success",
        amount: "$38.00",
        status: {
          label: "Pending",
          state: "warning",
        },
      },
      {
        date: "Oct 24, 2020",
        order: "423445721",
        details: "Seller Fee",
        color: "danger",
        amount: "$-2.60",
        status: {
          label: "Pending",
          state: "warning",
        },
      },
      {
        date: "Nov 01, 2020",
        order: "102445788",
        details: "Darknight transparency  36 Icons Pack",
        color: "success",
        amount: "$38.00",
        status: {
          label: "Pending",
          state: "warning",
        },
      },
      {
        date: "Oct 24, 2020",
        order: "423445721",
        details: "Seller Fee",
        color: "danger",
        amount: "$-2.60",
        status: {
          label: "Pending",
          state: "warning",
        },
      },
      {
        date: "Feb 09, 2020",
        order: "426445943",
        details: "Visual Design Illustration",
        color: "success",
        amount: "$31.00",
        status: {
          label: "Pending",
          state: "warning",
        },
      },
      {
        date: "Nov 01, 2020",
        order: "984445943",
        details: "Abstract Vusial Pack",
        color: "success",
        amount: "$52.00",
        status: {
          label: "Pending",
          state: "warning",
        },
      },
      {
        date: "Jan 04, 2020",
        order: "324442313",
        details: "Seller Fee",
        color: "danger",
        amount: "$-0.80",
        status: {
          label: "Pending",
          state: "warning",
        },
      },
      {
        date: "Oct 08, 2020",
        order: "312445984",
        details: "Cartoon Mobile Emoji Phone Pack",
        color: "success",
        amount: "$76.00",
        status: {
          label: "Pending",
          state: "warning",
        },
      },
      {
        date: "Oct 08, 2020",
        order: "312445984",
        details: "Cartoon Mobile Emoji Phone Pack",
        color: "success",
        amount: "$76.00",
        status: {
          label: "Pending",
          state: "warning",
        },
      },
    ]);

    return { tableHeader, tableData1, tableData2, tableData3, tableData4 };
  },
});
</script>
