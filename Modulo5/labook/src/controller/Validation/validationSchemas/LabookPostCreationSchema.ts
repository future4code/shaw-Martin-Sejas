import * as yup from "yup"; 

export const labookPostCreationSchema = yup.object({
    picture: yup.string().required(" 'picture' is a mandatory field, please input a picture URL for your post").url(" 'picture' must be an URL").max(255),
    description: yup.string().required(" 'description' is a mandatory field").min(10, "Minimum 10 characters for post description").max(500),
    postType: yup.string().required("field 'postType' is mandatory").oneOf(["NORMAL", "EVENT"], "field 'postType' can only have values 'NORMAL' or 'EVENT' ")
})