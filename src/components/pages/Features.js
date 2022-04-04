import React from 'react';
import {Helmet} from 'react-helmet';
import FadeIn from 'react-fade-in/lib/FadeIn';


export default function Features() {
    return (
      <>
      <Helmet>
        <title>Sweeney’s - Features</title>
      </Helmet>
      
      <FadeIn>
      <div class="back-img-features"></div>
      </FadeIn>
      <FadeIn>
        <article className='scroll-menu'>
          <section className='food-item-grid'>
            <div className='food'>
              <h2 className=''>Featured Appetizers</h2>
              <div>
                <h5 className='food-subtitle'>Appetizers One</h5>
                <p  className='food-subtitle'>App Description</p>
              </div>
            </div>
            <div className='food'>
              <h2 className=''>Featured Entrees</h2>
              <div>
                <h5 className='food-subtitle'>Entree One</h5>
                <p  className='food-subtitle'>Entree Description</p>
              </div>
              <div>
                <h5 className='food-subtitle'>Entree One</h5>
                <p  className='food-subtitle'>Entree Description</p>
              </div>
              <div>
                <h5 className='food-subtitle'>Entree One</h5>
                <p  className='food-subtitle'>Entree Description</p>
              </div>
            </div>
            <div className='food'>
              <h2 className=''>Featured Draft List</h2>
              <div>
                <h5 className='food-subtitle'>Draft</h5>
                <p  className='food-subtitle'>App Description</p>
              </div>
            </div>
          </section>
        </article> 
    </FadeIn>
    </>
    );
  }