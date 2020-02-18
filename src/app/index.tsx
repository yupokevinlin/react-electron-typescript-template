import React from "react";
import ReactDOM from "react-dom";

import { AppContainer } from "react-hot-loader";

import App from "./App";

const mainElement = document.createElement("div");
document.body.appendChild(mainElement);

const render = (Component: () => JSX.Element) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    mainElement
  );
};

render(App);
