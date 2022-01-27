import {  Form, FormGroup, Row, Col } from 'react-bootstrap';


const InputField = ({ formik, label, fieldType, fieldName, fieldPlaceholder }) => {
  return <FormGroup  controlId={`form${fieldName}`}>
    <Row>
    <Form.Label column> {label} </Form.Label>
     <Col>
        <Form.Control
          type={ fieldType }
          name= { fieldName }
          placeholder= { fieldPlaceholder }
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={ formik.values[fieldName] }
      />
      </Col>
      </Row>
         <Form.Text className="text-danger" >
          {formik.touched[fieldName] && formik.errors[fieldName] ? (
            <div className="text-danger">{formik.errors[fieldName]}</div>
          ) : null}
      </Form.Text>
      
      </FormGroup>;
};

export default InputField;
