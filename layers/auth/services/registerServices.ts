import type { FormSubmitEvent } from "#ui/types";
import type { RegisterSchema } from "~/layers/auth/validators/registerValid";
import type { ErrorType } from "~/core/assets/types/errorsTypes";

const useRegisterServices = () => {
  const pending = ref(false);

  const onSubmit = async (event: FormSubmitEvent<RegisterSchema>) => {
    const { signUp } = useAuth();
    const router = useRouter();
    const { add } = useToast();

    pending.value = true;

    try {
      await signUp(event.data, {}, { preventLoginFlow: true });
      await router.push("/auth");

      add({
        title: "Подтвердите email",
        description: "На ваш email было отправлено письмо для подтверждения",
      });
    } catch (error: any) {
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

export { useRegisterServices };
