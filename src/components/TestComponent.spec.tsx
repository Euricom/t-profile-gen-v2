import React from "react";

import { screen, render } from "@testing-library/react";

test("a test", () => {
  render(<h1>heading</h1>);

  screen.getByRole("heading", { name: "heading" });
});
