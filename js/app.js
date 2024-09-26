const botonColor = document.getElementById("botonColor");
console.log(botonColor);
const color = document.getElementById("color");
console.log(color);

// Funcion color aletatorio
function colorHex() {
  let listaHex = "0123456789ABCDEF";
  let colorHex = "#";
  for (let i = 0; i < 6; i++) {
    colorHex += listaHex[Math.floor(Math.random() * listaHex.length)];
  }
  return colorHex;
}
console.log(colorHex());

//Event Listener
botonColor.addEventListener("click", () => {
  let colorAleatorio = colorHex();
  console.log(colorAleatorio);
  console.log(document);
  document.body.style.backgroundColor = colorAleatorio;
  color.textContent = colorAleatorio;
});
color.addEventListener("");
