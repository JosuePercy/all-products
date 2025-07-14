<<<<<<< HEAD

=======
import React from "react";
>>>>>>> b4de75ab8530d7d2652e7b0544c816746b13fba9

const NavigationLinks = () => {
  return (
    <nav className="hidden md:flex gap-4">
      <a
        href="/categories"
        className="text-gray-700 hover:text-red-500 transition"
      >
        Categorias
      </a>
      <a href="/offers" className="text-gray-700 hover:text-red-500 transition">
        Ofertas
      </a>
      <a href="/help" className="text-gray-700 hover:text-red-500 transition">
        Ayuda
      </a>
    </nav>
  );
};

export default NavigationLinks;
