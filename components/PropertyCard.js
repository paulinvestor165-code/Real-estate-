// components/PropertyCard.js

export default function PropertyCard({ property }) {
  return (
    <div className="border rounded-xl p-4 shadow-md">

      <h2 className="text-xl font-semibold">{property.title}</h2>

      <p className="text-gray-500">{property.location}</p>

      <p className="text-lg font-bold mt-2">
        ₦{property.price}
      </p>

      <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded">
        View Details
      </button>

    </div>
  );
}
