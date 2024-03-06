import { useState } from "react";
import "./create.css";

export default function Create({ onCreate, task, formUpdate, onUpdate }) {
  const [title, setTitle] = useState(task ? task.taskTitle : "");
  const [desc, setDesc] = useState(task ? task.taskDesc : "");
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDesc = (e) => {
    setDesc(e.target.value);
  };
  const handleSubmit = (e) => {
    if (formUpdate) {
      onUpdate = (task.id, task.taskTitle, task.taskDesc);
      console.log("salam");
    } else {
      onCreate(title, desc);
    }

    e.preventDefault();
  };
  return (
    <>
      {formUpdate ? (
        <div className="update-list-body">
          <p className="forms-update">Please update a task</p>
          <form className="forms">
            <label>Update Task name</label>
            <input
              className="text-update"
              value={title}
              onChange={handleChange}
            />
            <label>Update Description</label>
            <textarea
              className="text-update area"
              value={desc}
              onChange={handleDesc}
            ></textarea>
          </form>
          <button onClick={handleSubmit} className="update-btn">
            Update Task
          </button>
        </div>
      ) : (
        <div className="create-list-body">
          <p className="forms-head">Please add a task</p>
          <form className="forms">
            <label>Task name</label>
            <input className="text-add" value={title} onChange={handleChange} />
            <label>Task</label>
            <textarea
              className="text-add"
              value={desc}
              onChange={handleDesc}
            ></textarea>
          </form>
          <button onClick={handleSubmit} className="add-btn">
            Add Task
          </button>
        </div>
      )}
    </>
  );
}
