import React from "react";
import { ProgressBar } from "react-bootstrap";

export function ModalProgressBar({variant = "success"}) {
  return (
    <ProgressBar
      variant={variant}
      animated
      now={100}
      style={{ height: "3px", width: "100%" }}
    />
  );
}
