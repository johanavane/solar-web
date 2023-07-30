import React from "react";
import "../styles/Images.scss";
// import working from "../images/working.jpg";
import roof from "../images/roof.jpg";
import workingMan from "../images/solar-working.jpg";

function Images() {
  return (
    <div className="images-container">
      <section className="images-flex">
        <section className="working">
          <img src={workingMan} alt="man holding a ladder in front of panels" />
        </section>
        <section className="roof">
          <img src={roof} alt="overview of houses with solar panels on roof" />
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
