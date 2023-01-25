import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Episodios from "../pages/Episodios";
import Lugares from "../pages/Lugares";
import "./Navbar.css";

function Navbar() {
    return ( 
<BrowserRouter>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/" className="link">Home</Link>
                        </li>
                        <li>
                            <Link to="/episodios" className="link">Episodios</Link>
                        </li>
                        <li>
                            <Link to="/lugares" className="link">Lugares</Link>
                        </li>
                    </ul>
                </nav>
            </header>

            {/* Asignacion de rutas con los componentes*/}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/episodios' element={<Episodios />} />
                <Route path='/lugares' element={<Lugares />} />
            </Routes>
        </BrowserRouter>

     );
}

export default Navbar;