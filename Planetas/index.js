const cowsay = require("cowsay");
const planetas = require("./planetas");

planetas.forEach(planeta => {
  console.log(
    cowsay.say({
      text: `Hola, soy ${planeta.nombre}!\n${planeta.descripcion}\nDescubierto en ${planeta.descubiertoEn}.`,
      f: "atom"
     // e: "oo",
      //T: "U "
    })
  );
  if(planeta.coordenadas.ascensionRecta && planeta.coordenadas.declinacion) {
    console.log(`Coordenadas: ${planeta.coordenadas.ascensionRecta}, ${planeta.coordenadas.declinacion}`);
  }else if(planeta.coordenadas.ascensionRecta && !planeta.coordenadas.declinacion) {
    console.log(`Coordenadas: ${planeta.coordenadas.ascensionRecta}`);
  }else if(planeta.coordenadas.declinacion && !planeta.coordenadas.ascensionRecta) {
    console.log(`Coordenadas: ${planeta.coordenadas.declinacion}`);
  }else{
    console.log("Coordenadas no disponibles.");
  }

  console.log(`Imagen: ${planeta.imagen}`);
  console.log('---');
});