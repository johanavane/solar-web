import React from "react";
import "../styles/Footer.scss";

function Footer() {
  return (
    <section className="footer-container">
      <div>
        <p className="footer-title">
          Sunrun <br /> Certified <br /> Installer
        </p>
      </div>
      <div>
        <p className="footer-title">Contact Me</p>
        <p>(408)413-8096</p>
        <p>Alfredo.moreno@sunrun.com</p>
      </div>
      <div>
        <p className="footer-title">Location</p>
        <p>Hollister, CA</p>
        <p>Willing to travel</p>
      </div>
      <div>
        <p className="footer-title">Website by</p>
        <p>Johana M.</p>
      </div>
    </section>
  );
}

export default Footer;
