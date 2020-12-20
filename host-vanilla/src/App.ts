import "./index.css";

import createTaps from "growlers/VanillaTaps";
import createCart from "growlers/VanillaCart";
import createSearch from "growlers/VanillaSearch";
import { load, subscribe } from "growlers/store";

// load("growlers-tap-station");
load("hv-taplist");

subscribe((state) => {
  document.querySelector(".beverage-list").innerHTML = state.filteredTaps
    .map(({ beverageName }) => beverageName)
    .join(", ");
  console.log(state);
});

createTaps(".taps");
createCart(".cart");
createSearch(".search");
