import React from "react";
import { Container, Input as StyledInput, Label } from "./styled";

type Props = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<Props> = ({ id, label, ...rest }) => (
  <Container>
    <Label htmlFor={id}>{label}</Label>
    <StyledInput id={id} {...rest} />
  </Container>
);

export default Input;
