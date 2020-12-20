import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
} from "@chakra-ui/react";
import { useProxy } from "valtio";

import store, { setSearchText, setAlcoholLimit } from "../store";
import { MFE_BORDER } from "../constants";

const Search = () => {
  const { searchText, alcoholLimit } = useProxy(store);
  return (
    <Box border={MFE_BORDER}>
      <FormControl id="search">
        <FormLabel>Search</FormLabel>
        <Input
          type="text"
          value={searchText}
          onChange={(evt) => setSearchText(evt.target.value)}
        />
      </FormControl>

      <FormControl id="alcohol">
        <FormLabel>Alcohol</FormLabel>
        <Slider
          colorScheme="pink"
          defaultValue={alcoholLimit}
          onChange={(v) => setAlcoholLimit(v)}
          min={0}
          max={17}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </FormControl>
    </Box>
  );
};

export default Search;
