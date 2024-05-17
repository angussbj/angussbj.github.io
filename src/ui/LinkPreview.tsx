import React, { CSSProperties, ReactElement } from "react";
import { Colors } from "./Colors";
import styled from "styled-components";
import { T } from "./T";
import { baseUrl } from "../utilities/baseUrl";
import { Subheading } from "./Subheading";
import { Row } from "./Row";
import { Link } from "./Link";

export interface LinkDetails {
  url: string;
  image: string;
  label: string;
  description: string;
  codeUrl?: string;
}

interface Props extends LinkDetails {
  style?: CSSProperties;
  header?: string;
}

export function LinkPreview({
  url,
  image,
  label,
  description,
  header,
  codeUrl,
}: Props): ReactElement {
  return (
    <div>
      {header && <Subheading style={{ marginBottom: 16 }}>{header}</Subheading>}
      <Container href={url} target={"_blank"}>
        <div style={{ height: 216, overflow: "hidden" }}>
          <img
            src={image}
            alt={`A preview of the site: ${label}`}
            style={{
              objectFit: "scale-down",
              width: "100%",
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
          <Row style={{ justifyContent: "space-between", marginTop: 8 }}>
            <T size={12} color={Colors.DARK_SECONDARY}>
              {baseUrl(url)}
            </T>
            {codeUrl && (
              <Link url={codeUrl} style={{ fontSize: 12 }}>
                code
              </Link>
            )}
          </Row>
        </TextArea>
      </Container>
    </div>
  );
}

const Container = styled.a`
  display: flex;
  flex-direction: column;
  flex-shrink: 1;
  max-width: 400px;
  min-height: 316px;
  border: 1px solid ${Colors.TRACE.toString()};
  border-radius: 8px;
  overflow: hidden;
  text-decoration: none;
  background-color: white;

  &:hover:not(:has(a:hover)) {
    background-color: ${Colors.CLOUD.toString()};
    border: 1px solid ${Colors.DARK_TERTIARY.toString()};
  }

  &:focus:not(:has(a:focus)) {
    background-color: ${Colors.GREY.toString()};
    border: 1px solid ${Colors.DARK_SECONDARY.toString()};
  }
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 8px;
  justify-content: space-between;
`;
