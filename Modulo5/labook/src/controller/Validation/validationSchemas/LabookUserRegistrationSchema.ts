import * as yup from "yup";

export const labookUserRegistrationSchema = yup.object({
    name: yup.string().required(" 'name' is a mandatory field").min(5, "Field 'name' must have at least 5 characters"),
    email: yup.string().email("Field 'email' must be a valid email").required(" 'email' is a mandatory field"),
    password: yup.string().required(" 'password' is a mandatory field").min(6, "Password must be at least 6 characters long")
})