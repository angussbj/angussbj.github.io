import React from "react";
import { Content, Links, Title } from "./components";

function App(): React.ReactElement {
  return (
    <div
      style={{
        padding: 24,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Title />
      <Links style={{ marginTop: 8 }} />
      <Content style={{ marginTop: 32 }} />
    </div>
  );
}

export default App;
