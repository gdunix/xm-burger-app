import React from "react";
import useBurger from "@/store/useBurger";
import { Text, Wrapper } from "./styled";

const Cost: React.FC = () => {
  const { getCost } = useBurger();
  const cost = getCost();
  return (
    <Wrapper>
      <Text>Total cost: {cost} EURO</Text>
    </Wrapper>
  );
};

export default Cost;
