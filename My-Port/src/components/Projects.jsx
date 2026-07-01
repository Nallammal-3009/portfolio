import "./Projects.css";


function Projects() {

const projects=[
{
title:"Portfolio Website",
image:"https://placehold.co/600x400?text=Portfolio",
description:"Modern personal portfolio built using React and responsive design.",
tech:"React • CSS • JavaScript",
live:"https://YOUR-LIVE-LINK",
github:"https://github.com/YOUR-REPO"
},

{
title:"Weather App",
image:"https://placehold.co/600x400?text=Weather+App",
description:"Weather forecasting app using API integration.",
tech:"HTML • CSS • JavaScript",
live:"#",
github:"#"
},

{
title:"To Do App",
image:"https://placehold.co/600x400?text=Todo+App",
description:"Simple task management application.",
tech:"React",
live:"#",
github:"#"
}

];

return(

<section
className="projects"
id="projects"
>

<h2 className="section-title">
Projects
</h2>

<div className="projects-grid">

{

projects.map((project,index)=>(

<div
className="project-card"
key={index}
>

<div className="project-image">

<img
src={project.image}
alt={project.title}
/>

</div>

<div className="project-content">

<h3>{project.title}</h3>

<p>{project.description}</p>

<span>{project.tech}</span>

<div className="project-buttons">

<a
href={project.live}
target="_blank"
rel="noreferrer"
>
Live Demo
</a>

<a
href={project.github}
target="_blank"
rel="noreferrer"
>
GitHub
</a>

</div>

</div>

</div>

))

}

</div>

</section>

);

}

export default Projects;