import { render, screen } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  it("should properly render", () => {
    render(<App />);

    expect(screen.getByText("teste")).toBeInTheDocument();
  });
});
