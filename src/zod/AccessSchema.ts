import { z } from "zod";

const emailField = z.string().email("Invalid email");

const usernameField = z
  .string()
  .min(6, "Min 6 chars")
  .max(15, "Max 15 chars")
  .regex(/^[a-z0-9._]+$/, "Only lowercase, . and _ allowed");

const passwordField = z.string().min(6, "Min 6 chars").max(20, "Max 20 chars");

export const registerSchema = z
  .object({
    email: emailField,
    username: usernameField,
    password: passwordField,
    confirm_password: z.string(),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

export const loginSchema = z.object({
  credential: z
    .string()
    .min(1, "Required")
    .refine(
      (val) =>
        /^[a-z0-9._]+$/.test(val) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
      "Invalid username or email"
    ),
  password: passwordField,
});

export const googleRegisterSchema = z.object({
  username: usernameField,
  password: passwordField,
});
