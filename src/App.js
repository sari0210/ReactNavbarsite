import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Episodios from "./pages/Episodios";
import Lugares from "./pages/Lugares";



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
          </Routes>

        </div>

      </div>
    </>
  )
}

export default App;
