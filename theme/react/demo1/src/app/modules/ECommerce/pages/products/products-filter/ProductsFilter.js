import React, { useMemo } from "react";
import { Formik } from "formik";
import { isEqual } from "lodash";
import { useProductsUIContext } from "../ProductsUIContext";

const prepareFilter = (queryParams, values) => {
  const { status, condition, searchText } = values;
  const newQueryParams = { ...queryParams };
  const filter = {};
  // Filter by status
  filter.status = status !== "" ? +status : undefined;
  // Filter by condition
  filter.condition = condition !== "" ? +condition : undefined;
  // Filter by all fields
  filter.model = searchText;
  if (searchText) {
    filter.manufacture = searchText;
    filter.VINCode = searchText;
  }
  newQueryParams.filter = filter;
  return newQueryParams;
};

export function ProductsFilter({ listLoading }) {
  // Products UI Context
  const productsUIContext = useProductsUIContext();
  const productsUIProps = useMemo(() => {
    return {
      setQueryParams: productsUIContext.setQueryParams,
      queryParams: productsUIContext.queryParams,
    };
  }, [productsUIContext]);

  const applyFilter = (values) => {
    const newQueryParams = prepareFilter(productsUIProps.queryParams, values);
    if (!isEqual(newQueryParams, productsUIProps.queryParams)) {
      newQueryParams.pageNumber = 1;
      productsUIProps.setQueryParams(newQueryParams);
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          status: "", // values => All=""/Selling=0/Sold=1
          condition: "", // values => All=""/New=0/Used=1
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
          <form onSubmit={handleSubmit} className="form form-label-right">
            <div className="form-group row">
              <div className="col-lg-2">
                <select
                  className="form-control"
                  name="status"
                  placeholder="Filter by Status"
                  onChange={(e) => {
                    setFieldValue("status", e.target.value);
                    handleSubmit();
                  }}
                  onBlur={handleBlur}
                  value={values.status}
                >
                  <option value="">All</option>
                  <option value="0">Selling</option>
                  <option value="1">Sold</option>
                </select>
                <small className="form-text text-muted">
                  <b>Filter</b> by Status
                </small>
              </div>
              <div className="col-lg-2">
                <select
                  className="form-control"
                  placeholder="Filter by Type"
                  name="condition"
                  onBlur={handleBlur}
                  onChange={(e) => {
                    setFieldValue("condition", e.target.value);
                    handleSubmit();
                  }}
                  value={values.condition}
                >
                  <option value="">All</option>
                  <option value="0">New</option>
                  <option value="1">Used</option>
                </select>
                <small className="form-text text-muted">
                  <b>Filter</b> by Condition
                </small>
              </div>
              <div className="col-lg-2">
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
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}
