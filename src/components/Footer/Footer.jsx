import React from 'react'
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import "./footer.css";

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h2>Enlaces rápidos</h2>
                    <Link to={"/"}>
                        <p>Inicio</p>
                    </Link>
                    <Link to={"/category/masculino"}>
                        <p>Hombre</p>
                    </Link>
                    <Link to={"/category/femenino"}>
                        <p>Mujer</p>
                    </Link>
                </div>
                <div className="footer-section">
                    <h2>Contacto</h2>
                    <p>Correo: info@wolf.com</p>
                    <p>Teléfono: +123456789</p>
                </div>
                <div className="footer-section">
                    <h2>Redes Sociales</h2>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <FaFacebook />
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2023 Wolf Clothing. Todos los derechos reservados.</p>
            </div>
        </div>
    )
}
