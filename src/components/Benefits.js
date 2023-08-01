import React from "react";
import "../styles/Benefits.scss";
import money from "../images/money.png";
import energy from "../images/energy.png";
import home from "../images/home.png";
import transfer from "../images/transfer.png";
import gear from "../images/gear.png";
import leaf from "../images/leaf.png";

function Benefits() {
  return (
    <section className="benefits-container">
      <h2>Benefits Of Solar Energy</h2>
      <div className="benefits-flex">
        <div className="benefit-box">
          <img src={money} alt="dollar sign" />
          <span>Energy Independence</span>
          <p>
            Solar energy grants you independence by knowing your monthly rate
            and shielding against rising energy costs.
          </p>
        </div>
        <div className="benefit-box">
          <img src={energy} alt="dollar sign" />
          <span>Power Resilience</span>
          <p>
            Solar energy ensures power during grid outages, providing peace of
            mind and continued electricity supply.
          </p>
        </div>
        <div className="benefit-box">
          <img src={home} alt="dollar sign" />
          <span>Increased Property Value</span>
          <p>
            Installing solar panels can enhance the value of your property,
            making it more attractive to potential buyers.
          </p>
        </div>

        <div className="benefit-box">
          <img src={transfer} alt="dollar sign" />
          <span>Easy Transferability</span>
          <p>
            Solar systems are easily transferable without liens or loans,
            offering flexibility when selling or relocating.
          </p>
        </div>
        <div className="benefit-box">
          <img src={gear} alt="dollar sign" />
          <span>Durable & Low Maintenance</span>
          <p>
            Solar panels have a 25-30 year lifespan with minimal maintenance,
            making them a reliable and cost-effective long-term investment.
          </p>
        </div>
        <div className="benefit-box">
          <img src={leaf} alt="dollar sign" />
          <span>Environmental Protection</span>
          <p>
            Using solar energy contributes to environmental protection by
            reducing carbon emissions & your ecological footprint.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
