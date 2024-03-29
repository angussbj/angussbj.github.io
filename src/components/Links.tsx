import React from "react";
import { Colors, Row, T } from "ui";
import { cv } from "files";
import styled from "styled-components";

interface Props {
  style?: React.CSSProperties;
}

export function Links({ style }: Props): React.ReactElement {
  return (
    <LinkRow style={style}>
      <a href={cv} download={"Angus Johnson CV.pdf"}>
        <T color={Colors.LINK}>CV</T>
      </a>
      <a
        href={"https://www.linkedin.com/in/angus-johnson-1757888a/"}
        target={"_blank"}
        rel={"noreferrer"}
      >
        <T color={Colors.LINK}>Linked In</T>
      </a>
      <a
        href={
          "https://www.youtube.com/watch?v=qjQ-j7rAJi4&ab_channel=AngusJohnson"
        }
        target={"_blank"}
        rel={"noreferrer"}
      >
        <T color={Colors.LINK}>Circus videos</T>
      </a>
    </LinkRow>
  );
}

const LinkRow = styled(Row)`
  gap: 12px;
  min-width: 250px;
  justify-content: center;
`;
