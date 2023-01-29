import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Episodios from "./pages/Episodios";
import Lugares from "./pages/Lugares";
import MiCuenta from "./pages/Mi cuenta";
import Desarrolladoras from "./pages/Desarrolladoras";



function App() {
  return (
    <>
      <div>
        <Navbar />

        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/episodios" element={<Episodios />} />
            <Route path="lugares" element={<Lugares />} />
            <Route path="miCuenta" element={< MiCuenta />} />
            <Route path="desarrolladoras" element={<Desarrolladoras />} />
          </Routes>

        </div>

      </div>
    </>
  )
}

export default App;
