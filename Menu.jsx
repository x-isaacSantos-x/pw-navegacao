import './Menu.css'
import React from "react"
import { Link } from 'react-router-dom'

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                <a href="/Conteudo01/123">Conteúdo 01</a>
                </li>
                <li>
                <a href="/Conteudo02">Conteúdo 02</a> 
                </li>
                <li>
                <a href="/Conteudo03">Conteúdo 03</a>
                </li>
                <li>
                <a href="/Conteudo04">Conteúdo 04</a>
                </li>
            </ul>
        </nav>
    </aside>
) 

export default Menu