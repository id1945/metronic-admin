import React from "react";

export function sizePerPageRenderer({
  options,
  currSizePerPage,
  onSizePerPageChange
}) {
  const onChange = event => {
    const newValue = +event.target.value;
    onSizePerPageChange(newValue);
  };

  return (
    <div className="pagination-toolbar">
      <select
        className="form-control font-brand"
        style={{ width: "60px" }}
        value={currSizePerPage}
        onChange={onChange}
      >
        {options.map(option => {
          return (
            <option key={option.text} value={option.page}>
              {option.text}
            </option>
          );
        })}
      </select>
    </div>
  );
}
