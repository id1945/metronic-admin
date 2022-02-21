<template>
  <div class="card">
    <div class="card-header border-0 pt-6">
      <!--begin::Card title-->
      <div class="card-title">
        <!--begin::Search-->
        <div class="d-flex align-items-center position-relative my-1">
          <span class="svg-icon svg-icon-1 position-absolute ms-6">
            <inline-svg src="media/icons/duotune/general/gen021.svg" />
          </span>
          <input
            type="text"
            v-model="search"
            @input="searchItems()"
            class="form-control form-control-solid w-250px ps-15"
            placeholder="Search Customers"
          />
        </div>
        <!--end::Search-->
      </div>
      <!--begin::Card title-->
      <!--begin::Card toolbar-->
      <div class="card-toolbar">
        <!--begin::Toolbar-->
        <div
          v-if="checkedCustomers.length === 0"
          class="d-flex justify-content-end"
          data-kt-customer-table-toolbar="base"
        >
          <!--begin::Export-->
          <button
            type="button"
            class="btn btn-light-primary me-3"
            data-bs-toggle="modal"
            data-bs-target="#kt_customers_export_modal"
          >
            <span class="svg-icon svg-icon-2">
              <inline-svg src="media/icons/duotune/arrows/arr078.svg" />
            </span>
            Export
          </button>
          <!--end::Export-->
          <!--begin::Add customer-->
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#kt_modal_add_customer"
          >
            <span class="svg-icon svg-icon-2">
              <inline-svg src="media/icons/duotone/Navigation/Plus.svg" />
            </span>
            Add Customer
          </button>
          <!--end::Add customer-->
        </div>
        <!--end::Toolbar-->
        <!--begin::Group actions-->
        <div
          v-else
          class="d-flex justify-content-end align-items-center"
          data-kt-customer-table-toolbar="selected"
        >
          <div class="fw-bolder me-5">
            <span class="me-2">{{ checkedCustomers.length }}</span
            >Selected
          </div>
          <button
            type="button"
            class="btn btn-danger"
            @click="deleteFewCustomers()"
          >
            Delete Selected
          </button>
        </div>
        <!--end::Group actions-->
        <!--begin::Group actions-->
        <div
          class="d-flex justify-content-end align-items-center d-none"
          data-kt-customer-table-toolbar="selected"
        >
          <div class="fw-bolder me-5">
            <span
              class="me-2"
              data-kt-customer-table-select="selected_count"
            ></span
            >Selected
          </div>
          <button
            type="button"
            class="btn btn-danger"
            data-kt-customer-table-select="delete_selected"
          >
            Delete Selected
          </button>
        </div>
        <!--end::Group actions-->
      </div>
      <!--end::Card toolbar-->
    </div>
    <div class="card-body pt-0">
      <Datatable
        :table-data="customers"
        :table-header="tableHeader"
        :enable-items-per-page-dropdown="true"
      >
        <template v-slot:cell-checkbox="{ row: customer }">
          <div
            class="form-check form-check-sm form-check-custom form-check-solid"
          >
            <input
              class="form-check-input"
              type="checkbox"
              :value="customer.id"
              v-model="checkedCustomers"
            />
          </div>
        </template>
        <template v-slot:cell-name="{ row: customer }">
          {{ customer.name }}
        </template>
        <template v-slot:cell-email="{ row: customer }">
          <a href="#" class="text-gray-600 text-hover-primary mb-1">
            {{ customer.email }}
          </a>
        </template>
        <template v-slot:cell-company="{ row: customer }">
          {{ customer.company }}
        </template>
        <template v-slot:cell-paymentMethod="{ row: customer }">
          <img :src="customer.payment.icon" class="w-35px me-3" alt="" />{{
            customer.payment.ccnumber
          }}
        </template>
        <template v-slot:cell-date="{ row: customer }">
          {{ customer.date }}
        </template>
        <template v-slot:cell-actions="{ row: customer }">
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
              <a @click="deleteCustomer(customer.id)" class="menu-link px-3"
                >Delete</a
              >
            </div>
            <!--end::Menu item-->
          </div>
          <!--end::Menu-->
        </template>
      </Datatable>
    </div>
  </div>

  <ExportCustomerModal></ExportCustomerModal>
  <AddCustomerModal></AddCustomerModal>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import Datatable from "@/components/kt-datatable/Datatable.vue";
import ExportCustomerModal from "@/components/modals/forms/ExportCustomerModal.vue";
import AddCustomerModal from "@/components/modals/forms/AddCustomerModal.vue";
import { MenuComponent } from "@/assets/ts/components";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";

interface ICustomer {
  id: number;
  name: string;
  email: string;
  company: string;
  payment: {
    icon: string;
    ccnumber: string;
    label: string;
  };
  date: string;
}

export default defineComponent({
  name: "customers-listing",
  components: {
    Datatable,
    ExportCustomerModal,
    AddCustomerModal,
  },
  setup() {
    const checkedCustomers = ref([]);
    const tableHeader = ref([
      {
        key: "checkbox",
      },
      {
        name: "Customer Name",
        key: "name",
        sortable: true,
      },
      {
        name: "Email",
        key: "email",
        sortable: true,
      },
      {
        name: "Company",
        key: "company",
        sortable: true,
      },
      {
        name: "Payment Method",
        key: "paymentMethod",
        sortingField: "payment.label",
        sortable: true,
      },
      {
        name: "Created Date",
        key: "date",
        sortable: true,
      },
      {
        name: "Actions",
        key: "actions",
      },
    ]);

    const customers = ref<Array<ICustomer>>([
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Emma Smith",
        email: "e.smith@kpmg.com.au",
        company: "-",
        payment: {
          icon: "media/svg/card-logos/mastercard.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "mastercard",
        },
        date: "14 Dec 2020, 8:43 pm",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Melody Macy",
        email: "melody@altbox.com",
        company: "Google",
        payment: {
          icon: "media/svg/card-logos/visa.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "visa",
        },
        date: "01 Dec 2020, 10:12 am",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Max Smith",
        email: "max@kt.com",
        company: "Bistro Union",
        payment: {
          icon: "media/svg/card-logos/mastercard.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "mastercard",
        },
        date: "12 Nov 2020, 2:01 pm",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Sean Bean",
        email: "sean@dellito.com",
        company: "Astro Limited",
        payment: {
          icon: "media/svg/card-logos/american-express.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "american_express",
        },
        date: "21 Oct 2020, 5:54 pm",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Brian Cox",
        email: "brian@exchange.com",
        company: "-",
        payment: {
          icon: "media/svg/card-logos/visa.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "visa",
        },
        date: "19 Oct 2020, 7:32 am",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Mikaela Collins",
        email: "mikaela@pexcom.com",
        company: "Keenthemes",
        payment: {
          icon: "media/svg/card-logos/american-express.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "american_express",
        },
        date: "23 Sep 2020, 12:37 am",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Francis Mitcham",
        email: "f.mitcham@kpmg.com.au",
        company: "Paypal",
        payment: {
          icon: "media/svg/card-logos/mastercard.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "mastercard",
        },
        date: "11 Sep 2020, 3:15 pm",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Olivia Wild",
        email: "olivia@corpmail.com",
        company: "-",
        payment: {
          icon: "media/svg/card-logos/american-express.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "american_express",
        },
        date: "03 Sep 2020, 1:08 am",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Neil Owen",
        email: "owen.neil@gmail.com",
        company: "Paramount",
        payment: {
          icon: "media/svg/card-logos/visa.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "visa",
        },
        date: "01 Sep 2020, 4:58 pm",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Dan Wilson",
        email: "dam@consilting.com",
        company: "Trinity Studio",
        payment: {
          icon: "media/svg/card-logos/visa.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "visa",
        },
        date: "18 Aug 2020, 3:34 pm",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Emma Bold",
        email: "emma@intenso.com",
        company: "B&T Legal Services",
        payment: {
          icon: "media/svg/card-logos/mastercard.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "mastercard",
        },
        date: "14 Aug 2020, 1:21 pm",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Ana Crown",
        email: "ana.cf@limtel.com",
        company: "Paysafe Security",
        payment: {
          icon: "media/svg/card-logos/american-express.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "american_express",
        },
        date: "11 Aug 2020, 5:13 pm",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Emma Smith",
        email: "e.smith@kpmg.com.au",
        company: "-",
        payment: {
          icon: "media/svg/card-logos/mastercard.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "mastercard",
        },
        date: "14 Dec 2020, 8:43 pm",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Melody Macy",
        email: "melody@altbox.com",
        company: "Google",
        payment: {
          icon: "media/svg/card-logos/visa.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "visa",
        },
        date: "01 Dec 2020, 10:12 am",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Max Smith",
        email: "max@kt.com",
        company: "Bistro Union",
        payment: {
          icon: "media/svg/card-logos/mastercard.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "mastercard",
        },
        date: "12 Nov 2020, 2:01 pm",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Sean Bean",
        email: "sean@dellito.com",
        company: "Astro Limited",
        payment: {
          icon: "media/svg/card-logos/american-express.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "american_express",
        },
        date: "21 Oct 2020, 5:54 pm",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Brian Cox",
        email: "brian@exchange.com",
        company: "-",
        payment: {
          icon: "media/svg/card-logos/visa.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "visa",
        },
        date: "19 Oct 2020, 7:32 am",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Mikaela Collins",
        email: "mikaela@pexcom.com",
        company: "Keenthemes",
        payment: {
          icon: "media/svg/card-logos/american-express.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "american_express",
        },
        date: "23 Sep 2020, 12:37 am",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Francis Mitcham",
        email: "f.mitcham@kpmg.com.au",
        company: "Paypal",
        payment: {
          icon: "media/svg/card-logos/mastercard.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "mastercard",
        },
        date: "11 Sep 2020, 3:15 pm",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Olivia Wild",
        email: "olivia@corpmail.com",
        company: "-",
        payment: {
          icon: "media/svg/card-logos/american-express.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "american_express",
        },
        date: "03 Sep 2020, 1:08 am",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Neil Owen",
        email: "owen.neil@gmail.com",
        company: "Paramount",
        payment: {
          icon: "media/svg/card-logos/visa.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "visa",
        },
        date: "01 Sep 2020, 4:58 pm",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Dan Wilson",
        email: "dam@consilting.com",
        company: "Trinity Studio",
        payment: {
          icon: "media/svg/card-logos/visa.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "visa",
        },
        date: "18 Aug 2020, 3:34 pm",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Emma Bold",
        email: "emma@intenso.com",
        company: "B&T Legal Services",
        payment: {
          icon: "media/svg/card-logos/mastercard.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "mastercard",
        },
        date: "14 Aug 2020, 1:21 pm",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Ana Crown",
        email: "ana.cf@limtel.com",
        company: "Paysafe Security",
        payment: {
          icon: "media/svg/card-logos/american-express.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "american_express",
        },
        date: "11 Aug 2020, 5:13 pm",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Emma Smith",
        email: "e.smith@kpmg.com.au",
        company: "-",
        payment: {
          icon: "media/svg/card-logos/mastercard.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "mastercard",
        },
        date: "14 Dec 2020, 8:43 pm",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Melody Macy",
        email: "melody@altbox.com",
        company: "Google",
        payment: {
          icon: "media/svg/card-logos/visa.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "visa",
        },
        date: "01 Dec 2020, 10:12 am",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Max Smith",
        email: "max@kt.com",
        company: "Bistro Union",
        payment: {
          icon: "media/svg/card-logos/mastercard.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "mastercard",
        },
        date: "12 Nov 2020, 2:01 pm",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Sean Bean",
        email: "sean@dellito.com",
        company: "Astro Limited",
        payment: {
          icon: "media/svg/card-logos/american-express.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "american_express",
        },
        date: "21 Oct 2020, 5:54 pm",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Brian Cox",
        email: "brian@exchange.com",
        company: "-",
        payment: {
          icon: "media/svg/card-logos/visa.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "visa",
        },
        date: "19 Oct 2020, 7:32 am",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Mikaela Collins",
        email: "mikaela@pexcom.com",
        company: "Keenthemes",
        payment: {
          icon: "media/svg/card-logos/american-express.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "american_express",
        },
        date: "23 Sep 2020, 12:37 am",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Francis Mitcham",
        email: "f.mitcham@kpmg.com.au",
        company: "Paypal",
        payment: {
          icon: "media/svg/card-logos/mastercard.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "mastercard",
        },
        date: "11 Sep 2020, 3:15 pm",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Olivia Wild",
        email: "olivia@corpmail.com",
        company: "-",
        payment: {
          icon: "media/svg/card-logos/american-express.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "american_express",
        },
        date: "03 Sep 2020, 1:08 am",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Neil Owen",
        email: "owen.neil@gmail.com",
        company: "Paramount",
        payment: {
          icon: "media/svg/card-logos/visa.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "visa",
        },
        date: "01 Sep 2020, 4:58 pm",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Dan Wilson",
        email: "dam@consilting.com",
        company: "Trinity Studio",
        payment: {
          icon: "media/svg/card-logos/visa.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "visa",
        },
        date: "18 Aug 2020, 3:34 pm",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Emma Bold",
        email: "emma@intenso.com",
        company: "B&T Legal Services",
        payment: {
          icon: "media/svg/card-logos/mastercard.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "mastercard",
        },
        date: "14 Aug 2020, 1:21 pm",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Ana Crown",
        email: "ana.cf@limtel.com",
        company: "Paysafe Security",
        payment: {
          icon: "media/svg/card-logos/american-express.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "american_express",
        },
        date: "11 Aug 2020, 5:13 pm",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Emma Smith",
        email: "e.smith@kpmg.com.au",
        company: "-",
        payment: {
          icon: "media/svg/card-logos/mastercard.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "mastercard",
        },
        date: "14 Dec 2020, 8:43 pm",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Melody Macy",
        email: "melody@altbox.com",
        company: "Google",
        payment: {
          icon: "media/svg/card-logos/visa.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "visa",
        },
        date: "01 Dec 2020, 10:12 am",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Max Smith",
        email: "max@kt.com",
        company: "Bistro Union",
        payment: {
          icon: "media/svg/card-logos/mastercard.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "mastercard",
        },
        date: "12 Nov 2020, 2:01 pm",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Sean Bean",
        email: "sean@dellito.com",
        company: "Astro Limited",
        payment: {
          icon: "media/svg/card-logos/american-express.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "american_express",
        },
        date: "21 Oct 2020, 5:54 pm",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Brian Cox",
        email: "brian@exchange.com",
        company: "-",
        payment: {
          icon: "media/svg/card-logos/visa.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "visa",
        },
        date: "19 Oct 2020, 7:32 am",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Mikaela Collins",
        email: "mikaela@pexcom.com",
        company: "Keenthemes",
        payment: {
          icon: "media/svg/card-logos/american-express.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "american_express",
        },
        date: "23 Sep 2020, 12:37 am",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Francis Mitcham",
        email: "f.mitcham@kpmg.com.au",
        company: "Paypal",
        payment: {
          icon: "media/svg/card-logos/mastercard.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "mastercard",
        },
        date: "11 Sep 2020, 3:15 pm",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Olivia Wild",
        email: "olivia@corpmail.com",
        company: "-",
        payment: {
          icon: "media/svg/card-logos/american-express.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "american_express",
        },
        date: "03 Sep 2020, 1:08 am",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Neil Owen",
        email: "owen.neil@gmail.com",
        company: "Paramount",
        payment: {
          icon: "media/svg/card-logos/visa.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "visa",
        },
        date: "01 Sep 2020, 4:58 pm",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Dan Wilson",
        email: "dam@consilting.com",
        company: "Trinity Studio",
        payment: {
          icon: "media/svg/card-logos/visa.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "visa",
        },
        date: "18 Aug 2020, 3:34 pm",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Emma Bold",
        email: "emma@intenso.com",
        company: "B&T Legal Services",
        payment: {
          icon: "media/svg/card-logos/mastercard.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "mastercard",
        },
        date: "14 Aug 2020, 1:21 pm",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Ana Crown",
        email: "ana.cf@limtel.com",
        company: "Paysafe Security",
        payment: {
          icon: "media/svg/card-logos/american-express.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "american_express",
        },
        date: "11 Aug 2020, 5:13 pm",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Emma Smith",
        email: "e.smith@kpmg.com.au",
        company: "-",
        payment: {
          icon: "media/svg/card-logos/mastercard.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "mastercard",
        },
        date: "14 Dec 2020, 8:43 pm",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Melody Macy",
        email: "melody@altbox.com",
        company: "Google",
        payment: {
          icon: "media/svg/card-logos/visa.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "visa",
        },
        date: "01 Dec 2020, 10:12 am",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Max Smith",
        email: "max@kt.com",
        company: "Bistro Union",
        payment: {
          icon: "media/svg/card-logos/mastercard.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "mastercard",
        },
        date: "12 Nov 2020, 2:01 pm",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Sean Bean",
        email: "sean@dellito.com",
        company: "Astro Limited",
        payment: {
          icon: "media/svg/card-logos/american-express.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "american_express",
        },
        date: "21 Oct 2020, 5:54 pm",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Brian Cox",
        email: "brian@exchange.com",
        company: "-",
        payment: {
          icon: "media/svg/card-logos/visa.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "visa",
        },
        date: "19 Oct 2020, 7:32 am",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Mikaela Collins",
        email: "mikaela@pexcom.com",
        company: "Keenthemes",
        payment: {
          icon: "media/svg/card-logos/american-express.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "american_express",
        },
        date: "23 Sep 2020, 12:37 am",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Francis Mitcham",
        email: "f.mitcham@kpmg.com.au",
        company: "Paypal",
        payment: {
          icon: "media/svg/card-logos/mastercard.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "mastercard",
        },
        date: "11 Sep 2020, 3:15 pm",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Olivia Wild",
        email: "olivia@corpmail.com",
        company: "-",
        payment: {
          icon: "media/svg/card-logos/american-express.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "american_express",
        },
        date: "03 Sep 2020, 1:08 am",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Neil Owen",
        email: "owen.neil@gmail.com",
        company: "Paramount",
        payment: {
          icon: "media/svg/card-logos/visa.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "visa",
        },
        date: "01 Sep 2020, 4:58 pm",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Dan Wilson",
        email: "dam@consilting.com",
        company: "Trinity Studio",
        payment: {
          icon: "media/svg/card-logos/visa.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "visa",
        },
        date: "18 Aug 2020, 3:34 pm",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Emma Bold",
        email: "emma@intenso.com",
        company: "B&T Legal Services",
        payment: {
          icon: "media/svg/card-logos/mastercard.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "mastercard",
        },
        date: "14 Aug 2020, 1:21 pm",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Ana Crown",
        email: "ana.cf@limtel.com",
        company: "Paysafe Security",
        payment: {
          icon: "media/svg/card-logos/american-express.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "american_express",
        },
        date: "11 Aug 2020, 5:13 pm",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Emma Smith",
        email: "e.smith@kpmg.com.au",
        company: "-",
        payment: {
          icon: "media/svg/card-logos/mastercard.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "mastercard",
        },
        date: "14 Dec 2020, 8:43 pm",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Melody Macy",
        email: "melody@altbox.com",
        company: "Google",
        payment: {
          icon: "media/svg/card-logos/visa.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "visa",
        },
        date: "01 Dec 2020, 10:12 am",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Max Smith",
        email: "max@kt.com",
        company: "Bistro Union",
        payment: {
          icon: "media/svg/card-logos/mastercard.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "mastercard",
        },
        date: "12 Nov 2020, 2:01 pm",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Sean Bean",
        email: "sean@dellito.com",
        company: "Astro Limited",
        payment: {
          icon: "media/svg/card-logos/american-express.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "american_express",
        },
        date: "21 Oct 2020, 5:54 pm",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Brian Cox",
        email: "brian@exchange.com",
        company: "-",
        payment: {
          icon: "media/svg/card-logos/visa.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "visa",
        },
        date: "19 Oct 2020, 7:32 am",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Mikaela Collins",
        email: "mikaela@pexcom.com",
        company: "Keenthemes",
        payment: {
          icon: "media/svg/card-logos/american-express.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "american_express",
        },
        date: "23 Sep 2020, 12:37 am",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Francis Mitcham",
        email: "f.mitcham@kpmg.com.au",
        company: "Paypal",
        payment: {
          icon: "media/svg/card-logos/mastercard.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "mastercard",
        },
        date: "11 Sep 2020, 3:15 pm",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Olivia Wild",
        email: "olivia@corpmail.com",
        company: "-",
        payment: {
          icon: "media/svg/card-logos/american-express.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "american_express",
        },
        date: "03 Sep 2020, 1:08 am",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Neil Owen",
        email: "owen.neil@gmail.com",
        company: "Paramount",
        payment: {
          icon: "media/svg/card-logos/visa.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "visa",
        },
        date: "01 Sep 2020, 4:58 pm",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Dan Wilson",
        email: "dam@consilting.com",
        company: "Trinity Studio",
        payment: {
          icon: "media/svg/card-logos/visa.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "visa",
        },
        date: "18 Aug 2020, 3:34 pm",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Emma Bold",
        email: "emma@intenso.com",
        company: "B&T Legal Services",
        payment: {
          icon: "media/svg/card-logos/mastercard.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "mastercard",
        },
        date: "14 Aug 2020, 1:21 pm",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Ana Crown",
        email: "ana.cf@limtel.com",
        company: "Paysafe Security",
        payment: {
          icon: "media/svg/card-logos/american-express.svg",
          ccnumber:
            "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          label: "american_express",
        },
        date: "11 Aug 2020, 5:13 pm",
      },
    ]);
    const initCustomers = ref<Array<ICustomer>>([]);

    onMounted(() => {
      MenuComponent.reinitialization();
      initCustomers.value.splice(0, customers.value.length, ...customers.value);

      setCurrentPageBreadcrumbs("Customers Listing", ["Apps", "Customers"]);
    });

    const deleteFewCustomers = () => {
      checkedCustomers.value.forEach((item) => {
        deleteCustomer(item);
      });
      checkedCustomers.value.length = 0;
    };

    const deleteCustomer = (id) => {
      for (let i = 0; i < customers.value.length; i++) {
        if (customers.value[i].id === id) {
          customers.value.splice(i, 1);
        }
      }
    };

    const search = ref<string>("");
    const searchItems = () => {
      customers.value.splice(0, customers.value.length, ...initCustomers.value);
      if (search.value !== "") {
        let results: Array<ICustomer> = [];
        for (let j = 0; j < customers.value.length; j++) {
          if (searchingFunc(customers.value[j], search.value)) {
            results.push(customers.value[j]);
          }
        }
        customers.value.splice(0, customers.value.length, ...results);
      }
    };

    const searchingFunc = (obj, value): boolean => {
      for (let key in obj) {
        if (!Number.isInteger(obj[key]) && !(typeof obj[key] === "object")) {
          if (obj[key].indexOf(value) != -1) {
            return true;
          }
        }
      }
      return false;
    };

    return {
      customers,
      tableHeader,
      deleteCustomer,
      search,
      searchItems,
      checkedCustomers,
      deleteFewCustomers,
    };
  },
});
</script>
