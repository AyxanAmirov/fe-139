import { useState } from "react";
import "./App.css";
import Create from "./components/create-task";
import List from "./components/task-list";

function App() {
  const [tasks, setTasks] = useState([]);
  const createTask = (taskTitle, taskDesc) => {
    const createdTasks = [
      ...tasks,
      {
        id: Math.round(Math.random() * 9999999999),
        taskTitle,
        taskDesc,
      },
    ];
    setTasks(createdTasks);
  };
  const deleteTask = (id) => {
    console.log(id);
    const newTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(newTasks);
  };
  const editTask = (id, updatedTitle, updatedDesc) => {
    const updatingTasks = tasks.map((task) => {
      if (id == task.id) {
        return { id, taskTitle: updatedTitle, taskDesc: updatedDesc };
      }
      return task;
    });
    setTasks(updatingTasks);
  };
  return (
    <div className="app-body">
      <Create onCreate={createTask} />
      <h2>Tasks</h2>
      {tasks.length ? (
        <div className="box-body">
          <List tasks={tasks} onDelete={deleteTask} onUpdated={editTask} />
        </div>
      ) : (
        <img
          src="https://cdn-icons-png.flaticon.com/512/5058/5058432.png"
          className="notData"
        />
      )}
    </div>
  );
}

export default App;
