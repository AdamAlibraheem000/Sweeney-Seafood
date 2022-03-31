import React from 'react';
import {Helmet} from 'react-helmet';
import FadeIn from 'react-fade-in/lib/FadeIn';

export default function Contact() {
  return (
    <>
    <Helmet>
      <title>Sweeney’s - Dinner Menu</title>
    </Helmet>
    <FadeIn>
    <div class="bgm-img-menu"></div>
    </FadeIn>
    <section className="menu-bgn-grid">
      <article>
        <div className="menu-nav">
          <ul>
            <li><a href="#app-section">Starters</a></li>
            <li><a href="#your-way-section">Seafood Your Way</a></li>
            <li><a href="#Steaks-chicken">Steaks and Chicken</a></li>
            <li><a href="#pasta-creole">Pastas and Creole</a></li>
            <li><a href="#sandwiches">Sandwiches</a></li>
            <li><a href="#salad">Salads and Greens</a></li>
            <li><a href="#sides-section">House-Made Sides</a></li>
            <li><a href="">House-Made Desserts</a></li>
          </ul>
        </div>
      </article>
      <FadeIn>
    <article className="scroll-menu">
        {/* <!-- Starters --> */}
        <h2 id="app-section">Starters</h2>
        <section className="food-item-grid">
          <div className="food">
            <h5>Classic Shrimp Cocktail</h5>
            <p>Five Extra Jumbo Shrimp with House-Made Cocktail sauce 11</p>
          </div>
          <div className="food">
            <h5>Lobster and Shrimp Rangoon Eggrolls</h5>
            <p>
              Two Fried House-Made Eggrolls with a Blend of Cream Cheese,
              Lobster and Shrimp in Eggroll Wrappers served with side of Thai
              Chili sauce 10
            </p>
          </div>
          <div className="food">
            <h5>Steamed Fresh Prince Edward Island Mussels</h5>
            <p>
              1 Pound, Freshly cooked to order with House-Made Garlic Sherry
              sauce 11
            </p>
          </div>
          <div className="food">
            <h5>Black n’ Blue Scallops</h5>
            <p>
              Three Jumbo Atlantic Sea Scallops blackened with House-Made Bleu
              Cheese sauce over Mixed Greens with Greek Aegean vinaigrette 14
            </p>
          </div>
          <div className="food">
            <h5>Sweeney’s Secret Recipe House-Made Maryland Crab Cakes</h5>
            <p>House-Made Remoulade and Dijonnaise sauces 14</p>
          </div>
          <div className="food">
            <h5>Calamari Strips</h5>
            <p>
              Thinly sliced, hand breaded and fried with Tartar and Cocktail
              sauce 11
            </p>
          </div>
          <div className="food">
            <h5>*Fresh Raw ‘Chokers’</h5>
            <p>
              Large Chesapeake Bay Extra Select Oysters on the Half Shell with
              Cocktail sauce and Horseradish 2.5 each
            </p>
          </div>
          <div className="food">
            <h5>*Pan Seared Sushi-Grade Ahi Tuna</h5>
            <p>
              Sliced Sashimi Style, with Soy Lime Syrup, Pickled Ginger & Wasabi
              13
            </p>
          </div>
          <div className="food">
            <h5>Chicken Strips</h5>
            <p>
              Breaded, Sliced, Fresh Chicken Breast Strips deep fried, served
              with House-Made BBQ or Buffalo sauce 8
            </p>
          </div>
          <div className="food">
            <h5>Oysters Rockefeller</h5>
            <p>
              Four Chesapeake Bay Oysters with Seasoned Spinach, Bacon, Pernod
              and House-Made Asiago Cheese sauce 14
            </p>
          </div>
          <div className="food">
            <h5>Coconut Shrimp</h5>
            <p>
              Five Deep Fried Coconut Breaded Extra Jumbo Shrimp with House-Made
              Apricot-Ginger Red Pepper sauce 10
            </p>
          </div>
          <div className="food">
            <h5>Praline Pecan Brie</h5>
            <p>
              Served warm with Candied Pecan Butter sauce, Apple Slices and
              French Bread 12
            </p>
          </div>
        </section>

        {/* <!-- Seafood Your way --> */}
        <h2 id="your-way-section">Seafood Your Way</h2>
        <section className="food-item-grid">
          <div className="food">
            <h5>Chilean Sea Bass</h5>
            <p>
              Broiled Chilean Sea Bass topped with House-Made Honey Ginger Soy
              Glaze served with Fresh Sautéed Snow Peas and Carrots 39
            </p>
          </div>

          <div className="food">
            <h5>*B and W Sesame Seed Encrusted Sushi-Grade Yellowfin Tuna</h5>
            <p>
              Pan seared to your preference, topped with Creamy Wasabi Aioli and
              Soy Lime Syrup with Sesame Oil Broccoli
            </p>
          </div>

          <div className="food">
            <h5>Red Snapper</h5>
            <p>
              Cajun-Rubbed Red Snapper topped with House-Made Creole sauce
              served with White Truffle Oil Mashed Potatoes 27
            </p>
          </div>
          <div className="food">
            <h5>*Organic Bourbon BBQ Faroe Salmon</h5>
            <p>
              Grilled, topped with House-Made Bourbon BBQ sauce and Sweet Potato
              Fries 23
            </p>
          </div>
          <div className="food">
            <h5>Sweeney’s Secret Recipe House-Made Maryland Crab Cakes</h5>
            <p>House-Made Remoulade and Dijonnaise sauces 24</p>
          </div>
          <div className="food">
            <h5>Fresh Idaho Boneless Rainbow Trout</h5>
            <p>
              Dredged in Flour and Sliced Almonds, with Almond Butter sauce and
              Rice Pilaf 23
            </p>
          </div>
          <div className="food">
            <h5>Black and Bleu Tilapia</h5>
            <p>
              Seasoned & Blackened, topped with House-Made Melted Bleu Cheese
              sauce and Sautéed Garlic Spinach 18
            </p>
          </div>
          <div className="food">
            <h5>Frog Legs</h5>
            <p>
              3 Pairs of Premium, Extra-Large Frog Legs breaded and fried and
              served with one side 18
            </p>
          </div>
          <div className="food">
            <h5>Fish & Chips</h5>
            <p>
              Fried and Battered Haddock with Sweeney’s Pub Fries and House-Made
              Coleslaw 18
            </p>
          </div>
          <div className="food">
            <h5>Fisherman’s Platter</h5>
            <p>
              Pick Your Favorite Two, Three or Four! (Shrimp, Tilapia, Bay
              Scallops, Haddock, Frog Legs, Salmon, Cod, Calamari or Oysters)
              Fried, Blackened or Broiled and one side Two Favorites 28; Three
              Favorites 32; Four Favorites 36
            </p>
          </div>
          <div className="food">
            <h5>Large Extra Select Chesapeake Bay Oysters</h5>
            <p>
              Your Way with House-Made Cocktail or Tartar sauce and one side 23
            </p>
          </div>
          <div className="food">
            <h5>Alaskan Snow Crab Legs</h5>
            <p>1.5 Pounds served with drawn butter and one side MKT</p>
          </div>
          <div className="food">
            <h5>Canadian Lobster Tails</h5>
            <p>
              Three 5 Ounce Cold Water Lobster Tails cooked in the shell, served
              with drawn butter and one side MKT
            </p>
          </div>
          <div className="food">
            <h5>Jumbo Atlantic Sea Scallops</h5>
            <p>Your Way Blackened, Broiled or Fried with one side 30</p>
          </div>
          <div className="food">
            <h5>Italian Scallops</h5>
            <p>
              Blackened with Sautéed Garlic Spinach, House-Made Gorgonzola
              Cheese sauce and Balsamic Syrup 30
            </p>
          </div>
          <div className="food">
            <h5>Extra Jumbo Shrimp</h5>
            <p>
              Your Way Fried, Grilled, Blackened or Broiled with House-Made
              Cocktail sauce and one side 21
            </p>
          </div>
          <div className="food">
            <h5>Dynamite Shrimp</h5>
            <p>
              Breaded and Fried, tossed in House-Made sauce with Fried Green
              Beans and Thai Chili sauce 22
            </p>
          </div>
          <div className="food">
            <h5>Coconut Shrimp</h5>
            <p>
              Breaded and Fried with House-Made Apricot-Ginger Red Pepper sauce
              and one side 21
            </p>
          </div>
        </section>
        {/* <!-- Steaks and Chicken --> */}

        <h2 id="Steaks-chicken">Steaks and Chicken</h2>
        <section className="food-item-grid">
          <div className="food">
            <h5>*6 Ounce Filet Mignon</h5>
            <p>
              Char-Grilled Center Cut USDA Choice Beef with Onion Straws and
              White Truffle Oil Mashed Potatoes 32
            </p>
          </div>
          <div className="food">
            <h5>*New York Center Cut USDA Choice 10 Ounce Strip</h5>
            <p>
              Char-Grilled with Onion Straws and White Truffle Oil Mashed
              Potatoes 31
            </p>
          </div>
        </section>

        <div className="food-2">
          <h5 className="food-3">Land and Sea</h5>
          <p>
            Your Choice of a 5 Ounce Canadian Lobster Tail or .75 Pounds of Snow
            Crab AND Your Choice of a 6 Ounce Filet Mignon or a 10 Ounce New
            York Center Cut USDA Choice Strip with White Truffle Oil Mashed
            Potatoes 48
          </p>
        </div>

        {/* <!--Pastas and Creole --> */}
        <h2 id="pasta-creole">Pasta, Creole and Cajun</h2>
        <section className="food-item-grid">
          <div className="food">
            <h5>Larry’s Cajun</h5>
            <p>
              Extra Jumbo Shrimp, Andouille and Linguini in House-Made Spicy
              Cajun Cream sauce 22
            </p>
          </div>

          <div className="food">
            <h5>Shrimp Linguine</h5>
            <p>
              (Choice of House-Made Scampi, Marinara or Alfredo sauce) 20 Full
              or 15 Half
            </p>
          </div>

          <div className="food">
            <h5>Jumbo Lobster Raviolis</h5>
            <p>
              Maine Lobster and Ricotta Cheese in House-Made Brandy Alfredo
              sauce 24
            </p>
          </div>
          <div className="food">
            <h5>Cajun Chicken Breast Alfredo</h5>
            <p>
              Linguini, Cajun seasoning and House-Made Creamy Asiago Alfredo
              sauce 18
            </p>
          </div>
          <div className="food">
            <h5>Clam Linguini</h5>
            <p>
              Fresh Whole Clams in House-Made Garlic or Marinara sauce 20 Full
              or 15 Half
            </p>
          </div>
          <div className="food">
            <h5>Creole Jambalaya</h5>
            <p>
              Sweeney’s Secret ;Creole Sauce with Andouille Sausage, Chicken and
              Shrimp with Rice 21
            </p>
          </div>
        </section>
        <div className="food-2">
          <h5 className="food-3">
            Ricotta, Mascarpone, Asiago and Parmesan Stuffed Raviolis
          </h5>
          <p>Served with House-Made Marinara or Alfredo sauce 18</p>
        </div>

        {/* <!-- Sandwiches --> */}
        <h2 id="sandwiches">Specialty Sandwiches</h2>
        <section className="food-item-grid">
          <div className="food">
            <h5>Haddock Sandwich</h5>
            <p>
              Fillet lightly breaded battered, broiled or blackened, fried with
              House-Made Tartar sauce 12
            </p>
          </div>
          <div className="food">
            <h5>Chicken Breast Sandwich</h5>
            <p>
              Boneless Chicken Breast, fried, broiled or blackened or with
              House-Made Bourbon BBQ sauce 11
            </p>
          </div>
          <div className="food">
            <h5>*Black Angus Burger</h5>
            <p>Grilled 8 Ounce Beef Patty 12 Add bacon or cheese +.50 each</p>
          </div>
          <div className="food">
            <h5>Cajun Chicken Breast Alfredo</h5>
            <p>
              Linguini, Cajun seasoning and House-Made Creamy Asiago Alfredo
              sauce 18
            </p>
          </div>
        </section>

        {/* <!-- Salads --> */}
        <h2 id="salad">Salads and Greens</h2>
        <section className="food-item-grid">
          <div className="food">
            <h5>House Salad 7</h5>
            <p>
              Add Chicken +6 or Add Organic Faroe Island Salmon, Tilapia or Ahi
              Tuna +10
            </p>
          </div>
          <div className="food">
            <h5>classNameic Caesar Salad 7</h5>
            <p>
              Add Chicken +6 or Add Organic Faroe Island Salmon, Tilapia or Ahi
              Tuna +10
            </p>
          </div>
          <div className="food">
            <h5>Poseidon Salad</h5>
            <p>
              Mixed Greens, Bleu Cheese Crumbles, Praline Pecans, Apples and
              dried Cranberries served with House-Made Apple Cider Vinaigrette
              10 Add Chicken +6 or Add Organic Faroe Island Salmon, Tilapia or
              Ahi Tuna +10
            </p>
          </div>
        </section>
        <div className="food-2">
          <h5 className="food-3">Dressings:</h5>
          <p>
            Sesame Honey Dijon, Caesar, 1000 Island, Apple Cider Vinaigrette,
            Ranch and Bleu Cheese Balsamic Vinaigrette, Greek Vinaigrette and
            French Add Blue Cheese Crumbles +1
          </p>
        </div>

        {/* <!-- Sides --> */}
        <section id="sides-section" className="food-title">
          <h2>
            HOUSE-MADE SIDES <span className="price-styling">+2.50 each</span>
          </h2>
          <p className="sides-styling">
            Cole Slaw, Rice Pilaf, Stewed Tomatoes, Burgundy Mushrooms, Hush
            Puppies, Brown Sugar Sweet Mashed Potatoes, White Truffle Oil Mashed
            Potatoes, Snow Peas and Carrots, Sautéed Garlic Spinach, Sweeney’s
            Pub Fries, Baked Potato, Sweet Potato Fries, Steamed Broccoli, House
            Salad, Fried Green Beans +1, Caesar Salad +2, All Soups +3 Per Cup
          </p>
        </section>
      </article>
      </FadeIn>
      </section>
      </>
  );
}
