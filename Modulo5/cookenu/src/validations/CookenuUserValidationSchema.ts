import * as yup from "yup"; 

export const cookenuUserSignUpSchema = yup.object({

    name: yup.string().required("Name is a required field"),

    email: yup.string().email("Invalid email").required("Email is a required field"),
    
    password: yup.string().min(6, "Password must be over 6 characters").required("Password is a required field")
})