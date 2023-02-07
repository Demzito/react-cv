import React from "react";
import Navigation from "../components/Navigation";
import CVpdf from "../media/CV.pdf"

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Etienne Demazure</h1>
          <h2>Développeur Web</h2>
          <div className="pdf">
            <a href={CVpdf} target="_blank" rel="noreferrer">
              Télécharger CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
