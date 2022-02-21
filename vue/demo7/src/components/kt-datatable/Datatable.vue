<template>
  <div class="dataTables_wrapper dt-bootstrap4 no-footer">
    <div class="table-responsive">
      <table
        class="
          table
          align-middle
          table-row-dashed
          fs-6
          gy-5
          dataTable
          no-footer
        "
        id="kt_customers_table"
        role="grid"
      >
        <!--begin::Table head-->
        <thead>
          <!--begin::Table row-->
          <tr
            class="text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0"
            role="row"
          >
            <template v-for="(cell, i) in tableHeader" :key="i">
              <th
                @click="
                  sort(
                    cell.sortingField ? cell.sortingField : cell.key,
                    cell.sortable
                  )
                "
                :class="[
                  cell.name && 'min-w-125px',
                  cell.sortable && 'sorting',
                  tableHeader.length - 1 === i && 'text-end',
                  currentSort ===
                    `${cell.sortingField ? cell.sortingField : cell.key}2` &&
                    'sorting_desc',
                  currentSort ===
                    `${cell.sortingField ? cell.sortingField : cell.key}1` &&
                    'sorting_asc',
                ]"
                tabindex="0"
                rowspan="1"
                colspan="1"
                style="cursor: pointer"
              >
                {{ cell.name }}
              </th>
            </template>
          </tr>
          <!--end::Table row-->
        </thead>
        <!--end::Table head-->
        <!--begin::Table body-->
        <tbody class="fw-bold text-gray-600">
          <template v-for="(item, i) in getItems" :key="i">
            <tr class="odd">
              <template v-for="(cell, i) in tableHeader" :key="i">
                <td :class="{ 'text-end': tableHeader.length - 1 === i }">
                  <slot :name="`cell-${cell.key}`" :row="item">
                    {{ item[prop] }}
                  </slot>
                </td>
              </template>
              <!--end::Item=-->
            </tr>
          </template>
        </tbody>
        <!--end::Table body-->
      </table>
    </div>

    <div class="row">
      <div
        class="
          col-sm-12 col-md-5
          d-flex
          align-items-center
          justify-content-center justify-content-md-start
        "
      >
        <div
          v-if="enableItemsPerPageDropdown"
          class="dataTables_length"
          id="kt_customers_table_length"
        >
          <label
            ><select
              name="kt_customers_table_length"
              class="form-select form-select-sm form-select-solid"
              v-model="pagination.rowsPerPage"
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select></label
          >
        </div>
      </div>
      <div
        class="
          col-sm-12 col-md-7
          d-flex
          align-items-center
          justify-content-center justify-content-md-end
        "
      >
        <el-pagination
          background
          layout="prev, pager, next"
          @current-change="setCurrent"
          :hide-on-single-page="true"
          :page-count="pages"
          :page-size="parseInt(pagination.rowsPerPage)"
          :total="pagination.total"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, onMounted, watch } from "vue";
import arraySort from "array-sort";

interface IPagination {
  page: number;
  total: number;
  rowsPerPage: number;
}

export default defineComponent({
  name: "datatable",
  props: {
    tableHeader: { type: Array, required: true },
    tableData: { type: Array, required: true },
    enableItemsPerPageDropdown: Boolean,
    rowsPerPage: Number,
  },
  components: {},
  setup(props) {
    const data = ref(props.tableData);
    const currentSort = ref<string>("");
    const click = ref<number>(1);
    const pagination = ref<IPagination>({
      page: 1,
      total: 0,
      rowsPerPage: 10,
    });

    watch(data.value, () => {
      pagination.value.total = data.value.length;
    });
    onMounted(() => {
      pagination.value.rowsPerPage = props.rowsPerPage ? props.rowsPerPage : 10;
      pagination.value.total = data.value.length;
    });

    const getItems = computed(() => {
      const clone = JSON.parse(JSON.stringify(data.value));
      const startFrom =
        pagination.value.page * pagination.value.rowsPerPage -
        pagination.value.rowsPerPage;
      return clone.splice(startFrom, pagination.value.rowsPerPage);
    });
    const pages = computed(() => {
      return Math.ceil(pagination.value.total / pagination.value.rowsPerPage);
    });
    const setCurrent = (val) => {
      pagination.value.page = val;
    };
    const sort = (columnName, sortable) => {
      if (!sortable) {
        return;
      }

      if (click.value === 2) {
        click.value = 1;
        arraySort(data.value, columnName, { reverse: false });
      } else {
        click.value++;
        arraySort(data.value, columnName, { reverse: true });
      }
      currentSort.value = columnName + click.value;
    };

    return {
      pagination,
      pages,
      setCurrent,
      getItems,
      sort,
      currentSort,
    };
  },
});
</script>

<style lang="scss">
table.dataTable {
  clear: both;
  margin-top: 6px !important;
  margin-bottom: 6px !important;
  max-width: none !important;
  border-collapse: separate !important;
  border-spacing: 0;
}

table.dataTable > thead {
  th.sorting {
    position: relative;
  }
  .sorting:after {
    position: absolute;
  }
}

.el-pagination.is-background .btn-next,
.el-pagination.is-background .btn-prev,
.el-pagination.is-background .el-pager li {
  background: none;
  border-radius: 0.475rem;
  font-weight: 500;
  font-size: 1.075rem;
  font-family: Poppins, Helvetica, sans-serif;
}

.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #009ef7;
}
</style>
