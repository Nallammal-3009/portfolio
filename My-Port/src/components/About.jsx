import "./About.css";
import aboutImg from "../assets/profile.jpg";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-grid-lines">
        <div className="line-v"></div>
        <div className="line-h"></div>
      </div>

      <div className="about-container">
        <div className="about-content">
          <h2 className="section-title">About Me</h2>
          
          <div className="about-card">
            <p>
              I am Nallammal A J, an Electronics and Communication
              Engineering graduate from SCAD College of Engineering
              and Technology.
              <br /><br />
              I am passionate about Frontend Development and enjoy
              building responsive, user-friendly web applications
              using HTML5, CSS3, JavaScript and React.
              <br /><br />
              I have worked on career development platforms,
              creating Resume Building, Placement Preparation,
              and Interview Preparation pages that help students
              improve their job readiness.
            </p>
          </div>
        </div>

        <div className="about-image-wrapper">
          <div className="oval-frame">
            <img src={aboutImg} alt="Profile" />
            <div className="oval-accent top">✦</div>
            <div className="oval-accent right">✦</div>
            <div className="oval-accent bottom">✦</div>
            <div className="oval-accent left">✦</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
