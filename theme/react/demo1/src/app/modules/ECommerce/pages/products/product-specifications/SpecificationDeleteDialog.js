/* eslint-disable no-restricted-imports */
import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
import * as actions from "../../../_redux/specifications/specificationsActions";
import { useSpecificationsUIContext } from "./SpecificationsUIContext";

export function SpecificationDeleteDialog() {
  // Specifications UI Context
  const specsUIContext = useSpecificationsUIContext();
  const specsUIProps = useMemo(() => {
    return {
      id: specsUIContext.selectedId,
      productId: specsUIContext.productId,
      show: specsUIContext.showDeleteSpecificationDialog,
      onHide: specsUIContext.closeDeleteSpecificationDialog,
      queryParams: specsUIContext.queryParams,
      setIds: specsUIContext.setIds,
    };
  }, [specsUIContext]);

  // Specs Redux state
  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state) => ({ isLoading: state.specifications.actionsLoading }),
    shallowEqual
  );

  // if !id we should close modal
  useEffect(() => {
    if (!specsUIProps.id) {
      specsUIProps.onHide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [specsUIProps.id]);

  // looking for loading/dispatch
  useEffect(() => {}, [isLoading, dispatch]);

  const deleteSpecification = () => {
    // server request for deleting spec by id
    dispatch(actions.deleteSpecification(specsUIProps.id)).then(() => {
      // refresh list after deletion
      dispatch(
        actions.fetchSpecifications(
          specsUIProps.queryParams,
          specsUIProps.productId
        )
      );
      specsUIProps.setIds([]);
      specsUIProps.onHide();
    });
  };

  return (
    <Modal
      show={specsUIProps.show}
      onHide={specsUIProps.onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      {isLoading && <ModalProgressBar variant="query" />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Specification Delete
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!isLoading && (
          <span>Are you sure to permanently delete this specification?</span>
        )}
        {isLoading && <span>Specification is deleting...</span>}
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            type="button"
            onClick={specsUIProps.onHide}
            className="btn btn-light btn-elevate"
          >
            Cancel
          </button>
          <> </>
          <button
            type="button"
            onClick={deleteSpecification}
            className="btn btn-primary btn-elevate"
          >
            Delete
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
