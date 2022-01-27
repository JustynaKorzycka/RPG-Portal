import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './Modals.scss';
import { useDispatch } from 'react-redux';
import { updateCampaigns } from '../../Redux/campaignsSlice';
import { updateUser } from '../../Redux/loginUserSlice';


const SignUpToCampaingModal = ({ campaign, user}) => {
 const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (campaign.playersID.includes(user.id)) {
      alert('You have already signed up for this campaign')
    } else {
      const allPlayers = campaign.playersID.concat([user.id])
      const newCampValue = { ...campaign };
      newCampValue.playersID = allPlayers;

      const allUserGames = user.userSaved.confirmedCamaigns.concat([campaign.id]);
      const newUserVales = { ...user };
      console.log(newUserVales)
      newUserVales.userSaved = { confirmedCamaigns: allUserGames };

      dispatch(updateCampaigns({ id: campaign.id, values: newCampValue }));
      dispatch(updateUser({ id: user.id, values: newUserVales} ))
     
      alert('You have successfully enrolled in campaign :) ')
    }
    handleClose();
  }

  return (
    <>
      <Button onClick={handleShow} >Sign up</Button>
       <Modal show={show} onHide={handleClose} className='form'>
        <Modal.Header closeButton>
          <Modal.Title>Sign up for the campaign </Modal.Title>
        </Modal.Header>
     <Modal.Body className='body-text'>
          Are You sure You want to sign up to capmaing? 
        </Modal.Body>
        <Modal.Footer>
           <Button variant="primary" onClick={handleSubmit}>
            Yes
          </Button>
           <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
         
          
        </Modal.Footer>

    </Modal>
    </>
  
    )
};

export default SignUpToCampaingModal;
