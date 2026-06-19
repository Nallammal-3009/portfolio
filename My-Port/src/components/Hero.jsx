import "./Hero.css";
import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid-lines">
        <div className="line-v"></div>
        <div className="line-h"></div>
      </div>
      
      <div className="hero-container">
        <div className="hero-text">
          <h1 className="hero-name">
            Nallammal<br />
            A J
          </h1>
          <p className="hero-subtitle">Electronics & Communication Engineer</p>
          
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
        
        <div className="hero-image-wrapper">
          <div className="image-frame">
            <img src={profile} alt="Nallammal A J" />
            <div className="frame-accent top-right">✦</div>
            <div className="frame-accent bottom-left">✦</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
