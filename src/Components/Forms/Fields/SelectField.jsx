import {  Form, FormGroup, Row, Col } from 'react-bootstrap';

const SelectField = ({ formik, label, fieldType, fieldName, options}) => {
  return <FormGroup className="mb-3" controlId={`form${fieldName}`}>
    <Row>
      <Form.Label column>{label}</Form.Label>
      <Col>
        <Form.Select
          onChange={formik.handleChange}
          name={ fieldName }
          type={fieldType}
          value={ formik.values[fieldName] }
        >
      <option value=''></option>
      {options.map((item) => <option value={item.value}>{item.name}</option>)}
        </Form.Select>
      </Col>
    </Row>
         <Form.Text className="text-danger">
          {formik.touched.userType && formik.errors.email ? (
            <div className="text-danger">{formik.errors.userType}</div>
          ) : null}
        </Form.Text>
      </FormGroup>;
};

export default SelectField;
