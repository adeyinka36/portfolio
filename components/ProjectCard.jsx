import Image from "next/image";

export default function ProjectCard({ project }) {
  return (
    <article className="projectCard" id={project.slug}>
      <div className="projectImageWrap">
        <Image
          src={project.image}
          alt={project.title}
          width={900}
          height={560}
          className="projectImage"
        />
      </div>
      <div className="projectBody">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <div className="chipRow">
          {project.stack.map((item) => (
            <span className="chip" key={`${project.slug}-${item}`}>
              {item}
            </span>
          ))}
        </div>
        <div className="linkRow">
          {project.links.map((link) => (
            <a key={`${project.slug}-${link.label}`} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

