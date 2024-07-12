import React from "react";
import Input from "@/components/input";
import Button from "@/components/button";
import Loader from "@/components/loader";
import { Wrapper, ErrorMsg } from "./styled";
import useLogin from "./useLogin";

const Form: React.FC = () => {
  const { error, setError, form, setForm, login, isPending } = useLogin();
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setError("");
    login();
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
      <Button type="submit" disabled={isPending}>
        Login
      </Button>
      {isPending && <Loader />}
      {!!error && <ErrorMsg role="alert">{error}</ErrorMsg>}
    </Wrapper>
  );
};

export default Form;
