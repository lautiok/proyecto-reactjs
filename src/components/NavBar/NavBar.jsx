import CartWidget from "../CartWidget/CartWidget";
import WolfWidget from "../IcoWidget/WolfWidget";
import "./nav.css";

export default function NavBar() {
  return (
    <div className="nav-v1">
        <div className="nav-v2">
            <WolfWidget />
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
