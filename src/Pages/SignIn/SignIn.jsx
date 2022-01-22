import React from 'react'
import Header from '../../Components/Header/Header'
import headerImg from '../../Assets/img/headers/header1.jpg'
import SignInForm from '../../Components/Forms/SignIn/SignInForm'
import { Col, Container, Row } from 'react-bootstrap'


const SignIn = () => {
  return (
    <div className='post'>
      <Header title='Sign in' image={headerImg} />
      <Container>
        <Row className='justify-content-md-center'>
          <Col xs lg='6'>
            <SignInForm />
          </Col>
          
        </Row>
        
      </Container>
     
    </div>
  )
}

export default SignIn
