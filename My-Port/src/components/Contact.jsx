import "./Contact.css";

function Contact() {
  return (
   <section className="contact" id="contact">
      <h2>Contact Me</h2>

      <div className="contact-card">
        <p>
          📧 Email:
          <a href="mailto:nallammalcse2@gmail.com">
            {" "}
            nallammalcse2@gmail.com
          </a>
        </p>

        <p>
          💼 LinkedIn:
          <a
            href="https://www.linkedin.com/in/nallammalaj3009"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            linkedin.com/in/nallammalaj3009
          </a>
        </p>

        <p>
          💻 GitHub:
          <a
            href="https://github.com/Nallammal-3009"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            github.com/Nallammal-3009
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;