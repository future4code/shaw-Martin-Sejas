import * as yup from "yup"; 

export const cookenuRecipeValidationSchema = yup.object({

    title: yup.string().required("Title is a required field"),

    description: yup.string().required("Recipe Description is a mandatory field ")
})