import React from "react";

export const ColorColumnFormatter = (cellContent, row) => (
  <span style={{ color: row.color }}>{row.color}</span>
);
