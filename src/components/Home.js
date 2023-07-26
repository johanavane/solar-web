import React from "react";
import "../styles/Home.scss";

function Home() {
  return (
    <div className="home-container">
      <section>
        <h1>
          Empowering Your Home <br className="home-hide" />
          With Solar Energy Solutions
        </h1>
        <p>
          Get started with a free in-person or online consultation.{" "}
          <span className="home-hide-span">
            Qualifying
            <br className="home-hide" /> homes receive free installations with
            no out-of-pocket costs.
          </span>
        </p>
        <button>GET STARTED</button>
      </section>
    </div>
  );
}

export default Home;
