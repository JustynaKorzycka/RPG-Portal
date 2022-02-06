import * as yup from "yup";

export const signInValidationSchema = yup.object().shape({
    nick: yup.string().min(4, "User name must be at least 4 characters long (ex. John)").required('This field is required'),
    email: yup.string().email('Enter a valid email address (ex. mail@gmail.com).').required('This field is required'),
    userType: yup.string().required('This field is required'),
    avatar: yup.string().url('Enter correct url address (ex: https://cdn.pixabay.com/picture.jpg'),
    password: yup.string().required().matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character")
})
  
export const logInValidationSchema = yup.object().shape({
    nick: yup.string().min(4, "User name must be at least 4 characters long (ex. John)").required('This field is required'),
    password: yup.string().required()
})

export const avatarUpdateInValidationSchema = yup.object().shape({
    avatar: yup.string().url('Enter correct url address (ex: https://cdn.pixabay.com/picture.jpg')
})

export const headerImgUpdateInValidationSchema = yup.object().shape({
    dashboardImage: yup.string().url('Enter correct url address (ex: https://cdn.pixabay.com/picture.jpg')
})

export const passwordChangeValidationSchema = yup.object().shape({
    password: yup.string().required().matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"),
    passwordConfirmation: yup.string()
     .oneOf([yup.ref('password'), null], 'Passwords must match').required()
})