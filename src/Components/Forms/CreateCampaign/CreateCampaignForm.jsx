import React from 'react';
import { Button, Form} from 'react-bootstrap';
import { useFormik } from 'formik'
import InputField from '../Fields/InputField';
import { createCampaignValidationSchema } from '../Validations/validationSchemes';
import { addNewCampaign } from '../../Helpers/addNewCampaign';
import '../../../Styles/forms.scss'
import { useSelector, useDispatch } from 'react-redux';
import { addCampaign } from '../../../Redux/campaignsSlice';

const CreateCampaignForm = () => {
  const { user } = useSelector(state => ({ ...state.user }))
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      id: '',
      name: '',
      desc: '',
      playersNumber: '',
      playersID: [],
      gameMasterId: user.id,
      image: '',
      startDate: '',

    },
    validationSchema: createCampaignValidationSchema,
    onSubmit: (values, { resetForm }) => {
      const ifAdd = addNewCampaign(values, 'campaigns')
      if (ifAdd) {
        alert('The campaign has been added')
        resetForm({ values: formik.initialValues })
        dispatch(addCampaign(values))
      }else alert('Something went wrong ... Try again')
    }

  })
  return (
    <Form onSubmit={formik.handleSubmit}>
      <InputField formik={formik} label='Title' fieldType='text' fieldName='name' fieldPlaceholder='Title...' />
      <InputField formik={formik} label='Description' fieldType='textarea' fieldName='desc' fieldPlaceholder='Description...' />
      <InputField formik={formik} label='Maximum number of players' fieldType='number' fieldName='playersNumber' fieldPlaceholder='Players number...' />
      <InputField formik={formik} label='Campaign image' fieldType='url' fieldName='image' fieldPlaceholder='Image url...' />
      <Button variant='primary' type='submit' className='btn-full-width'>Sign in</Button>
    </Form>
  );
};

export default CreateCampaignForm;
