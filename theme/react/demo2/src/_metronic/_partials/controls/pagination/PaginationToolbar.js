/* eslint-disable no-unused-vars */
import React from "react";
import {PaginationTotalStandalone} from "react-bootstrap-table2-paginator";

export function PaginationToolbar(props) {
  const { isLoading, paginationProps } = props;
  const {
    sizePerPageList,
    sizePerPage,
    totalSize,
    onSizePerPageChange = [
      { text: "3", value: 3 },
      { text: "5", value: 5 },
      { text: "10", value: 10 }
    ]
  } = paginationProps;
  const style = {
    width: "75px"
  };

  const onSizeChange = event => {
    const newSize = +event.target.value;
    onSizePerPageChange(newSize);
  };

  return (
    <div className="d-flex align-items-center py-3">
      {isLoading && (
        <div className="d-flex align-items-center">
          <div className="mr-2 text-muted">Loading...</div>
          <div className="spinner spinner-primary mr-10"></div>
        </div>
      )}
      <select
        disabled={totalSize === 0}
        className={`form-control form-control-sm font-weight-bold mr-4 border-0 bg-light ${totalSize ===
          0 && "disabled"}`}
        onChange={onSizeChange}
        value={sizePerPage}
        style={style}
      >
        {sizePerPageList.map(option => {
          const isSelect = sizePerPage === `${option.page}`;
          return (
            <option
              key={option.text}
              value={option.page}
              className={`btn ${isSelect ? "active" : ""}`}
            >
              {option.text}
            </option>
          );
        })}
      </select>
      <PaginationTotalStandalone className="text-muted" {...paginationProps} />
    </div>
  );
}
