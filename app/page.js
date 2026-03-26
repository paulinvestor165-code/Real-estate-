"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (!search) return;
    router.push(`/properties?location=${search}`);
  };

  return (
    <main className="bg-gray-50 min-h-screen">

      {/* 🔝 NAVBAR */}
      <nav className="flex justify-between items-center p-5 bg-white shadow">
        <h1 className="text-2xl font-bold">Paul Chuk Enterprise</h1>

        <div className="space-x-4">
          <a href="/" className="hover:text-blue-600">Home</a>
          <a href="/properties" className="hover:text-blue-600">Properties</a>
          <a href="/login" className="hover:text-blue-600">Login</a>
          <a href="/signup" className="bg-black text-white px-4 py-2 rounded">
            Signup
          </a>
        </div>
      </nav>

      {/* 🏠 HERO SECTION */}
      <section className="text-center py-20 bg-gradient-to-r from-black to-gray-800 text-white">
        <h2 className="text-5xl font-bold">
          Find Your Dream Property
        </h2>

        <p className="mt-4 text-lg text-gray-300">
          Buy, Rent, or Sell properties across Nigeria
        </p>

        {/* 🔍 SEARCH */}
        <div className="mt-8 flex justify-center">
          <input
            className="p-3 w-80 text-black rounded-l"
            placeholder="Search by location (e.g Lagos)"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 px-6 rounded-r"
          >
            Search
          </button>
        </div>
      </section>

      {/* ⭐ FEATURES */}
      <section className="p-10 grid md:grid-cols-3 gap-6 text-center">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-bold">Buy Property</h3>
          <p className="text-gray-500 mt-2">
            Find houses, lands, and apartments for sale
          </p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-bold">Rent Property</h3>
          <p className="text-gray-500 mt-2">
            Discover rental homes that suit your lifestyle
          </p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-bold">List Property</h3>
          <p className="text-gray-500 mt-2">
            Agents and owners can list properties easily
          </p>
        </div>
      </section>

      {/* 🏘️ FEATURED PROPERTIES (STATIC FOR NOW) */}
      <section className="p-10">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Properties
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white rounded shadow p-4">
            <img
              src="https://via.placeholder.com/300"
              className="rounded"
            />
            <h3 className="text-lg font-bold mt-2">
              3 Bedroom Apartment
            </h3>
            <p className="text-gray-500">Lagos</p>
            <p className="font-bold mt-1">₦15,000,000</p>
          </div>

          <div className="bg-white rounded shadow p-4">
            <img
              src="https://via.placeholder.com/300"
              className="rounded"
            />
            <h3 className="text-lg font-bold mt-2">
              Luxury Duplex
            </h3>
            <p className="text-gray-500">Abuja</p>
            <p className="font-bold mt-1">₦45,000,000</p>
          </div>

          <div className="bg-white rounded shadow p-4">
            <img
              src="https://via.placeholder.com/300"
              className="rounded"
            />
            <h3 className="text-lg font-bold mt-2">
              Land for Sale
            </h3>
            <p className="text-gray-500">Port Harcourt</p>
            <p className="font-bold mt-1">₦5,000,000</p>
          </div>

        </div>
      </section>

      {/* 📞 CTA SECTION */}
      <section className="bg-blue-600 text-white text-center py-16">
        <h2 className="text-3xl font-bold">
          Want to list your property?
        </h2>

        <p className="mt-3">
          Join Paul Chuk Enterprise and reach thousands of buyers
        </p>

        <a
          href="/signup"
          className="inline-block mt-6 bg-white text-blue-600 px-6 py-3 rounded font-semibold"
        >
          Get Started
        </a>
      </section>

      {/* 🔻 FOOTER */}
      <footer className="bg-black text-white text-center p-6 mt-10">
        <p>© {new Date().getFullYear()} Paul Chuk Enterprise</p>
        <p className="text-gray-400 text-sm mt-2">
          All rights reserved
        </p>
      </footer>

    </main>
  );
}
