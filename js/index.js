const botonFlecha = document.querySelectorAll(".card__fecha");
const verCantidadPersonas = document.getElementById("countPersonas");

botonFlecha.forEach((button) => {
  button.addEventListener("click", function () {
    botonFlecha.forEach(function (btn) {
      btn.classList.remove("activo");
      verCantidadPersonas.style.display = "none";
    });

    if (button.value) {
      verCantidadPersonas.style.display = "block";
      button.classList.add("activo");
    } else {
      button.classList.remove("activo");
      verCantidadPersonas.style.display = "none";
    }
  });
});
