<<<<<<< HEAD
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
=======
import SearchBar from './searchBar';
import NavigationLinks from './navigationLinks';

export default function Navbar() {
    return (
        <header className="bg-white shadow-md sticky top-0 z-50 w-full">
            <div className="flex items-center justify-between max-w-screen-xl mx-auto p-4 w-full">
                {/* Logo */}
                <a href="">Mitienda</a>

                {/* Search Bar */}
                <SearchBar />

                {/* Navigation Links */}
                <NavigationLinks />
                <button className='flex items-center gap-2 text-gray-700 hover:text-red-500 transition'>
                    <span className='material-icons'>shopping_cart</span>
                    <span>Carrito</span>
                </button>
            </div>
        </header>
    )
>>>>>>> b4de75ab8530d7d2652e7b0544c816746b13fba9
}