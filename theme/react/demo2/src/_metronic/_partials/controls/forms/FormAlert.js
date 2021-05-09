import React from "react";

export function FormAlert({
  isEnabled = false,
  type = "danger",
  message = "Oh snap! Change a few things up and try submitting again.",
  icon = "flaticon-warning"
}) {
  if (isEnabled) {
    return (
      <div className={`alert alert-${type}`} role="alert">
        <div className="alert-icon">
          <i className={icon}></i>
        </div>
        <div className="alert-text">{message}</div>
      </div>
    );
  }

  return null;
}
