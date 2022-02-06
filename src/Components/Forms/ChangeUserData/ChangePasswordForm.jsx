import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { passwordChangeValidationSchema } from '../Validations/validationSchemes';
import { updateUser } from '../../../Redux/loginUserSlice';
import { Button, Form } from 'react-bootstrap';
import InputField from '../Fields/InputField';

const ChangePasswordForm = () => {
  const { user } = useSelector(state => ({ ...state.user })) 
  const dispatch = useDispatch();
  
  const formik = useFormik({
    initialValues: {
      password: '',
      passwordConfirmation: ''
    },
    validationSchema: passwordChangeValidationSchema,
    onSubmit: async (values, { resetForm }) => {
      resetForm({ values: formik.initialValues });
      const newValues = { ...user };
      newValues.password = values.password;
      dispatch(updateUser({ id: user.id, values: newValues }))
      alert('Your password has been changed')
    }
  })
  return (
    <Form className='small' onSubmit={formik.handleSubmit}>
      <InputField formik={formik} label='New password' fieldType='password' fieldName='password' fieldPlaceholder='Your password...' />
      <InputField formik={formik} label='Repeat password' fieldType='password' fieldName='passwordConfirmation' fieldPlaceholder='Repeat password...' />
       <Button variant='primary' type='submit' className='btn-full-width' >Submit</Button>
    </Form>
  );
};

export default ChangePasswordForm;
