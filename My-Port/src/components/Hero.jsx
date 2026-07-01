import "./Hero.css";
import profile from "../assets/profile.jpg";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-grid-lines">
        <div className="line-v"></div>
        <div className="line-h"></div>
      </div>

      <div className="hero-container">

        {/* Left Side */}

        <div
          className="hero-text"
          data-aos="fade-right"
        >

          <p
            className="hero-greeting"
            data-aos="fade-down"
          >
            👋 Hello, I'm
          </p>

          <h1
            className="hero-name"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            Nallammal
            <br />
            A J
          </h1>

          <h2
            className="hero-role"
            data-aos="fade-right"
            data-aos-delay="200"
          >

            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "React Developer",
                2000,
                "ECE Graduate",
                2000,
                "Web Designer",
                2000
              ]}
              speed={40}
              repeat={Infinity}
            />

          </h2>

          <p
            className="hero-description"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            Passionate Electronics & Communication Engineering graduate with
            strong skills in HTML, CSS, JavaScript and React. I enjoy building
            responsive, modern and user-friendly web applications while
            continuously learning new technologies.
          </p>

          <div
            className="hero-buttons"
            data-aos="fade-up"
            data-aos-delay="400"
          >

            <a
              href="#contact"
              className="hire-btn"
            >
              Hire Me
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="resume-btn"
            >
              Download Resume
            </a>

          </div>

          <div
            className="hero-social"
            data-aos="fade-up"
            data-aos-delay="500"
          >

            <a
              href="https://github.com/Nallammal-3009"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/nallammalaj3009"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a href="mailto:nallammalcse2@gmail.com">
              <FaEnvelope />
            </a>

          </div>

        </div>

        {/* Right Side */}

        <div
          className="hero-image-wrapper"
          data-aos="zoom-in"
          data-aos-delay="250"
        >

          <div className="image-frame">

            <img
              src={profile}
              alt="Nallammal"
            />

            <div className="frame-accent top-right">
              ✦
            </div>

            <div className="frame-accent bottom-left">
              ✦
            </div>

          </div>

        </div>

      </div>

      <div
        className="scroll-down"
        data-aos="fade-up"
        data-aos-delay="700"
      >
        ↓
      </div>

    </section>
  );
}

export default Hero;