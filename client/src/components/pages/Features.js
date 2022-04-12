import React from 'react';
import { Helmet } from 'react-helmet';
import FadeIn from 'react-fade-in/lib/FadeIn';


export default function Features(features, title,) {
  return (
    <>
      <Helmet>
        <title>Sweeney’s - Features</title>
      </Helmet>

      <FadeIn>
        <div class="back-img-features"></div>
      </FadeIn>
      <FadeIn>
        <section className='feature-grid'>
          <h2>Featured Appetizers</h2>

          <div className='feature-flex'>
            <h5 className='feature-title'>Appetizers One</h5>
            <p className='feature-desc'>App Description</p>
          </div>
          <div>
            <h5 className='feature-title'>Appetizers One</h5>
            <p className='feature-desc'>App Description</p>
          </div>
          <h2>Featured Entrees</h2>
          <div>
            <h5 className='feature-title'>Entree One</h5>
            <p className='feature-desc'>App Description </p>
          </div>
          <div>
            <h5 className='feature-title'>Entree Two</h5>
            <p className='feature-desc'>App Description</p>
          </div>
          <div>
            <h5 className='feature-title'>Entree Three</h5>
            <p className='feature-desc'>App Description</p>
          </div>
          <h2>Featured Draft List</h2>
          <div>
            <h5 className='feature-title'>Busch Latte</h5>
            <p className='feature-desc'>Description of why you're drinking this</p>
          </div>

        </section>

      </FadeIn>
    </>
  );
}