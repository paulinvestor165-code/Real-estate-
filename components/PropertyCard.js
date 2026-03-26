export default function PropertyCard({ property }) {
  return (
    <div className="bg-white shadow rounded overflow-hidden">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h2 className="text-lg font-bold">{property.title}</h2>
        <p className="text-gray-500">{property.location}</p>
        <p className="text-green-600 font-semibold mt-2">
          ₦{property.price}
        </p>
      </div>
    </div>
  );
}
