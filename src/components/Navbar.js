import React, { useState, useEffect } from "react";
import "./style/navbar.scss";
import logo from "./img/logo.png";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
// import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [menuBtnStyle, setMenuBtnStyle] = useState({
    open: "block",
    close: "none",
    divStyle: "none",
  });
  let width = window.innerWidth;
  console.log(width);

  const menuBtn = () => {
    if (menuBtnStyle.divStyle == "none") {
      setMenuBtnStyle({
        ...menuBtnStyle,
        open: "none",
        close: "block",
        divStyle: "block",
      });
    }
  };

  const menuCloseBtn = () => {
    if (menuBtnStyle.open == "none") {
      setMenuBtnStyle({
        ...menuBtnStyle,
        open: "block",
        close: "none",
        divStyle: "none",
      });
    }
  };

  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If the user scrolls down more than 100 pixels, set the navbar to be fixed
      setIsNavbarFixed(window.scrollY > 100);
    };

    // Attach the event listener for scrolling
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const homeBtn = () => {
    if (window.screen.width > 860) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else if (window.screen.width > 520) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };
  const companiesBtn = () => {
    if (window.screen.width >= 520) {
      window.scrollTo({ top: 800, left: 0, behavior: "smooth" });
    } else if (window.screen.width > 860) {
      window.scrollTo({ top: 560, left: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 650, left: 0, behavior: "smooth" });
    }
  };
  const featuresBtn = () => {
    if (window.screen.width > 860) {
      window.scrollTo({ top: 1150, left: 0, behavior: "smooth" });
    } else if (window.screen.width > 520) {
      window.scrollTo({ top: 1000, left: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 850, left: 0, behavior: "smooth" });
    }
  };
  const jobBtn = () => {
    if (window.screen.width > 860) {
      window.scrollTo({ top: 3150, left: 0, behavior: "smooth" });
    } else if (window.screen.width > 520) {
      window.scrollTo({ top: 3950, left: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 3250, left: 0, behavior: "smooth" });
    }
  };
  const TestimonialsBtn = () => {
    if (window.screen.width > 860) {
      window.scrollTo({ top: 4100, left: 0, behavior: "smooth" });
    } else if (window.screen.width > 520) {
      window.scrollTo({ top: 5550, left: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 4700, left: 0, behavior: "smooth" });
    }
  };
  const SupportBtn = () => {
    if (window.screen.width > 860) {
      window.scrollTo({ top: 4800, left: 0, behavior: "smooth" });
    } else if (window.screen.width > 520) {
      window.scrollTo({ top: 6000, left: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 6000, left: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (width <= 860) {
      setMenuBtnStyle({
        ...menuBtnStyle,
        divStyle: "none",
      });
    }
  }, []);

  return (
    <>
      <nav className={isNavbarFixed ? "navbar fixed" : "navbar"}>
        <div className="navbarOutterBody">
          <div className="navbarInnerBody">
            <div className="rightSide">
              <img src={logo} />
            </div>
            <div className="leftSide">
              <ul>
                <li onClick={homeBtn}>Home</li>
                <li onClick={companiesBtn}>Companies</li>
                <li onClick={featuresBtn}>Key Features</li>
                <li onClick={jobBtn}>Job/Internship</li>
                <li onClick={TestimonialsBtn}>Testimonials</li>
                <li onClick={SupportBtn}>Support</li>
              </ul>
              <div className="menubar">
                <a onClick={menuBtn} style={{ display: menuBtnStyle.open }}>
                  <MenuOpenIcon />
                </a>
                <a
                  onClick={menuCloseBtn}
                  style={{ display: menuBtnStyle.close }}
                >
                  <CloseIcon />
                </a>
              </div>
            </div>
          </div>
          <div className="menuItem" style={{ display: menuBtnStyle.divStyle }}>
            <div className="listBtn">
              <li onClick={homeBtn}>Home</li>
              <li onClick={companiesBtn}>Companies</li>
              <li onClick={featuresBtn}>Key Features</li>
              <li onClick={jobBtn}>Job/Internship</li>
              <li onClick={TestimonialsBtn}>Testimonials</li>
              <li onClick={SupportBtn}>Support</li>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
