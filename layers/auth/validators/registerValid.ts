import { z } from "zod";

const registerSchema = z
  .object({
    email: z.string().email("Неверный формат email"),
    password: z.string().min(8, "Длина пароля не менее 8 символов"),
    password_confirm: z.string().min(8, "Длина пароля не менее 8 символов"),
  })
  .refine((schema) => schema.password === schema.password_confirm, {
    message: "Пароли не совпадают",
    path: ["password_confirm"],
  });

type RegisterSchema = z.output<typeof registerSchema>;

export { registerSchema, type RegisterSchema };
