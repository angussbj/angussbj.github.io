import React, { CSSProperties } from "react";
import { Grid } from "./Grid";
import {
  befungeImage,
  gravityImage,
  LinkDetails,
  LinkPreview,
  mchessImage,
  odesImage,
  Subheading,
  tetrisImage,
  wordleImage,
} from "ui";

interface Props {
  style: CSSProperties;
}

const projects: LinkDetails[] = [
  {
    url: "https://mchess.io/",
    image: mchessImage,
    label: "MChess",
    description:
      "Chess variant platform that lets you compose rule-sets and explore unusual board geometries",
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
      "Android app to plot 2D differential equations' vector fields, draw solution curves, and find equilibria",
  },
];

const smallerProjects: LinkDetails[] = [
  {
    url: "https://angussbj.github.io/gravity/",
    image: gravityImage,
    label: "Gravity",
    description: "Numerical simulation of the n-body problem",
  },
  {
    url: "https://angussbj.github.io/wordle-clone/",
    image: wordleImage,
    label: "Wordle clone",
    description: "Wordle clone for practicing vanilla javascript",
  },
  {
    url: "https://angussbj.github.io/tetris-clone/",
    image: tetrisImage,
    label: "Tetris",
    description: "Tetris clone for practicing vanilla javascript",
  },
];

export function Content({ style }: Props): React.ReactElement {
  return (
    <div style={style}>
      <Grid>
        {projects.map((props, index) => (
          <LinkPreview
            key={props.url}
            header={index === 0 ? "Projects" : undefined}
            {...props}
          />
        ))}
      </Grid>
      <Grid style={{ marginTop: 32 }}>
        {smallerProjects.map((props, index) => (
          <LinkPreview
            key={props.url}
            header={index === 0 ? "Smaller projects" : undefined}
            {...props}
          />
        ))}
      </Grid>
    </div>
  );
}
