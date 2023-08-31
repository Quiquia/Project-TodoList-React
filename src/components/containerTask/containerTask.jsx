import { useContext } from "react";
import PrintTask from "../printTask/printTask";
import FormContext from "../../context/context";

function ContainerTask() {
  const { tasks } = useContext(FormContext);

  return (
    <main className="list-container ">
      <ul className={tasks.length > 5 ? "list-task scroll" : " list-task"}>
        {tasks.length > 0 &&
          tasks.map((el) => <PrintTask key={el.id} el={el} />)}
      </ul>
      {tasks.length === 0 && (
        <div className="empty">
          <p>No tiene tareas pendientes.</p>
        </div>
      )}
    </main>
  );
}

export default ContainerTask;
