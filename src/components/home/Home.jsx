import React, { useState, useEffect, useRef } from "react";
import "./home.css";
import {
  FaBars,
  FaHome,
  FaUser,
  FaServer,
  FaEnvelope,
  FaBriefcase,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import Typed from "react-typed";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, animateScroll as scroll } from "react-scroll";

const Home = () => {
  const [menu, togglemenu] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    AOS.init();

    // Event listener to handle clicks outside the header
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        togglemenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        className={menu ? "toggle-header" : "header"}
        id="header"
        ref={headerRef}
      >
        <div className="profile">
          <img src="assets/img/pro.jpg" alt="" />
          <h1 className="text-light">Natan Tamiru</h1>
          <div className="social-links">
            <a href="">
              <FaInstagram />
            </a>
            <a href="https://github.com/NTDK5">
              <FaGithub />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <nav id="navbar" className="nav-menu navbar">
          <ul>
            <li>
              <Link
                activeClass="active"
                to="hero"
                spy={true}
                smooth={true}
                duration={500}
              >
                <FaHome /> <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
              >
                <FaUser /> <span>About</span>
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                duration={500}
              >
                <FaServer />
                <span>Portfolio</span>
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                duration={500}
              >
                <FaBriefcase />
                <span>Services</span>
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
              >
                <FaEnvelope />
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="hamburger-menu" onClick={() => togglemenu(!menu)}>
        {menu ? <FaXmark /> : <FaBars />}
      </div>
      <section id="hero" className="hero">
        <div className="hero-container">
          <h1 data-aos="fade-up" data-aos-duration="600">
            Natan Tamiru
          </h1>
          <p data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
            I'm{" "}
            <span className="typed">
              <Typed
                strings={["Designer", "Developer", "Freelancer", "Trainer"]}
                typeSpeed={100}
                backSpeed={50}
                backDelay={2000}
                loop
              />
            </span>
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
