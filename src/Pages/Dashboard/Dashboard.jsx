import React from 'react';
import { Tab, Container, Row, Col, Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Header from '../../Components/Header/Header';
import AccountData from './AccountData';
import ChangePassword from './ChangePassword';
import './Dashboard.scss'


const Dashboard = () => {
   const { user } = useSelector(state => ({ ...state.user }))

  return (
   <div className='post dashboard'>
    <Header title={`${user.nick} dashboard`} image={user.dashboardImage ? user.dashboardImage : 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cf189e7e-b36d-4d08-a410-2cad87c860a9/degmfcj-3f451102-2a5f-41d3-b911-8a2d8533519d.jpg/v1/fill/w_1095,h_730,q_70,strp/medieval_river_by_simonjody_degmfcj-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA2NyIsInBhdGgiOiJcL2ZcL2NmMTg5ZTdlLWIzNmQtNGQwOC1hNDEwLTJjYWQ4N2M4NjBhOVwvZGVnbWZjai0zZjQ1MTEwMi0yYTVmLTQxZDMtYjkxMS04YTJkODUzMzUxOWQuanBnIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.4mZJ2N6BwYGMDLtTMYct1J0IxT1ac3IXzUqnxOIlDUU'} />
      <Container>
       <Tab.Container id="userDashboard" defaultActiveKey="userData">
          <Row>
            <Col sm={3} className='tabs-nav'>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="userData">Account data</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="password">Change password</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="imgHeader">Header image</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  {user.userType === 'player' && <Nav.Link eventKey="confirmedCampaigns">Confirmed campaigns</Nav.Link>}
                  {user.userType === 'gameMaster' && <Nav.Link eventKey="masterCampaigns">Your campaigns</Nav.Link>}
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="userData">
                  <AccountData user = {user} />
                </Tab.Pane>
                <Tab.Pane eventKey="password">
                 <ChangePassword />
                </Tab.Pane>
                 <Tab.Pane eventKey="imgHeader">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti pariatur aut eius blanditiis dolore atque possimus alias asperiores. Dignissimos, neque alias? Dolores officia porro, sit maxime cupiditate laudantium soluta, ab ad nisi earum modi non atque esse facilis minima nemo inventore facere cum optio a quae. Deserunt dolore a sequi.
                </Tab.Pane>
                 <Tab.Pane eventKey="confirmedCampaigns">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti pariatur aut eius blanditiis dolore atque possimus alias asperiores. Dignissimos, neque alias? Dolores officia porro, sit maxime cupiditate laudantium soluta, ab ad nisi earum modi non atque esse facilis minima nemo inventore facere cum optio a quae. Deserunt dolore a sequi.
                </Tab.Pane>
                 <Tab.Pane eventKey="masterCampaigns">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti pariatur aut eius blanditiis dolore atque possimus alias asperiores. Dignissimos, neque alias? Dolores officia porro, sit maxime cupiditate laudantium soluta, ab ad nisi earum modi non atque esse facilis minima nemo inventore facere cum optio a quae. Deserunt dolore a sequi.
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
    </Container>
      </div>
  )
};

export default Dashboard;
