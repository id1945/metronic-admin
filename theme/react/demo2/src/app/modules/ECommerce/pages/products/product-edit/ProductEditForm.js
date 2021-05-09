// Form is based on Formik
// Data validation is based on Yup
// Please, be familiar with article first:
// https://hackernoon.com/react-form-validation-with-formik-and-yup-8b76bda62e10
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Input, Select } from "../../../../../../_metronic/_partials/controls";
import {
  AVAILABLE_COLORS,
  AVAILABLE_MANUFACTURES,
  ProductStatusTitles,
  ProductConditionTitles,
} from "../ProductsUIHelpers";

// Validation schema
const ProductEditSchema = Yup.object().shape({
  model: Yup.string()
    .min(2, "Minimum 2 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Model is required"),
  manufacture: Yup.string()
    .min(2, "Minimum 2 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Manufacture is required"),
  modelYear: Yup.number()
    .min(1950, "1950 is minimum")
    .max(2020, "2020 is maximum")
    .required("Model year is required"),
  mileage: Yup.number()
    .min(0, "0 is minimum")
    .max(1000000, "1000000 is maximum")
    .required("Mileage is required"),
  color: Yup.string().required("Color is required"),
  price: Yup.number()
    .min(1, "$1 is minimum")
    .max(1000000, "$1000000 is maximum")
    .required("Price is required"),
  VINCode: Yup.string().required("VINCode is required"),
});

export function ProductEditForm({
  product,
  btnRef,
  saveProduct,
}) {
  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={product}
        validationSchema={ProductEditSchema}
        onSubmit={(values) => {
          saveProduct(values);
        }}
      >
        {({ handleSubmit }) => (
          <>
            <Form className="form form-label-right">
              <div className="form-group row">
                <div className="col-lg-4">
                  <Field
                    name="model"
                    component={Input}
                    placeholder="Model"
                    label="Model"
                  />
                </div>
                <div className="col-lg-4">
                  <Select name="manufacture" label="Manufacture">
                    {AVAILABLE_MANUFACTURES.map((manufacture) => (
                      <option key={manufacture} value={manufacture}>
                        {manufacture}
                      </option>
                    ))}
                  </Select>
                </div>
                <div className="col-lg-4">
                  <Field
                    type="number"
                    name="modelYear"
                    component={Input}
                    placeholder="Model year"
                    label="Model year"
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-lg-4">
                  <Field
                    type="number"
                    name="mileage"
                    component={Input}
                    placeholder="Mileage"
                    label="Mileage"
                  />
                </div>
                <div className="col-lg-4">
                  <Select name="color" label="Color">
                    {AVAILABLE_COLORS.map((color) => (
                      <option key={color} value={color}>
                        {color}
                      </option>
                    ))}
                  </Select>
                </div>
                <div className="col-lg-4">
                  <Field
                    type="number"
                    name="price"
                    component={Input}
                    placeholder="Price"
                    label="Price ($)"
                    customFeedbackLabel="Please enter Price"
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-lg-4">
                  <Field
                    name="VINCode"
                    component={Input}
                    placeholder="VIN code"
                    label="VIN code"
                  />
                </div>
                <div className="col-lg-4">
                  <Select name="status" label="Status">
                    {ProductStatusTitles.map((status, index) => (
                      <option key={status} value={index}>
                        {status}
                      </option>
                    ))}
                  </Select>
                </div>
                <div className="col-lg-4">
                  <Select name="condition" label="Condition">
                    {ProductConditionTitles.map((condition, index) => (
                      <option key={condition} value={index}>
                        {condition}
                      </option>
                    ))}
                  </Select>
                </div>
              </div>
              <div className="form-group">
                <label>Description</label>
                <Field
                  name="description"
                  as="textarea"
                  className="form-control"
                />
              </div>
              <button
                type="submit"
                style={{ display: "none" }}
                ref={btnRef}
                onSubmit={() => handleSubmit()}
              ></button>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
}
