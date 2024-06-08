import { useApi } from "~/core/composables/useApi";

const useEmailVerifyServices = () => {
  const { params } = useRoute();

  const { add } = useToast();
  const { push } = useRouter();
  const api = useApi();

  const { execute, status } = api
    .setMethod("POST")
    .disableImmediate()
    .setBody({
      token: params.token,
    })
    .use("/auth/email-verification");

  const send = async () => {
    await execute();

    if (status.value === "success") {
      await push("/auth");

      add({
        title: "Почта подтверждена",
        description: "Авторизуйтесь, чтобы начать использовать сервис",
      });
    }

    if (status.value === "error") {
      add({
        title: "Что-то пошло не так",
        description:
          "Возможно Ваша почта уже подтверждена или вы внесли изменение в ссылку",
        color: "red",
      });
    }
  };

  return {
    status,

    send,
  };
};

export { useEmailVerifyServices };
