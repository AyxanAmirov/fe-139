import { useState } from "react";
import Create from "../create-task";

export default function Show({ task, onDelete }) {
  const removeTask = () => {
    onDelete(task.id);
  };
  const [taskUpdate, setTaskUpdate] = useState(false);
  const updateTask = () => {
    setTaskUpdate(!taskUpdate);
  };
  const handleShow =(id,updatedTitle,updatedDesc)=>{
    setTaskUpdate(false)
    onUpdate(id,updatedTitle,updatedDesc)
  }
  return (
    <div className="box">
      {taskUpdate ? (
        <Create
        task={task}
        formUpdate={true}
        onUpdate={handleShow}
        />
      ) : (
        <>
          <div className="your-todo">
            <p className="task">Tapşırığınız:</p>
            <p className="create">{task.taskTitle}</p>
          </div>
          <div className="your-todo">
            <p className="task">Tapşırıq haqqında məlumat:</p>
            <p className="create">{task.taskDesc}</p>
          </div>
          <div className="buttons">
            <button onClick={removeTask} className="btns delete">
              Delete
            </button>
            <button onClick={updateTask} className="btns update">
              Update
            </button>
          </div>
        </>
      )}
    </div>
  );
}
