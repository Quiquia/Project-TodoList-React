import { useContext, useState } from "react";
import FormContext from "../../context/context";

function EditTaskContainer() {
  const { closeModalTask, saveChangeTask, showModalEdit, inputValue } =
    useContext(FormContext);

  const [inputEdit, setInputEdit] = useState(inputValue);

  return (
    <div className={showModalEdit ? "edit-container show" : "edit-container"}>
      <div className="edit">
        <div className="edit-header">
          <h2>Editar Tarea</h2>
          <i className="fa-solid fa-xmark" onClick={closeModalTask}></i>
        </div>
        <div className="edit-input">
          <input
            type="text"
            defaultValue={inputValue}
            onChange={(e) => setInputEdit(e.target.value)}
          />
        </div>
        <div className="edit-btn">
          <button className="button edit-btn__close" onClick={closeModalTask}>
            Cerrar
          </button>
          <button
            className="button edit-btn__save"
            onClick={() => saveChangeTask(inputEdit)}
          >
            Guardar Cambios
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditTaskContainer;
