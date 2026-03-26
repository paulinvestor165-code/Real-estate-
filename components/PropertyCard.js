// components/PropertyCard.js

"use client";

import { useState } from "react";
import { FaHeart, FaMapMarkerAlt } from "react-icons/fa";

export default function PropertyCard({ property }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">

      {/* IMAGE */}
      <div className="relative">
        <img
          src={property.images?.[0] || "/placeholder.jpg"}
          alt="property"
          className="w-full h-56 object-cover"
        />

        {/* FEATURED BADGE */}
        {property.featured && (
          <span className="absolute top-2 left-2 bg-yellow-500 text-white text-xs px-3 py-1 rounded-full">
            Featured
          </span>
        )}

        {/* LIKE BUTTON */}
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-2 right-2 bg-white p-2 rounded-full shadow"
        >
          <FaHeart color={liked ? "red" : "gray"} />
        </button>
      </div>

      {/* CONTENT */}
      <div className="p-4">

        {/* TITLE */}
        <h2 className="text-lg font-semibold line-clamp-1">
          {property.title}
        </h2>

        {/* LOCATION */}
        <div className="flex items-center text-gray-500 text-sm mt-1">
          <FaMapMarkerAlt className="mr-1" />
          {property.location}
        </div>

        {/* PRICE */}
        <p className="text-2xl font-bold text-blue-600 mt-2">
          ₦{property.price?.toLocaleString()}
        </p>

        {/* TYPE */}
        <p className="text-sm text-gray-400 capitalize">
          {property.type}
        </p>

        {/* DESCRIPTION */}
        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
          {property.description}
        </p>

        {/* BUTTONS */}
        <div className="mt-4 flex gap-2">

          {/* VIEW DETAILS */}
          <button className="flex-1 bg-black text-white py-2 rounded-lg hover:bg-gray-800">
            View Details
          </button>

          {/* WHATSAPP */}
          <a
            href={`https://wa.me/2347089724573`}
            target="_blank"
            className="flex-1 bg-green-500 text-white py-2 rounded-lg text-center hover:bg-green-600"
          >
            WhatsApp
          </a>

        </div>
      </div>
    </div>
  );
}
