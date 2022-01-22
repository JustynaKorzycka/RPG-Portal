import React from 'react';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LogInForm from '../Forms/LogIn/LogInForm';
import './LoginModal.scss';

const LoginModal = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} >Log in</Button>
       <Modal show={show} onHide={handleClose} className='form'>
        <Modal.Header closeButton>
          <Modal.Title>Log in</Modal.Title>
        </Modal.Header>
     <Modal.Body>
          <LogInForm setShow={setShow}/>
        </Modal.Body>
        <Modal.Footer>
          <p> You do not have an account?</p>
          <Link className='nav-link' to="signin" onClick={handleClose}>Sign in!</Link>
          
        </Modal.Footer>
    </Modal>
    </>
  
    )
};

export default LoginModal;
