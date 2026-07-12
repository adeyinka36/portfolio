import Link from "next/link";
import Image from "next/image";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { featuredProjects, skills } from "../lib/data";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* ── Hero ── */}
        <section className="heroSection">
          <div className="heroInner">
            <p className="heroEyebrow">I am a</p>
            <h1 className="heroTitle">Software Developer</h1>
            <p className="heroName">Adeyinka Giwa</p>
            <p className="heroBio">
              Full-stack developer with a passion for building useful, dynamic
              products. I love learning and enjoy doing meaningful work.
            </p>
            <div className="heroActions">
              <Link href="/projects" className="btnPrimary">
                View All Projects
              </Link>
              <Link href="/about" className="btnSecondary">
                About Me
              </Link>
              <a
                href="/images/Yinka_Giwa_CV.docx"
                download
                className="btnSecondary"
              >
                Download CV
              </a>
            </div>
          </div>
        </section>

        {/* ── Featured Work ── */}
        <section className="featuredSection">
          <div className="container">
            <h2 className="sectionHeading">Featured Work</h2>
            <div className="featuredGrid">
              {featuredProjects.map((project) => (
                <article key={project.slug} className="featuredCard">
                  <div className="featuredImageWrap">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={900}
                      height={560}
                      className="projectImage"
                    />
                  </div>
                  <div className="featuredBody">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="chipRow">
                      {project.stack.map((s) => (
                        <span className="chip" key={`${project.slug}-${s}`}>
                          {s}
                        </span>
                      ))}
                    </div>
                    <div className="linkRow">
                      {project.links.map((link) => (
                        <a
                          key={`${project.slug}-${link.label}`}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Skills teaser ── */}
        <section className="skillsSection">
          <div className="container">
            <h2 className="sectionHeading">Skills</h2>
            <ul className="skillsList">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
            <Link href="/about" className="btnSecondary skillsCta">
              More About Me →
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
