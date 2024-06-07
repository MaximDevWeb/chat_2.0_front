import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("Неверный формат email"),
  password: z.string().min(8, "Длина пароля не менее 8 символов"),
});

type LoginSchema = z.output<typeof loginSchema>;

export { loginSchema, type LoginSchema };
