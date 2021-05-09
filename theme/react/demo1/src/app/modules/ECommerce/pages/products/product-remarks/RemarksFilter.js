import React, { useMemo } from "react";
import { Formik } from "formik";
import { isEqual } from "lodash";
import { useRemarksUIContext } from "./RemarksUIContext";

const prepareFilter = (queryParams, values) => {
  const { searchText } = values;
  const newQueryParams = { ...queryParams };
  const filter = {};
  filter.text = searchText;
  newQueryParams.filter = filter;
  return newQueryParams;
};

export function RemarksFilter() {
  // Remarks UI Context
  const remarksUIContext = useRemarksUIContext();
  const remarksUIProps = useMemo(() => {
    return {
      setQueryParams: remarksUIContext.setQueryParams,
      openNewRemarkDialog: remarksUIContext.openNewRemarkDialog,
      queryParams: remarksUIContext.queryParams,
    };
  }, [remarksUIContext]);

  const applyFilter = (values) => {
    const newQueryParams = prepareFilter(remarksUIProps.queryParams, values);
    if (!isEqual(newQueryParams, remarksUIProps.queryParams)) {
      newQueryParams.pageNumber = 1;
      remarksUIProps.setQueryParams(newQueryParams);
    }
  };

  return (
    <>
      <div className="form-filtration">
        <div className="row align-items-center">
          <div className="col-md-2 margin-bottom-10-mobile">
            <Formik
              initialValues={{
                searchText: "",
              }}
              onSubmit={(values) => {
                applyFilter(values);
              }}
            >
              {({
                values,
                handleSubmit,
                handleBlur,
                handleChange,
                setFieldValue,
              }) => (
                <form onSubmit={handleSubmit}>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      name="searchText"
                      placeholder="Search"
                      onBlur={handleBlur}
                      value={values.searchText}
                      onChange={(e) => {
                        setFieldValue("searchText", e.target.value);
                        handleSubmit();
                      }}
                    />
                    <small className="form-text text-muted">
                      <b>Search</b> in all fields
                    </small>
                  </div>
                </form>
              )}
            </Formik>
          </div>
          <div className="col-md-8 margin-bottom-10-mobile"></div>
          <div className="col-md-2 text-right margin-bottom-10-mobile">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => remarksUIProps.openNewRemarkDialog()}
            >
              Create new remark
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
