import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


function Navbar() {
    return (
        <>
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
        </>

    );
}

export default Navbar;