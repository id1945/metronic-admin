<template>
  <div class="card card-custom card-stretch gutter-b">
    <!--begin::Header-->
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark"
          >Agents Stats</span
        >
        <span class="text-muted mt-3 font-weight-bold font-size-sm"
          >More than 400+ new members</span
        >
      </h3>
      <div class="card-toolbar">
        <a href="#" class="btn btn-info font-weight-bolder font-size-sm mr-3"
          >New Arrivals</a
        >
        <a href="#" class="btn btn-danger font-weight-bolder font-size-sm"
          >Create</a
        >
      </div>
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body pt-0 pb-3">
      <div class="tab-content">
        <!--begin::Table-->
        <div class="table-responsive">
          <table
            class="table table-head-custom table-vertical-center table-head-bg table-borderless"
          >
            <thead>
              <tr class="text-left">
                <th style="min-width: 250px" class="pl-7">
                  <span class="text-dark-75">products</span>
                </th>
                <th style="min-width: 120px">earnings</th>
                <th style="min-width: 100px">comission</th>
                <th style="min-width: 100px">company</th>
                <th style="min-width: 100px">rating</th>
                <th style="min-width: 100px"></th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(item, i) in list">
                <tr v-bind:key="i">
                  <td class="pl-0 py-8">
                    <div class="d-flex align-items-center">
                      <div class="symbol symbol-50 symbol-light mr-4">
                        <span class="symbol-label">
                          <img
                            :src="item.img"
                            class="h-75 align-self-end"
                            alt=""
                          />
                        </span>
                      </div>
                      <div>
                        <a
                          href="#"
                          class="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                          >{{ item.name }}</a
                        >
                        <span class="text-muted font-weight-bold d-block">{{
                          item.desc
                        }}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span
                      class="text-dark-75 font-weight-bolder d-block font-size-lg"
                      >{{ item.paid }}</span
                    >
                    <span class="text-muted font-weight-bold">{{
                      item.status
                    }}</span>
                  </td>
                  <td>
                    <span
                      class="text-dark-75 font-weight-bolder d-block font-size-lg"
                      >{{ item.amount }}</span
                    >
                    <span class="text-muted font-weight-bold">{{
                      item.status2
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
                    <img
                      src="media/logos/stars.png"
                      alt="image"
                      style="width: 5rem"
                    />
                    <span class="text-muted font-weight-bold d-block">{{
                      item.rate
                    }}</span>
                  </td>
                  <td class="pr-0 text-right">
                    <a
                      href="#"
                      class="btn btn-light-success font-weight-bolder font-size-sm"
                      >View Offer</a
                    >
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
        <!--end::Table-->
      </div>
    </div>
    <!--end::Body-->
  </div>
</template>

<script>
export default {
  name: "widget-3",
  data() {
    return {
      list: [
        {
          img: "media/svg/avatars/001-boy.svg",
          name: "Brad Simmons",
          desc: "HTML, JS, ReactJS",
          paid: "$8,000,000",
          status: "In Proccess",
          status2: "Paid",
          amount: "$520",
          company: "Intertico",
          company_desc: "Web, UI/UX Design",
          rate: "Best Rated"
        },
        {
          img: "media/svg/avatars/018-girl-9.svg",
          name: "Jessie Clarcson",
          desc: "C#, ASP.NET, MS SQL",
          paid: "$23,000,000",
          status: "Pending",
          status2: "Rejected",
          amount: "$1,600",
          company: "Agoda",
          company_desc: "Houses & Hotels",
          rate: "Above Average"
        },
        {
          img: "media/svg/avatars/014-girl-7.svg",
          name: "Lebron Wayde",
          desc: "PHP, Laravel, VueJS",
          paid: "$2,600,000",
          status: "Paid",
          status2: "Paid",
          amount: "$6,700",
          company: "RoadGee",
          company_desc: "Transportation",
          rate: "Best Rated"
        },
        {
          img: "media/svg/avatars/047-girl-25.svg",
          name: "Natali Trump",
          desc: "Python, PostgreSQL, ReactJS",
          paid: "$2,600,000",
          status: "Paid",
          status2: "Pending",
          amount: "$14,000",
          company: "The Hill",
          company_desc: "Insurance",
          rate: "Average"
        }
      ]
    };
  }
};
</script>
