<template>
  <!--begin::Advance Table Widget 10-->
  <div class="card card-custom gutter-b card-stretch">
    <!--begin::Header-->
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark"
          >New Arrivals</span
        >
        <span class="text-muted mt-3 font-weight-bold font-size-sm"
          >More than 400+ new members</span
        >
      </h3>
      <div class="card-toolbar">
        <a href="#" class="btn btn-info font-weight-bolder font-size-sm"
          >New Report</a
        >
      </div>
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body py-0">
      <!--begin::Table-->
      <div class="table-responsive">
        <table
          class="table table-head-custom table-vertical-center"
          id="kt_advance_table_widget_4"
        >
          <thead>
            <tr class="text-left">
              <th class="pl-0" style="width: 30px">
                <label class="checkbox checkbox-lg checkbox-single mr-2">
                  <input
                    type="checkbox"
                    @input="setCheck($event.target.checked)"
                  />
                  <span></span>
                </label>
              </th>
              <th class="pl-0" style="min-width: 120px">Order id</th>
              <th style="min-width: 110px">Country</th>
              <th style="min-width: 110px">
                <span class="text-info">Date</span>
                <span class="svg-icon svg-icon-sm svg-icon-primary">
                  <!--begin::Svg Icon | path:assets/media/svg/icons/Navigation/Down-2.svg-->
                  <inline-svg
                    src="media/svg/icons/Navigation/Down-2.svg"
                  ></inline-svg>
                  <!--end::Svg Icon-->
                </span>
              </th>
              <th style="min-width: 120px">Company</th>
              <th style="min-width: 120px">Status</th>
              <th class="pr-0 text-right" style="min-width: 160px">Action</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(item, i) in list">
              <tr v-bind:key="i">
                <td class="pl-0 py-6">
                  <label class="checkbox checkbox-lg checkbox-single">
                    <input type="checkbox" :value="i" :checked="checked" />
                    <span></span>
                  </label>
                </td>
                <td class="pl-0">
                  <a
                    href="#"
                    class="text-dark-75 font-weight-bolder text-hover-primary font-size-lg"
                    >{{ item.order_id }}</a
                  >
                </td>
                <td>
                  <span
                    class="text-dark-75 font-weight-bolder d-block font-size-lg"
                    >{{ item.country }}</span
                  >
                  <span class="text-muted font-weight-bold">{{
                    item.country_desc
                  }}</span>
                </td>
                <td>
                  <span
                    class="text-info font-weight-bolder d-block font-size-lg"
                    >{{ item.date }}</span
                  >
                  <span class="text-muted font-weight-bold">{{
                    item.date_desc
                  }}</span>
                </td>
                <td>
                  <span
                    class="text-dark-75 font-weight-bolder d-block font-size-lg"
                    >{{ item.company }}</span
                  >
                  <span class="text-muted font-weight-bold">{{
                    item.company_desc
                  }}</span>
                </td>
                <td>
                  <span
                    class="label label-lg label-inline"
                    v-bind:class="`label-light-${item.class}`"
                    >{{ item.status }}</span
                  >
                </td>
                <td class="pr-0 text-right">
                  <a
                    href="#"
                    class="btn btn-icon btn-light btn-hover-primary btn-sm"
                  >
                    <span class="svg-icon svg-icon-md svg-icon-primary">
                      <!--begin::Svg Icon | path:assets/media/svg/icons/General/Settings-1.svg-->
                      <inline-svg
                        src="media/svg/icons/General/Settings-1.svg"
                      ></inline-svg>
                      <!--end::Svg Icon-->
                    </span>
                  </a>
                  <a
                    href="#"
                    class="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
                  >
                    <span class="svg-icon svg-icon-md svg-icon-primary">
                      <!--begin::Svg Icon | path:assets/media/svg/icons/Communication/Write.svg-->
                      <inline-svg
                        src="media/svg/icons/Communication/Write.svg"
                      ></inline-svg>
                      <!--end::Svg Icon-->
                    </span>
                  </a>
                  <a
                    href="#"
                    class="btn btn-icon btn-light btn-hover-primary btn-sm"
                  >
                    <span class="svg-icon svg-icon-md svg-icon-primary">
                      <!--begin::Svg Icon | path:assets/media/svg/icons/General/Trash.svg-->
                      <inline-svg
                        src="media/svg/icons/General/Trash.svg"
                      ></inline-svg>
                      <!--end::Svg Icon-->
                    </span>
                  </a>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
      <!--end::Table-->
    </div>
    <!--end::Body-->
  </div>
  <!--end::Advance Table Widget 10-->
</template>

<script>
export default {
  name: "widget-2",
  data() {
    return {
      checked: false,
      list: [
        {
          order_id: "56037-XDER",
          country: "Brasil",
          country_desc: "Code: BR",
          date: "05/28/2020",
          date_desc: "Paid",
          company: "Intertico",
          company_desc: "Web, UI/UX Design",
          class: "primary",
          status: "Approved"
        },
        {
          order_id: "05822-FXSP",
          country: "Belarus",
          country_desc: "Code: BY",
          date: "02/04/2020",
          date_desc: "Rejected",
          company: "Agoda",
          company_desc: "Houses & Hotels",
          class: "warning",
          status: "In Progress"
        },
        {
          order_id: "00347-BCLQ",
          country: "Phillipines",
          country_desc: "Code: PH",
          date: "23/12/2020",
          date_desc: "Paid",
          company: "RoadGee",
          company_desc: "Transportation",
          class: "success",
          status: "Success"
        },
        {
          order_id: "4472-QREX",
          country: "Argentina",
          country_desc: "Code: AR",
          date: "17/09/2021",
          date_desc: "Pending",
          company: "The Hill",
          company_desc: "Insurance",
          class: "danger",
          status: "Danger"
        }
      ]
    };
  },
  components: {},
  methods: {
    setCheck(check) {
      if (check) {
        this.checked = check;
      } else {
        this.checked = false;
      }
    }
  }
};
</script>
