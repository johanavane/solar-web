import React from "react";
import "../styles/Services.scss";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";

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
      <section className="contact-form">
        <div className="get-in-touch">
          <h3>Get in touch</h3>
          <div>
            <MdEmail />
            <span>alfredo.moreno@sunrun.com</span>
          </div>
          <div>
            <BsTelephoneFill />
            <span> (408)413-8096</span>
          </div>
        </div>
        <form>
          <label>Name</label>
          <input id="fullname" name="fullname" type="text" />
          <label>Email</label>
          <input id="email" name="email" type="email" />
          <label>Message</label>
          <textarea id="message" name="message" type="text" />
          <button>
            <span>Submit</span>
          </button>
        </form>
      </section>
    </div>
  );
}

export default Services;
