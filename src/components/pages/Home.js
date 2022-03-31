import React from 'react';
import {Helmet} from 'react-helmet';
import FadeIn from 'react-fade-in/lib/FadeIn';


export default function Home() {
  return (
    <>
    <Helmet>
      <title>  
        Sweeney's Seafood Bar & Grill
      
      </title>
    </Helmet>
    
    <div className="back-img">
    <FadeIn>
    <div className="title-flex">
      <h1 className="title-font">
        Sweeney's<span className="copyright">©</span> Seafood
        
      </h1>
      <h1 className="sub-title">Bar and Grill</h1>
      
    </div>
    </FadeIn>
    </div>
    
    </>
  );
}
