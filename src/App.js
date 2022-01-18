import { Routes, Route } from 'react-router-dom';
import './App.scss'
import Home from "./Pages/Home/Home";
import Campaigns from "./Pages/Campaigns/Campaigns";
import Navigation from "./Components/Navigation/Navigation";
import { Container } from 'react-bootstrap';
import Footer from './Components/Footer/Footer';
import useFetch from './Hooks/useFetch';
import { useDispatch } from 'react-redux';
import { fetchedCampaings } from './Redux/campaigns';
import Campaign from './Pages/Campaign/Campaign';
import SignIn from './Pages/SignIn/SignIn';
import { LogInProvider } from './Context/LogInContext';


function App() {
  const dispatch = useDispatch();

  const { data, loading } = useFetch('http://localhost:3000/campaigns');
  if (data && !loading) {
    dispatch(fetchedCampaings(data));  
  }

 
  return (
    <div className='wrapper'>
      <LogInProvider>
        <Navigation />
        <Container fluid className='main-container'>
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='campaigns' element={<Campaigns loading={ loading } />} />
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