
import { Button, Form} from 'react-bootstrap';
import { useFormik } from 'formik';
import { checkLogIn } from '../../Helpers/checkLogIn';
import InputField from '../Fields/InputField';
import { logInValidationSchema } from '../Validations/validationSchemes'
import '../../../Styles/forms.scss'

import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../../Redux/loginUserSlice';

const LogInForm = ({ setShow }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      nick: '',
      password: ''
    },
    validationSchema : logInValidationSchema,
    onSubmit: async(values, { resetForm }) => {
      const loggedIn =  await checkLogIn(values);
      if (!loggedIn) {
        alert('Nick or password is incorrect')
      } else {
        dispatch(loginSuccess(loggedIn[0]));
        resetForm({ values: formik.initialValues })
        setShow(false)
      }
    
    }
  })

  return (
    
    <Form onSubmit={formik.handleSubmit}>
      <InputField formik={ formik } label='User name' fieldType='text' fieldName='nick' fieldPlaceholder='User name' />
      <InputField formik = { formik } label="Password"  fieldType='password' fieldName='password'  fieldPlaceholder='Password'/>
      <Button variant='primary' type='submit' className='btn-full-width'>Sign in</Button>
    </Form>

  )
}

export default LogInForm
