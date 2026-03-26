// app/signup/page.js

"use client";
import { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [form, setForm] = useState({});

  const handleSubmit = async () => {
    await axios.post("/api/auth/signup", form);
    alert("Account created!");
  };

  return (
    <div>
      <h2>Signup</h2>

      <input placeholder="Name" onChange={(e)=>setForm({...form, name:e.target.value})}/>
      <input placeholder="Email" onChange={(e)=>setForm({...form, email:e.target.value})}/>
      <input placeholder="Password" type="password" onChange={(e)=>setForm({...form, password:e.target.value})}/>

      <select onChange={(e)=>setForm({...form, role:e.target.value})}>
        <option value="buyer">Buyer</option>
        <option value="agent">Agent</option>
      </select>

      <button onClick={handleSubmit}>Signup</button>
    </div>
  );
}
