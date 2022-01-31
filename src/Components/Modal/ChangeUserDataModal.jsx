import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import ChangeUserAvatar from '../Forms/ChangeUserData/ChangeUserAvatar';
import ChangeUserHeaderImg from '../Forms/ChangeUserData/ChangeUserHeaderImg';
import './Modals.scss';

const ChangeUserDataModal = ({ valueToChange }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button onClick={handleShow} >Change { valueToChange }</Button>
       <Modal show={show} onHide={handleClose} className='form'>
        <Modal.Header closeButton>
          <Modal.Title>Update { valueToChange }</Modal.Title>
         
        </Modal.Header>
        <Modal.Body>
          {valueToChange === 'avatar' && <ChangeUserAvatar setShow={setShow} />}
          {valueToChange === 'dashboardImage' && <ChangeUserHeaderImg setShow={setShow} />}

        
        </Modal.Body>
    </Modal>
    </>
  
    )
};

export default  ChangeUserDataModal;
