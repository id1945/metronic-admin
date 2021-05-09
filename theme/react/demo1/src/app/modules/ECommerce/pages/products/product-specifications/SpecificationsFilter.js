import React, { useMemo } from "react";
import { Formik } from "formik";
import { isEqual } from "lodash";
import { useSpecificationsUIContext } from "./SpecificationsUIContext";

const prepareFilter = (queryParams, values) => {
  const { searchText } = values;
  const newQueryParams = { ...queryParams };
  const filter = {};
  filter.value = searchText;
  if (searchText) {
    filter.name = searchText;
  }
  newQueryParams.filter = filter;
  return newQueryParams;
};

export function SpecificationsFilter() {
  // Specs UI Context
  const specsUIContext = useSpecificationsUIContext();
  const specsUIProps = useMemo(() => {
    return {
      openNewSpecificationDialog: specsUIContext.openNewSpecificationDialog,
      setQueryParams: specsUIContext.setQueryParams,
      queryParams: specsUIContext.queryParams,
    };
  }, [specsUIContext]);

  const applyFilter = (values) => {
    const newQueryParams = prepareFilter(specsUIProps.queryParams, values);
    if (!isEqual(newQueryParams, specsUIProps.queryParams)) {
      newQueryParams.pageNumber = 1;
      specsUIProps.setQueryParams(newQueryParams);
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
          <div className="col-md-7 margin-bottom-10-mobile"></div>
          <div className="col-md-3 text-right margin-bottom-10-mobile">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => specsUIProps.openNewSpecificationDialog()}
            >
              Create new specification
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
