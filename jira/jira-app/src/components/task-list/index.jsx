import Show from "../task-show";
import "./list.css";
export default function List({ tasks, onDelete, onUpdated }) {
  return (
    <>
      {tasks.map((newTask) => {
        return (
          <Show
            onDelete={onDelete}
            key={newTask.id}
            task={newTask}
            onUpdated={onUpdated}
          />
        );
      })}
    </>
  );
}
