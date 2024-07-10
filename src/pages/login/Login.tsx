import React from "react";
import Title from "@/components/title";
import Form from "@/components/form";
import Input from "@/components/input";
import Button from "@/components/button";
import { Actions, ErrorMsg } from "./styled";
import useLogin from "./useLogin";

const Login: React.FC = () => {
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
    <>
      <Title>Login</Title>
      <Form onSubmit={onSubmit}>
        <Input id="name" name="name" label="Name" value={form.name} onChange={onChange} />
        <Input
          id="password"
          type="password"
          name="password"
          label="Password"
          value={form.password}
          onChange={onChange}
        />
        <Actions>
          <Button type="submit">Login</Button>
        </Actions>
        {!!error && <ErrorMsg role="alert">{error}</ErrorMsg>}
      </Form>
    </>
  );
};

export default Login;
