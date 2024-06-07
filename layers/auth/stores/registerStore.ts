import type { RegisterSchema } from "~/layers/auth/validators/registerValid";

const useRegisterStore = () => {
  const state = reactive<RegisterSchema>({
    email: "",
    password: "",
    password_confirm: "",
  });

  return {
    state,
  };
};

export { useRegisterStore };
