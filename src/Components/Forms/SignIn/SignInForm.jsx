
import { Button, Form, FormGroup } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as yup from "yup";
import addNewRecord from '../Helpers/addNewRecord';


const SignInForm = () => {

  const validationSchema = yup.object().shape({
    nick: yup.string().min(4, "User name must be at least 4 characters long (ex. John)").required('This field is required'),
    email: yup.string().email('Enter a valid email address (ex. mail@gmail.com).').required('This field is required'),
    userType: yup.string().required('This field is required'),
    avatar: yup.string().url('Enter correct url address (ex: https://cdn.pixabay.com/picture.jpg'),
    password: yup.string().required()
  })

  const formik = useFormik({
    initialValues: {
      id: null,
      nick: '',
      avatar: '',
      userType: '',
      userSaved: {},
      email: '',
      password: ''
      
    },
    validationSchema : validationSchema,
    onSubmit: (values, { resetForm }) => {
      addNewRecord(values, 'users')
      resetForm({vaules: ''})
    }
  })

  return (
    
    <Form onSubmit={ formik.handleSubmit }>
      <FormGroup controlId='formNick'>
        <Form.Label> User name </Form.Label>
        <Form.Control
          type="text"
          name="nick"
          placeholder="User name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
         <Form.Text className="text-danger">
          {formik.touched.nick && formik.errors.nick ? (
            <div className="text-danger">{formik.errors.nick}</div>
          ) : null}
        </Form.Text>
      </FormGroup>
      <FormGroup controlId='formEmail'>
        <Form.Label> Email </Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <Form.Text className="text-danger">
          {formik.touched.email && formik.errors.email ? (
            <div className="text-danger">{formik.errors.email}</div>
          ) : null}
        </Form.Text>
      </FormGroup>

       <FormGroup controlId='formPassword'>
        <Form.Label> Password </Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <Form.Text className="text-danger">
          {formik.touched.password && formik.errors.password ? (
            <div className="text-danger">{formik.errors.password}</div>
          ) : null}
        </Form.Text>
      </FormGroup>
      

      <Form.Group controlId='formUserType'>
        <Form.Label>User type</Form.Label>
        <Form.Select
          onChange={formik.handleChange}
          name='userType'
          type="text"
        >
        <option value= ''></option>
          <option value='player'> Player </option>
          <option value='gameMaster'> Game Master </option>
        </Form.Select>
         <Form.Text className="text-danger">
          {formik.touched.userType && formik.errors.email ? (
            <div className="text-danger">{formik.errors.userType}</div>
          ) : null}
        </Form.Text>
      </Form.Group>

      <FormGroup controlId='formAvatar'>
        <Form.Label> Avatar </Form.Label>
        <Form.Control
          type="text"
          name="avatar"
          placeholder="avatar url"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <Form.Text className="text-danger">
          {formik.touched.avatar && formik.errors.avatar ? (
            <div className="text-danger">{formik.errors.avatar}</div>
          ) : null}
        </Form.Text>
      </FormGroup>
       
     


      <Button variant='primary' type='submit'>Sign in</Button>
      </Form>

  )
}

export default SignInForm
