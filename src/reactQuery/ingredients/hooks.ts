import { useQuery } from "@tanstack/react-query";
import * as Q from "./queries";
import * as C from "./constants";

export const useIngredients = ({ token }: { token: string | null }) =>
  useQuery({
    queryKey: [C.GET_ALL_KEY],
    queryFn: () => Q.getAll(token),
    ...C.CONFIG,
  });

export default {
  useIngredients,
};
