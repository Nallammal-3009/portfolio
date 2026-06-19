import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Resume Building Page",
      description:
        "Engineered guided resume templates enabling 100+ students to create professional, job-ready resumes.",
      link:
        "https://jobzenter.in/career-lab/resume-building",
    },
    {
      title: "Placement Preparation Page",
      description:
        "Built structured learning resources and roadmaps to strengthen campus recruitment readiness.",
      link:
        "https://jobzenter.in/career-lab/placement-preparation",
    },
    {
      title: "Interview Preparation Page",
      description:
        "Developed curated practice questions and mock interview resources to boost candidate confidence.",
      link:
        "https://jobzenter.in/career-lab/interview-preparation",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image"></div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
