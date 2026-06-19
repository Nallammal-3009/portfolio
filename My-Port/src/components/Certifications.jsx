import "./Certifications.css";

function Certifications() {
  const certs = [
    {
      title: "Frontend Development",
      issuer: "Meta / Coursera",
      description: "Comprehensive training in HTML, CSS, JavaScript, and React."
    },
    {
      title: "Git & GitHub",
      issuer: "Google",
      description: "Advanced version control and collaboration workflows."
    },
    {
      title: "Virtual Assistant Pro",
      issuer: "ALX Africa",
      description: "Professional certification in administrative excellence."
    }
  ];

  return (
    <section className="certifications" id="certifications">
      <div className="cert-grid-lines">
        <div className="line-v"></div>
        <div className="line-h"></div>
      </div>

      <div className="cert-container">
        <h2 className="section-title">Certifications</h2>
        
        <div className="cert-grid">
          {certs.map((cert, index) => (
            <div key={index} className="cert-card">
              <div className="cert-icon">📜</div>
              <h3>{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <p className="cert-desc">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;