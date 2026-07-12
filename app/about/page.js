import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import { skills } from "../../lib/data";

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="container">
        <section className="sectionCard">
          <h1>About</h1>
          <p>
            I am <strong>Adeyinka Giwa</strong>, a full stack software engineer focused
            on building reliable products that solve practical business problems.
            I work across frontend and backend systems and ship features from initial
            design through deployment.
          </p>
          <p>
            My recent work includes products built with Next.js, React, TypeScript,
            Laravel, PostgreSQL, Prisma, and Docker, with deployments on Vercel and
            AWS EC2. I have also integrated payments with Stripe, implemented
            authentication flows, and worked with REST APIs and background jobs.
          </p>
          <p>
            I am actively expanding into machine learning engineering. I have spent
            focused time learning FastAPI for model serving patterns, practiced core
            ML foundations by implementing gradient descent for linear regression from
            scratch, and gained hands on experience integrating AI agents into product
            workflows.
          </p>
        </section>

        <section className="sectionCard">
          <h2>Skills</h2>
          <ul className="simpleList">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section className="sectionCard">
          <h2>Contact</h2>
          <ul className="simpleList">
            <li>Mobile: 07535996987</li>
            <li>Email: adeyinka.giwa36@gmail.com</li>
          </ul>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

