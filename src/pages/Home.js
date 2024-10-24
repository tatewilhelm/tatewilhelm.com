import "./Home.css";
import profile from "./images/profile.jpg"
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

export default function Home() {
  return (

    <div className="Home">
      <header>
      </header>
      <body className="Home-body">
          <div className="Home-content">
            <Profile />
            <ButtonBar />
          </div>
      </body>
    </div>
  );
}

function Profile() {
  return (
    <div className="Profile">
      <img className="Profile-img" src={profile} alt="profile-pic" />
      <TypeAnimation
        sequence={[700, "Tate Wilhelm", 1000]}
        wrapper="span"
        speed={50}
        style={{ fontSize: "2em", display: "inline-block", fontWeight: 600 }}
        repeat={Infinity}
      />
      <TypeAnimation
        sequence={[2500, "Student", 2000, "Programmer", 2000, "Small Business Owner"]}
        wrapper="span"
        speed={50}
        style={{ fontSize: "1em", display: "inline-block", color: "#E0E0E0FF" }}
        repeat={Infinity}
      />
    </div>
  );
}

function ButtonBar() {
  return (
    <div className="Button-bar">
      <Link to="/about">
        <button id="about" className="Button" style={{ cursor: 'pointer' }}>About Me</button>
      </Link>
      <Link to="/projects">
        <button id="projects" className="Button" style={{ cursor: 'pointer' }}>Projects</button>
      </Link>
      <a href="./TateWilhelmResumeDark.pdf" download="TateWilhelmResumeDark.pdf">
      <button id="resume" className="Button" style={{ cursor: 'pointer' }}>Resume</button>
      </a>
      {/* <Link to="/blog">
        <button id="projects" className="Button" style={{ cursor: 'pointer' }}>Blog</button>
      </Link> */}
    </div>
  );
}


