import React from "react";
import "./InputAdd.css";

const InputAdd = () => {
  const [tasks, setTasks] = React.useState([
    "Be Happy and keep smiling",
    "Be kind to others",
  ]);
  const [newTask, setnewTask] = React.useState("");

  function handleInputChange(event) {
    setnewTask(event.target.value);
  }

  function AddNewTask() {
    if (newTask === "") return alert("Please enter a task");
    else {
      setTasks((t) => [...t, newTask]);
      setnewTask("");
    }
  }

  function DeleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function clearAllTasks() {
    setTasks([]);
  }

  return (
    <div className="container d-flex justify-content-center align-items-center flex-column">
      <div className="input-group w-50">
        <input
          className="form-control me-2 rounded"
          type="text"
          placeholder="Enter a new Task"
          value={newTask}
          onChange={handleInputChange}
        />
        <button
          className="btn btn-primary px-3 rounded"
          onClick={() => AddNewTask()}
        >
          Add
        </button>
        <button
          className="btn btn-danger px-3 rounded ms-2"
          onClick={clearAllTasks}
        >
          Clear All
        </button>
      </div>

      <ul className="list-group w-50 mt-5">
        {tasks.map((task, index) => (
          <li
            // style={{ backgroundColor: index % 2 === 0 ? "#CAF4FF" : "#A0DEFF" }}
            key={index}
            className="list-group-item rounded mb-2 border d-flex justify-content-between align-items-center p-0"
          >
            <p className="m-2">{task}</p>
            <button
              className="btn btn-danger p-0 px-1 me-2"
              onClick={() => {
                DeleteTask(index);
              }}
            >
              <i className="bi bi-trash fs-5"></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InputAdd;
