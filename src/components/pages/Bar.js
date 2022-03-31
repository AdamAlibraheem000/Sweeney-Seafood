import React from 'react';
import {Helmet} from 'react-helmet';
import FadeIn from 'react-fade-in/lib/FadeIn';

export default function Bar() {
  return (
    <>
    <Helmet>
      <title>Sweeney’s - Doug's Bar</title>
    </Helmet>
    <div class="back-img-bar"></div>
    <section className="menu-bgn-grid">
      <article>
        <div className="menu-nav">
          <ul>
            <li><a href="#red-wines">Red Wines</a></li>
            <li><a href="#white-wines">White Wines</a></li>
            <li><a href="#champagne">Sparkling</a></li>
            <li><a href="#port">Ports</a></li>
            <li><a href="#specialty-beers">Specialty Beers</a></li>
            <li><a href="#domestic">Domestic Beers</a></li>
            <li><a href="#import">Imported Beers</a></li>
          </ul>
        </div>
      </article>
      <article>
      <FadeIn>
        {/* <!-- Red Wines --> */}
        <h2>Red Wines</h2>
        <section id="red-wines" className="food-item-grid">
          <div className="food">
            <h5>Mark West</h5>
            <p>Pinor Noir California 7 26</p>
          </div>
          <div className="food">
            <h5>Bridlewood</h5>
            <p>Pinot Noir, California 8 30</p>
          </div>
          <div className="food">
            <h5>EnRoute Les Pommieres</h5>
            <p>PN, Russian River 55</p>
          </div>
          <div className="food">
            <h5>Columbia Crest</h5>
            <p>Merlot, Washington 7 26</p>
          </div>
          <div className="food">
            <h5>St Francis</h5>
            <p>Merlot, Sonoma 45</p>
          </div>
          <div className="food">
            <h5>Alamos</h5>
            <p>Malbec, Argentina 7 26</p>
          </div>
          <div className="food">
            <h5>Penfolds</h5>
            <p>Shiraz, Australia 8 30</p>
          </div>
          <div className="food">
            <h5>Sledgehammer</h5>
            <p>Red Zin, California 7 26</p>
          </div>
          <div className="food">
            <h5>Estancia Meritage</h5>
            <p>Paso Robles, CA 45</p>
          </div>
          <div className="food">
            <h5>Louis Martini</h5>
            <p>Cabernet, Sonoma 10 38</p>
          </div>
          <div className="food">
            <h5>William Hill</h5>
            <p>Cabernet, Central Coast, CA 9 33</p>
          </div>
          <div className="food">
            <h5>Mt. Veeder</h5>
            <p>Cabernet, Napa Valley 65</p>
          </div>
          <div className="food">
            <h5>Prisoner Cuttings</h5>
            <p>Cabernet, Napa Valley 75</p>
          </div>
          <div className="food">
            <h5>Round Pond Kith and Kin</h5>
            <p>Cabernet, Napa Valley 65</p>
          </div>
        </section>

        {/* <!-- White Wines --> */}
        <h2>White Wines</h2>
        <section id="white-wines" className="food-item-grid">
          <div className="food">
            <h5>Bieler Pere and Fils</h5>
            <p>Rose, France 8 30</p>
          </div>

          <div className="food">
            <h5>Heinz Eifel</h5>
            <p>Riesling, Germany 7 26</p>
          </div>

          <div className="food">
            <h5>Sea Glass</h5>
            <p>Pinot Grigio, Santa Barbara 7 26</p>
          </div>
          <div className="food">
            <h5>Joel Gotti</h5>
            <p>Pinot Gris, Willamette Valley, OR 35</p>
          </div>
          <div className="food">
            <h5>Beach House</h5>
            <p>Sauvignon Blanc, South Africa 7 26</p>
          </div>
          <div className="food">
            <h5>14 Hands</h5>
            <p>Chardonnary, Washington 7 26</p>
          </div>
          <div className="food">
            <h5>Chalk Hill</h5>
            <p>Sauvignon Blanc, Sonoma 45</p>
          </div>
          <div className="food">
            <h5>Terra d’Oro</h5>
            <p>Chenin Blanc, CA 8 28</p>
          </div>
          <div className="food">
            <h5>Nobilo</h5>
            <p>Sauvignon Blanc, New Zealand 8 29</p>
          </div>
          <div className="food">
            <h5>Toasted Head</h5>
            <p>Chardonnary, California 7 26</p>
          </div>
          <div className="food">
            <h5>La Crema</h5>
            <p>Chardonnary, Sonoma 10 38</p>
          </div>
          <div className="food">
            <h5>Rodney Strong</h5>
            <p>Chardonnary, Sonoma 40</p>
          </div>
          <div className="food">
            <h5>Stags Leap</h5>
            <p>Chardonnary, Napa Valley 45</p>
          </div>
          <div className="food">
            <h5>Growth</h5>
            <p>Chardonnary, Napa Valley 48</p>
          </div>
        </section>
        
        {/* <!-- Champagne & Sparkling Wines --> */}
        <h2>Champagne and Sparkling Wines</h2>
        <section id="champagne" className="food-item-grid">
          <div className="food">
            <h5>Pol Clement</h5>
            <p>Brut Split, France 7</p>
          </div>
          <div className="food">
            <h5>Lamarca</h5>
            <p>Prosecco Split, Italy 9</p>
          </div>
          <div className="food">
            <h5>Pol Clement</h5>
            <p>Brut, France 26</p>
          </div>
          <div className="food">
            <h5>Mumm Cordon Rouge</h5>
            <p>Champagne, France 55</p>
          </div>
        </section>

        {/* <!--Ports --> */}
        <h2>Port</h2>
        <section id="port" className="food-item-grid">
          <div className="food">
            <h5>Cockburn’s Fine Ruby</h5>
            <p>Port 6</p>
          </div>
          <div className="food">
            <h5>Taylor Fladgate 10 yr</h5>
            <p>Tawny Port 8</p>
          </div>
        </section>
        <div className="food-2">
          <h5 className="food-3">Sandeman 20 yr</h5>
          <p>Tawny Port 15</p>
        </div>

        {/* <!-- Specialty Beers--> */}
        <h2>Specialty Beers</h2>
        <section id="specialty-beers" className="food-item-grid">
          <div className="food">
            <h5>Anchor Steamer 5</h5>
          </div>
          <div className="food">
            <h5>Boddington Pub Ale 5</h5>
          </div>
          <div className="food">
            <h5>Chimary Trappist Ale 9</h5>
          </div>
          <div className="food">
            <h5>Foster’s Oil Can 6</h5>
          </div>
          <div className="food">
            <h5>Guinness Pub 5</h5>
          </div>
          <div className="food">
            <h5>Sam Adam’s Boston Lager  4</h5>
          </div>
        </section>

        {/* <!-- Domestic --> */}
        <h2>Domestic Beers 3.75</h2>
        <section id="salad" className="food-item-grid">
          <div className="food">
            <h5>Budweiser</h5>
            
          </div>
          <div className="food">
            <h5>Bud Light</h5>
          </div>
          <div className="food">
            <h5>Coors Light</h5>
          </div>
          <div className="food">
            <h5>Michelob Ultra</h5>
          </div>
          <div className="food">
            <h5>Michelob Light</h5>
          </div>
          <div className="food">
            <h5>Miller Lt</h5>
          </div>
          <div className="food">
            <h5>Blue Moon</h5>
          </div>
          <div className="food">
            <h5>Rolling Rock</h5>
          </div>
          <div className="food">
            <h5>Killians Irish Red</h5>
          </div>
          <div className="food">
            <h5>Yuengling Lager</h5>
          </div>
        </section>

        {/* <!-- Import --> */}
        <h2>Import Beers 4.75</h2>
        <section id="salad" className="food-item-grid">
          <div className="food">
            <h5>Amstel Light</h5>
            
          </div>
          <div className="food">
            <h5> Corona</h5>
          </div>
          <div className="food">
            <h5>Heineken</h5>
          </div>
          <div className="food">
            <h5>Newcastle</h5>
          </div>
          <div className="food">
            <h5>Stella Artois</h5>
          </div>
          <div className="food">
            <h5>Clausthaler(N/A)</h5>
          </div>
        </section>
        </FadeIn>

        
      </article>
      
    </section>
    
    </>
  );
}
