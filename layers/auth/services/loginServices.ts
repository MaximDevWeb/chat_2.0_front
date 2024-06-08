import type { FormSubmitEvent } from "#ui/types";
import type { LoginSchema } from "~/layers/auth/validators/loginValid";
import type { ErrorType } from "~/core/assets/types/errorsTypes";

const useLoginService = () => {
  const pending = ref(false);

  const onSubmit = async (event: FormSubmitEvent<LoginSchema>) => {
    const { signIn } = useAuth();
    const { add } = useToast();

    pending.value = true;

    try {
      await signIn(event.data, { callbackUrl: "/chat" });
    } catch (error) {
      add({
        title: (error as ErrorType).data.message,
        description: "Исправьте ошибку и повторите",
        color: "red",
      });
    } finally {
      pending.value = false;
    }
  };

  return {
    pending,

    onSubmit,
  };
};

export { useLoginService };
