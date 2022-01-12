import './Header.scss'

const Header = ({ title, image }) => {
  
  return (
    <div className='page-header' style={{backgroundImage: `url(${image})`}}>
      <h1>{title}</h1>
    </div>
  )
}

export default Header
