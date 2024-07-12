import React from "react";
import { Ingredient as IngredientType } from "@/types";
import Tooltip from "@/components/tooltip";
import useBurger from "@/store/useBurger";
import { Button, Info, Content } from "./styled";
import BurgerImg from "../../components/burgerImg";

const Ingredient: React.FC<IngredientType> = ({
  id,
  name,
  src,
}) => {
  const { removeIngredient, getIngredientCount } = useBurger();
  const count = getIngredientCount(id);
  const onClick = () => {
    removeIngredient(id);
  };
  const info = `x ${count}`;
  return (
    <Tooltip text={`Click to remove ${name}`}>
      <Button onClick={onClick}>
        <Content>
          <BurgerImg src={src} name={name} />
          {count > 0 && <Info>{info}</Info>}
        </Content>
      </Button>
    </Tooltip>
  );
};

export default Ingredient;
