export function sumQttyProd(prod) {
  let datals = localStorage.getItem("carrito");
  datals = JSON.parse(datals);
  //verifica si el producto existe

  let indexLs = datals.findIndex((p) => p.id == prod.id);

  if (indexLs === -1) {
    prod.quantity = 1;
    datals.push(prod);
  } else {
    datals[indexLs].quantity++;
  }

  // Guardo array en localstorage
  localStorage.setItem("carrito", JSON.stringify(datals));
  if (indexLs !== -1) return datals[indexLs].quantity;
}

export function restQttyProd(prod) {
  // leyendo del localstorage, parsea y agrega el prod al array
  let datals = localStorage.getItem("carrito");
  datals = JSON.parse(datals);
  //verifica si el producto existe

  let indexLs = datals.findIndex((p) => p.id == prod.id);

  datals[indexLs].quantity--;

  // Guardo array en localstorage
  localStorage.setItem("carrito", JSON.stringify(datals));

  return datals[indexLs].quantity--;
}

export function deleteProd(prod) {
  let datals = localStorage.getItem("carrito");
  datals = JSON.parse(datals);
  //verificar si el producto ya existe en el carrito
  let indexLs = datals.findIndex((p) => p.id === prod.id);

  datals.splice(indexLs, 1);

  // guardando el array en el localstorage
  localStorage.setItem("carrito", JSON.stringify(datals));
}
