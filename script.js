document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const mensaje = document.getElementById("mensaje");
    if (nombre.trim() !== "") {
      mensaje.textContent = ¡Hola, ${nombre}! Gracias por visitar nuestra página.;
    } else {
      mensaje.textContent = "Por favor, escribe tu nombre.";
    }
  });
  let contador = 0;
  document.getElementById("boton-contar").addEventListener("click", function () {
    contador++;
    document.getElementById("contador").textContent = contador;
  });