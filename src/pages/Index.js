import React from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";

const Index = () => (
  <Main description="Akash Mishra's personal website.">
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">About this site</Link>
          </h2>
        </div>
      </header>
      <p>
        <Link to="/about">Work Experience</Link>, or you can check out my{" "}
        <Link to="/links">Links</Link>, <Link to="/projects">projects</Link>,{" "}
        view <Link to="/stats">stats</Link>, or{" "}
        <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
