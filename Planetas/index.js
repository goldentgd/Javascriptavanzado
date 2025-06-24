const planetas = require("./planetas");

planetas.forEach(planeta => {
  console.log(`¡Planeta ${planeta.nombre} descubierto!`);
  console.log(`Descripción: ${planeta.descripcion}`);
  console.log(`Descubierto en: ${planeta.descubiertoEn}`);
  console.log(`Sus coordenadas son: ${planeta.coordenadas.ascensionRecta}, ${planeta.coordenadas.declinacion}`);
    console.log(`Imagen: ${planeta.imagen}`);
  console.log('---');
});