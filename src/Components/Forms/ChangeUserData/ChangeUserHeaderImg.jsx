import { useFormik } from 'formik';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../../Redux/loginUserSlice';
import InputField from '../Fields/InputField';
import { headerImgUpdateInValidationSchema } from '../Validations/validationSchemes';

const ChangeUserHeaderImg = ({ setShow }) => {

  const { user } = useSelector(state => ({ ...state.user })) 
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      dashboardImage: '',
    },
    validationSchema: headerImgUpdateInValidationSchema,
    onSubmit: async (values, { resetForm }) => {
      resetForm({ values: formik.initialValues })
      setShow(false)
      const newValues = { ...user };
      newValues.dashboardImage = values.dashboardImage
      dispatch(updateUser({ id: user.id, values: newValues }))
    }
  })

  return (
    <Form className='small' onSubmit={formik.handleSubmit}>
      <InputField formik = { formik } label="Dashboard image"  fieldType='text' fieldName='dashboardImage'  fieldPlaceholder='Dashboard image url'/> 
        <Button variant='primary' type='submit' className='btn-full-width' >Submit</Button>
    </Form>
  );
};

export default ChangeUserHeaderImg;

