import React from "react";
import { Helmet } from "react-helmet";
import FadeIn from "react-fade-in/lib/FadeIn";

export default function Features() {
  return (
    <section className="margin-large margin-mobile background-beige">
      <Helmet>
        <title>Sweeney’s - Features</title>
      </Helmet>
      <FadeIn>
        <article className="scroll-menu">
          <h2 className="">Appetizers</h2>
          <section>
            <div className="food">
              <div>
                <h5 className="food-subtitle">Appetizers One</h5>
                <p className="food-subtitle">App Description</p>
              </div>
            </div>
          </section>

          <h2 className="">Entrees</h2>
          <section>
            <div className="food">
              <div>
                <h5 className="food-subtitle">Entree One</h5>
                <p className="food-subtitle">Entree Description</p>
              </div>
            </div>
            <div className="food">
              <div>
                <h5 className="food-subtitle">Entree One</h5>
                <p className="food-subtitle">Entree Description</p>
              </div>
            </div>
            <div className="food">
              <div>
                <h5 className="food-subtitle">Entree One</h5>
                <p className="food-subtitle">Entree Description</p>
              </div>
            </div>
          </section>

          <h2 className="">Draft List</h2>
          <section>
            <div className="food">
              <div>
                <h5 className="food-subtitle">Draft</h5>
                <p className="food-subtitle">App Description</p>
              </div>
            </div>
          </section>
        </article>
      </FadeIn>
    </section>
  );
}
