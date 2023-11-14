import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import style from "./navbar-module.css";

export default function NavBar() {
  return (
    <div className="nav-v1">
        <div className="nav-v2">
            <img className="logo" src="/img/wolf-logo.png" alt="logo-nav" />
            <h1> Wolf</h1>
        </div>
        <div className="barranav">
            <Link to={"/"}>
              <button className="btn">Inicio</button>
            </Link>
            <Link to={"/category/masculino"}>
              <button className="btn">Hombre</button>
            </Link>
            <Link to={"/category/femenino"}>
              <button className="btn">Mujer</button>
            </Link>
        </div>
        <div className="c-product">
            <CartWidget />
            <p>2</p>
        </div>
    </div>
  )
}
