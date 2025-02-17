import React from 'react';
import { Link } from 'react-router-dom';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Akash Mishra</h2>
        <p>
          <a href="mailto:akashmishra2899@gmail.com">
            akashmishra2899@gmail.com
          </a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi , I am Akash Mishra, A Passionate Software Engineer with over 2 years
        of experience in a product-based company (Deskera) . Proficient in
        ReactJS, Redux, JavaScript, Spring Boot, Java, and RESTful API.Strong
        problem-solving skills with a solid foundation in Data Structures and
        Algorithms (DSA), having solved 250+ problems on various online{" "}
        <a href="https://leetcode.com/u/akashmishra1128/"> coding platform</a>.
        Completed a 6-month internship as an SDET at Druva Data Solutions
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes("/resume") ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              Experience
            </Link>
          )}
        </li>
      </ul>
    </section>
  </section>
);

export default SideBar;
