import { Link, useParams } from "react-router-dom";
import { products } from "../mock/products";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="p-8 text-center text-gray-500">
        Producto no encontrado.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-8 flex flex-col md:flex-row gap-8">
      <div className="flex-1 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full max-w-md h-80 object-cover rounded-lg border"
        />
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">
            &larr; Volver
          </Link>
          <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
          <p className="text-gray-500 mb-2 text-lg">{product.category}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
        </div>
        <div>
          <span className="text-red-600 font-bold text-2xl mb-4 block">
            ${product.price}
          </span>
          <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded transition font-semibold w-full text-lg shadow">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}