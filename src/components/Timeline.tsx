import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="February 2024 - December 2024" // Updated date
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Full Stack Developer
            </h3>{" "}
            {/* Updated title */}
            <h4 className="vertical-timeline-element-subtitle">
              Ingenious Agency, Remote
            </h4>{" "}
            {/* Updated subtitle */}
            <p>
              Implemented a new payment system, revamped the user interface for
              a smoother user experience, and integrated third-party vendors to
              enhance the platform's functionality.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="November 2016 - April 2023" // Updated date
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Full Stack Developer
            </h3>{" "}
            {/* Updated title */}
            <h4 className="vertical-timeline-element-subtitle">
              Grupo Farsimán, San Pedro Sula
            </h4>{" "}
            {/* Updated subtitle */}
            <p>
              Developed a comprehensive inventory management system, created a
              user authentication application, and built a full-fledged
              accounting platform from scratch.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
