import React, { CSSProperties, ReactElement } from "react";
import { Colors } from "./Colors";
import styled from "styled-components";
import { T } from "./T";
import { baseUrl } from "../utilities/baseUrl";
import { useHoverAndPress } from "./useHoverAndPress";

export interface LinkDetails {
  url: string;
  image: string;
  label: string;
  description: string;
}

interface Props extends LinkDetails {
  style?: CSSProperties;
}

export function LinkPreview({
                              url,
                              image,
                              label,
                              description,
                            }: Props): ReactElement {
  const hoverAndPress = useHoverAndPress();

  return (
    <Container href={url} target={"_blank"} {...hoverAndPress}>
      <div style={{ height: 216, overflow: "hidden" }}>
        <img
          src={image}
          alt={`A preview of the site: ${label}`}
          style={{
            objectFit: "scale-down",
            width: "100%",
            // marginLeft: "-10%",
            // marginTop: "-3%",
          }}
        />
      </div>
      <TextArea>
        <div>
          <T style={{ fontWeight: "bold" }}>{label}</T>
          <T color={Colors.DARK_SECONDARY} style={{ marginTop: 4 }}>
            {description}
          </T>
        </div>
        <T size={12} color={Colors.DARK_SECONDARY} style={{ marginTop: 8 }}>
          {baseUrl(url)}
        </T>
      </TextArea>
    </Container>
  );
}

const Container = styled.a<{ hovered: boolean; pressed: boolean }>`
  display: flex;
  flex-direction: column;
  flex-shrink: 1;
  max-width: 400px;
  min-height: 316px;
  border: 1px solid
    ${({ hovered, pressed }): string =>
  (pressed
      ? Colors.DARK_SECONDARY
      : hovered
        ? Colors.DARK_TERTIARY
        : Colors.TRACE
  ).toString()};
  background-color: ${({ hovered, pressed }): string =>
  (pressed ? Colors.GREY : hovered ? Colors.CLOUD : Colors.WHITE).toString()};
  border-radius: 8px;
  overflow: hidden;
  text-decoration: none;
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 8px;
  justify-content: space-between;
`;
