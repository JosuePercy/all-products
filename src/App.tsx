import "./App.css";
import Navbar from "./shared/navbar";
import SearchBar from "./shared/searchBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import ProductCard from "./components/ProductCard";
import { useProductsSearch } from "./hooks/useProductSearch";

function Home() {
  const { filteredProducts, loading, searchProducts} = useProductsSearch()

  return (
    <main className="p-4 max-w-screen-xl mx-auto">
      <section className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Bienvenido a MiTienda</h1>
        <p className="text-gray-500 mt-2">
          Explora nuestra colección de ropa y encuentra lo que necesitas.
        </p>
      </section>
      <section className="mb-8">
        <SearchBar onSearch={searchProducts} />
      </section>
       <section>
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Productos destacados</h2>
        {loading ? (
          <div className="flex justify-center items-center py-16">
            <svg className="animate-spin h-10 w-10 text-red-500 mr-3" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
            <span className="text-gray-500 text-lg">Buscando productos...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div className="col-span-full text-center text-gray-500 py-8">
                No se encontraron productos.
              </div>
            )}
          </div>
        )}
      </section>
    </main>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;