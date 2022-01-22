import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { logoutSuccess } from '../../Redux/loginUserSlice';

const ButtonLogout = () => {
  const dispatch = useDispatch();

  return <Button onClick={()=>dispatch(logoutSuccess())}>Log out</Button>;
};

export default ButtonLogout;
