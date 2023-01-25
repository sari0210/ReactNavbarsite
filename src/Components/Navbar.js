import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { HiOutlineHome} from 'react-icons/hi';
import { FaAsterisk} from 'react-icons/fa';
import { GrLocation} from 'react-icons/gr';
import { AiOutlineUser} from 'react-icons/ai';
import { HiOutlineInformationCircle} from 'react-icons/hi';

function Navbar() {
    return (
        <>
            <header>  
                <nav className="menu-bar" >
                    <ul>
                        <li>
                            <Link to="/" className="link"><HiOutlineHome /> Home   </Link>
                        </li>
                        <li>
                            <Link to="/episodios" className="link"> <FaAsterisk /> Episodios</Link>
                        </li>
                        <li>
                            <Link to="/lugares" className="link"> <GrLocation /> Lugares</Link>
                        </li>
                        
                    </ul>

                    <ul>
                    <li>
                        <Link to="/miCuenta" className="link-inferior"><AiOutlineUser />Mi Cuenta</Link>
                        </li>
                        <li>
                        <Link to="/desarrolladoras" className="link-inferior"><HiOutlineInformationCircle />Desarrolladoras</Link> 
                        </li>
                    </ul>
                </nav>
            </header>
        </>

    );
}

export default Navbar;