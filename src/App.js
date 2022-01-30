import { Routes, Route } from 'react-router-dom';
import './App.scss'
import Home from "./Pages/Home/Home";
import Campaigns from "./Pages/Campaigns/Campaigns";
import Navigation from "./Components/Navigation/Navigation";
import { Container } from 'react-bootstrap';
import Footer from './Components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getCampaigns } from './Redux/campaignsSlice';
import { getGameMasters } from './Redux/gameMastersSlice';
import Campaign from './Pages/Campaign/Campaign';
import SignIn from './Pages/SignIn/SignIn';
import { useEffect, useState } from 'react';
import NotFound from './Pages/NotFound/NotFound';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  const dispatch = useDispatch();
  const { isLogged } = useSelector(state => ({ ...state.user }))
  const [isDark, setIsDark] = useState(false);
  
  const handleOnScroll = (e) => {
    const currentScrollY = e.target.scrollingElement.scrollTop;
    currentScrollY > 100 ? setIsDark(true) : setIsDark(false);
  }
 
  useEffect(() => {
    dispatch(getCampaigns())
    dispatch(getGameMasters())
    window.addEventListener('scroll',handleOnScroll )
  }, []);
 
 
  return (
    <div className='wrapper'>
        <Navigation isDark={isDark} />
        <Container fluid className='main-container'>
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='campaigns' element={<Campaigns />} />
            <Route path='campaigns/:campaignId' element={ <Campaign /> } />
          <Route path='signin' element={<SignIn />} />
          {isLogged && <Route path='/dashboard:userId' element={<Dashboard />} />}
          <Route path='*' element= { <NotFound/> } />
          </Routes>
        </Container>
          <Footer />
    </div>
  );
}

export default App;