import React, { CSSProperties } from "react";
import { Grid } from "./Grid";
import {
  befungeImage,
  LinkDetails,
  LinkPreview,
  mchessImage,
  odesImage,
} from "ui";

interface Props {
  style: CSSProperties;
}

const content: LinkDetails[] = [
  {
    url: "https://mchess.io/",
    image: mchessImage,
    label: "MChess",
    description:
      "Chess variant platform that lets you compose rule-sets and explore unusual board topologies",
  },
  {
    url: "https://angussbj.github.io/befunge/",
    image: befungeImage,
    label: "Befunge",
    description: "Grid-based IDE for the esoteric programming language Befunge",
  },
  {
    url: "https://play.google.com/store/apps/details?id=angus.planarodenumerics&hl=en_AU&gl=US",
    image: odesImage,
    label: "2D ODE Grapher",
    description:
      "Android app to plot differential equations as vector fields, draw solution curves, and find equilibria and their Jacobians",
  },
];

export function Content({ style }: Props): React.ReactElement {
  return (
    <Grid style={style}>
      {content.map((props) => (
        <LinkPreview key={props.url} {...props} />
      ))}
    </Grid>
  );
}
