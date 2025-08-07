import React, { use, useEffect, useState } from "react";
import "./Todo.css";
import { v4 as uuidv4 } from "uuid";

const Todo = () => {
  const [arr, setArr] = useState([
    { task: "sample-task", id: uuidv4(), checked: false },
  ]);
  const [task, setTask] = useState("");

  const addNewTask = () => {
    setArr((prev) => [
      ...prev,
      { task: task.trim(), id: uuidv4(), checked: false },
    ]);
    setTask("");
  };

  const handleDelete = (id) => {
    setArr((prev) => prev.filter((todo) => todo.id != id));
  };

  const handleCheck = (id) => {
    setArr((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
          placeholder="add a task"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addNewTask();
            }
          }}
        />
        <button disabled={task.length == 0} onClick={addNewTask}>
          Add
        </button>
        <br />
        <br />
        <hr />
      </div>
      <div>
        <h4>Tasks Todo</h4>
        <ul>
          {arr.map((todo) => (
            <li className="taskList" key={todo.id}>
              <label>
                <input
                  style={{
                    textDecoration: todo.checked ? "line-through" : "",
                  }}
                  className="checkbox"
                  type="checkbox"
                  onClick={() => {
                    handleCheck(todo.id);
                  }}
                />
                <span
                  style={{
                    textDecoration: todo.checked ? "line-through" : "",
                  }}
                >
                  {todo.task}
                </span>
              </label>

              <i
                className="fa-solid fa-trash"
                onClick={() => {
                  handleDelete(todo.id);
                }}
              ></i>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todo;
