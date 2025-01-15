"use client";

import { useState, useEffect } from "react";
import DOMPurify from "dompurify";

export default function TodoList() {
  const [todos, setTodos] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTodos = localStorage.getItem("todos");
      return savedTodos ? JSON.parse(savedTodos) : [];
    }
    return []; // Default untuk server-side rendering
  });

  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() === "") return;
    const sanitizedTodo = DOMPurify.sanitize(newTodo); // Sanitize input
    const updatedTodos = [...todos, { id: Date.now(), text: sanitizedTodo, done: false }];
    setTodos(updatedTodos);
    setNewTodo("");
    if (typeof window !== "undefined") {
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
    }
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updatedTodos);
    if (typeof window !== "undefined") {
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
    }
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    if (typeof window !== "undefined") {
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
    }
  };

  return (
    <div className="min-h-screen py-4 px-4 sm:px-6 bg-wave bg-cover bg-center grid grid-cols-1 gap-6">
      <div className="card bg-base-100 shadow-xl p-4 sm:p-6 mb-6">
        <h1 className="card-title text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-4 sm:mb-6">
          To-Do List
        </h1>
        <div className="form-control w-full mb-4">
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              className="input input-bordered w-full"
              placeholder="New task..."
            />
            <button onClick={addTodo} className="btn btn-primary w-full sm:w-auto">
              Add
            </button>
          </div>
        </div>
        <ul className="list-none">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`flex items-center justify-between p-2 rounded ${
                todo.done ? "bg-indigo-950" : "bg-indigo-800"
              } mb-2`}
            >
              <span
                onClick={() => toggleTodo(todo.id)}
                className={`flex-1 cursor-pointer ${
                  todo.done ? "line-through text-gray-500" : ""
                }`}
              >
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="text-red-600 hover:text-red-800 ml-3"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
