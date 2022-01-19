import './HeroSec.scss'
import  heroVideo  from '../../Assets/video/milk-way.mp4'
import { addShowClass } from './showElement';

const HeroSec = () => {
  const showDesc = setTimeout(addShowClass, 800);
  const stopShow = () => {
    clearTimeout(showDesc);
  }

  return (
    <div className='hero-section'>
      <video autoPlay loop muted src={heroVideo} type="video/mp4"></video>
      <div className="hero-desc">
        <div className="left-hero">
          <h1>The word of fantasy is waiting for You!</h1>
        </div>
        <div className="right-hero">
            <p>Imagination is more important than knowledge. For knowledge is limited to all we know and understand, while imagination embraces the entire world, and all there ever will be to know and understand.
            <span>― Michael Scott, The Warlock </span>
            </p>
          <h3>Play on your own rules</h3>
          <button className='btn-full-width light' >JOIN NOW</button>
        </div>
       
       
      </div>
     
    </div>
  )
}

export default HeroSec
