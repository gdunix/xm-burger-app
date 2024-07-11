import React from "react";
import Loader from "@/components/loader";
import { Wrapper } from "./styled";
import useIngredients from "./useIngredients";
import List from "./list";
import Burger from "./burger";
import Card from "@/components/card";
import Cost from "./cost";

const Ingredients: React.FC = () => {
  const { data, isLoading } = useIngredients();
  return (
    <Card title="Make your Burger">
      <Wrapper>
        {isLoading && <Loader />}
        {!!data && <List ingredients={data} />}
        <Burger />
      </Wrapper>
      <Cost />
    </Card>
  );
};

export default Ingredients;
