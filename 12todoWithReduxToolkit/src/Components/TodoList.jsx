import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeTodo,
  toggleComplete,
  updateTodo,
} from "../Features/Todo/todoSlice";

function TodoList() {
  const todos = useSelector((state) => state.todos);

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  const dispatch = useDispatch();

  const handleEdit = (id, currentText) => {
    setEditId(id);
    setEditText(currentText);
  };

  const handleEditTodo = (id) => {
    if (editText.trim()) {
      dispatch(updateTodo({ id, text: editText }));
      setEditId(null);
    }
  };

  const handleToggle = (id) => {
    dispatch(toggleComplete({ id }));
  };

  return (
    <>
      <ul className="list-none w-full px-5 space-y-3 my-5">
        {todos.map((todo) => (
          <li
            className={`"mt-4 flex space-x-3 items-center bg-[#171c48] px-4 py-2 shadow-sm shadow-white/50 rounded-md ${
              todo.completed ? "bg-red-300" : "bg-[#171c48]"
            }`}
            key={todo.id}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              className="cursor-pointer"
              onChange={() => handleToggle(todo.id)}
            />
            <div
              className={`text-[#fff] text-lg w-full ${
                todo.completed ? "text-black line-through" : "text-[#fff]"
              }`}
            >
              {editId === todo.id ? (
                <input
                  type="text"
                  className="text-[#fff] bg-transparent outline-none border border-[#828dff] px-2 py-1 rounded w-full"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onBlur={() => handleEditTodo(todo.id)}
                  autoFocus
                />
              ) : (
                <span onDoubleClick={() => handleEdit(todo.id, todo.text)}>
                  {todo.text}
                </span>
              )}
            </div>
            <button
              className="bg-red-500 border-0 py-1.5 px-2 focus:outline-none hover:bg-red-600 rounded"
              onClick={() => {
                if (todo.completed) return;
                handleEdit(todo.id, todo.text);
              }}
            >
              <svg
                fill="#fff"
                height="20px"
                width="23px"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 348.882 348.882"
                xml:space="preserve"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path d="M333.988,11.758l-0.42-0.383C325.538,4.04,315.129,0,304.258,0c-12.187,0-23.888,5.159-32.104,14.153L116.803,184.231 c-1.416,1.55-2.49,3.379-3.154,5.37l-18.267,54.762c-2.112,6.331-1.052,13.333,2.835,18.729c3.918,5.438,10.23,8.685,16.886,8.685 c0,0,0.001,0,0.001,0c2.879,0,5.693-0.592,8.362-1.76l52.89-23.138c1.923-0.841,3.648-2.076,5.063-3.626L336.771,73.176 C352.937,55.479,351.69,27.929,333.988,11.758z M130.381,234.247l10.719-32.134l0.904-0.99l20.316,18.556l-0.904,0.99 L130.381,234.247z M314.621,52.943L182.553,197.53l-20.316-18.556L294.305,34.386c2.583-2.828,6.118-4.386,9.954-4.386 c3.365,0,6.588,1.252,9.082,3.53l0.419,0.383C319.244,38.922,319.63,47.459,314.621,52.943z"></path>{" "}
                    <path d="M303.85,138.388c-8.284,0-15,6.716-15,15v127.347c0,21.034-17.113,38.147-38.147,38.147H68.904 c-21.035,0-38.147-17.113-38.147-38.147V100.413c0-21.034,17.113-38.147,38.147-38.147h131.587c8.284,0,15-6.716,15-15 s-6.716-15-15-15H68.904c-37.577,0-68.147,30.571-68.147,68.147v180.321c0,37.576,30.571,68.147,68.147,68.147h181.798 c37.576,0,68.147-30.571,68.147-68.147V153.388C318.85,145.104,312.134,138.388,303.85,138.388z"></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </button>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-2 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
