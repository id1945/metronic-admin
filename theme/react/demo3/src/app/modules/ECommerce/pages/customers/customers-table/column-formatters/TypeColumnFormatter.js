// please be familiar with react-bootstrap-table-next column formaters
// https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html?selectedKind=Work%20on%20Columns&selectedStory=Column%20Formatter&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel
import React from "react";
import {
  CustomerTypeCssClasses,
  CustomerTypeTitles,
} from "../../CustomersUIHelpers";

export function TypeColumnFormatter(cellContent, row) {
  return (
    <>
      <span
        className={`label label-dot label-${
          CustomerTypeCssClasses[row.type]
        } mr-2`}
      ></span>
      &nbsp;
      <span className={`font-bold font-${CustomerTypeCssClasses[row.type]}`}>
        {CustomerTypeTitles[row.type]}
      </span>
    </>
  );
}
