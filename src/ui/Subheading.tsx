import React, { CSSProperties, ReactNode } from "react";
import { Colors } from "ui";

interface Props {
  style?: CSSProperties;
  children: ReactNode;
}

export function Subheading({ style, children }: Props): React.ReactElement {
  return (
    <div
      style={{
        fontSize: 28,
        fontWeight: 300,
        color: Colors.DARKEST.toString(),
        ...style,
      }}
    >
      {children}
    </div>
  );
}
