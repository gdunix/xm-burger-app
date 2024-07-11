import React from "react";
import { Container, Title, Content } from "./styled";

type Props = {
  title: string;
  children: React.ReactNode;
};

const Card: React.FC<Props> = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <Content>{children}</Content>
  </Container>
);

export default Card;
