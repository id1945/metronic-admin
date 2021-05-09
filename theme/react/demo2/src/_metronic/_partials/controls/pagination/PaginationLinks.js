/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { getPages, getPagesCount } from "../../../_helpers";

export function PaginationLinks({ paginationProps }) {
  const { totalSize, sizePerPage, page, paginationSize } = paginationProps;
  const pagesCount = getPagesCount(totalSize, sizePerPage);
  const pages = getPages(page, pagesCount, paginationSize);
  const handleFirstPage = ({ onPageChange }) => {
    onPageChange(1);
  };

  const handlePrevPage = ({ page, onPageChange }) => {
    onPageChange(page - 1);
  };

  const handleNextPage = ({ page, onPageChange }) => {
    if (page < pagesCount) {
      onPageChange(page + 1);
    }
  };

  const handleLastPage = ({ onPageChange }) => {
    onPageChange(pagesCount);
  };

  const handleSelectedPage = ({ onPageChange }, pageNum) => {
    onPageChange(pageNum);
  };

  const disabledClass = pagesCount > 1 ? "" : "disabled";
  return (
    <>
      {pagesCount < 2 && <></>}
      {pagesCount > 1 && (
        <>
          <div className={`d-flex flex-wrap py-2 mr-3 ${disabledClass}`}>
            <a
              onClick={() => handleFirstPage(paginationProps)}
              className="btn btn-icon btn-sm btn-light btn-hover-primary mr-2 my-1"
            >
              <i className="ki ki-bold-double-arrow-back icon-xs" />
            </a>
            <a
              onClick={() => handlePrevPage(paginationProps)}
              className="btn btn-icon btn-sm btn-light btn-hover-primary mr-2 my-1"
            >
              <i className="ki ki-bold-arrow-back icon-xs" />
            </a>

            {page > 1 && (
              <a className="btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1">
                ...
              </a>
            )}
            {pages.map((p) => (
              <a
                key={p}
                onClick={() => handleSelectedPage(paginationProps, p)}
                className={`btn btn-icon btn-sm border-0 btn-light ${
                  page === p ? " btn-hover-primary active" : ""
                } mr-2 my-1`}
              >
                {p}
              </a>
            ))}
            {page < pagesCount && (
              <a className="btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1">
                ...
              </a>
            )}
            <a
              onClick={() => handleNextPage(paginationProps)}
              className="btn btn-icon btn-sm btn-light btn-hover-primary mr-2 my-1"
            >
              <i className="ki ki-bold-arrow-next icon-xs"></i>
            </a>
            <a
              onClick={() => handleLastPage(paginationProps)}
              className="btn btn-icon btn-sm btn-light btn-hover-primary mr-2 my-1"
            >
              <i className="ki ki-bold-double-arrow-next icon-xs"></i>
            </a>
          </div>
        </>
      )}
    </>
  );
}
