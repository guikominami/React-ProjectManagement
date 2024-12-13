import PropTypes from "prop-types";
import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";
import "./NoProjectSelected.css";

export default function NoProjectSelected({ onStartAddProject }) {
  NoProjectSelected.propTypes = {
    onStartAddProject: PropTypes.any,
  };

  return (
    <div className="no-project-main-area">
      <img src={noProjectImage} alt="An empty task list" />
      <h2>No Project Selected</h2>
      <p className="paragraph-top">
        Select a project or get started with a new one.
      </p>
      <p className="paragraph-bottom"></p>
      <Button onClick={onStartAddProject}>Create New Project</Button>
    </div>
  );
}
