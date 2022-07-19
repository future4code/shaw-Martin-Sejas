import * as yup from "yup"; 

export const CuboUserSchema = yup.object({
    firstName: yup.string().min(2, "Minimum 2 characters").max(254, "Max Length 255 characters").required("'First name' is a required field"),
    lastName:  yup.string().min(2, "minimum 2 characters").max(254, "Max Length 255 characters").required("'Last Name' is a required field"),
    participation: yup.number().min(1, "Participation has to be a positive number").max(100000, "Participation number over the limit").required("Participation is a required field")   
})