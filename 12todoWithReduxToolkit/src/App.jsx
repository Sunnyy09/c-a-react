// import "./App.css";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";

function App() {
  return (
    //sc-bg171c48 txt#fff purple: 828dff teal: 24feee
    <div className="bg-[#000430] min-h-screen py-8 flex justify-center w-full">
      <div className="w-2/5 flex py-5 flex-col items-center bg-transparent border-2 border-[#828dff] shadow shadow-white/50 rounded-2xl">
        <h1 className="text-3xl font-light text-[#fff]">Todo List</h1>
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
