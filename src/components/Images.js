import React from "react";
import "../styles/Images.scss";
import working from "../images/working.jpg";
import roof from "../images/roof.jpg";
import workingMan from "../images/solar-working.jpg";

function Images() {
  return (
    <div className="images-container">
      <section className="images-flex">
        <section className="working">
          <img
            src={workingMan}
            className="image-bottom floating floating-two"
            alt="silver hair with colorful highlights"
          />
        </section>
        <section className="roof">
          <img
            src={roof}
            className="image-bottom floating floating-two"
            alt="silver hair with colorful highlights"
          />
          <p>
            Join the community of over 800,000 customers across 23 states who
            are part of SUNRUN'S solar energy program.
          </p>
        </section>
      </section>
    </div>
  );
}

export default Images;
