import { exactOptional, z } from "zod";

export const SignUpSchema = z.object({
  name: z.string().min(2, "Name must be atleast 2 Characters"),
  email: z.string().email("Enter a valid Email"),
  password: z.string().min(6, "Password must be atleast 6 Characters"),
});

export type SchemaFormData = z.infer<typeof SignUpSchema>;
