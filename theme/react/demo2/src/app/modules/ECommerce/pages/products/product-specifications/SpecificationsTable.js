// React bootstrap table next =>
// DOCS: https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/
// STORYBOOK: https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html
import React, { useEffect, useMemo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import * as actions from "../../../_redux/specifications/specificationsActions";
import { ActionsColumnFormatter } from "./column-formatters/ActionsColumnFormatter";
import * as uiHelpers from "./SpecificationsUIHelper";
import { Pagination } from "../../../../../../_metronic/_partials/controls";
import {
  getSelectRow,
  getHandlerTableChange,
  NoRecordsFoundMessage,
  PleaseWaitMessage,
  sortCaret,
} from "../../../../../../_metronic/_helpers";
import { useSpecificationsUIContext } from "./SpecificationsUIContext";

export function SpecificationsTable() {
  // Specs UI Context
  const specsUIContext = useSpecificationsUIContext();
  const specsUIProps = useMemo(() => {
    return {
      queryParams: specsUIContext.queryParams,
      setQueryParams: specsUIContext.setQueryParams,
      openEditSpecificationDialog: specsUIContext.openEditSpecificationDialog,
      openDeleteSpecificationDialog:
        specsUIContext.openDeleteSpecificationDialog,
      ids: specsUIContext.ids,
      setIds: specsUIContext.setIds,
      productId: specsUIContext.productId,
    };
  }, [specsUIContext]);

  // Specs Redux state
  // Getting curret state of products list from store (Redux)
  const { currentState } = useSelector(
    (state) => ({ currentState: state.specifications }),
    shallowEqual
  );
  const { totalCount, entities, listLoading } = currentState;
  const dispatch = useDispatch();
  useEffect(() => {
    specsUIProps.setIds([]);
    dispatch(
      actions.fetchSpecifications(specsUIProps.queryParams,specsUIProps.productId)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [specsUIProps.queryParams, dispatch, specsUIProps.productId]);

  const columns = [
    {
      dataField: "name",
      text: "Specification Type",
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: "value",
      text: "Value",
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: "action",
      text: "Actions",
      formatter: ActionsColumnFormatter,
      formatExtraData: {
        openEditSpecificationDialog: specsUIProps.openEditSpecificationDialog,
        openDeleteSpecificationDialog:
          specsUIProps.openDeleteSpecificationDialog,
      },
      classes: "text-right pr-0",
      headerClasses: "text-right pr-3",
      style: {
        minWidth: "100px",
      },
    },
  ];
  // Table pagination properties
  const paginationOptions = {
    custom: true,
    totalSize: totalCount,
    sizePerPageList: uiHelpers.sizePerPageList,
    sizePerPage: specsUIProps.queryParams.pageSize,
    page: specsUIProps.queryParams.pageNumber,
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
                  specsUIProps.setQueryParams
                )}
                selectRow={getSelectRow({
                  entities,
                  ids: specsUIProps.ids,
                  setIds: specsUIProps.setIds,
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
