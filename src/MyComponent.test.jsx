import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import ProductComponent from "./Components/Main/Product/ProductComponent";

afterEach(() => {
  cleanup();
});

test("Test for MyComponent ", () => {
  //   render(<ProductComponent id="50" name="Mint" />);
  //   const myComponent = screen.getElementById("50");
  //   expect(myComponent).toBeInTheDocument();
});
