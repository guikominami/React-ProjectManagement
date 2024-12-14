/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "../Basic/Button";
import "./NewTask.css";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask === "") {
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <div className="new-task">
      <input
        onChange={handleChange}
        type="text"
        value={enteredTask}
      />
      <Button onClick={handleClick}>Add Task</Button>
    </div>
  );
}
