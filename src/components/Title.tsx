import React from "react";
import { Colors } from "ui";

export function Title(): React.ReactElement {
  return (
    <div
      style={{
        fontSize: 56,
        fontWeight: 300,
        color: Colors.DARKEST.toString(),
        textAlign: "center",
      }}
    >
      Angus Johnson
    </div>
  );
}
