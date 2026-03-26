import PropertyCard from "@/components/PropertyCard";

async function getProperties() {
  const base =
    process.env.NEXT_PUBLIC_BASE_URL ||
    "http://localhost:3000";

  const res = await fetch(`${base}/api/property/all`, {
    cache: "no-store",
  });

  return res.json();
}

export default async function PropertiesPage() {
  const { data } = await getProperties();

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {data?.map((property) => (
        <PropertyCard key={property._id} property={property} />
      ))}
    </div>
  );
}
