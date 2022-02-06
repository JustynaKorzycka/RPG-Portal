import React from 'react';
import { Button } from 'react-bootstrap';
import ChangeUserDataModal from '../../Components/Modal/ChangeUserDataModal';

const AccountData = ({ user }) => {
  return <>
    <h2>Your account data</h2>
    <div className="user-data">
      <div><h5>Nick: </h5><span> {user.nick} </span></div>
      <div><h5>E-mail: </h5> <span> {user.email} </span></div>
      <div><h5>Avatar: </h5>
         <div>{user.avatar ?<img className='avatar' src={user.avatar} alt='avatar' /> : ' ----'}</div>
        <ChangeUserDataModal  valueToChange='avatar'/>
        </div> 
      
      <div><h5>User image: </h5> <div><img className='header' src={user.dashboardImage} alt='header' /></div>
      <ChangeUserDataModal  valueToChange='image'/>
      </div>
      
      
    </div>
  
  </>;
};

export default AccountData;
