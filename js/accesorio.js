const productoSelect = document.getElementById("producto");
const tipoSelect = document.getElementById("tipo");
const productoTitulo = document.getElementById("productoTitulo");
const productoImagen = document.getElementById("productoImagen");
const infoMaterial = document.getElementById("infoMaterial");

const materiales = {
  gafas: "Plástico 100%.",
  maleta: "Poliester / Cuero Sintético / Nylon / Cuero Natural.",
  cinturones: "Tela / Cuero Sintético / Cuero Natural."
};

const inventario = {
  gafas: {
    Hombre: 5,
    Mujer: 8
  },
  maleta: {
    Hombre: 3,
    Mujer: 6
  },
  cinturones: {
    Hombre: 7,
    Mujer: 4
  }
};

productoSelect.addEventListener("change", function () {
  const selected = productoSelect.value;

  if (selected === "gafas") {
    productoTitulo.textContent = "Gafas";
    productoImagen.src = "./assets/img/gafas.jpg";
  } else if (selected === "maleta") {
    productoTitulo.textContent = "Maleta";
    productoImagen.src = "./assets/img/maleta.jpg";
  } else if (selected === "cinturones") {
    productoTitulo.textContent = "Cinturones";
    productoImagen.src = "./assets/img/cinturon.jpg";
  }

   infoMaterial.innerHTML = `<p><strong>Material:</strong> ${materiales[selected]}</p>`;

  document.getElementById("inventarioInfo").classList.add("d-none");
});

document.getElementById("verificarBtn").addEventListener("click", function () {
  const producto = productoSelect.value;
  const tipo = tipoSelect.value;

  const cantidad = inventario[producto]?.[tipo] ?? "Sin datos";

  document.getElementById("cantidad").textContent = cantidad;
  document.getElementById("inventarioInfo").classList.remove("d-none");
});
