<template>
  <!--begin::Section-->
  <div class="py-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5" id="flush-table">
      <a href="#cell-spacing"></a>
      Flush Table
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Use <code>.table-flush</code>&nbsp; to reset the table and cells base
      styles so then style the cells individually.
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="my-5">
      <table class="table table-rounded table-flush">
        <thead>
          <tr
            class="fw-bold fs-7 text-danger border-bottom border-gray-200 py-4"
          >
            <th>Name</th>
            <th>Position</th>
            <th>Office</th>
            <th>Age</th>
            <th>Start date</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          <tr class="py-5 fw-bold border-bottom border-gray-300 fs-5">
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
          </tr>
          <tr class="py-5 fw-bolder border-bottom border-gray-400 fs-4">
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
          </tr>
          <tr class="py-5 fw-boldest border-bottom border-gray-500 fs-3">
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
      <CodeHighlighter lang="html"
        >{{`
        <table class="table table-rounded table-flush">
          <thead>
            <tr
              class="
                fw-bold
                fs-7
                text-danger
                border-bottom border-gray-200
                py-4
              "
            >
              <th>Name</th>
              <th>Position</th>
              <th>Office</th>
              <th>Age</th>
              <th>Start date</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            <tr class="py-5 fw-bold border-bottom border-gray-300 fs-5">
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011/04/25</td>
              <td>$320,800</td>
            </tr>
            <tr class="py-5 fw-bolder border-bottom border-gray-400 fs-4">
              <td>Garrett Winters</td>
              <td>Accountant</td>
              <td>Tokyo</td>
              <td>63</td>
              <td>2011/07/25</td>
              <td>$170,750</td>
            </tr>
          </tbody>
        </table>
        `}}</CodeHighlighter
      >
    </div>
    <!--end::Code-->
  </div>
  <!--end::Section-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";

export default defineComponent({
  name: "example-6",
  components: {
    CodeHighlighter,
  },
});
</script>
