const useEmailVerifyServices = () => {
  const { params } = useRoute();

  const { add } = useToast();
  const { push } = useRouter();

  const { execute, status } = useLazyFetch(
    "https://jsonplaceholder.typicode.com/postsf",
    {
      immediate: false,
      server: false,
    },
  );

  const send = async () => {
    await execute();

    if (status.value === "success") {
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
