import React from "react";
import CartWidget from "./CartWidget";
const Menu = () => {
    return (
  <div className="App-nav">
    <img src="../logo.png" alt="" className="App-logo"/>
    <div>
      <ul>
      <li><a href="#">Inicio</a></li>
      <li><a href="#">Nosotros</a></li>
      <li><a href="#">Productos</a></li>
      <li><a href="#">Contacto</a></li>     
  </ul>
  </div>
  <CartWidget items={4} />
</div>
    );
}
export default Menu