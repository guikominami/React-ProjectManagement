/* eslint-disable react/prop-types */
import "./SelectedProject.css";

export default function SelectedProject({ project }) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString(
    "pt-BR",
    { year: "numeric", month: "short", day: "numeric" }
  );

  return (
    <div className="selected-project-main-area">
      <header>
        <div className="title-area">
          <h1>{project.title}</h1>
          <button>Delete</button>
        </div>
        <p className="paragraph-date">{formattedDate}</p>
        <p className="paragraph-description">{project.description}</p>
      </header>
      tasks
    </div>
  );
}
