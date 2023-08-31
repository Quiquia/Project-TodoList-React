import { createContext, useState } from "react";
import PropTypes from "prop-types";

const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [selectIdTask, setSelectIdTask] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task !== null) {
      const newTask = {
        id: new Date().toISOString(),
        state: false,
        text: task,
      };

      setTasks([...tasks, newTask]);
    }

    setTask("");
  };

  const changeCheckTask = (id, value) => {
    const newArrayTask = tasks.map((el) => {
      if (el.id === id) {
        el.state = value;
      }

      return el;
    });

    setTasks(newArrayTask);
  };

  const editTask = (id) => {
    setSelectIdTask(id);
    setShowModalEdit(true);

    const result = tasks.find((task) => task.id === id);

    setInputValue(result.text);
  };

  const deleteTask = (id) => {
    if (id) {
      const isId = document.getElementById(id);
      isId.remove;
    }

    const newArrayTask2 = tasks.filter((task) => task.id !== id);

    setTasks(newArrayTask2);
  };

  const checkedAllTask = () => {
    const newArrayCheckedTasks = tasks.map((task) => {
      task.state = true;
      return task;
    });

    setTasks(newArrayCheckedTasks);
  };

  const deleteAllTask = () => {
    setTasks([]);
  };

  const closeModalTask = () => {
    setShowModalEdit(false);
  };

  const saveChangeTask = (newTask) => {
    // const selectTask = tasks.find((task) => task.id === selectIdTask);
    const newArrayTask = tasks.map((task) => {
      if (task.id === selectIdTask) {
        task.text = newTask;
      }
      return task;
    });

    setTasks(newArrayTask);

    setShowModalEdit(false);
  };

  const data = {
    handleSubmit,
    task,
    setTask,
    tasks,
    changeCheckTask,
    editTask,
    deleteTask,
    checkedAllTask,
    deleteAllTask,
    selectIdTask,
    showModalEdit,
    closeModalTask,
    saveChangeTask,
    inputValue,
    setInputValue,
  };
  return <FormContext.Provider value={data}>{children}</FormContext.Provider>;
};

FormProvider.propTypes = {
  children: PropTypes.array,
};

export { FormProvider };

export default FormContext;
