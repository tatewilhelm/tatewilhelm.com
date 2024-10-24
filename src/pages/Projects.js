import "./Projects.css"
import FTCLayer from "./images/ftclayer.png"
import Bipedal from "./images/bipedal.png"
import Chip8 from "./images/chip8.png"
import Raycaster from './images/raycaster.png'
import Riscv from './images/riscv.png'
import Ndlessapps from './images/ndlessapps.png'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { alignProperty } from "@mui/material/styles/cssUtils"

export default function Projects() {
    return (
        <div className="Projects">
            <header>
            </header>
            <body className="Projects-body">
                <div className="Projects-content">
                <Link to="/" className="Back"><p>&lt;back to home&gt;</p></Link>

                    <h1>Projects</h1>
                    <ProjectA title="FTC Layer" 
                    description="A library I made that makes programming robots using the FTC SDK simpler, and more beginner-friendly. Also includes localization using Three Wheel odometry." 
                    imageUrl={FTCLayer} 
                    githubUrl = "https://github.com/ftc17191/FTCLayer" 
                    tryMeUrl="https://ftclayer-docs.pages.dev/"/>
                    <ProjectB title="Bipedal Robot / Inverse Kinematics Experiment" 
                    description="An experiment into the more complex side of Control Theory. I learned Inverse Kinematics from this experiment. A desmos demo I made is available using the 'Try Me' button. " 
                    imageUrl={Bipedal} 
                    githubUrl = "https://github.com/tatewilhelm/billythebiped"
                    tryMeUrl="https://www.desmos.com/calculator/sgyincfbew"/>
                    <ProjectA title="RISC-V Virtual Machine"
                    description="My current work in progress is my RISC-V VM Software. I hope to be able to run a basic Arch Linux install on the VM by the time I'm finished with the project."
                    imageUrl={Riscv}/>
                    <ProjectB title="Chip 8 Emulator" 
                    description="My emulator for the Chip 8 platform. It was written using C++ and Raylib." 
                    imageUrl={Chip8} 
                    githubUrl = "https://github.com/tatewilhelm/chip8emu"/>
                    <ProjectA title="Raycaster" 
                    description="Raycaster is my experiment in basic 3D graphics with textures. It uses the same concept that ran the famous game Wolfenstein. I also implemented a stereoscopic 3D mode. The map shown is a recreation of my highschool. Click the 'try me' button to try out my 1.0 version." 
                    imageUrl={Raycaster} 
                    githubUrl = "https://github.com/tatewilhelm/raycaster"
                    tryMeUrl="https://studio.code.org/projects/applab/-C0ZsWarCMtcf5CZRVt1H17Vz8TrBonvuOvqsYu4iTk"/>
                    <ProjectB title="Ndless Apps" 
                    description="A index of apps for the Ndless loader for TI Nspire calculators." 
                    imageUrl={Ndlessapps} 
                    githubUrl = "https://github.com/tatewilhelm/chip8emu"
                    tryMeUrl="https://ndlessapps.org/"/>

                </div>
            </body>
        </div>
    );
}

const ProjectA = ({ title, description, imageUrl, githubUrl, tryMeUrl }) => {
    return (
      <div className="container">
        <div className="leftColumnA">
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="buttons">
            {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="button">
              View on GitHub
            </a>
            )}
            {tryMeUrl && (
              <a href={tryMeUrl} target="_blank" rel="noopener noreferrer" className="button">
                Try Me
              </a>
            )}
          </div>
        </div>
        <div class="rightColumnA">
          <img src={imageUrl} alt={title} className="image" />
        </div>
      </div>
    );
  };

const ProjectB = ({ title, description, imageUrl, githubUrl, tryMeUrl }) => {
    return (
      <div class="container">
        <div class="leftColumnB">
          <img src={imageUrl} alt={title} className="image" />
        </div>
        <div className="rightColumnB">
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="buttons">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="button">
              View on GitHub
            </a>
            {tryMeUrl && (
              <a href={tryMeUrl} target="_blank" rel="noopener noreferrer" className="button">
                Try Me
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };
