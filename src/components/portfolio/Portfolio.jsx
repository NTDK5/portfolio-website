import React from "react";
import "./portfolio.css";
import { FaPlus, FaLink } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Portfolio = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-title">
          <h1>Portfolio</h1>
          <p>
            Welcome to my portfolio, a showcase of my work that encompasses the
            intersection of creativity and technology. Within these digital
            realms, I have had the privilege of collaborating with a diverse
            range of clients, bringing their visions to life through captivating
            websites and innovative digital solutions.
          </p>
        </div>
        <div className="portfolio-list">
          <div
            className="portfolio-item"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="300"
            data-aos-offset="50"
          >
            <img src="./assets/img/Recipe.png" alt="" />
            <div className="portfolio-link">
              <a href="https://mern-recipe-app-xr40.onrender.com/">
                <FaPlus />
              </a>
              <a href="">
                <FaLink />
              </a>
            </div>
          </div>

          <div
            className="portfolio-item"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="300"
            data-aos-offset="50"
          >
            <img src="./assets/img/movie-app.png" alt="" />
            <div className="portfolio-link">
              <a href="https://filmnet-drab.vercel.app/">
                <FaPlus />
              </a>
              <a href="">
                <FaLink />
              </a>
            </div>
          </div>

          <div
            className="portfolio-item"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="300"
            data-aos-offset="50"
          >
            <img src="./assets/img/portfolio.png" alt="" />
            <div className="portfolio-link">
              <a href="https://ntdk5.github.io/react-portfolio/">
                <FaPlus />
              </a>
              <a href="">
                <FaLink />
              </a>
            </div>
          </div>

          <div
            className="portfolio-item"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="300"
            data-aos-offset="50"
          >
            <img src="./assets/img/React-form.png" alt="" />
            <div className="portfolio-link">
              <a href="https://ntdk5.github.io/react-form/">
                <FaPlus />
              </a>
              <a href="">
                <FaLink />
              </a>
            </div>
          </div>

          <div
            className="portfolio-item"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="300"
            data-aos-offset="50"
          >
            <img src="./assets/img/portfolio.png" alt="" />
            <div className="portfolio-link">
              <a href="">
                <FaPlus />
              </a>
              <a href="">
                <FaLink />
              </a>
            </div>
          </div>

          <div
            className="portfolio-item"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="300"
            data-aos-offset="50"
          >
            <img src="./assets/img/qrcode.png" alt="" />
            <div className="portfolio-link">
              <a href="">
                <FaPlus />
              </a>
              <a href="">
                <FaLink />
              </a>
            </div>
          </div>

          <div
            className="portfolio-item"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="300"
            data-aos-offset="50"
          >
            <img src="./assets/img/gym.png" alt="" />
            <div className="portfolio-link">
              <a href="https://NTDK5.github.io/html-gym-website/">
                <FaPlus />
              </a>
              <a href="https://github.com/nati2345/html-gym-website">
                <FaLink />
              </a>
            </div>
          </div>

          <div
            className="portfolio-item"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="300"
            data-aos-offset="50"
          >
            <img src="./assets/img/gpt-3.png" alt="" />
            <div className="portfolio-link">
              <a href="https://NTDK5.github.io/react-form/">
                {" "}
                <FaPlus />
              </a>
              <a href="https://ntdk5.github.io/react-portfolio/">
                <FaLink />
              </a>
            </div>
          </div>

          <div
            className="portfolio-item"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="300"
            data-aos-offset="50"
          >
            <img src="./assets/img/cusine.png" alt="" />
            <div className="portfolio-link">
              <a href="">
                <FaPlus />
              </a>
              <a href="">
                <FaLink />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
