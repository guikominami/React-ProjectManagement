import Input from "./Input";
import "./NewProject.css";

export default function NewProject() {
  return (
    <div id="newproject">
      <menu>
        <li>
          <button id="cancel">Cancel</button>
        </li>
        <li>
          <button id="save">Save</button>
        </li>
      </menu>
      <div>
        <Input label="Title" />
        <Input label="Description" textarea />
        <Input label="Due Date" />
      </div>
    </div>
  );
}
