import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../../../../_redux/remarks/remarksActions";
import { RemarkEditDialogHeader } from "./RemarkEditDialogHeader";
import { RemarkEditForm } from "./RemarkEditForm";
import { useRemarksUIContext } from "../RemarksUIContext";

function getFormattedDate(date) {
  if (typeof date === "string") {
    return date;
  }

  var year = date.getFullYear();

  var month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : "0" + month;

  var day = date.getDate().toString();
  day = day.length > 1 ? day : "0" + day;

  return month + "/" + day + "/" + year;
}

export function RemarkEditDialog() {
  // Remarks UI Context
  const remarksUIContext = useRemarksUIContext();
  const remarksUIProps = useMemo(() => {
    return {
      id: remarksUIContext.selectedId,
      setIds: remarksUIContext.setIds,
      productId: remarksUIContext.productId,
      queryParams: remarksUIContext.queryParams,
      showEditRemarkDialog: remarksUIContext.showEditRemarkDialog,
      closeEditRemarkDialog: remarksUIContext.closeEditRemarkDialog,
      initRemark: remarksUIContext.initRemark,
    };
  }, [remarksUIContext]);

  // Remarks Redux state
  const dispatch = useDispatch();
  const { actionsLoading, remarkForEdit } = useSelector(
    (state) => ({
      actionsLoading: state.remarks.actionsLoading,
      remarkForEdit: state.remarks.remarkForEdit,
    }),
    shallowEqual
  );

  useEffect(() => {
    // server request for getting remark by seleted id
    dispatch(actions.fetchRemark(remarksUIProps.id));
  }, [remarksUIProps.id, dispatch]);

  const saveRemark = (remark) => {
    remark.dueDate = getFormattedDate(remark.dueDate);
    if (!remarksUIProps.id) {
      // server request for creating remarks
      dispatch(actions.createRemark(remark)).then(() => {
        // refresh list after deletion
        dispatch(
          actions.fetchRemarks(
            remarksUIProps.queryParams,
            remarksUIProps.productId
          )
        ).then(() => {
          // clear selections list
          remarksUIProps.setIds([]);
          // closing edit modal
          remarksUIProps.closeEditRemarkDialog();
        });
      });
    } else {
      // server request for updating remarks
      dispatch(actions.updateRemark(remark)).then(() => {
        // refresh list after deletion
        dispatch(
          // refresh list after deletion
          actions.fetchRemarks(
            remarksUIProps.queryParams,
            remarksUIProps.productId
          )
        ).then(() => {
          // clear selections list
          remarksUIProps.setIds([]);
          // closing edit modal
          remarksUIProps.closeEditRemarkDialog();
        });
      });
    }
  };

  return (
    <Modal
      show={remarksUIProps.showEditRemarkDialog}
      onHide={remarksUIProps.closeEditRemarkDialog}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <RemarkEditDialogHeader id={remarksUIProps.id} />
      <RemarkEditForm
        saveRemark={saveRemark}
        actionsLoading={actionsLoading}
        remark={remarkForEdit || remarksUIProps.initRemark}
        onHide={remarksUIProps.closeEditRemarkDialog}
      />
    </Modal>
  );
}
