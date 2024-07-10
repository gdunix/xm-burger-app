import * as C from "../constants";

export const GET_ALL_KEY = "Ingredients.getAll";
export const GET_ALL_URL = `${C.BASE_URL}/ingredients`;

export const CONFIG = {
  retry: 0,
  refetchOnWindowFocus: false,
  refetchOnMount: false,
  refetchOnReconnect: false,
};
