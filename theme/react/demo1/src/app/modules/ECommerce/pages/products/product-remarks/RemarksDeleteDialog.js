/* eslint-disable no-restricted-imports */
import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
import * as actions from "../../../_redux/remarks/remarksActions";
import { useRemarksUIContext } from "./RemarksUIContext";

export function RemarksDeleteDialog() {
  // Remarks UI Context
  const remarksUIContext = useRemarksUIContext();
  const remarksUIProps = useMemo(() => {
    return {
      ids: remarksUIContext.ids,
      setIds: remarksUIContext.setIds,
      productId: remarksUIContext.productId,
      queryParams: remarksUIContext.queryParams,
      showDeleteRemarksDialog: remarksUIContext.showDeleteRemarksDialog,
      closeDeleteRemarksDialog: remarksUIContext.closeDeleteRemarksDialog,
    };
  }, [remarksUIContext]);

  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state) => ({ isLoading: state.remarks.actionsLoading }),
    shallowEqual
  );

  useEffect(() => {}, [isLoading, dispatch]);
  useEffect(() => {
    if (!remarksUIProps.ids || remarksUIProps.ids.length === 0) {
      remarksUIProps.closeDeleteRemarksDialog();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remarksUIProps.ids]);

  const deleteRemarks = () => {
    dispatch(actions.deleteRemarks(remarksUIProps.ids)).then(() => {
      dispatch(
        actions.fetchRemarks(
          remarksUIProps.queryParams,
          remarksUIProps.productId
        )
      ).then(() => {
        remarksUIProps.setIds([]);
        remarksUIProps.closeDeleteRemarksDialog();
      });
    });
  };

  return (
    <Modal
      show={remarksUIProps.showDeleteRemarksDialog}
      onHide={remarksUIProps.closeDeleteRemarksDialog}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      {isLoading && <ModalProgressBar variant="query" />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Remarks Delete
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!isLoading && (
          <span>Are you sure to permanently delete selected remarks?</span>
        )}
        {isLoading && <span>Remarks are deleting...</span>}
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            type="button"
            onClick={remarksUIProps.closeDeleteRemarksDialog}
            className="btn btn-light btn-elevate"
          >
            Cancel
          </button>
          <> </>
          <button
            type="button"
            onClick={deleteRemarks}
            className="btn btn-primary btn-elevate"
          >
            Delete
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
