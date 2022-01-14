import { Routes, Route } from 'react-router-dom';
import './App.scss'
import Home from "./Pages/Home/Home";
import Campaigns from "./Pages/Campaigns/Campaigns";
import Navigation from "./Components/Navigation/Navigation";
import { Container } from 'react-bootstrap';
import Footer from './Components/Footer/Footer';
import useFetch from './Hooks/useFetch';
import { useDispatch } from 'react-redux';
import { campaignsFetching } from './Redux/Actions';
import Campaign from './Pages/Campaign/Campaign';

function App() {
  const dispatch = useDispatch();

  const { data, loading } = useFetch('http://localhost:3000/campaigns');
  if (data && !loading) {
    dispatch(campaignsFetching(data));  
  }

 
  return (
    <div className='wrapper'>
      <Navigation />
      <Container fluid className='main-container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='campaigns' element={<Campaigns loading={loading} />} />
          <Route path='campaigns/:campaignId' element={<Campaign />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
