import { useCallback, useState } from "react";
import { products as allProducts } from "../mock/products";
import type { Product } from "../interfaces/products";

export function useProductsSearch() {
    const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts);
    const [loading, setLoading] = useState(false);

    const searchProducts = useCallback((query: string) => {
    setLoading(true);
    setTimeout(() => {
      if (!query) {
        setFilteredProducts(allProducts);
      } else {
        const q = query.toLowerCase()
        setFilteredProducts(
          allProducts.filter(
            (product) =>
              product.name.toLowerCase().includes(q) ||
              product.category.toLowerCase().includes(q)
          )
        );
      }
      setLoading(false);
    }, 600); 
  },[]);

  return {
    filteredProducts, 
    loading, 
    searchProducts
  }

}