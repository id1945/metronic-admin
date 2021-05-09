import React, { useEffect, useState, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  CustomerStatusCssClasses,
  CustomerStatusTitles,
} from "../CustomersUIHelpers";
import * as actions from "../../../_redux/customers/customersActions";
import { useCustomersUIContext } from "../CustomersUIContext";

const selectedCustomers = (entities, ids) => {
  const _customers = [];
  ids.forEach((id) => {
    const customer = entities.find((el) => el.id === id);
    if (customer) {
      _customers.push(customer);
    }
  });
  return _customers;
};

export function CustomersUpdateStateDialog({ show, onHide }) {
  // Customers UI Context
  const customersUIContext = useCustomersUIContext();
  const customersUIProps = useMemo(() => {
    return {
      ids: customersUIContext.ids,
      setIds: customersUIContext.setIds,
      queryParams: customersUIContext.queryParams,
    };
  }, [customersUIContext]);

  // Customers Redux state
  const { customers, isLoading } = useSelector(
    (state) => ({
      customers: selectedCustomers(
        state.customers.entities,
        customersUIProps.ids
      ),
      isLoading: state.customers.actionsLoading,
    }),
    shallowEqual
  );

  // if !id we should close modal
  useEffect(() => {
    if (!customersUIProps.ids || customersUIProps.ids.length === 0) {
      onHide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customersUIProps.ids]);

  const [status, setStatus] = useState(0);

  const dispatch = useDispatch();
  const updateStatus = () => {
    // server request for update customers status by selected ids
    dispatch(actions.updateCustomersStatus(customersUIProps.ids, status)).then(
      () => {
        // refresh list after deletion
        dispatch(actions.fetchCustomers(customersUIProps.queryParams)).then(
          () => {
            // clear selections list
            customersUIProps.setIds([]);
            // closing delete modal
            onHide();
          }
        );
      }
    );
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Status has been updated for selected customers
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="overlay overlay-block cursor-default">
        {/*begin::Loading*/}
        {isLoading && (
          <div className="overlay-layer">
            <div className="spinner spinner-lg spinner-primary" />
          </div>
        )}
        {/*end::Loading*/}
        <table className="table table table-head-custom table-vertical-center overflow-hidden">
          <thead>
            <tr>
              <th>ID</th>
              <th>STATUS</th>
              <th>CUSTOMER</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={`id${customer.id}`}>
                <td>{customer.id}</td>
                <td>
                  <span
                    className={`label label-lg label-light-${
                      CustomerStatusCssClasses[customer.status]
                    } label-inline`}
                  >
                    {" "}
                    {CustomerStatusTitles[customer.status]}
                  </span>
                </td>
                <td>
                  <span className="ml-3">
                    {customer.lastName}, {customer.firstName}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Modal.Body>
      <Modal.Footer className="form">
        <div className="form-group">
          <select
            className="form-control"
            value={status}
            onChange={(e) => setStatus(+e.target.value)}
          >
            <option value="0">Suspended</option>
            <option value="1">Active</option>
            <option value="2">Pending</option>
          </select>
        </div>
        <div className="form-group">
          <button
            type="button"
            onClick={onHide}
            className="btn btn-light btn-elevate mr-3"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={updateStatus}
            className="btn btn-primary btn-elevate"
          >
            Update Status
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
