import "./App.css";
import Navbar from "./shared/navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="p-4">
        <h1 className="text-2xl font-bold text-gray-800">Bienvenido a MiTienda</h1>
        <p className="text-gray-500 mt-2">
          Explora nuestra colección de ropa y encuentra lo que necesitas.
        </p>
      </main>
    </>
  );
}

export default App;