import type { FormSubmitEvent } from "#ui/types";
import type { LoginSchema } from "~/layers/auth/validators/loginValid";

const useLoginService = () => {
  const onSubmit = (event: FormSubmitEvent<LoginSchema>) => {
    console.log(event.data);
  };

  return {
    onSubmit,
  };
};

export { useLoginService };
