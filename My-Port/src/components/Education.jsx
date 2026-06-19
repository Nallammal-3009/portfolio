import "./Education.css";

function Education() {
  const educationData = [
    {
      institution: "SCAD College of Engineering and Technology",
      years: "2022 - 2026",
      degree: "Bachelor of Engineering (B.E)",
      description: "Electronics and Communication Engineering"
    }
  ];

  return (
    <section className="education" id="education">
      <div className="edu-grid-lines">
        <div className="line-v"></div>
        <div className="line-h"></div>
      </div>

      <div className="education-container">
        <div className="education-list">
          <h2 className="section-title">Education</h2>
          
          {educationData.map((item, index) => (
            <div key={index} className="education-item">
              <div className="edu-icon">✒</div>
              <div className="edu-details">
                <h3>{item.institution}</h3>
                <p className="edu-years">{item.years}</p>
                <p className="edu-degree">{item.degree}</p>
                <p className="edu-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="education-graphic">
          <div className="graphic-placeholder">
            <div className="graphic-accent">✦</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
