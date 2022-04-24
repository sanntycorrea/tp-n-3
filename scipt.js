document.body.onload = addElement;

function addElement () {

  var newDiv = document.createElement("div");
  var newContenido = document.createTextNode("Hola!¿Qué tal?");
  newDiv.appendChild(newContenido);

  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}