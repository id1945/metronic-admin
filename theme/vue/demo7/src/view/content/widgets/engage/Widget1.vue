<template>
  <div class="card card-custom gutter-b card-stretch card-shadowless">
    <div class="card-body p-0 d-flex">
      <div
        class="d-flex align-items-start justify-content-start flex-grow-1 bg-light-warning p-8 card-rounded flex-grow-1 position-relative"
      >
        <div class="d-flex flex-column align-items-start flex-grow-1 h-100">
          <div class="p-1 flex-grow-1">
            <h4 class="text-warning font-weight-bolder">30 Days Free Trial</h4>
            <p class="text-dark-50 font-weight-bold mt-3">
              Pay 0$ for the First Month
            </p>
          </div>
          <a href="#" class="btn btn-link btn-link-warning font-weight-bold"
            >Create Report
            <span class="svg-icon svg-icon-lg svg-icon-warning">
              <inline-svg
                src="media/svg/icons/Navigation/Arrow-right.svg"
              /> </span
          ></a>
        </div>
        <div class="position-absolute right-0 bottom-0 mr-5 overflow-hidden">
          <img
            src="media/svg/humans/custom-13.svg"
            class="max-h-200px max-h-xl-275px mb-n20"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "widget-1"
};
</script>
