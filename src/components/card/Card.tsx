import React from "react";
import { Wrapper, Title, Content } from "./styled";

type Props = {
  title: string;
  children: React.ReactNode;
};

const Card: React.FC<Props> = ({ title, children }) => (
  <Wrapper>
    <Title>{title}</Title>
    <Content>{children}</Content>
  </Wrapper>
);

export default Card;
