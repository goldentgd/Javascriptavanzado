function miCallbackDeExito(resultado) {
    console.log(`✅ ¡Operación exitosa! Resultado: ${resultado}`);
}
function miCallbackDeError(mensajeError) {
    console.error(`❌ ¡Error! Mensaje: ${mensajeError}`);
}
function procesarDatos(dato, callbackExito, callbackError) {
    console.log(`Procesando dato: ${dato}`);
    if (dato !== null && dato !== undefined && dato !== '') {
        setTimeout(() => {
            const datoProcesado = dato.toUpperCase();
            callbackExito(datoProcesado);
        }, 1000)
    } else {
        // Simulamos un error si el dato es inválido
        setTimeout(() => {
            callbackError('Error: El dato es inválido o no existe.');
        }, 500);
    }
}

procesarDatos('Hola, mundo!', miCallbackDeExito, miCallbackDeError);
procesarDatos('', miCallbackDeExito, miCallbackDeError);