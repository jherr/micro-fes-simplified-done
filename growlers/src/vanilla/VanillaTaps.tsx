import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";

import Taps from "../components/Taps";

const App = () => (
  <ChakraProvider>
    <Taps />
  </ChakraProvider>
);

export default (selector: string): void => {
  ReactDOM.render(<App />, document.querySelector(selector));
};
