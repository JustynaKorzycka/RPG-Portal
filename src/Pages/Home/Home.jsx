import React from 'react'
import HeroSec from '../../Components/HeroSec/HeroSec'
import evil from '../../Assets/img/home/evil-home.jpeg';
import './Home.scss';
import { GiBroadsword } from "react-icons/gi";
import { Container } from 'react-bootstrap';



const Home = () => {
  return (
    <div>
      <HeroSec />
      <Container>
        <section className='home-section'>
          <div className='game-rules'>
            <div className="left-img">
              <img src={evil} alt="evil" />
            </div>
            <div className="right-desc">
              <h2>Do You dare to play?</h2>
              <ul>
                <li className='mb-4'><GiBroadsword /> Find a campaign that interests you</li>
                <li className='mb-4'><GiBroadsword /> Create your character</li>
                <li className='mb-4'><GiBroadsword /> Start an amazing adventure</li>
              </ul>
            </div>
          </div>
        </section>
        <section className='home-section'>
          
        </section>
      </Container>
      
    </div>
  )
}

export default Home
