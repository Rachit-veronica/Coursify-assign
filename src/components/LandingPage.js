import React from "react";
import landingPageImg from "./img/landingPageImg.png";
import "./style/landingPage.scss";

const LandingPage = () => {
  return (
    <>
      <div className="landingPageOutterBody">
        <div className="landingPageInnerBody">
          <div className="textSide">
            <h1>Find the job made for you</h1>
            <p>
              We make it easy to find your dream job - regardless of your
              location. Browse over 100,000 jobs from top companies to
              fast-growing startups.
            </p>
            <span>
              <button>Create your profile</button>
              <button style={{ marginLeft: "10%" }}>Browse jobs</button>
            </span>
          </div>
          <div className="imgSide">
            <img src={landingPageImg} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
