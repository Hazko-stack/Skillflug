"use client";

import { useState, useEffect } from "react";

export default function Progress() {
  const [startTime, setStartTime] = useState(() => {
    return parseInt(localStorage.getItem("startTime")) || Date.now();
  });
  const [elapsedTime, setElapsedTime] = useState(0);
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  const [newNote, setNewNote] = useState("");

  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime]);

  const saveName = () => {
    localStorage.setItem("name", name);
    alert("Name updated successfully!");
  };

  const addNote = () => {
    if (newNote.trim() === "") return;
    const updatedNotes = [...notes, { id: Date.now(), text: newNote }];
    setNotes(updatedNotes);
    setNewNote("");
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  const addTodo = () => {
    if (newTodo.trim() === "") return;
    const updatedTodos = [...todos, { id: Date.now(), text: newTodo, done: false }];
    setTodos(updatedTodos);
    setNewTodo("");
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
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
    <div className="min-h-screen py-4 px-4 sm:px-6 bg-wave bg-cover bg-center grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Left Section (Progress & Todo List) */}
      <div className="card bg-base-100 shadow-xl p-6 mb-6 lg:mb-0">
        <h1 className="card-title text-2xl sm:text-3xl font-bold text-primary mb-6">Progress Tracker</h1>
        <div className="flex flex-col items-center">
          <div className="grid grid-flow-col gap-5 text-center auto-cols-max mb-6">
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-5xl">{days}</span>
              days
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-5xl">{hours}</span>
              hours
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-5xl">{minutes}</span>
              min
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-5xl">{secs}</span>
              sec
            </div>
          </div>
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text text-gray-700">Name:</span>
            </label>
            <div className="flex items-center">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input input-bordered flex-1"
                placeholder="Enter your name"
              />
              <button
                onClick={saveName}
                className="btn btn-primary ml-2"
              >
                Edit
              </button>
            </div>
          </div>
        </div>

        {/* Todo List */}
        <h2 className="text-xl font-semibold mt-6">Todo List</h2>
        <div className="form-control w-full mb-4">
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              className="input input-bordered flex-1"
              placeholder="New task..."
            />
            <button onClick={addTodo} className="btn btn-primary">
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

      {/* Right Section (Notes) */}
      <div className="card bg-base-100 shadow-xl p-6 h-full">
        <h1 className="card-title text-2xl sm:text-3xl font-bold text-primary mb-6">Notes</h1>
        <div className="form-control w-full mb-4">
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              className="input input-bordered flex-1"
              placeholder="Write a new note..."
            />
            <button onClick={addNote} className="btn btn-primary">
              Add
            </button>
          </div>
        </div>
        <div className="carousel carousel-vertical rounded-box h-full sm:h-96 overflow-y-auto">
          {notes.map((note) => (
            <div
              key={note.id}
              className="carousel-item h-full flex justify-between items-start bg-gray-100 border rounded p-3 mb-2"
            >
              <p className="flex-1 text-gray-800 break-words">{note.text}</p>
              <button
                onClick={() => deleteNote(note.id)}
                className="text-red-600 hover:text-red-800 ml-3"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
