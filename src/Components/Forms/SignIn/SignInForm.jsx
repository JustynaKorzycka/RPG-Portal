import { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { LogInContext } from '../../../Context/LogInContext';


const SignInForm = () => {
  const [loginUser, setLogInUser] = useContext(LogInContext);

  return (
    <Form>
      <Form.Label>User name</Form.Label>
       <Form.Control
          type="text"
          name="name"
          placeholder="User name"
          />
    </Form>
  )
}

export default SignInForm
