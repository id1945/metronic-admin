// React bootstrap table next =>
// DOCS: https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/
// STORYBOOK: https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html
import React, { useEffect, useMemo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import * as actions from "../../../_redux/remarks/remarksActions";
import { ActionsColumnFormatter } from "./column-formatters/ActionsColumnFormatter";
import * as uiHelpers from "./RemarksUIHelper";
import { Pagination } from "../../../../../../_metronic/_partials/controls";
import {
  getSelectRow,
  getHandlerTableChange,
  NoRecordsFoundMessage,
  PleaseWaitMessage,
  sortCaret,
} from "../../../../../../_metronic/_helpers";
import { useRemarksUIContext } from "./RemarksUIContext";

export function RemarksTable() {
  // Remarks UI Context
  const remarksUIContext = useRemarksUIContext();
  const remarksUIProps = useMemo(() => {
    return {
      ids: remarksUIContext.ids,
      setIds: remarksUIContext.setIds,
      queryParams: remarksUIContext.queryParams,
      setQueryParams: remarksUIContext.setQueryParams,
      productId: remarksUIContext.productId,
      openEditRemarkDialog: remarksUIContext.openEditRemarkDialog,
      openDeleteRemarkDialog: remarksUIContext.openDeleteRemarkDialog,
    };
  }, [remarksUIContext]);

  // Getting curret state of products list from store (Redux)
  const { currentState } = useSelector(
    (state) => ({ currentState: state.remarks }),
    shallowEqual
  );
  const { totalCount, entities, listLoading } = currentState;
  const dispatch = useDispatch();
  useEffect(() => {
    remarksUIProps.setIds([]);
    dispatch(
      actions.fetchRemarks(remarksUIProps.queryParams, remarksUIProps.productId)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remarksUIProps.queryParams, dispatch, remarksUIProps.productId]);
  const columns = [
    {
      dataField: "id",
      text: "ID",
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: "text",
      text: "Text",
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: "dueDate",
      text: "Due date",
      sort: false,
    },
    {
      dataField: "action",
      text: "Actions",
      formatter: ActionsColumnFormatter,
      formatExtraData: {
        openEditRemarkDialog: remarksUIProps.openEditRemarkDialog,
        openDeleteRemarkDialog: remarksUIProps.openDeleteRemarkDialog,
      },
      classes: "text-right pr-0",
      headerClasses: "text-right pr-3",
      style: {
        minWidth: "100px",
      },
    },
  ];

  const paginationOptions = {
    custom: true,
    totalSize: totalCount,
    sizePerPageList: uiHelpers.sizePerPageList,
    sizePerPage: remarksUIProps.queryParams.pageSize,
    page: remarksUIProps.queryParams.pageNumber,
  };
  return (
    <>
      <PaginationProvider pagination={paginationFactory(paginationOptions)}>
        {({ paginationProps, paginationTableProps }) => {
          return (
            <Pagination
              isLoading={listLoading}
              paginationProps={paginationProps}
            >
              <BootstrapTable
                wrapperClasses="table-responsive"
                classes="table table-head-custom table-vertical-center overflow-hidden"
                bordered={false}
                bootstrap4
                remote
                keyField="id"
                data={entities === null ? [] : entities}
                columns={columns}
                defaultSorted={uiHelpers.defaultSorted}
                onTableChange={getHandlerTableChange(
                  remarksUIProps.setQueryParams
                )}
                selectRow={getSelectRow({
                  entities,
                  ids: remarksUIProps.ids,
                  setIds: remarksUIProps.setIds,
                })}
                {...paginationTableProps}
              >
                <PleaseWaitMessage entities={entities} />
                <NoRecordsFoundMessage entities={entities} />
              </BootstrapTable>
            </Pagination>
          );
        }}
      </PaginationProvider>
    </>
  );
}
