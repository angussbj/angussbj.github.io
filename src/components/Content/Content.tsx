import React, { CSSProperties } from "react";
import { Grid } from "./Grid";
import { LinkPreview } from "@dhaiwat10/react-link-preview";
import { befungeImage, mchessImage, odesImage } from "ui";

interface Props {
  style: CSSProperties;
}

export function Content({ style }: Props): React.ReactElement {
  return (
    <Grid style={style}>
      {[
        { url: "https://mchess.io/", image: mchessImage },
        { url: "https://angussbj.github.io/befunge/", image: befungeImage },
        {
          url: "https://play.google.com/store/apps/details?id=angus.planarodenumerics&hl=en_AU&gl=US",
          image: odesImage,
        },
      ].map(({ url, image }) => (
        <LinkPreview
          url={url}
          width={400}
          key={url}
          explicitImageSrc={image}
          imageHeight={240}
          descriptionLength={81}
        />
      ))}
    </Grid>
  );
}
