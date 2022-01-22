import React from 'react'
import Header from '../../Components/Header/Header'
import headerImg from '../../Assets/img/headers/header1.jpg'
import SignInForm from '../../Components/Forms/SignIn/SignInForm'
import { Container } from 'react-bootstrap'


const SignIn = () => {
  return (
    <div className='post'>
      <Header title='Sign in' image={headerImg} />
      <Container className='form'>
        <h2>Join our community</h2>
        <SignInForm />
      </Container>
     
    </div>
  )
}

export default SignIn
