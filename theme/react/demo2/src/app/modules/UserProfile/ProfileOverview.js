import React from "react";
import { AdvanceTablesWidget7, ListsWidget10, ListsWidget14 } from '../../../_metronic/_partials/widgets';
// import { toAbsoluteUrl } from "../../../_metronic/_helpers";

export function ProfileOverview() {
  return (
    <div className="row">
      <div className="col-lg-6">
        <ListsWidget14 className="card-stretch gutter-b"></ListsWidget14>
      </div>
      <div className="col-lg-6">
        <ListsWidget10 className="card-stretch gutter-b"></ListsWidget10>
      </div>
      <div className="col-lg-12">
        <AdvanceTablesWidget7 className="card-stretch gutter-b"></AdvanceTablesWidget7>
      </div>
    </div>
  );
}
