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
      S: { Blanco: 15, Negro: 12, Azul: 24, Rojo: 33, Verde: 4, Gris: 6 },
      M: { Blanco: 18, Negro: 1, Azul: 5, Rojo: 2, Verde: 2, Gris: 3 },
      L: { Blanco: 44, Negro: 56, Azul: 14, Rojo: 10, Verde: 27, Gris: 2 },
      XL: { Blanco: 13, Negro: 50, Azul: 35, Rojo: 1, Verde: 5, Gris: 4 },
      XXL: { Blanco: 72, Negro: 64, Azul: 60, Rojo: 0, Verde: 13, Gris: 0 },
    },
  
    camisa: {
      S: { Blanco: 13, Negro: 2, Azul: 2, Rojo: 21, Verde: 42, Gris: 5 },
      M: { Blanco: 5, Negro: 43, Azul: 54, Rojo: 52, Verde: 2, Gris: 11 },
      L: { Blanco: 22, Negro: 13, Azul: 42, Rojo: 0, Verde: 10, Gris: 13 },
      XL: { Blanco: 14, Negro: 4, Azul: 31, Rojo: 21, Verde: 23, Gris: 2 },
      XXL: { Blanco: 10, Negro: 2, Azul: 0, Rojo: 31, Verde: 11, Gris: 0 },
    },
  
    pantalon: {
      S: { Blanco: 20, Negro: 32, Azul: 1, Rojo: 0, Verde: 9, Gris: 4 },
      M: { Blanco: 30, Negro: 12, Azul: 7, Rojo: 0, Verde: 10, Gris: 4 },
      L: { Blanco: 10, Negro: 25, Azul: 8, Rojo: 0, Verde: 8, Gris: 4 },
      XL: { Blanco: 24, Negro: 1, Azul: 5, Rojo: 0, Verde: 6, Gris: 4 },
      XXL: { Blanco: 12, Negro: 3, Azul: 0, Rojo: 0, Verde: 5, Gris: 2 },
    }
  };

productoSelect.addEventListener("change", function () {
  const selected = productoSelect.value;

  if (selected === "camiseta") {
    productoTitulo.textContent = "Camiseta Mujer";
    productoImagen.src = "./assets/img/camiseta_mujer.jpg";
  } else if (selected === "camisa") {
    productoTitulo.textContent = "Camisa Mujer";
    productoImagen.src = "./assets/img/camisa_mujer.jpg";
  } else if (selected === "pantalon") {
    productoTitulo.textContent = "Pantalón Mujer";
    productoImagen.src = "./assets/img/pantalon_mujer.jpg";
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