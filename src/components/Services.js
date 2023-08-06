import React from "react";
import Form from "./Form.js";
import "../styles/Services.scss";

function Services() {
  return (
    <div className="services-container">
      <section className="services-list">
        <h3>Services</h3>
        <ul>
          <li>
            <p>1</p>
            <p>
              Solar energy systems are expertly installed to maximize energy
              profuction.
            </p>
          </li>
          <li>
            <p>2</p>
            <p>
              We handle paperwork and schedule inspections, ensuring compliance.
            </p>
          </li>
          <li>
            <p>3</p>
            <p>
              We work with you, your city, and utility company to get your
              system up and running smoothly.
            </p>
          </li>
          <li>
            <p>4</p>
            <p>
              System maintenance, monitoring, and timely repairs are provided to
              ensure optimal performance.
            </p>
          </li>
          <li>
            <p>5</p>
            <p>
              Easily track your system's performance through our online energy
              app.
            </p>
          </li>
        </ul>
      </section>
      <Form />
    </div>
  );
}

export default Services;
