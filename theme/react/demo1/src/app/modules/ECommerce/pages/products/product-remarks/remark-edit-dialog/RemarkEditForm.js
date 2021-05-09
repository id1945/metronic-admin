// Form is based on Formik
// Data validation is based on Yup
// Please, be familiar with article first:
// https://hackernoon.com/react-form-validation-with-formik-and-yup-8b76bda62e10
import React from "react";
import { Modal } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  Input,
  Select,
  DatePickerField,
} from "../../../../../../../_metronic/_partials/controls";

// Validation schema
const RemarkEditSchema = Yup.object().shape({
  text: Yup.string()
    .min(2, "Minimum 2 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Text is required"),
  type: Yup.number().required("Type is required"),
  dueDate: Yup.mixed()
    .nullable(false)
    .required("Due date is required"),
});

export function RemarkEditForm({ saveRemark, remark, actionsLoading, onHide }) {
  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={remark}
        validationSchema={RemarkEditSchema}
        onSubmit={(values) => saveRemark(values)}
      >
        {({ handleSubmit }) => (
          <>
            <Modal.Body className="overlay overlay-block cursor-default">
              {actionsLoading && (
                <div className="overlay-layer bg-transparent">
                  <div className="spinner spinner-lg spinner-success" />
                </div>
              )}
              <Form className="form form-label-right">
                <div className="form-group row">
                  <div className="col-lg-12">
                    <Field
                      name="text"
                      component={Input}
                      placeholder="Text"
                      label="Text"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-lg-12">
                    <DatePickerField name="dueDate" label="Due date" />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-lg-12">
                    <Select name="type" label="Type">
                      <option value="0">Info</option>
                      <option value="1">Note</option>
                      <option value="2">Reminder</option>
                    </Select>
                  </div>
                </div>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <button
                type="button"
                onClick={onHide}
                className="btn btn-light btn-elevate"
              >
                Cancel
              </button>
              <> </>
              <button
                type="submit"
                onClick={() => handleSubmit()}
                className="btn btn-primary btn-elevate"
              >
                Save
              </button>
            </Modal.Footer>
          </>
        )}
      </Formik>
    </>
  );
}
