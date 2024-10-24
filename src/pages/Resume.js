import profile from "./images/profile.jpg"
import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import "./Resume.css"

export default function Resume() {
    return (
        <div className="Resume">
            <body className="Resume-body">
                <a href="./TateWilhelmResumeDark.pdf" download="TateWilhelmResumeDark.pdf">Download</a>
                <div className="Viewer">
                </div>
            </body>
        </div>
    );
}
