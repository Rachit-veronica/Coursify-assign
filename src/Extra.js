import React from "react";
import "./App.css";

function Extra() {
  return (
    <div className="App">
      <header>
        {/* Navigation Bar */}
        {/* Logo and links to other pages */}
      </header>

      <main>
        {/* Hero section with a call-to-action button */}
        <section id="hero">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1>Welcome to Our Recruitment Portal</h1>
                <p>Find and hire top talent for your company.</p>
                <a href="#features" className="btn btn-primary">
                  Learn More
                </a>
              </div>
              <div className="col-md-6">
                {/* Add an image related to recruitment here */}
              </div>
            </div>
          </div>
        </section>

        {/* Features section */}
        <section id="features">
          <div className="container">
            <h2>Key Features</h2>
            <div className="row">
              {/* Feature 1 */}
              <div className="col-md-4">
                <h3>Smart Candidate Search</h3>
                <p>
                  Efficiently search for candidates with the right skills and
                  experience using our advanced search algorithms.
                </p>
              </div>
              {/* Feature 2 */}
              <div className="col-md-4">
                <h3>Job Postings</h3>
                <p>
                  Post your job openings and reach out to thousands of potential
                  candidates.
                </p>
              </div>
              {/* Feature 3 */}
              <div className="col-md-4">
                <h3>Interview Collaboration</h3>
                <p>
                  Collaborate with your team to manage interviews and candidate
                  evaluations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials section */}
        <section id="testimonials">
          <div className="container">
            <h2>Testimonials</h2>
            <div className="row">
              {/* Testimonial 1 */}
              <div className="col-md-4">
                <blockquote>
                  <p>
                    "This platform helped us find exceptional talent quickly.
                    Highly recommended!"
                  </p>
                  <footer>- John Doe, CEO at ABC Tech</footer>
                </blockquote>
              </div>
              {/* Testimonial 2 */}
              <div className="col-md-4">
                <blockquote>
                  <p>
                    "The user-friendly interface and candidate filtering options
                    are fantastic."
                  </p>
                  <footer>- Jane Smith, HR Manager at XYZ Solutions</footer>
                </blockquote>
              </div>
              {/* Testimonial 3 */}
              <div className="col-md-4">
                <blockquote>
                  <p>
                    "We hired three excellent developers in just two weeks!
                    Thanks to this platform."
                  </p>
                  <footer>- Mark Johnson, CTO at PQR Innovations</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Contact section */}
        <section id="contact">
          <div className="container">
            <h2>Contact Us</h2>
            {/* Contact form here */}
          </div>
        </section>
      </main>

      <footer>{/* Footer content here */}</footer>
    </div>
  );
}

export default Extra;
