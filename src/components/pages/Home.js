import React from 'react';
import {Helmet} from 'react-helmet';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { Carousel } from 'react-bootstrap';
import 'bootstrap';
import rockfeller from '../../imgs/rockfeller.jpg';
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

    {/* <div>Testing
    </div>
    <div>Testing
    </div>
    <div>Testing
    </div> */}
{/* <div id="myCarousel" class="carousel slide" data-ride="carousel">
  {/* <!-- Indicators --> */}
  {/* <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
  </ol> */} 

  {/* <!-- Wrapper for slides --> */}
  {/* <div class="carousel-inner">
    <div class="item active">
      <img src={fishPic} alt="Los Angeles" />
    </div>

    <div class="item">
      <img src={danLance} alt="Chicago" />
    </div>

    <div class="item">
      <img src={whiskey} alt="New York" />
    </div>
  </div> */}

  {/* <!-- Left and right controls --> */}
  {/* <a class="left carousel-control" href="#myCarousel" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#myCarousel" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
    <span class="sr-only">Next</span>
  </a>
</div>  */}

 <Carousel className='main-container'>
  <Carousel.Item> 
    <img
      className="d-block w-100 back-img"
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

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 back-img-3"
      // src ={danLance}
      alt="Third slide"
    />

    <Carousel.Caption className= "carousel-flex">
      <h1 className="title-font">Come Visit Doug's Bar</h1>
      <h1 className="sub-title">With a wide variety of Liquors and Spirits</h1>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 back-img-4"
      // src = {whiskey}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> 


    </> 
  );
}
