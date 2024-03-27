import { z } from "zod";

export const registerSchema = z
  .object({
    name: z.string().trim().min(5, "Name must be atleast 5 characters long"),
    email: z.string().email("Invalid email format `example@domain.com`"),
    password: z
      .string()
      .min(8, "Password must be atleast 8 characters long")
      .transform((value) => btoa(value)),
    confirm_password: z
      .string()
      .min(8, "Password must be atleast 8 characters long")
      .transform((value) => btoa(value)),
  })
  .refine((values) => values.password === values.confirm_password, {
    message: "Password and Confirm Password does not match",
    path: ["confirm_password"],
  });

export type TRegisterSchema = z.infer<typeof registerSchema>;

export const initialFormData = {
  name: "Tugbeh Emmanuel Osaretin",
  email: "etugbeh@outlook.com",
  password: "_Thatzentrydbb0y",
  confirm_password: "_Thatzentrydbb0y",
};
