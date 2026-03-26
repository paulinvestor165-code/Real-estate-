// app/properties/page.js

import PropertyCard from "@/components/PropertyCard";

export default async function Properties() {
  const res = await fetch("http://localhost:3000/api/property/all", {
    cache: "no-store",
  });

  const data = await res.json();

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      {data.map((p) => (
        <PropertyCard key={p._id} property={p} />
      ))}
    </div>
  );
}
