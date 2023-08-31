import { useContext } from "react";
import FormContext from "../../context/context";

function FormTask() {
  const { handleSubmit, task, setTask } = useContext(FormContext);

  return (
    <header className="header">
      <h1 className="header-title">Lista de Tareas</h1>
      <form className="header-add" onSubmit={handleSubmit}>
        <input
          className="header-input"
          type="text"
          placeholder="Agregar Tareas"
          name="task"
          id="input-task"
          title="Agregar tareas"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />
        <button className="button header-button" type="submit" id="btn-add">
          ENVIAR
        </button>
      </form>
    </header>
  );
}

export default FormTask;
