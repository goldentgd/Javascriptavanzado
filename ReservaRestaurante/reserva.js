
let mesasDisponibles = 5;

// Función que simula la verificación de disponibilidad de mesas
function verificarDisponibilidad(mesasSolicitadas) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mesasSolicitadas <= mesasDisponibles) {
                resolve(`Hay suficientes mesas disponibles`);
            } else {
                reject(`Lo siento, no tenemos mesas disponibles para ti.`);
            }
    }, 2000); 
  });
}

// Función que simula el envío de un correo de confirmación
function enviarConfirmacionReserva(nombreCliente) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = Math.random() > 0.2;
      if (exito) {
        resolve(`Correo de confirmación enviado a ${nombreCliente}`);
      } else {
        reject(`Error al enviar el correo de confirmación a ${nombreCliente}`);
      }
    }, 1500);
  });
}

// Función principal para manejar una reserva
async function hacerReserva(nombreCliente, mesasSolicitadas) {
  try {
    console.log("Verificando disponibilidad de mesas...");
    const disponibilidad = await verificarDisponibilidad(mesasSolicitadas); 
    console.log(disponibilidad);
    mesasDisponibles -= mesasSolicitadas;
    console.log("Enviando confirmación de reserva..."); 
    const confirmacion = await enviarConfirmacionReserva(nombreCliente);
    console.log(confirmacion);
    console.log(`Reserva exitosa para ${nombreCliente} con ${mesasSolicitadas} personas.`);
            
  } catch (error) {
    console.log("Error:", error);
  }
}

// Llamada de prueba
hacerReserva("Juan Pérez", 3);  // Intenta hacer una reserva para 3 personas