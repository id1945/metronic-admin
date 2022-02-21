<template>
  <!--begin::Campaigns toolbar-->
  <div class="d-flex flex-wrap flex-stack my-5">
    <!--begin::Title-->
    <h2 class="fw-bold my-2">
      Campaigns
      <span class="fs-4 text-gray-400 ms-1">30 Days</span>
    </h2>
    <!--end::Title-->

    <!--begin::Controls-->
    <div class="d-flex align-items-center my-2">
      <!--begin::Select wrapper-->
      <div class="w-100px me-5">
        <!--begin::Select-->
        <select
          name="status"
          data-control="select2"
          data-hide-search="true"
          class="form-select form-select-white form-select-sm"
        >
          <option value="1" selected>30 Days</option>
          <option value="2">90 Days</option>
          <option value="3">6 Months</option>
          <option value="4">1 Year</option>
        </select>
        <!--end::Select-->
      </div>
      <!--end::Select wrapper-->

      <button
        class="btn btn-primary btn-sm"
        data-bs-toggle="tooltip"
        title="Coming soon"
      >
        Plan Campaigns
      </button>
    </div>
    <!--end::Controls-->
  </div>
  <!--end::Campaigns toolbar-->
  <div class="row g-6 g-xl-9">
    <div class="col-sm-6 col-xl-4">
      <div class="card h-100">
        <Card2
          card-classes="h-100"
          title="Twitch Posts"
          icon="media/svg/brand-logos/twitch.svg"
          content="$500.00"
          color="success"
          arrow="Up-right"
          footer-data="+40.5%"
          footer-text="more impressions"
          indicator-value="0.5%"
          indicator-label="MRR"
        ></Card2>
      </div>
    </div>
    <div class="col-sm-6 col-xl-4">
      <div class="card h-100">
        <Card2
          card-classes="h-100"
          title="Twitter Followers"
          icon="media/svg/brand-logos/twitter.svg"
          content="807k"
          color="success"
          arrow="Up-right"
          footer-data="+17.62%"
          footer-text="Followers growth"
          indicator-label="New trials"
          indicator-value="5%"
        ></Card2>
      </div>
    </div>
    <div class="col-sm-6 col-xl-4">
      <div class="card h-100">
        <Card2
          card-classes="h-100"
          title="Spotify Listeners"
          icon="media/svg/brand-logos/spotify.svg"
          content="1,073"
          color="danger"
          arrow="Down-left"
          footer-data="+10.45%"
          footer-text="Less comments than usual"
          indicator-label="Impressions"
          indicator-value="40%"
        ></Card2>
      </div>
    </div>
    <div class="col-sm-6 col-xl-4">
      <div class="card h-100">
        <Card2
          card-classes="h-100"
          title="Pinterest Posts"
          icon="media/svg/brand-logos/pinterest-p.svg"
          content="97"
          color="success"
          arrow="Up-right"
          footer-data="+26.1%"
          footer-text="More posts"
          indicator-label="Spend"
          indicator-value="10%"
        ></Card2>
      </div>
    </div>
    <div class="col-sm-6 col-xl-4">
      <div class="card h-100">
        <Card2
          card-classes="h-100"
          title="Github Contributes"
          icon="media/svg/brand-logos/github.svg"
          content="4,109"
          color="danger"
          arrow="Down-left"
          footer-data="+32.8%"
          footer-text="Less contributions"
          indicator-label="Dispute"
          indicator-value="40%"
        ></Card2>
      </div>
    </div>
    <div class="col-sm-6 col-xl-4">
      <div class="card h-100">
        <Card2
          card-classes="h-100"
          title="Youtube Subscribers"
          icon="media/svg/brand-logos/youtube-3.svg"
          content="354"
          color="success"
          arrow="Up-right"
          footer-data="+29.45%"
          footer-text="Subscribers growth"
          indicator-label="Subscribers"
          indicator-value="40%"
        ></Card2>
      </div>
    </div>
    <div class="col-sm-6 col-xl-4">
      <div class="card h-100">
        <Card2
          card-classes="h-100"
          title="Telegram Posts"
          icon="media/svg/brand-logos/telegram.svg"
          content="566"
          color="success"
          arrow="Up-right"
          footer-data="+11.4%"
          footer-text="more clicks"
          indicator-label="Profit"
          indicator-value="40%"
        ></Card2>
      </div>
    </div>
    <div class="col-sm-6 col-xl-4">
      <div class="card h-100">
        <Card2
          card-classes="h-100"
          title="Reddit Awards"
          icon="media/svg/brand-logos/reddit.svg"
          content="2.1M"
          color="success"
          arrow="Up-right"
          footer-data="-46.7%"
          footer-text="more adds"
          indicator-label="Retention"
          indicator-value="0.0%"
        ></Card2>
      </div>
    </div>
  </div>

  <!--begin::Pagination-->
  <div class="d-flex flex-stack flex-wrap pt-10">
    <div class="fs-6 fw-bold text-gray-700">Showing 1 to 10 of 50 entries</div>

    <!--begin::Pages-->
    <ul class="pagination">
      <li class="page-item previous">
        <a href="#" class="page-link"><i class="previous"></i></a>
      </li>

      <li class="page-item active">
        <a href="#" class="page-link">1</a>
      </li>

      <li class="page-item">
        <a href="#" class="page-link">2</a>
      </li>

      <li class="page-item">
        <a href="#" class="page-link">3</a>
      </li>

      <li class="page-item">
        <a href="#" class="page-link">4</a>
      </li>

      <li class="page-item">
        <a href="#" class="page-link">5</a>
      </li>

      <li class="page-item">
        <a href="#" class="page-link">6</a>
      </li>

      <li class="page-item next">
        <a href="#" class="page-link"><i class="next"></i></a>
      </li>
    </ul>
    <!--end::Pages-->
  </div>
  <!--end::Pagination-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Card2 from "@/components/cards/Card2.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";

export default defineComponent({
  name: "campaigns",
  components: {
    Card2,
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Campaigns", ["Pages", "Profile"]);
    });
  },
});
</script>
