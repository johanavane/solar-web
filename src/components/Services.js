import React from "react";
import "../styles/Services.scss";

function Services() {
  return (
    <div className="services-container">
      <section className="services-list">
        <h3>Services</h3>
        <ul>
          <li>
            Solar energy systems are expertly installed to maximize energy
            profuction.
          </li>
          <li>
            We handle paperwork and schedule inspections, ensuring compliance.
          </li>
          <li>
            We work with you, your city, and utility company to get your system
            up and running smoothly.
          </li>
          <li>
            System maintenance, monitoring, and timely repairs are provided to
            ensure optimal performance.
          </li>
          <li>
            Easily track your system's performance through our online energy
            app.
          </li>
        </ul>
      </section>
      <section className="contact-form">
        <h3>Get in touch</h3>
        <p>email</p>
        <p>phone number</p>
        <form>
          <label>Name</label>
          <input id="fullname" name="fullname" type="text" />
          <label>Email</label>
          <input id="email" name="email" type="email" />
          <label>Message</label>
          <input id="message" name="message" type="text" />
          <button>Submit</button>
        </form>
      </section>
    </div>
  );
}

export default Services;
