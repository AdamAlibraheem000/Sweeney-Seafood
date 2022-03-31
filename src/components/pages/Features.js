import React from 'react';
import {Helmet} from 'react-helmet';
import FadeIn from 'react-fade-in/lib/FadeIn';


export default function Features() {
    return (
      <>
      <Helmet>
        <title>Sweeney’s - Features</title>
      </Helmet>
      
      <div class="back-img-features"></div>
      <FadeIn>
      <section className="menu-bgn-grid">
      <article className="hide-img">
        <div className="menu-nav">
          <img className="img-crop" src="./assets/imgs/barPic.PNG" alt="" />
        </div>
      </article>
      <article>
        {/* Starters */}
        <h2>Featured Starters</h2>
        <section id="app-section" className="food-item-grid">
          <div className="food">
            <h5>Bacon Wrapped Shrimp</h5>
            <p>
              4 Bacon wrapped Shrimp stuffed with Horseradish and topped with
              House-Made Dijonnaise Sauce 12
            </p>
          </div>
          <div className="food">
            <h5>*Escargot</h5>
            <p>
              6 Imported, Large, French Double Helix Snails baked in house-made
              Sherry, Garlic Butter served with Warm French Bread 9
            </p>
          </div>
        </section>

        {/* <!-- Seafood Your way --> */}
        <h2>Featured Entrees</h2>
        <section id="your-way-section" className="food-item-grid">
          <div className="food">
            <h5>*Pecan Crusted Grouper</h5>
            <p>
              drizzled with House-made Coconut Lime Sauce served with House-made
              Pineapple Rice and a Salad 35
            </p>
          </div>

          <div className="food">
            <h5>Seafood Newburg Pasta</h5>
            <p>
              Fresh Sautéed Nantucket Island Bay Scallops, Large Wild Shrimp,
              Fresh Asparagus, Mushrooms and Cavatappi Macaroni tossed in
              House-Made Lobster Tomato Cream Sauce and Salad 27
            </p>
          </div>

          <div className="food">
            <h5>*Panko Parmesan Encrusted Cod</h5>
            <p>
              topped with House-made Orange Basil Cream Sauce served with
              House-made Rice Pilaf and a Salad 22
            </p>
          </div>
        </section>
        {/* Routing Draft list */}
        <h2>Rotating Craft Beers</h2>
        <section id="your-way-section" className="food-item-grid">
          <div className="food">
            <h5>Narragansett</h5>
            <p>
              Description about the beer here 7.5
            </p>
          </div>

          <div className="food">
            <h5>Sweeney’s Reel 'em in IPA</h5>
            <p>
            Description about the beer here 7.5
            </p>
          </div>
        </section>
      </article>
    </section>
    </FadeIn>
    </>
    );
  }