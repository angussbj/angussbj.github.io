import React from "react";
import { A, Colors, Link, Row, T } from "ui";
import { cv } from "files";
import styled from "styled-components";

interface Props {
  style?: React.CSSProperties;
}

export function Links({ style }: Props): React.ReactElement {
  return (
    <LinkRow style={style}>
      <A href={cv} download={"Angus Johnson CV.pdf"}>
        CV
      </A>
      <Link url={"https://www.linkedin.com/in/angus-johnson-1757888a/"}>
        Linked In
      </Link>
      <Link
        url={
          "https://www.youtube.com/watch?v=qjQ-j7rAJi4&ab_channel=AngusJohnson"
        }
      >
        Circus videos
      </Link>
    </LinkRow>
  );
}

const LinkRow = styled(Row)`
  gap: 12px;
  min-width: 250px;
  justify-content: center;
`;
