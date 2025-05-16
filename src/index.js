import { createCard } from "./app/cards.js";
import { seccionCarrito } from "./app/carrito.js";
import { filterInput } from "./utils/inputFilter.js";

createCard();

//LocalStorage
if (localStorage.getItem("carrito") == null)
  localStorage.setItem("carrito", "[]");

seccionCarrito();
filterInput();
