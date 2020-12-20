import React from "react";
import { SimpleGrid, Progress, Text, Button, Box } from "@chakra-ui/react";

import { Beverage } from "../types";
import { addToCart } from "../store";

const BeverageCard = ({ beverage }: { beverage: Beverage }) => (
  <SimpleGrid
    columns={2}
    templateColumns="1fr 7fr"
    gap={1}
    border="1px"
    borderColor="gray.200"
    padding={3}
    mt={3}
  >
    <div>
      <img src={beverage.logo} alt={`${beverage.producerName} logo`} />
    </div>
    <div>
      <Text fontSize="2xl">
        <strong>{beverage.producerName}</strong>&nbsp;
        {beverage.beverageName}
      </Text>
      <Box
        style={{
          display: "inline-block",
          minWidth: "1.5rem",
          minHeight: "0.8rem",
          marginRight: "0.5rem",
          backgroundColor: beverage.beverageColor,
        }}
      >
        &nbsp;
      </Box>
      <Text
        color="gray.500"
        isTruncated
        style={{ display: "inline-block", verticalAlign: "bottom" }}
      >
        {beverage.beverageStyle} - {beverage.abv}%
      </Text>
      <Progress hasStripe value={beverage.level} mt={3} />
      <Box mt={3} align="right">
        <Button onClick={() => addToCart(beverage)}>Add To Cart</Button>
      </Box>
    </div>
  </SimpleGrid>
);

export default BeverageCard;
