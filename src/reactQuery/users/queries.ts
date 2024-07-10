import axios from "axios";
import { Login } from "@/types";

import * as C from "./constants";

export const login = async ({ name, password }: Login) => {
  const response = await axios.post(C.LOGIN_URL, { name, password });
  return response;
};
