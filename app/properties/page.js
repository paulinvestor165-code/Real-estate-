// app/properties/page.js

import axios from "axios";

export default async function Properties() {
  const res = await fetch("http://localhost:3000/api/property/all", {
    cache: "no-store",
  });

  const data = await res.json();

  return (
    <div>
      <h1>All Properties</h1>

      {data.map((p) => (
        <div key={p._id}>
          <h3>{p.title}</h3>
          <p>{p.location}</p>
          <p>₦{p.price}</p>
        </div>
      ))}
    </div>
  );
}
