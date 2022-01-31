import { useFormik } from 'formik';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../../Redux/loginUserSlice';
import InputField from '../Fields/InputField';
import { avatarUpdateInValidationSchema } from '../Validations/validationSchemes';

const ChangeUserAvatar = ({ setShow }) => {

  const { user } = useSelector(state => ({ ...state.user })) 
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      avatar: '',
    },
    validationSchema: avatarUpdateInValidationSchema,
    onSubmit: async (values, { resetForm }) => {
      resetForm({ values: formik.initialValues })
      setShow(false)
      const newValues = { ...user };
      newValues.avatar = values.avatar
      dispatch(updateUser({ id: user.id, values: newValues }))
    }
  })

  return (
    <Form className='small' onSubmit={formik.handleSubmit}>
      <InputField formik = { formik } label="Avatar"  fieldType='text' fieldName='avatar'  fieldPlaceholder='Avatar url'/> 
        <Button variant='primary' type='submit' className='btn-full-width' >Submit</Button>
    </Form>
  );
};

export default ChangeUserAvatar;
//"https://cdn.pixabay.com/photo/2013/07/13/13/32/demon-161049_960_720.png
