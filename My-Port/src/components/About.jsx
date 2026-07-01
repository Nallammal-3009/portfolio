import "./About.css";
import {
  FaUserGraduate,
  FaLaptopCode,
  FaMapMarkerAlt,
} from "react-icons/fa";

function About() {
  return (
    <section
      className="about"
      id="about"
      data-aos="fade-up"
    >
      <h2 className="section-title">About Me</h2>

      <div className="about-container">

        <div
          className="about-left"
          data-aos="fade-right"
          data-aos-delay="200"
        >

          <p className="about-text">
            I am an Electronics and Communication Engineering graduate with a
            strong interest in Frontend Development. I enjoy building modern,
            responsive and user-friendly websites using HTML, CSS, JavaScript
            and React. I am continuously improving my skills and looking for an
            opportunity to contribute and grow as a Software Engineer.
          </p>

          <div className="about-info">

            <div
              className="info-card"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <FaUserGraduate className="info-icon" />
              <div>
                <h4>Education</h4>
                <p>B.E - Electronics & Communication Engineering</p>
              </div>
            </div>

            <div
              className="info-card"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <FaLaptopCode className="info-icon" />
              <div>
                <h4>Role</h4>
                <p>Frontend Developer</p>
              </div>
            </div>

            <div
              className="info-card"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <FaMapMarkerAlt className="info-icon" />
              <div>
                <h4>Location</h4>
                <p>Tamil Nadu, India</p>
              </div>
            </div>

          </div>

        </div>

        <div
          className="about-right"
          data-aos="fade-left"
          data-aos-delay="300"
        >

          <div
            className="stat-card"
            data-aos="flip-up"
            data-aos-delay="400"
          >
            <h3>1</h3>
            <p>Portfolio Project</p>
          </div>

          <div
            className="stat-card"
            data-aos="flip-up"
            data-aos-delay="500"
          >
            <h3>10+</h3>
            <p>Skills</p>
          </div>

          <div
            className="stat-card"
            data-aos="flip-up"
            data-aos-delay="600"
          >
            <h3>100%</h3>
            <p>Responsive</p>
          </div>

          <div
            className="stat-card"
            data-aos="flip-up"
            data-aos-delay="700"
          >
            <h3>2026</h3>
            <p>Graduate</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;