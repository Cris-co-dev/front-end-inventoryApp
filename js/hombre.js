const productoSelect = document.getElementById("producto");
const productoTitulo = document.getElementById("productoTitulo");
const productoImagen = document.getElementById("productoImagen");
const verificarBtn = document.getElementById("verificarBtn");
const tallaSelect = document.getElementById("talla");
const colorSelect = document.getElementById("color");
const cantidadSpan = document.getElementById("cantidad");
const inventarioInfo = document.getElementById("inventarioInfo");
const infoMaterial = document.getElementById("infoMaterial");

const materiales = {
  camiseta: "Algodon 100% / Poliester / Mezcla algodón y poliester."  ,
  camisa: "Algodon 100% / Poliester / Mezcla algodón y poliester / Seda.",
  pantalon: "Algodon 100% / Drill / Tela / Jean.",
};

const inventarios = {
  
  camiseta: {
    S: { Blanco: 5, Negro: 2, Azul: 4, Rojo: 3, Verde: 0, Gris: 6 },
    M: { Blanco: 8, Negro: 1, Azul: 5, Rojo: 2, Verde: 2, Gris: 3 },
    L: { Blanco: 4, Negro: 5, Azul: 1, Rojo: 0, Verde: 7, Gris: 2 },
    XL: { Blanco: 3, Negro: 0, Azul: 3, Rojo: 1, Verde: 5, Gris: 4 },
    XXL: { Blanco: 2, Negro: 4, Azul: 0, Rojo: 2, Verde: 1, Gris: 0 }
  },
  camisa: {
    S: { Blanco: 2, Negro: 3, Azul: 5, Rojo: 1, Verde: 4, Gris: 2 },
    M: { Blanco: 6, Negro: 2, Azul: 7, Rojo: 3, Verde: 1, Gris: 5 },
    L: { Blanco: 1, Negro: 6, Azul: 2, Rojo: 4, Verde: 3, Gris: 1 },
    XL: { Blanco: 4, Negro: 1, Azul: 5, Rojo: 2, Verde: 6, Gris: 0 },
    XXL: { Blanco: 3, Negro: 2, Azul: 4, Rojo: 1, Verde: 5, Gris: 2 }
  },
  pantalon: {
    S: { Blanco: 1, Negro: 2, Azul: 3, Rojo: 2, Verde: 0, Gris: 1 },
    M: { Blanco: 2, Negro: 1, Azul: 4, Rojo: 1, Verde: 3, Gris: 2 },
    L: { Blanco: 0, Negro: 3, Azul: 2, Rojo: 4, Verde: 1, Gris: 3 },
    XL: { Blanco: 1, Negro: 2, Azul: 1, Rojo: 3, Verde: 4, Gris: 2 },
    XXL: { Blanco: 2, Negro: 1, Azul: 0, Rojo: 2, Verde: 3, Gris: 1 }
  }
};

productoSelect.addEventListener("change", function () {
  const selected = productoSelect.value;

  if (selected === "camiseta") {
    productoTitulo.textContent = "Camiseta Hombre";
    productoImagen.src = "./assets/img/camiseta_hombre.jpg";
  } else if (selected === "camisa") {
    productoTitulo.textContent = "Camisa Hombre";
    productoImagen.src = "./assets/img/camisa_hombre.jpg";
  } else if (selected === "pantalon") {
    productoTitulo.textContent = "Pantalón Hombre";
    productoImagen.src = "./assets/img/pantalon_hombre.jpg";
  }

  infoMaterial.innerHTML = `<p><strong>Material:</strong> ${materiales[selected]}</p>`;
});

verificarBtn.addEventListener("click", function () {
  const producto = productoSelect.value;
  const talla = tallaSelect.value;
  const color = colorSelect.value;

  const inventario = inventarios[producto];
  const cantidad = inventario?.[talla]?.[color] ?? "Sin datos";

  cantidadSpan.textContent = cantidad;
  inventarioInfo.classList.remove("d-none");
});
