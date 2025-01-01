"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Cek jika username sudah ada
    const res = await fetch("http://localhost:3001/users");
    const users = await res.json();

    const existingUser = users.find((u) => u.username === username);
    if (existingUser) {
      alert("Username already exists!");
      return;
    }

    // Tambahkan user baru ke JSON Server
    const newUser = { username, password };
    await fetch("http://localhost:3001/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });

    // Redirect ke halaman login setelah berhasil registrasi
    alert("Registration successful! Please log in.");
    router.push("/login");
  };

  return (
    <div
      className="p-5 min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/space.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white bg-opacity-80 p-5 rounded shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-violet-600 text-center mb-5">Register</h1>
        <form onSubmit={handleRegister} className="flex flex-col space-y-3 max-w-sm mx-auto">
          <input
            type="text"
            placeholder="Username"
            className="input input-bordered"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
