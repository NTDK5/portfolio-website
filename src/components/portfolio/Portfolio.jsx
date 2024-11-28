import React from "react";
import "./portfolio.css";
import { FaPlus, FaLink, FaEye, FaVoteYea } from "react-icons/fa";
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
            <img src="./assets/img/mickias_girma.png" alt="" />
            <div className="portfolio-link">
              <a href="https://mickias-portfolio.netlify.app/">
                <FaEye />
              </a>
              <a href="https://github.com/NTDK5/Mickias-Girma">
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
            <img src="./assets/img/Dorze Tours.png" alt="Dorze Tours Mern Project" />
            <div className="portfolio-link">
              <a href="https://dorze-tour.vercel.app/">
                <FaEye />
              </a>
              <a href="https://github.com/NTDK5/Dorze_Tours_Mern_Project">
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
            <img src="./assets/img/eccomerce_client.png" alt="" />
            <div className="portfolio-link">
              <a href="https://ecommerce-client-fmo2.onrender.com/">
                <FaEye />
              </a>
              <a href="https://github.com/NTDK5/Ecommerce_Client">
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
            <img src="./assets/img/eccomerce_admin.png" alt="" />
            <div className="portfolio-link">
              <a href="https://ecommerce-admin-3zu5.onrender.com">
                <FaEye />
              </a>
              <a href="https://github.com/NTDK5/Eccommerce_admin">
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
            <img src="./assets/img/eccomerce_backend.png" alt="" />
            <div className="portfolio-link">
              <a href="https://github.com/NTDK5/Ecommerce_Backend">
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
            <img src="./assets/img/Recipe.png" alt="" />
            <div className="portfolio-link">
              <a href="https://mern-recipe-app-xr40.onrender.com/">
                <FaEye />
              </a>
              <a href="https://github.com/NTDK5/mern-recipe-app-frontend">
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
                <FaEye />
              </a>
              <a href="https://github.com/NTDK5/filmnet">
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
                <FaEye />
              </a>
              <a href="https://github.com/NTDK5/react-portfolio">
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
                <FaEye />
              </a>
              <a href="https://github.com/NTDK5/react-form">
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
              <a href="https://ntdk5.github.io/QR-code-generator/">
                <FaEye />
              </a>
              <a href="https://github.com/NTDK5/QR-code-generator">
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
                <FaEye />
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
                <FaEye />
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
              <a href="https://ntdk5.github.io/Ethiopian-Cuisine-and-Cultural-Hub/">
                <FaEye />
              </a>
              <a href="https://github.com/NTDK5/Ethiopian-Cuisine-and-Cultural-Hub">
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
