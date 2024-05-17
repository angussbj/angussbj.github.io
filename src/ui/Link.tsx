import React, { ForwardedRef, forwardRef, ReactNode } from "react";
import { A } from "./A";

interface Props {
  url: string;
  children: ReactNode;
  style?: React.CSSProperties;
  ref?: any;
}

function LinkComponent(
  { url, style, children }: Props,
  ref: ForwardedRef<HTMLAnchorElement>
): React.ReactElement {
  return (
    <A href={url} target={"_blank"} rel={"noreferrer"} style={style} ref={ref}>
      {children}
    </A>
  );
}

export const Link = forwardRef(LinkComponent);
