import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { logoutSuccess } from '../../Redux/loginUserSlice';
import { useNavigate } from 'react-router-dom';

const ButtonLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return <Button onClick={() => {
    dispatch(logoutSuccess())
    navigate('/')
  }}>Log out</Button>;
};

export default ButtonLogout;
