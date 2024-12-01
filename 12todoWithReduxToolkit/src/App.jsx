// import "./App.css";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <div className="bg-[#000430] min-h-screen py-8 flex justify-center w-full">
      <div className="w-3/4 flex py-4 flex-col items-center bg-transparent border-2 border-[#828dff] shadow shadow-white/50 rounded-2xl">
        <h1 className="text-3xl font-light text-[#fff]">Todo List</h1>
        <div className="w-3/4">
          <AddTodo />
          <hr className="h-px w-full border-0 mt-5 bg-[#828dff]" />
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;

//s-bg171c48 purple: 828dff teal: 24feee
