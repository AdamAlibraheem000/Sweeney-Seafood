import React from "react";
import { Helmet } from "react-helmet";
import FadeIn from "react-fade-in/lib/FadeIn";
import Auth from "../../utils/auth";

export default function About() {
  return (
    <>
      <Helmet>
        <title>Sweeney’s - About Us</title>
      </Helmet>
      <div class="back-img-about"></div>
      <section className="about-section">
        <FadeIn>
          <div className="about-people">
            <div className="d-flex justify-center align-center flex-column">
              <h5>Lisa Long</h5>
              <h6 className="italicized">General Manager & Owner</h6>
            </div>
            <p>
              With a degree in hospitality management, comes to Sweeney’s
              Seafood Bar & Grill with an exemplary history at Sycamore Creek
              Country Club. When she resigned to become the day-to-day manager
              at Sweeney’s, she was responsible for all Food & Bar programs, as
              well as the Clubhouse itself and the Swimming Pool. Prior to that
              position she owned her own catering business for 11 year and was
              with the Westin hotel Corporation. She chaired and continues to be
              active in the Miami Valley Club Managers Association of America as
              well as the Ohio Valley Club Managers Association of America and
              the Club Managers Association of America. She has lived in the
              area for over 15 years.
            </p>
          </div>
          <div className="about-people">
            <div className="d-flex justify-center align-center flex-column">
              <h5>Larry Thompson</h5>
              <h6 className="italicized">Managing Partner and Owner</h6>
            </div>
            <p>
              A former college professor, has worked extensively in the
              legal/business publishing field (with McGraw-Hill, LexisNexis and
              Bloomberg Law). He held many positions within LexisNexis and
              retired as Senior Vice President and Global Marketing Officer for
              LexisNexis worldwide in 2006. In 2010 he took on a two-year
              project at Bloomberg in NYC where he was CEO of the Bloomberg Law
              Division. He has sat on the Board at Sycamore Creek Country Club
              and has lived and worked in the Dayton area since 1994.
            </p>
          </div>
          <div className="about-people">
            <div className="d-flex justify-center align-center flex-column">
              <h5>Holley Thompson</h5>
              <h6 className="italicized">Operations Partner and Owner</h6>
            </div>
            <p>
              Is a former practicing attorney and consultant and worked
              extensively in the legal/business publishing field (LexisNexis).
              She has held many positions within LexisNexis and retired as
              Senior Vice President, US Marketing in 2006. She has sat on the
              board of the University of Dayton School of Law and continues to
              serve on the St. Vincent de Paul Community Board and the Dayton
              Metro Library Foundation Board. She has lived and worked in the
              Dayton area since 1994.
            </p>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
