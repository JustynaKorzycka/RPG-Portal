import './Navigation.scss'
import { Navbar, Nav, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginModal from '../Modal/LoginModal';
import { useSelector } from 'react-redux';
import ButtonLogout from './ButtonLogout';

const Navigation = ({ isDark }) => {

   const { isLogged, user } = useSelector(state => ({ ...state.user }))
  
  return (
     <Navbar expand="sm" id='nav' variant='dark'  className={ isDark && 'dark' }>
        <Container>
          <Link className='navbar-brand' to='/'>Logo</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Link className='nav-link' to="/">Home</Link>
              <Link className='nav-link' to="campaigns">Campaigns</Link>   
              {isLogged && <Link className='nav-link' to={`dashboard${user.id}`}> Dashboard </Link>}
              {!isLogged ? <LoginModal /> : <ButtonLogout />}
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
