import React from "react";
import "./style/jobPage.scss";

const JobPage = () => {
  const jobCardData = [
    {
      name: "Coursify",
      jobTitle: "Frontend Developer Intern",
      jobShortDescription:
        "Developing new user-facing features using JavaScript, CSS, and ReactJS",
      jobCompanyImg:
        "https://upload.wikimedia.org/wikipedia/commons/f/fe/Coursifyme-Logo.png",
      link: "#",
    },
    {
      name: "Google",
      jobTitle: "Javascript Developer Intern",
      jobShortDescription:
        "Developing new user-facing features using JavaScript, CSS, and ReactJS",
      jobCompanyImg:
        "https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw",
      link: "#",
    },
    {
      name: "Amazon",
      jobTitle: "Frontend Developer Full Time",
      jobShortDescription:
        "Developing new user-facing features using JavaScript, CSS, and ReactJS",
      jobCompanyImg:
        "https://m.media-amazon.com/images/G/31/social_share/amazon_logo._CB633266945_.png",
      link: "#",
    },
    {
      name: "Microsoft",
      jobTitle: "Typescript Developer Intern",
      jobShortDescription:
        "Developing new user-facing features using JavaScript, CSS, and ReactJS",
      jobCompanyImg:
        "https://blogs.microsoft.com/wp-content/uploads/prod/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg",
      link: "#",
    },
    {
      name: "Intershala",
      jobTitle: "Devops engineerIntern",
      jobShortDescription:
        "Developing new user-facing features using JavaScript, CSS, and ReactJS",
      jobCompanyImg:
        "https://internshala.com//static/images/internshala_og_image.jpg",
      link: "#",
    },
    {
      name: "Infosys",
      jobTitle: "React js developer Intern",
      jobShortDescription:
        "Developing new user-facing features using JavaScript, CSS, and ReactJS",
      jobCompanyImg: "https://www.drupal.org/files/infosys-logo-PNG.png",
      link: "#",
    },
    {
      name: "Wipro",
      jobTitle: "Frontend Developer Intern",
      jobShortDescription:
        "Developing new user-facing features using JavaScript, CSS, and ReactJS",
      jobCompanyImg:
        "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg",
      link: "#",
    },
    {
      name: "HCL Technologies",
      jobTitle: "Ui Developer Intern",
      jobShortDescription:
        "Developing new user-facing features using JavaScript, CSS, and ReactJS",
      jobCompanyImg:
        "https://www.datocms-assets.com/2885/1683590388-hcl-logo-1976.png",
      link: "#",
    },
    {
      name: "Tech Mahindra",
      jobTitle: "React js Developer Intern",
      jobShortDescription:
        "Developing new user-facing features using JavaScript, CSS, and ReactJS",
      jobCompanyImg:
        "https://files.techmahindra.com/static/jobCompanyImg/brandkit/logo/Logo-True-Colors-original.png",
      link: "#",
    },
    {
      name: "L&T Technology Services",
      jobTitle: "Java Developer",
      jobShortDescription:
        "Developing new user-facing features using JavaScript, CSS, and ReactJS",
      jobCompanyImg:
        "https://www.ltts.com/themes/custom/lnttech/images/media_kit_logos/stacked/stacked.jpg",
      link: "#",
    },
  ];

  return (
    <>
      <div className="jobPageOutterBody">
        <div className="jobPageInnerBody">
          <h1>Job Post</h1>
          <div className="jobCard">
            {jobCardData.map((data) => {
              return (
                <div className="jobCardInnerBody">
                  <img src={data.jobCompanyImg} />
                  <h1>{data.jobTitle}</h1>
                  <p>{data.jobShortDescription}</p>
                  <button> Apply </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default JobPage;
