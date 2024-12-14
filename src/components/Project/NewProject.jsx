/* eslint-disable react/prop-types */
import { useRef } from "react";
import Input from "../Basic/Input";
import "./NewProject.css";
import Modal from "../Basic/Modal";
import Button from "../Basic/Button";

export default function NewProject({ onAdd, onCancel }) {
  const modal = useRef();

  const title = useRef(null);
  const description = useRef(null);
  const dueDate = useRef(null);

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Ok">
        <h2>Invalid Input</h2>
        <p>Looks like you forgot to enter a value.</p>
      </Modal>
      <div className="newproject">
        <menu>
          <li>
            <Button className="cancel" onClick={onCancel}>
              Cancel
            </Button>
          </li>
          <li>
            <Button className="save" onClick={handleSave}>
              Save
            </Button>
          </li>
        </menu>
        <div>
          <Input ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
}
