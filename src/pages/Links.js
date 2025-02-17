import React from "react";
import { Link } from "react-router-dom";
import Main from "../layouts/Main";
import Cell from "../components/Projects/Cell";
import codingPlatform from "../data/links";

const Projects = () => (
  <Main title="Links" description="">
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2>
            <Link to="links"> Links / Certifications </Link>
          </h2>
        </div>
      </header>
      {codingPlatform.map((field) => (
        <Cell data={field} key={field.title} />
      ))}
    </article>
  </Main>
);

export default Projects;
