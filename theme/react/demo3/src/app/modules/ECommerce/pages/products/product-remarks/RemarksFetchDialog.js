import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useSelector } from "react-redux";
import { useRemarksUIContext } from "./RemarksUIContext";

const selectedRemarks = (entities, ids) => {
  const _remarks = [];
  ids.forEach((id) => {
    const remark = entities.find((el) => el.id === id);
    if (remark) {
      _remarks.push(remark);
    }
  });
  return _remarks;
};

export function RemarksFetchDialog() {
  // Remarks UI Context
  const remarksUIContext = useRemarksUIContext();
  const remarksUIProps = useMemo(() => {
    return {
      ids: remarksUIContext.ids,
      queryParams: remarksUIContext.queryParams,
      showFetchRemarksDialog: remarksUIContext.showFetchRemarksDialog,
      closeFetchRemarksDialog: remarksUIContext.closeFetchRemarksDialog,
    };
  }, [remarksUIContext]);

  const { remarks } = useSelector(
    (state) => ({
      remarks: selectedRemarks(state.remarks.entities, remarksUIProps.ids),
    }),
    shallowEqual
  );

  useEffect(() => {
    if (!remarksUIProps.ids || remarksUIProps.ids.length === 0) {
      remarksUIProps.closeFetchRemarksDialog();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remarksUIProps.ids]);

  return (
    <Modal
      show={remarksUIProps.showFetchRemarksDialog}
      onHide={remarksUIProps.closeFetchRemarksDialog}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Fetch selected elements
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="list-timeline list-timeline-skin-light padding-30">
          <div className="list-timeline-items">
            {remarks.map((remark) => (
              <div className="list-timeline-item mb-3" key={remark.id}>
                <span className="list-timeline-text">
                  <span
                    className="label label-lg label-light-success label-inline"
                    style={{ width: "60px" }}
                  >
                    ID: {remark.id}
                  </span>{" "}
                  <span className="ml-5">{remark.text} </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            type="button"
            onClick={remarksUIProps.closeFetchRemarksDialog}
            className="btn btn-light btn-elevate"
          >
            Cancel
          </button>
          <> </>
          <button
            type="button"
            onClick={remarksUIProps.closeFetchRemarksDialog}
            className="btn btn-primary btn-elevate"
          >
            Ok
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
