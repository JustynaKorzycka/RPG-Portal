import React from 'react'
import Header from '../../Components/Header/Header'
import headerImg from '../../Assets/img/headers/header1.jpg'
import { useSelector } from 'react-redux'
import { Container, Card } from 'react-bootstrap'
import useUploadImages from '../../Hooks/useImageUpload'


const Campaigns = () => {
  const campaigns = useSelector(state => state.campaigns);
  const images = campaigns.map(campaign => `../../Assets/img/campaigns/${campaign.image}`);
  const uploadImages = useUploadImages(images);
  return (
    <>
    <Header title='All Campaigns' image={headerImg} />
      <Container>
        
        {campaigns.map(campaign => {
          // const src = `../../Assets/img/campaigns/${campaign.image}`;
          return (
            <Card className='campaign-card'>
              {/* <Card.Img variant='top' src={require(src)} /> */}
              <Card.Title>{ campaign.title }</Card.Title>
            </Card>
          )
        })}
            
           
        
    </Container>
    </>
  )
}

export default Campaigns
