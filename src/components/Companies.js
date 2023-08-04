import React from "react";
import "./style/companies.scss";
import NumberCounter from "./NumberCounter";

const Companies = () => {
  const CompaniesList = [
    {
      name: "Coursify",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Coursifyme-Logo.png/1200px-Coursifyme-Logo.png",
    },
    {
      name: "Google",
      img: "https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw",
    },
    {
      name: "Amazon",
      img: "https://m.media-amazon.com/images/G/31/social_share/amazon_logo._CB633266945_.png",
    },
    {
      name: "Microsoft",
      img: "https://blogs.microsoft.com/wp-content/uploads/prod/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg",
    },
    {
      name: "Intershala",
      img: "https://internshala.com//static/images/internshala_og_image.jpg",
    },
    {
      name: "Infosys",
      img: "https://www.drupal.org/files/infosys-logo-PNG.png",
    },
    {
      name: "Wipro",
      img: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg",
    },
    {
      name: "HCL Technologies",
      img: "https://www.datocms-assets.com/2885/1683590388-hcl-logo-1976.png",
    },
    {
      name: "Tech Mahindra",
      img: "https://files.techmahindra.com/static/img/brandkit/logo/Logo-True-Colors-original.png",
    },
    {
      name: "L&T Technology Services",
      img: "https://www.ltts.com/themes/custom/lnttech/images/media_kit_logos/stacked/stacked.jpg",
    },
  ];

  return (
    <>
      <div className="companiesOutterBody">
        <div className="companiesInnerBody">
          <div className="companiesTitle">
            <h1>LEADING COMPANIES BUILD TEAMS ON TOP HIRE</h1>
          </div>
          <div className="companiesImg">
            <div className="companiesImgInnerBody">
              {CompaniesList.map((data) => {
                return <img src={data.img} alt="" key={data} />;
              })}
            </div>
          </div>
          <hr />
          <div className="companiesAchievement">
            <div className="companiesNumber">
              <h2>
                <NumberCounter targetCount={130} />k +
                <br />
                Tech Jobs
              </h2>
            </div>
            <hr id="verticalLine" />
            <div className="companiesMatches">
              <h2>
                6000000 <br />
                Matches Made
              </h2>
            </div>
            <hr id="verticalLine" />
            <div className="companiesCandidates">
              <h2>
                8M +<br />
                Startup-ready candidates
              </h2>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
};

export default Companies;
