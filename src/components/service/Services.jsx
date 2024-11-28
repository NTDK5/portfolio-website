import React from "react";
import "./services.css";
import {
  FaNodeJs,
  FaTools,
  FaShopify,
  FaLaptopCode,
  FaTachometerAlt,
  FaMobileAlt,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="services">
      <div className="services-container">
        <div className="services-title">
          <h2>Services</h2>
          <p>
            Embark on a transformative journey with my comprehensive range of
            services tailored to meet your digital needs. Drawing upon my
            expertise as a web developer, I am committed to delivering
            exceptional solutions that seamlessly merge functionality with
            aesthetics.
          </p>
        </div>

        <div className="services-content">
          <div className="services-list">
            <div
              className="service-item"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="300"
              data-aos-offset="50"
            >
              <div className="icon">
                <FaNodeJs />
              </div>
              <div className="description">
                <h2>Web Development and Design</h2>
                <p>
                  I offer professional web development and design services,
                  creating visually stunning and functional websites.{" "}
                </p>
              </div>
            </div>

            <div
              className="service-item"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="300"
              data-aos-offset="50"
            >
              <div className="icon">
                <FaTools />
              </div>
              <div className="description">
                <h2>Website Maintenance and Support:</h2>
                <p>
                  I provide regular updates, bug fixes, and security
                  enhancements to keep your site running flawlessly.
                </p>
              </div>
            </div>

            <div
              className="service-item"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="300"
              data-aos-offset="50"
            >
              <div className="icon">
                <FaShopify />
              </div>
              <div className="description">
                <h2>E-commerce Development</h2>
                <p>
                  My e-commerce development solutions empower businesses to
                  establish a robust online presence and drive sales.
                </p>
              </div>
            </div>

            <div
              className="service-item"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="300"
              data-aos-offset="50"
            >
              <div className="icon">
                <FaLaptopCode />
              </div>
              <div className="description">
                <h2>Custom Web Application Development</h2>
                <p>
                  With my custom web application development services, we
                  transform your unique business ideas into reality.{" "}
                </p>
              </div>
            </div>

            <div
              className="service-item"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="300"
              data-aos-offset="50"
            >
              <div className="icon">
                <FaTachometerAlt />
              </div>
              <div className="description">
                <h2>Website Performance Optimization</h2>
                <p>
                  My website performance optimization services ensure that your
                  site loads quickly and efficiently. .
                </p>
              </div>
            </div>

            <div
              className="service-item"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="300"
              data-aos-offset="50"
            >
              <div className="icon">
                <FaMobileAlt />
              </div>
              <div className="description">
                <h2>Responsive Web Design</h2>
                <p>
                  I specialize in creating responsive web designs that adapt
                  flawlessly to various screen sizes and devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
