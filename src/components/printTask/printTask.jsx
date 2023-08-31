import PropTypes from "prop-types";
import { useContext } from "react";
import FormContext from "../../context/context";

function PrintTask({ el }) {
  const { changeCheckTask, editTask, deleteTask } = useContext(FormContext);
  let { text, id, state } = el;

  return (
    <li className="list-item" id={id}>
      <p className={state ? "item-content select-task" : "item-content"}>
        {text}
      </p>
      <div className="list-item-icons">
        <input
          className="icon-check"
          type="checkbox"
          name="chk"
          checked={state}
          onChange={(e) => changeCheckTask(id, e.target.checked)}
        />
        <button className="icon-edit icon" onClick={() => editTask(id)}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button className="icon-delete icon" onClick={() => deleteTask(id)}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
}

export default PrintTask;

PrintTask.propTypes = {
  el: PropTypes.object,
};
