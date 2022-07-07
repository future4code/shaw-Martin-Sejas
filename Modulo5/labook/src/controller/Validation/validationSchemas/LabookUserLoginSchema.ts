import * as yup from "yup";

export const labookUserLoginSchema = yup.object({
    email: yup.string().email("Field 'email' must be a valid email").required(" 'email' is a mandatory field"),
    password: yup.string().required(" 'password' is a mandatory field").min(6, "Password must be at least 6 characters long")
})