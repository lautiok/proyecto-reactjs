import CartWidget from "../CartWidget/CartWidget";
import style from "./nav.css";

export default function NavBar() {
  return (
    <div className="nav-v1">
        <div className="nav-v2">
            <img className="logo" src="/img/wolf-logo.png" alt="logo-nav" />
            <h1> Wolf</h1>
        </div>
        <div className="barranav">
            <button className="btn">Inicio</button>
            <button className="btn">Productos</button>
            <button className="btn">Contactos</button>
        </div>
        <div className="c-product">
            <CartWidget />
            <p>2</p>
        </div>
    </div>
  )
}
