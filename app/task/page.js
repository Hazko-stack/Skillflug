"use client";

import { useState, useEffect } from "react";
import DOMPurify from "dompurify";

export default function Progress() {
  const [startTime, setStartTime] = useState(() => {
    if (typeof window !== "undefined") {
      return parseInt(localStorage.getItem("startTime")) || Date.now();
    }
    return Date.now(); // Default untuk server-side rendering
  });

  const [elapsedTime, setElapsedTime] = useState(0);
  const [name, setName] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("name") || "";
    }
    return ""; // Default untuk server-side rendering
  });

  const [todos, setTodos] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTodos = localStorage.getItem("todos");
      return savedTodos ? JSON.parse(savedTodos) : [];
    }
    return []; // Default untuk server-side rendering
  });

  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const interval = setInterval(() => {
        setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [startTime]);

  const saveName = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("name", name);
      alert("Name updated successfully!");
    }
  };

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

  const calculateTimeUnits = (seconds) => {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return { days, hours, minutes, secs };
  };

  const { days, hours, minutes, secs } = calculateTimeUnits(elapsedTime);

  return (
    <div className="min-h-screen py-4 px-4 sm:px-6 bg-wave bg-cover bg-center grid grid-cols-1 gap-6">
      <div className="card bg-base-100 shadow-xl p-4 sm:p-6 mb-6">
        <h1 className="card-title text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-4 sm:mb-6">
          Progress Tracker
        </h1>
        <div className="flex flex-col items-center">
          <div className="grid grid-flow-col gap-4 sm:gap-5 text-center auto-cols-max mb-4 sm:mb-6">
            {["days", "hours", "min", "sec"].map((unit, index) => (
              <div
                key={index}
                className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content"
              >
                <span className="countdown font-mono text-4xl sm:text-5xl">
                  {[days, hours, minutes, secs][index]}
                </span>
                {unit}
              </div>
            ))}
          </div>
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text text-gray-700">Name:</span>
            </label>
            <div className="flex flex-col sm:flex-row items-stretch gap-2">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input input-bordered w-full sm:flex-1"
                placeholder="Enter your name"
              />
              <button onClick={saveName} className="btn btn-primary w-full sm:w-auto">
                Edit
              </button>
            </div>
          </div>
        </div>
        <h2 className="text-lg sm:text-xl font-semibold mt-4 sm:mt-6">Todo List</h2>
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
