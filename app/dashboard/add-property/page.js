// app/dashboard/add-property/page.js

"use client";
import { useState } from "react";
import axios from "axios";

export default function AddProperty() {
  const [form, setForm] = useState({});

  const submit = async () => {
    const token = localStorage.getItem("token");

    await axios.post("/api/property/create", form, {
      headers: { Authorization: `Bearer ${token}` },
    });

    alert("Property uploaded!");
  };

  return (
    <div>
      <h2>Add Property</h2>

      <input placeholder="Title" onChange={(e)=>setForm({...form, title:e.target.value})}/>
      <input placeholder="Price" onChange={(e)=>setForm({...form, price:e.target.value})}/>
      <input placeholder="Location" onChange={(e)=>setForm({...form, location:e.target.value})}/>

      <select onChange={(e)=>setForm({...form, type:e.target.value})}>
        <option>Rent</option>
        <option>Sale</option>
        <option>Land</option>
      </select>

      <textarea placeholder="Description" onChange={(e)=>setForm({...form, description:e.target.value})}/>

      <button onClick={submit}>Post Property</button>
    </div>
  );
}
