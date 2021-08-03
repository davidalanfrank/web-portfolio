import * as React from "react";
import * as ReactDOM from "react-dom";

import { getQueriesForElement } from "@testing-library/dom";

import { App } from "./App";

test("renders the correct content", () => {
  const root = document.createElement("div");
  ReactDOM.render(<App />, root);
});
