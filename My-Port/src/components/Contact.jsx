import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-grid-lines">
        <div className="line-v"></div>
        <div className="line-h"></div>
      </div>

      <div className="contact-container">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="contact-content">
          <div className="contact-card">
            <div className="contact-item">
              <span className="contact-label">Email</span>
              <a href="mailto:nallammalcse2@gmail.com" className="contact-value">
                nallammalcse2@gmail.com
              </a>
            </div>

            <div className="contact-item">
              <span className="contact-label">LinkedIn</span>
              <a
                href="https://www.linkedin.com/in/nallammalaj3009"
                target="_blank"
                rel="noreferrer"
                className="contact-value"
              >
                linkedin.com/in/nallammalaj3009
              </a>
            </div>

            <div className="contact-item">
              <span className="contact-label">GitHub</span>
              <a
                href="https://github.com/Nallammal-3009"
                target="_blank"
                rel="noreferrer"
                className="contact-value"
              >
                github.com/Nallammal-3009
              </a>
            </div>
          </div>

          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
