

export async function fetchProducts(url: string) {
      try {
        const resp = await fetch(url);
        const data = await resp.json();
        console.log("All have Productos:", data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
}