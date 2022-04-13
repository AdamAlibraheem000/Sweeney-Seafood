import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid full-footer">
        <ul className="contact">
          <li>Phone: (937) 291-3474</li>
          <br />
          <li>28 W Franklin St, Dayton, OH 45459</li>
          <li>Copyright © {new Date().getFullYear()} All Rights Reserved</li>
        </ul>
        <ul className="operation">
          <li>Monday's: Closed</li>
          <li>Tuesday - Thursday's: 4pm - 9pm</li>
          <li>Friday's and Saturday's 4pm - 10pm</li>
          <li>Sunday's 4pm - 8:30pm</li>
        </ul>
      </div>
      <div>
        <div className="mobile-footer">
          <ul className="contact width-half">
            <li>Phone: (937) 291-3474</li>
            <li>28 W Franklin St, Dayton, OH 45459</li>
          </ul>
          <ul className="operation width-half ">
            <li >Mon: Closed</li>
            <li >Tu - Th: 4pm - 9pm</li>
            <li >Fri - Sat: 4pm - 10pm</li>
            <li >Sun: 4pm - 8:30pm</li>
          </ul>
        </div>
        <span className='copyright float-right'>
          Copyright © {new Date().getFullYear()} All Rights Reserved
        </span>
      </div>
    </footer>
  );
}
