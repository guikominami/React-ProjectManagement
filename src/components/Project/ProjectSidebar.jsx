/* eslint-disable react/prop-types */
import Button from "../Basic/Button";
import "./ProjectSidebar.css";

export default function ProjectSideBar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="sidebar">
      <h2>Your projects</h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul>
        {projects.map((project) => {
          let cssClass = "button-project";

          if (project.id === selectedProjectId) {
            cssClass += " selected-project";
          } else {
            cssClass += " no-selected-project";
          }

          return (
            <li key={project.id}>
              <button
                className={cssClass}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
