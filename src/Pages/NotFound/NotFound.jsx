import React from 'react';
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import errorImg from '../../Assets/img/error.jpg'
import './NotFound.scss'
import { useNavigate } from 'react-router-dom';

const NotFound = () => {

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(()=>navigate('/'), 2000)
  }, [])

  return <Container className='notFound'>
    <img src={errorImg} alt='error' />

  </Container>;
};

export default NotFound;
