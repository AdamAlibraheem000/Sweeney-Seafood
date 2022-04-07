import React from 'react';
import {Helmet} from 'react-helmet';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { Carousel } from 'react-bootstrap';
<<<<<<< HEAD
import 'bootstrap';
=======
// import 'bootstrap';
>>>>>>> 6c07ef3b20256aefa04601c29c3b5097fb36d203

export default function Home() {
  return (
    <>
    <Helmet>
      <title>  
        Sweeney's Seafood Bar & Grill
      </title>
    </Helmet>

  <FadeIn>
 <Carousel className='main-container carousel-fade' data-interval="5">
  <Carousel.Item> 
    <img
      className="d-block  back-img"
      // src={rockfeller}
      alt="First slide"
    />
    <Carousel.Caption className= "carousel-flex">
      <h1 className="title-font">Rated Best Seafood</h1>
      <h1 className="sub-title">In Dayton</h1>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 back-img-2"
      // src={ fishPic}
      alt="Second slide"
    />

<Carousel.Caption className= "carousel-flex">
      <h1 className="title-font">Located In The Heart </h1>
      <h1 className="sub-title">Of Centerville’s Historic District</h1>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-90 back-img-3"
      // src ={danLance}
      alt="Third slide"
    />

    <Carousel.Caption >
      <div className= "carousel-flex">
      <h1 className="dan-font">Come Visit Doug's Bar...</h1>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 back-img-4"
      // src = {whiskey}
      alt="Third slide"
    />

    <Carousel.Caption>
    <div className= "carousel-flex">
      <h1 className="dansub-title">With a wide variety of Liquors, Wine, and Craft Beers.</h1>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> 
</FadeIn>


    </> 
  );
}
