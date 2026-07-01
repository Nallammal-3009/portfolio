import "./Skills.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaGithub
} from "react-icons/fa";

function Skills() {

  const skills = [

    {
      name: "HTML5",
      icon: <FaHtml5 />,
      level: "95%"
    },

    {
      name: "CSS3",
      icon: <FaCss3Alt />,
      level: "92%"
    },

    {
      name: "JavaScript",
      icon: <FaJsSquare />,
      level: "85%"
    },

    {
      name: "React",
      icon: <FaReact />,
      level: "80%"
    },

    {
      name: "Git",
      icon: <FaGitAlt />,
      level: "80%"
    },

    {
      name: "GitHub",
      icon: <FaGithub />,
      level: "85%"
    }

  ];

  return (

    <section
      className="skills"
      id="skills"
      data-aos="fade-up"
    >

      <h2
        className="section-title"
        data-aos="fade-down"
      >
        My Skills
      </h2>

      <div className="skills-container">

        {

          skills.map((skill, index) => (

            <div
              className="skill-card"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >

              <div className="skill-header">

                <span className="skill-icon">
                  {skill.icon}
                </span>

                <span className="skill-name">
                  {skill.name}
                </span>

                <span className="skill-percent">
                  {skill.level}
                </span>

              </div>

              <div className="progress">

                <div
                  className="progress-bar"
                  style={{
                    width: skill.level
                  }}
                ></div>

              </div>

            </div>

          ))

        }

      </div>

    </section>

  );

}

export default Skills;