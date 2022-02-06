
import { Button, Form} from 'react-bootstrap';
import { useFormik } from 'formik';
import { addNewRecord } from '../../Helpers/addNewRecord';
import InputField from '../Fields/InputField';
import SelectField from '../Fields/SelectField';
import { signInValidationSchema } from '../Validations/validationSchemes'
import '../../../Styles/forms.scss'
import { useNavigate } from 'react-router-dom';

const SignInForm = () => {
  const navigate = useNavigate();
  const options = [{
    value: "player",
    name : "Player"
  }, {
    value: "gameMaster",
    name: "Game Master"
  }]

  const formik = useFormik({
    initialValues: {
      id: null,
      nick: '',
      avatar: '',
      dashboardImage: '',
      userType: '',
      email: '',
      password: ''
    },
    validationSchema : signInValidationSchema,
    onSubmit: async(values, { resetForm }) => {
      const added = await addNewRecord(values, 'users', values.nick)
      if (added) {
        resetForm({ values: formik.initialValues })
        navigate('/');
        alert('You have registered successfully. You can login now :) ')
      }
      else {
       alert('This nickname is already taken') 
      } 
      
     
    }
  })

  return (
    
    <Form onSubmit={formik.handleSubmit}>
      <InputField formik={ formik } label='User name' fieldType='text' fieldName='nick' fieldPlaceholder='User name' />
      <InputField formik = { formik } label="Email"  fieldType='email' fieldName='email'  fieldPlaceholder='Email'/>
      <InputField formik = { formik } label="Password"  fieldType='password' fieldName='password'  fieldPlaceholder='Password'/>
      <SelectField formik={ formik } label='User type' fieldType='text' fieldName='userType' options={ options }/>
      <InputField formik = { formik } label="Avatar"  fieldType='text' fieldName='avatar'  fieldPlaceholder='Avatar url'/> 
      <Button variant='primary' type='submit' className='btn-full-width'>Sign in</Button>
    </Form>

  )
}

export default SignInForm
