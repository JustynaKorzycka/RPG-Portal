import * as yup from "yup";

export const signInValidationSchema = yup.object().shape({
    nick: yup.string().min(4, "User name must be at least 4 characters long (ex. John)").required('This field is required'),
    email: yup.string().email('Enter a valid email address (ex. mail@gmail.com).').required('This field is required'),
    userType: yup.string().required('This field is required'),
    avatar: yup.string().url('Enter correct url address (ex: https://cdn.pixabay.com/picture.jpg'),
    password: yup.string().required()
})
  
export const logInValidationSchema = yup.object().shape({
    nick: yup.string().min(4, "User name must be at least 4 characters long (ex. John)").required('This field is required'),
    password: yup.string().required()
})