import React from "react";

export const DropdownItemToggler = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      data-offset="10px,0px"
      onClick={e => {
        e.preventDefault();
        props.onClick(e);
      }}
    >
      {props.children}
    </div>
  );
});

DropdownItemToggler.displayName = 'DropdownItemToggler';
