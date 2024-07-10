import { useMutation } from "@tanstack/react-query";
import * as Q from "./queries";

type MutationProps = {
  onSuccess: (res: any) => void;
  onError: (error: any) => void;
};

const useLogin = (props: MutationProps) =>
  useMutation({ mutationFn: Q.login, ...props });

export default {
  useLogin,
};
