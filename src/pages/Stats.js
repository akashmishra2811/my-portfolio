import React from 'react';
import { Link } from "react-router-dom";
import Main from "../layouts/Main";
import { categories, skills } from "../data/resume/skills";
import Skills from "../components/Resume/Skills";

const Stats = () => (
  <Main title="Stats" description="Some statistics about Akash Mishra">
    <article className="post" id="stats">
      <header>
        <div className="title">
          <h2>
            <Link to="/stats">Skills</Link>
          </h2>
        </div>
      </header>
      <Skills skills={skills} categories={categories} />,
    </article>
  </Main>
);

export default Stats;
