import React from "react";
import Input from "@/components/input";
import Button from "@/components/button";
import { Wrapper, ErrorMsg } from "./styled";
import useLogin from "./useLogin";

const Form: React.FC = () => {
  const { error, form, setForm, mutate } = useLogin();
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    mutate(form);
  };
  return (
    <Wrapper onSubmit={onSubmit}>
      <Input
        id="name"
        name="name"
        label="Name"
        value={form.name}
        onChange={onChange}
        required
      />
      <Input
        id="password"
        type="password"
        name="password"
        label="Password"
        value={form.password}
        onChange={onChange}
        required
      />
      <Button type="submit">Login</Button>
      {!!error && <ErrorMsg role="alert">{error}</ErrorMsg>}
    </Wrapper>
  );
};

export default Form;
