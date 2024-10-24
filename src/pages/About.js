import "./About.css";
import profile from "./images/profile.jpg"
import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

export default function About() {
    return (
        <div className="About">
            <div className="About-body">
                <body>
                    <div className="About-content">
                        <Link to="/" className="Back"><p>&lt;back to home&gt;</p></Link>
                        <TypeAnimation
                            sequence={[700, "Hi!", 1000, "Hi! My name's Tate."]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: "2em", display: "inline-block", fontWeight: 600, marginBottom: 30, marginTop: 45 }}
                        />

                        <div className="Top-box">
                            <img className="Profile-img" src={profile} alt="profile-pic" />
                            <div className="Top-right-box">
                                <h2>I'm a student, programmer and small business owner.</h2>
                                <p>I am high school student who runs Canadian Technology, a business that repairs devices, builds websites, and provides IT infastructure for local businesses and residences.</p>
                            </div>
                        </div>
                        <div className="Description">
                            <p>I'm a nerdy kid who hails from the almighty (and extremely flat) Texas Panhandle. I have a passion for Computer Science and Robotics. I specifically wish to study in the field of Integrated Systems, such as programming robots or other electronics. For now though, I develop websites for local businesses as a part of my company. I actively provide services to the businesses and residents of my community. I have worked on things as simple as setting a TV up to creating and installing the IT infastructure for an entire hotel.</p>
                        </div>

                        <div className="Description">
                            <p>I compete in my state's computer science competitions, and I have made it to state every year I've competed. I also compete in FTC Robotics, and I am the lead programmer for my school's robotics program. Aswell as school robotics, I teach fundamentals of robotics to Elementary kids every year in a 6 week boot camp I run through my local 4-H. I also serve as a Texas 4-H STEM Ambassador, where I was selected to manage the video production teams of the State Texas 4-H Assemblies. For more info on what I do, check out my resume on the home page.</p>
                        </div>

                        <div className="Description">
                            <p>If are interested in contacting me, you can email me at t8wilhelm(at)gmail.com.</p>
                        </div>

                    </div>
                </body>
            </div>
        </div>
    );
}