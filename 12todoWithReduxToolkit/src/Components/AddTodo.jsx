import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, clearTodos } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form
      // onSubmit={addTodoHandler}
      className="w-full px-5 flex justify-center space-x-3 mt-10"
    >
      <input
        type="text"
        className="w-1/2 bg-[#171c48] rounded border border-[#828dff] focus:border-[#828dff] focus:ring-2 focus:ring-[#828dff] text-base outline-none text-[#fff] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Write your task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-[#fff] font-semibold bg-[#828dff] border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        onClick={addTodoHandler}
      >
        Add Todo
      </button>
      <button
        type="submit"
        className="text-[#fff] font-semibold bg-[#828dff] border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        onClick={() => dispatch(clearTodos())}
      >
        Clear All
      </button>
    </form>
  );
}

export default AddTodo;
