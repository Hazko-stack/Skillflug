// pages/index.js
"use client";
import { useState, useEffect } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

export default function task() {
  const [todos, setTodos] = useState([]);

  // Load todos from localStorage when the component mounts
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  // Add todo to the list and update localStorage
  const addTodo = (todo) => {
    const updatedTodos = [...todos, todo];
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  // Delete a todo and update localStorage
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  return (
    <div
      className="p-5 min-h-screen flex flex-col"
      style={{
        backgroundImage: "url('/images/space.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex justify-between items-center mb-5 bg-white bg-opacity-80 p-3 rounded animate animate-fade-down">
        <h1 className="text-2xl md:text-3xl font-bold text-violet-600 animate-fade-right animate-delay-500">Todo List</h1>
      </div>
      <div className="bg-white bg-opacity-90 p-5 rounded shadow-lg flex flex-col space-y-5">
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
}
