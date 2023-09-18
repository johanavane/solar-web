import React from "react";
import "../styles/Benefits.scss";
import benefitData from "./benefitData";

function BenefitBox({ src, alt, title, description }) {
  return (
    <div className="benefit-box">
      <img src={src} alt={alt} />
      <span>{title}</span>
      <p>{description}</p>
    </div>
  );
}

function Benefits() {
  return (
    <section className="benefits-container" id="benefits">
      <h2>Benefits Of Solar Energy</h2>
      <div className="benefits-flex">
        {benefitData.map((benefit) => (
          <BenefitBox key={benefit.id} {...benefit} />
        ))}
      </div>
    </section>
  );
}

export default Benefits;
