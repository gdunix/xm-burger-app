import React from "react";
import { Ingredient as IngredientType } from "@/types";
import useBurger from "@/store/useBurger";
import { Wrapper, Content } from "./styled";
import { TopBun, BottomBun } from "../components/buns";
import Ingredient from "./ingredient";

const Burger: React.FC = () => {
  const { getBurger } = useBurger();
  return (
    <Wrapper>
      <TopBun />
      <Content>
        {getBurger().map((ingredient: IngredientType, index) => (
          <Ingredient key={`${ingredient.name}-${index}`} {...ingredient} />
        ))}
      </Content>
      <BottomBun />
    </Wrapper>
  );
};

export default Burger;
