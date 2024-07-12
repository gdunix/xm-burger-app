import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Login as LoginType } from "@/types";
import users from "@/reactQuery/users";
import useAuth from "@/store/useAuth";

const useLogin = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState<LoginType>({ name: "", password: "" });
  const [error, setError] = useState<string>("");

  const { mutate, isPending } = users.useLogin({
    onSuccess: (response: any) => {
      setError("");
      const token = response?.data?.token;
      token && login(token);
      navigate("/");
    },
    onError: (error: any) => {
      setError(error?.response?.data);
    },
  });

  return {
    form,
    setForm,
    error,
    setError,
    login: () => mutate(form),
    isPending,
  };
};

export default useLogin;
