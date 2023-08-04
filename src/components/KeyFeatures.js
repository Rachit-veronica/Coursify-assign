import React from "react";
import "./style/keyFeatures.scss";

const KeyFeatures = () => {
  const emailData = emails();
  const submissionData = submissions();
  const noLoginRequiredAndFeedbackData = noLoginRequiredAndFeedback();
  return (
    <>
      <div className="keyFeaturesTitleBody">
        <h1>Key Features</h1>
        {emailData}
        {submissionData}
        {noLoginRequiredAndFeedbackData}
      </div>
    </>
  );
};

const emails = () => {
  return (
    <>
      <div className="emailsOutterBody">
        <div className="emailsInnerBody">
          <div className="emailsTextBody">
            <div className="emailsTextInnerBody">
              <h3>Say goodbye to back and forth emails and attachments</h3>
              <p>
                Say hello to a new era of candidate presentation.
                <br /> With Candidately, forward thinking staffing teams create
                beautifully branded candidate submissions that clients can
                access anywhere and anytime.
              </p>
              <button>Book a demo</button>
            </div>
          </div>
          <div className="emailsImgBody">
            <img src="https://global-uploads.webflow.com/605ad29901132bc543e01d9b/645c02657f980a6dee0c7ffb_say-goodbye.png" />
          </div>
        </div>
      </div>
    </>
  );
};
const submissions = () => {
  return (
    <>
      <div className="submissionsOutterBody">
        <div className="submissionsInnerBody">
          <div className="submissionsImgBody">
            <img src="https://global-uploads.webflow.com/605ad29901132bc543e01d9b/61b26293f11b658ade9b1a2e_Bullhorn_iFrame%201.png" />
          </div>
          <div className="submissionsTextBody">
            <div className="submissionsTextInnerBody">
              <h3>Lightning fast submissions, right from within Bullhorn</h3>
              <p>
                Give your team back their time on creating candidate submittals.
                Simply pick a candidate from within Bullhorn and share a link
                with your clients. As easy as sharing a Dropbox folder or Google
                document.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const noLoginRequiredAndFeedback = () => {
  return (
    <>
      <div className="noLoginRequiredAndFeedbackOutterBody">
        <div className="noLoginRequiredAndFeedbackInnerBody">
          <div className="noLoginRequiredBody">
            <div className="noLoginRequiredTextBody">
              <h3>No client login required</h3>
              <p>
                Through a simple link your clients can access candidate
                submissions right away. No signup or password required.
              </p>
            </div>
            <div className="noLoginRequiredImgBody">
              <img src="https://global-uploads.webflow.com/605ad29901132bc543e01d9b/633300b40eeb44179ab9957b_no-client-login-p-800.png" />
            </div>
          </div>
          <div className="feedbackBody">
            <div className="feedbackTextBody">
              <h3>50% faster client feedback</h3>
              <p>
                Let clients request interviews or decline your candidate
                submissions with the click of a button.
              </p>
            </div>
            <div className="feedbackImgBody">
              <img src="https://global-uploads.webflow.com/605ad29901132bc543e01d9b/645c025ee1b4e8b007f55607_instant-client-feedback.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default KeyFeatures;
