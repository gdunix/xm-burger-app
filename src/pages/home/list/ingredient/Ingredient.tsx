import React from "react";
import useBurger from "@/store/useBurger";
import { Ingredient as IngredientType } from "@/types";
import Button from "@/components/button";
import { Card } from "./styled";
import BurgerImg from "../../components/burgerImg";

const Ingredient: React.FC<IngredientType> = ({ id, src, name }) => {
  const { addIngredient } = useBurger();
  const onClick = () => {
    addIngredient({ id, src, name });
  };
  return (
    <Card onClick={onClick}>
      <BurgerImg src={src} name={name} />
      <Button>Add {name}</Button>
    </Card>
  );
};

export default Ingredient;
