import React from 'react';
import {Helmet} from 'react-helmet';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { Carousel } from 'react-bootstrap';
import 'bootstrap';
import fishPic from '../../imgs/fishPic.jpg';
import danLance from '../../imgs/DanandLance.jpg';
import whiskey from '../../imgs/WhiskeyPic.jpg';

export default function Home() {
  return (
    <>
    <Helmet>
      <title>  
        Sweeney's Seafood Bar & Grill
      
      </title>
    </Helmet>
    
    {/* <div className="back-img"> 
    <FadeIn>
    <div className="title-flex">
      <h1 className="title-font">
        Rated Best Seafood
        
      </h1>
      <h1 className="sub-title">In Dayton</h1>
      
    </div>
    </FadeIn>
    </div> */}
    
<Carousel>
  <Carousel.Item style={{height: '90vh'}}>
    <div style={{width: '100%', overflowY: 'auto'}}>
      <img
        className="d-block back-img"
        src={fishPic}
        style={{transition: '0.5s'}}
        alt="First slide"
      />
    </div>
  </Carousel.Item>
  <Carousel.Item style={{height: '90vh'}}>
    <div style={{width: '100%', overflowY: 'auto'}}>

    <img
      className="d-block back-img"
      src ={danLance}
      alt="Second slide"
    />
    </div>
  </Carousel.Item>
  <Carousel.Item style={{height: '90vh'}}>
    <div style={{width: '100%', overflowY: 'auto'}}>
    <img
      className="d-block back-img"
      src = {whiskey}
      alt="Third slide"
    />
    </div>
  </Carousel.Item>
</Carousel>

   </>
  );
}
