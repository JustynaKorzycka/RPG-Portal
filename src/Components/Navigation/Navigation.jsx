import './Navigation.scss'
import { Navbar, Nav, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginModal from '../Modal/LoginModal';
import { useSelector } from 'react-redux';
import ButtonLogout from './ButtonLogout';


const Navigation = () => {
  
  const user = useSelector(state => state.user);


  return (
     <Navbar expand="sm" id='nav' variant='dark'>
        <Container>
          <Link className='navbar-brand' to='/'>Logo</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Link className='nav-link' to="/">Home</Link>
              <Link className='nav-link' to="campaigns">Campaigns</Link>   
            { !user.isLogged ? <LoginModal />:  <ButtonLogout/>}
        
            </Nav>
          </Navbar.Collapse>
      </Container>
     
    </Navbar>
    

    
  )
}

export default Navigation
