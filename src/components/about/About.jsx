import React from "react";
import "./about.css";
import { FaChevronRight } from "react-icons/fa";
import Skills from "./skills/Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section id="about">
        <div className="about-container">
          <div className="about-title">
            <h1>About</h1>
            <p>
              I'm Natan Tamiru, a passionate web developer based in Ethiopia.
              With a strong background in creating stunning and functional
              websites, I strive to deliver exceptional user experiences and
              bring ideas to life through code. What sets me apart is my
              dedication to understanding clients' needs and translating them
              into innovative, tailor-made solutions. I believe that effective
              communication and collaboration are key to delivering successful
              projects. By combining my technical expertise with a keen eye for
              design, I create websites that not only function flawlessly but
              also captivate users with their aesthetics.
            </p>
          </div>
          <div className="about-content">
            <img
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="300"
              src="assets/img/about.svg"
              alt=""
            />
            <div
              className="about-text"
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="300"
            >
              <h3>UI/UX Designer &amp; Web Devloper</h3>
              <p>
                Here is my contact information. Please feel free to reach out to
                me for further details and to explore potential collaborations.
                Together, let's unleash the full potential of your vision and
                breathe life into your digital aspirations.
              </p>
              <div>
                <ul className="details">
                  <li>
                    <FaChevronRight />
                    <strong>Email</strong> <span>natantamiru18@gmail.com</span>
                  </li>
                  <li>
                    <FaChevronRight />
                    <strong>Website:</strong> <span>https://example.com</span>
                  </li>
                  <li>
                    <FaChevronRight />
                    <strong>phone:</strong> <span>+251986890291</span>
                  </li>
                  <li>
                    <FaChevronRight />
                    <strong>City:</strong> <span>Ethiopia, Addis Ababa</span>
                  </li>
                </ul>
              </div>
              <p>
                Thank you for visiting my portfolio website. I would love to
                discuss your project ideas and collaborate on creating a
                remarkable web presence for your business. Feel free to reach
                out to me through the contact details provided. Let's bring your
                vision to life!
              </p>
              <a href="https://ntdk5.github.io/Resume/" className="cv">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>
      <Skills />
    </>
  );
};

export default About;
