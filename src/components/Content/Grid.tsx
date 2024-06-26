import React, { CSSProperties, ReactNode } from "react";

interface Props {
  children?: ReactNode;
  style?: CSSProperties;
}

export function Grid({ children, style }: Props): React.ReactElement {
  return (
    <div
      style={{
        maxWidth: 1250,
        minWidth: 250,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "flex-end",
        gap: 16,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
