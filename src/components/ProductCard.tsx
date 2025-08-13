import { Link } from "react-router-dom";
import type { Product } from "../interfaces/products";

interface ProductCardprops {
  product: Product;
}

export default function ProductCard({ product }: ProductCardprops) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="bg-white rounded-lg shadow hover:shadow-lg transition flex flex-col hover:ring-2 hover:ring-red-200"
    >
      <img
        src={product.image}
        alt={product.description}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-bold text-lg text-gray-800 mb-1">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-2">{product.category}</p>
        <p className="text-gray-600 text-sm flex-1">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-red-600 font-bold text-lg">
            ${product.price}
          </span>
          <span className="bg-red-500 text-white px-4 py-2 rounded text-sm font-semibold">
            Ver más
          </span>
        </div>
      </div>
    </Link>
  );
}
