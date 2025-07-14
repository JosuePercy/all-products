import { useState } from "react";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log("Buscando:", searchQuery);
  };

  return (
   <div className="flex items-center border border-gray-300 rounded-lg bg-white shadow-sm overflow-hidden w-full">
      <input
        type="text"
        placeholder="Buscar productos..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="px-4 py-2 w-full text-gray-700 placeholder-gray-400 outline-none bg-transparent"
      />
      <button
        onClick={handleSearch}
        className="bg-red-500 text-white px-5 py-2 font-semibold hover:bg-red-600 transition rounded-r-lg"
      >
        Buscar
      </button>
    </div>
  );
}

