import type { LoginSchema } from "~/layers/auth/validators/loginValid";

const useLoginStore = () => {
  const state = reactive<LoginSchema>({
    email: "",
    password: "",
  });

  return {
    state,
  };
};

export { useLoginStore };
