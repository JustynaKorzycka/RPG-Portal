import { Routes, Route } from 'react-router-dom';
import './App.scss'
import Home from "./Pages/Home/Home";
import Campaigns from "./Pages/Campaigns/Campaigns";
import Navigation from "./Components/Navigation/Navigation";
import { Container } from 'react-bootstrap';
import Footer from './Components/Footer/Footer';
import { useDispatch } from 'react-redux';
import { campaignsFetching } from './Redux/Actions';
import { useEffect } from 'react';


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const assignCampaigns = async () => {
      const data = await fetchData('http://localhost:3000/campaigns');
      await dispatch(campaignsFetching(data))
    }
    assignCampaigns()
  },[])

  const fetchData = async (url) => {
    const res = await fetch(url);
    const data = res.json();
    return data;
  }


  return (
    <div className='wrapper'>
      <Navigation />
      <Container fluid className='main-container'>
      <main>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='campaigns' exact element={<Campaigns/>} />
        </Routes>
        </main>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
