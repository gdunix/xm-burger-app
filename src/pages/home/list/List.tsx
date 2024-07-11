import React from "react";
import { Ingredient as IngredientType } from "@/types";
import { Wrapper, ListItems } from "./styled";
import Ingredient from "./ingredient";

type Props = {
  ingredients: IngredientType[];
};

const List: React.FC<Props> = ({ ingredients = [] }) => {
  return (
    <Wrapper>
      <ListItems>
        {ingredients.map((ingredient: IngredientType) => (
          <Ingredient key={ingredient.id} {...ingredient} />
        ))}
      </ListItems>
    </Wrapper>
  );
};

export default List;
