import React from "react";
import "../styles/Footer.scss";

function Footer() {
  return (
    <section className="footer-container">
      <div className="footer-show">
        <h3>Sunrun Certified Installer</h3>
      </div>
      <div className="footer-links">
        <div className="footer-hide">
          <h3 className="footer-title">
            Sunrun <br /> Certified <br /> Installer
          </h3>
        </div>
        <div>
          <h3 className="footer-title">Contact Me</h3>
          {/* <p>(408)413-8096</p> */}
          <a href="tel:408-413-8096">(408)413-8096</a>
          <a href="mailto: Alfredo.moreno@sunrun.com">
            Alfredo.moreno@sunrun.com
          </a>
        </div>
        <div>
          <h3 className="footer-title">Location</h3>
          <p>Hollister, CA</p>
          <p>Willing to travel</p>
        </div>
        <div>
          <a className="web-design" href="https://www.johanamartinez.com/">
            <h3>Website by</h3>
            <p>Johana M.</p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
