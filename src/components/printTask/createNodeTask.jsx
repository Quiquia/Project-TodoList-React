function CreateNodeTask({ el }) {
  let { text, id, state } = el;
  return (
    <li className="list-item" id="">
      <p className="item-content">{text}</p>
      <div className="list-item-icons">
        <input
          className="icon-check"
          type="checkbox"
          name="chk"
          onChange="changeCheckTask('${task.id}', event)"
        />
        <button className="icon-edit icon" onClick="editTask('${task.id}')">
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button className="icon-delete icon" onClick="deleteTask('${task.id}')">
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
}

export default CreateNodeTask;
