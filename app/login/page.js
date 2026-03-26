// app/login/page.js

"use client";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [form, setForm] = useState({});

  const handleLogin = async () => {
    const res = await axios.post("/api/auth/login", form);
    localStorage.setItem("token", res.data.token);
    alert("Logged in!");
  };

  return (
    <div>
      <h2>Login</h2>

      <input placeholder="Email" onChange={(e)=>setForm({...form, email:e.target.value})}/>
      <input placeholder="Password" type="password" onChange={(e)=>setForm({...form, password:e.target.value})}/>

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
