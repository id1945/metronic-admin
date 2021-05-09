import React, { useMemo } from "react";
import { RemarksFilter } from "./RemarksFilter";
import { RemarksTable } from "./RemarksTable";
import { RemarksLoadingDialog } from "./RemarksLoadingDialog";
import { RemarksDeleteDialog } from "./RemarksDeleteDialog";
import { RemarkDeleteDialog } from "./RemarkDeleteDialog";
import { RemarksFetchDialog } from "./RemarksFetchDialog";
import { RemarksGrouping } from "./RemarksGrouping";
import { RemarkEditDialog } from "./remark-edit-dialog/RemarkEditDialog";
import { useRemarksUIContext } from "./RemarksUIContext";

export function Remarks() {
  // Remarks UI Context
  const remarksUIContext = useRemarksUIContext();
  const remarksUIProps = useMemo(() => {
    return { ids: remarksUIContext.ids };
  }, [remarksUIContext]);

  return (
    <>
      <RemarksLoadingDialog />
      <RemarkEditDialog />
      <RemarkDeleteDialog />
      <RemarksDeleteDialog />
      <RemarksFetchDialog />
      <div className="form margin-b-30">
        <RemarksFilter />
        {remarksUIProps.ids.length > 0 && <RemarksGrouping />}
      </div>
      <RemarksTable />
    </>
  );
}
