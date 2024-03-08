import { useState } from "react";
import "./App.css"; // Importación del archivo CSS

// Importación de los componentes
import UpdateGifs from "./components/UpdateGifs";
import ShowGifs from "./components/ShowGifs";
// Componente principal App
function App() {
  // Estado para almacenar la categoría seleccionada
  const [category, setCategory] = useState("");

  return (
    <div className="Container">
      {/* Título de la aplicación */}

      <h1 className="border">ReactGifApp</h1>

      {/* Componente para agregar una categoría */}
      <UpdateGifs setCategory={setCategory} />
      <span>{category}</span>
      {/* Componente para mostrar los GIFs */}
      <ShowGifs category={category} />
    </div>
  );
}

// Exportación del componente App
export default App;
