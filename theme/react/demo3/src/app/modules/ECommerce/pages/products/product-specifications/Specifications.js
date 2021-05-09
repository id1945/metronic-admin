import React, { useMemo } from "react";
import { SpecificationsFilter } from "./SpecificationsFilter";
import { SpecificationsTable } from "./SpecificationsTable";
import { SpecificationsLoadingDialog } from "./SpecificationsLoadingDialog";
import { SpecificationsDeleteDialog } from "./SpecificationsDeleteDialog";
import { SpecificationDeleteDialog } from "./SpecificationDeleteDialog";
import { SpecificationsFetchDialog } from "./SpecificationsFetchDialog";
import { SpecificationsGrouping } from "./SpecificationsGrouping";
import { SpecificationEditDialog } from "./specification-edit-dialog/SpecificationEditDialog";
import { useSpecificationsUIContext } from "./SpecificationsUIContext";

export function Specifications() {
  // Specifications UI Context
  const specsUIContext = useSpecificationsUIContext();
  const specsUIProps = useMemo(() => {
    return { ids: specsUIContext.ids };
  }, [specsUIContext]);

  return (
    <>
      <SpecificationsLoadingDialog />
      <SpecificationEditDialog />
      <SpecificationDeleteDialog />
      <SpecificationsDeleteDialog />
      <SpecificationsFetchDialog />
      <div className="form margin-b-30">
        <SpecificationsFilter />
        {specsUIProps.ids.length > 0 && (
          <>
            <SpecificationsGrouping />
            <br />
          </>
        )}
      </div>
      <SpecificationsTable />
    </>
  );
}
