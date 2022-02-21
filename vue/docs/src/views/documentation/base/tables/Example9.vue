<template>
  <!--begin::Section-->
  <div class="py-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5" id="nesting">
      <a href="#nesting"></a>
      Nesting
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Border styles, active styles, and table variants are not inherited by
      nested tables.
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="my-5">
      <table
        class="
          table table-striped table-rounded
          border border-gray-300
          table-row-bordered table-row-gray-300
          gy-7
          gs-7
        "
      >
        <thead>
          <tr class="fw-bold fs-4 text-gray-800">
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td colspan="4">
              <table
                class="table table-row-dashed table-row-gray-500 gy-5 gs-5 mb-0"
              >
                <thead>
                  <tr class="fw-bold fs-5 text-gray-800">
                    <th scope="col">Header</th>
                    <th scope="col">Header</th>
                    <th scope="col">Header</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">A</th>
                    <td>First</td>
                    <td>Last</td>
                  </tr>
                  <tr>
                    <th scope="row">B</th>
                    <td>First</td>
                    <td>Last</td>
                  </tr>
                  <tr>
                    <th scope="row">C</th>
                    <td>First</td>
                    <td>Last</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
      <CodeHighlighter lang="html"
        >{{`
        <table
          class="
            table table-striped table-rounded
            border border-gray-300
            table-row-bordered table-row-gray-300
            gy-7
            gs-7
          "
        >
          <thead>
            <tr class="fw-bold fs-4 text-gray-800">
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td colspan="4">
                <table
                  class="
                    table table-row-dashed table-row-gray-500
                    gy-5
                    gs-5
                    mb-0
                  "
                >
                  <thead>
                    <tr class="fw-bold fs-5 text-gray-800">
                      <th scope="col">Header</th>
                      <th scope="col">Header</th>
                      <th scope="col">Header</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">A</th>
                      <td>First</td>
                      <td>Last</td>
                    </tr>
                    <tr>
                      <th scope="row">B</th>
                      <td>First</td>
                      <td>Last</td>
                    </tr>
                    <tr>
                      <th scope="row">C</th>
                      <td>First</td>
                      <td>Last</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
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
  name: "example-9",
  components: {
    CodeHighlighter,
  },
});
</script>
