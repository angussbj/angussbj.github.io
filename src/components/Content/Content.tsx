import React, { CSSProperties } from "react";
import { Grid } from "./Grid";
import {
  befungeImage,
  gravityImage,
  LinkDetails,
  LinkPreview,
  mchessImage,
  odesImage,
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
    codeUrl: "https://github.com/Meta-Chess/react-prototype",
  },
  {
    url: "https://angussbj.github.io/befunge/",
    image: befungeImage,
    label: "Befunge",
    description: "Grid-based IDE for the esoteric programming language Befunge",
    codeUrl: "https://github.com/angussbj/befunge",
  },
  {
    url: "https://play.google.com/store/apps/details?id=angus.planarodenumerics&hl=en_AU&gl=US",
    image: odesImage,
    label: "2D ODE Grapher",
    description:
      "Android app to plot 2D differential equations' vector fields, draw solution curves, and find equilibria",
    codeUrl: "https://github.com/angussbj/PlanarODENumerics",
  },
];

const smallerProjects: LinkDetails[] = [
  {
    url: "https://angussbj.github.io/gravity/",
    image: gravityImage,
    label: "Gravity",
    description: "Numerical simulation of the n-body problem",
    codeUrl: "https://github.com/angussbj/gravity",
  },
  {
    url: "https://angussbj.github.io/wordle-clone/",
    image: wordleImage,
    label: "Wordle clone",
    description: "An exercise for practicing vanilla javascript",
    codeUrl: "https://github.com/angussbj/wordle-clone",
  },
  {
    url: "https://angussbj.github.io/tetris-clone/",
    image: tetrisImage,
    label: "Tetris clone",
    description: "An exercise for practicing vanilla javascript",
    codeUrl: "https://github.com/angussbj/tetris-clone",
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
