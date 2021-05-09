/* eslint-disable no-restricted-imports */
import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
import * as actions from "../../../_redux/remarks/remarksActions";
import { useRemarksUIContext } from "./RemarksUIContext";

export function RemarkDeleteDialog() {
  // Remarks UI Context
  const remarksUIContext = useRemarksUIContext();
  const remarksUIProps = useMemo(() => {
    return {
      id: remarksUIContext.selectedId,
      setIds: remarksUIContext.setIds,
      productId: remarksUIContext.productId,
      queryParams: remarksUIContext.queryParams,
      showDeleteRemarkDialog: remarksUIContext.showDeleteRemarkDialog,
      closeDeleteRemarkDialog: remarksUIContext.closeDeleteRemarkDialog,
    };
  }, [remarksUIContext]);

  // Remarks Redux state
  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state) => ({ isLoading: state.remarks.actionsLoading }),
    shallowEqual
  );

  // if !id we should close modal
  useEffect(() => {
    if (!remarksUIProps.id) {
      remarksUIProps.closeDeleteRemarkDialog();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remarksUIProps.id]);

  // looking for loading/dispatch
  useEffect(() => {}, [isLoading, dispatch]);

  const deleteRemark = () => {
    // server request for deleting remark by id
    dispatch(actions.deleteRemark(remarksUIProps.id)).then(() => {
      // refresh list after deletion
      dispatch(
        actions.fetchRemarks(
          remarksUIProps.queryParams,
          remarksUIProps.productId
        )
      );
      // clear selections list
      remarksUIProps.setIds([]);
      // closing delete modal
      remarksUIProps.closeDeleteRemarkDialog();
    });
  };

  return (
    <Modal
      show={remarksUIProps.showDeleteRemarkDialog}
      onHide={remarksUIProps.closeDeleteRemarkDialog}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      {isLoading && <ModalProgressBar variant="query" />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Remark Delete
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!isLoading && (
          <span>Are you sure to permanently delete this remark?</span>
        )}
        {isLoading && <span>Remark is deleting...</span>}
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            type="button"
            onClick={remarksUIProps.closeDeleteRemarkDialog}
            className="btn btn-light btn-elevate"
          >
            Cancel
          </button>
          <> </>
          <button
            type="button"
            onClick={deleteRemark}
            className="btn btn-primary btn-elevate"
          >
            Delete
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
