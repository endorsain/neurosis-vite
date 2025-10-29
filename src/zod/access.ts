import { z } from "zod";
import i18n from "../i18n";

export const emailField = () =>
  z
    .string()
    .nonempty(i18n.t("access.zod.required"))
    .email(i18n.t("access.zod.email"));

export const usernameField = () =>
  z
    .string()
    .nonempty(i18n.t("access.zod.required"))
    .min(6, i18n.t("access.zod.username.min"))
    .max(15, i18n.t("access.zod.username.max"))
    .regex(/^[a-z0-9._]+$/, i18n.t("access.zod.username.regex"));

export const passwordField = () =>
  z
    .string()
    .nonempty(i18n.t("access.zod.required"))
    .min(6, i18n.t("access.zod.password.min"))
    .max(20, i18n.t("access.zod.password.max"));

export const makeRegisterSchema = () =>
  z
    .object({
      email: emailField(),
      username: usernameField(),
      password: passwordField(),
      confirm_password: z.string(),
    })
    .refine((data) => data.password === data.confirm_password, {
      message: i18n.t("access.zod.password.not_match"),
      path: ["confirm_password"],
    });

export const makeLoginSchema = () =>
  z.object({
    credential: z
      .string()
      .nonempty(i18n.t("access.zod.required"))
      .refine(
        (val) =>
          /^[a-z0-9._]+$/.test(val) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
        i18n.t("access.zod.credential")
      ),
    password: passwordField(),
  });

export const makeGoogleRegisterSchema = () =>
  z
    .object({
      username: usernameField(),
      password: passwordField(),
      confirm_password: z.string(),
    })
    .refine((data) => data.password === data.confirm_password, {
      message: i18n.t("access.zod.password.not_match"),
      path: ["confirm_password"],
    });
