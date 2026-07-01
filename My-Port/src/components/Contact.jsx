import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

function Contact() {

  const form = useRef();

  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {

    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_4ybikbh",
        "template_7jqkwzm",
        form.current,
        "rAFoJSNynmIffKQjI"
      )
      .then(
        () => {
          alert("✅ Message Sent Successfully!");
          form.current.reset();
          setLoading(false);
        },
        () => {
          alert("❌ Failed to Send Message.");
          setLoading(false);
        }
      );
  };

  return (
    <section className="contact" id="contact">

      <div className="contact-grid-lines">
        <div className="line-v"></div>
        <div className="line-h"></div>
      </div>

      <div className="contact-container">

        <h2 className="section-title">
          Contact Me
        </h2>

        <div className="contact-content">

          <div className="contact-card">

            <div className="contact-item">
              <span className="contact-label">Email</span>

              <a
                href="mailto:nallammalcse2@gmail.com"
                className="contact-value"
              >
                nallammalcse2@gmail.com
              </a>
            </div>

            <div className="contact-item">

              <span className="contact-label">
                LinkedIn
              </span>

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

              <span className="contact-label">
                GitHub
              </span>

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

          <form
            ref={form}
            onSubmit={sendEmail}
            className="contact-form"
          >

            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="title"
                placeholder="Subject"
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                rows="6"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <button
              className="submit-btn"
              type="submit"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;