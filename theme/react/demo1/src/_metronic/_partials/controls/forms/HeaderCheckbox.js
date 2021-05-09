import React from "react";

export function HeaderCheckbox({isChecked, onChange}) {
  return (
    <label className="checkbox checkbox-lg checkbox-single">
      <input type="checkbox" checked={isChecked} onChange={onChange} />
      <span />
     </label>
  );
}