import { Link } from "react-router-dom"

import "./menu.css"

export function Menu(){
    return(
        <nav className="menu">
            <ul>
                <li>
                    <Link to="/cadastro">Cadastro</Link>
                </li>
                <li>
                    <Link to="/registro">Registro</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
    )
}