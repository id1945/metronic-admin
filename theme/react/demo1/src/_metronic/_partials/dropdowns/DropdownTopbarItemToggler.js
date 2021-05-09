import React from "react";

export const DropdownTopbarItemToggler = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="topbar-item"
      onClick={e => {
        e.preventDefault();
        props.onClick(e);
      }}
    >
      {props.children}
    </div>
  );
});

DropdownTopbarItemToggler.displayName = 'DropdownTopbarItemToggler';
