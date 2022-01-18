import { Routes, Route } from 'react-router-dom';
import './App.scss'
import Home from "./Pages/Home/Home";
import Campaigns from "./Pages/Campaigns/Campaigns";
import Navigation from "./Components/Navigation/Navigation";
import { Container } from 'react-bootstrap';
import Footer from './Components/Footer/Footer';
import { useDispatch } from 'react-redux';
import { getCampaigns } from './Redux/campaignsSlice';
import { getGameMasters } from './Redux/gameMastersSlice';
import Campaign from './Pages/Campaign/Campaign';
import SignIn from './Pages/SignIn/SignIn';
import { LogInProvider } from './Context/LogInContext';
import { useEffect } from 'react';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCampaigns())
    dispatch(getGameMasters())
  }, []);
  
 
  return (
    <div className='wrapper'>
      <LogInProvider>
        <Navigation />
        <Container fluid className='main-container'>
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='campaigns' element={<Campaigns />} />
            <Route path='campaigns/:campaignId' element={ <Campaign /> } />
            <Route path='signin' element={ <SignIn /> } />
          </Routes>
        </Container>
          <Footer />
      </LogInProvider>
    </div>
  );
}

export default App;