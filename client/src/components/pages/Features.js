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
        <section>
          <h2>Featured Appetizers</h2>
          <div>
          <h5>Appetizers One</h5>
          <p>App Description</p>
          </div>
          <div>
          <h5>Appetizers One</h5>
          <p>App Description</p>
          </div>
          <h2>Featured Entrees</h2>
          <div>
          <h5>Entree One</h5>
          <p>App Description </p>
          </div>
          <div>
          <h5>Entree Two</h5>
          <p>App Description</p>
          </div>
          <div>
          <h5>Entree Three</h5>
          <p>App Description</p>
          </div>
          <h2>Featured Draft List</h2>
          <div>
            <h5></h5>
          </div>

        </section>
      
    </FadeIn>
    </>
    );
  }