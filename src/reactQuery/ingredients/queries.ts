import axios from "axios";

import * as C from "./constants";

export const getAll = async (token: string | null) => {
  const response = await axios.get(C.GET_ALL_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response?.data ?? [];
};
