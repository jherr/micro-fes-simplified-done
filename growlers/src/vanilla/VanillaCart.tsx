import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";

import Cart from "../components/Cart";

const App = () => (
  <ChakraProvider>
    <Cart />
  </ChakraProvider>
);

export default (selector: string): void => {
  ReactDOM.render(<App />, document.querySelector(selector));
};
