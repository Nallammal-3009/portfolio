import "./Hero.css";
import profile from "../assets/profile.jpg";
function Hero() {
  return (
    <section className="hero" id="home">
          <div className="hero-content">
        <h1>Nallammal A J</h1>

        <h2>Electronics & Communication Engineer</h2>

        <p>
          Passionate Frontend Developer skilled in HTML5,
          CSS3, JavaScript and React. I enjoy building
          responsive and user-friendly web applications.
        </p>

        <div className="hero-buttons">
          <a
            href="https://github.com/Nallammal-3009"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/nallammalaj3009"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
        >
    Resume
  </a>


        </div>
      </div>
      <div className="hero-image">
        <img src={profile} alt="Profile" />
      </div>
    </section>
  );
}

export default Hero;