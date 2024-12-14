/* eslint-disable react/prop-types */
import "./Tasks.css";
import NewTask from "./NewTask";
import Button from "../Basic/Button";

export default function Tasks({ tasks, onAdd, onDelete, projectId }) {
  const projectTasks = tasks.filter(
    (task) => task.projectId === projectId
  );

  return (
    <section className="tasks">
      <h2>Tasks</h2>
      <NewTask onAdd={onAdd} />
      {projectTasks.length === 0 && (
        <p>This project does not have any tasks yet.</p>
      )}
      {projectTasks.length > 0 && (
        <ul>
          {projectTasks.map((task) => (
            <li key={task.id}>
              <span>{task.text}</span>
              <Button
                className="button-delete"
                onClick={() => onDelete(task.id)}
              >
                Clear
              </Button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
