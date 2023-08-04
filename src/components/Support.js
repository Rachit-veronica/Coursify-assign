import React, { useState } from "react";
import "./style/support.scss";

const Support = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
    alert("information Print in console");
    // Reset the form after submission
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <div className="contactOutterBody">
        <div className="contactInnerBody">
          <div className="contactImgBody">
            <img src="https://img.freepik.com/free-vector/organic-flat-customer-support-illustration_23-2148899174.jpg?w=996&t=st=1691095303~exp=1691095903~hmac=b177f90588e42bb803bd7d0f66df657b790fab077583da1a2d5d1afdea14194e" />
          </div>
          <div className="contactFormBody">
            <form onSubmit={handleSubmit}>
              <div className="contactName">
                <label htmlFor="name">Name :-</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="contactEmail">
                <label htmlFor="email">Email :-</label>
                <input
                  type="email"
                  id="email"
                  placeholder="exe@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="contactMessage">
                <label htmlFor="message">Message :-</label>
                <textarea
                  id="message"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;
