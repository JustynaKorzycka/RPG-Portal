import './Navigation.scss'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Navigation = () => {
  return (
     <Navbar expand="sm" id='nav' variant='dark'>
        <Container>
          <Link className='navbar-brand' to='/'>Logo</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Link className='nav-link' to="/">Home</Link>
              <Link className='nav-link' to="campaigns">Campaigns</Link>   
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default Navigation
