// app/page.js

export default function Home() {
  return (
    <main className="p-6">

      <h1 className="text-4xl font-bold text-center">
        Paul Chuk Enterprise
      </h1>

      <p className="text-center text-gray-500 mt-2">
        Find your dream property anywhere in Nigeria
      </p>

      <div className="mt-6 flex justify-center">
        <input
          className="border p-2 w-80 rounded-l"
          placeholder="Search by location..."
        />
        <button className="bg-black text-white px-4 rounded-r">
          Search
        </button>
      </div>

    </main>
  );
}
