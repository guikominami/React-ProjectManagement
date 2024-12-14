/* eslint-disable react/prop-types */
import Tasks from "../Task/Tasks";
import "./SelectedProject.css";
import Button from "../Basic/Button";

export default function SelectedProject({
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
  tasks,
}) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString(
    "pt-BR",
    { year: "numeric", month: "short", day: "numeric" }
  );

  console.log("project", project);
  console.log("tasks", tasks);

  return (
    <div className="selected-project-main-area">
      <header>
        <div className="title-area">
          <h1>{project.title}</h1>
          <Button
            className="button-delete-project"
            onClick={onDelete}
          >
            Delete
          </Button>
        </div>
        <p className="paragraph-date">{formattedDate}</p>
        <p className="paragraph-description">{project.description}</p>
      </header>
      <Tasks
        onAdd={onAddTask}
        onDelete={onDeleteTask}
        tasks={tasks}
        projectId={project.id}
      />
    </div>
  );
}
