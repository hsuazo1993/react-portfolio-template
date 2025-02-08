import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faServer,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons"; // Updated icons
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Blazor",
  "Angular",
  "Ionic"
];

const labelsSecond = [
  ".NET",
  "SQL Server",
  "MongoDB",
  "Redis",
  "Firebase",
  "AWS",
  "Google Cloud Run",
  "IIS",
];

const labelsThird = [
  "Git",
  "Bitbucket",
  "GitHub",
  "TFS",
  "Jira",
  "Confluence",
  "Agile",
  "Scrum",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faLaptopCode} size="3x" />{" "}
            {/* Updated icon */}
            <h3>Frontend Development</h3> {/* Updated title */}
            <p>
              I have 6 years of experience building user interfaces with modern
              frameworks like React and Angular, as well as foundational web
              technologies like HTML, CSS, and JavaScript. I'm passionate about
              creating intuitive and engaging user experiences.{" "}
            </p>{" "}
            {/* Updated description */}
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faServer} size="3x" /> {/* Updated icon */}
            <h3>Backend Development</h3> {/* Updated title */}
            <p>
              I have a strong understanding of server-side development
              principles and experience building robust and scalable backend
              systems using ASP.NET Core, SQL Server, and Firebase. I'm
              proficient in designing and implementing RESTful APIs and
              integrating with various third-party services.{" "}
            </p>{" "}
            {/* Updated description */}
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faCode} size="3x" /> {/* Updated icon */}
            <h3>Collaboration & Tools</h3> {/* Updated title */}
            <p>
              I'm proficient in using version control systems like Git and
              collaborating with teams using tools like Jira and Confluence. I'm
              also familiar with Agile and Scrum methodologies.{" "}
            </p>{" "}
            {/* Updated description */}
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
