import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../lib/data";

export const metadata = {
  title: "Projects | Adeyinka Giwa"
};

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <main className="container">
        <h1 className="pageTitle">Projects</h1>
        <section className="projectGrid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

