 document.getElementById('registroEvento').addEventListener('submit', function(event) {
      event.preventDefault(); // Evita el envío automático del formulario

      // Variables
      const nombre = document.getElementById('nombre').value;
      const correo = document.getElementById('correo').value;
      const telefono = document.getElementById('telefono').value;
      const intereses = document.querySelectorAll('input[name="intereses"]:checked');
      const horario = document.querySelector('input[name="horario"]:checked');
      const fecha = document.getElementById('fecha').value;
      const hora = document.getElementById('hora').value;

      // Validaciones básicas
      if (!nombre || !correo || !telefono || intereses.length === 0 || !horario) {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
      }
      if(telefono.length < 10) {
        alert('El número de teléfono debe ser de 10 dígitos.');
        return;
      }
      if(!/\S+@\S+\.\S+/.test(correo)) {
        alert('Por favor, ingresa un correo electrónico válido, ejemplo: example@correo.com');
        return;
      }
      if(!/^\d+$/.test(telefono)) {
        alert('El número de teléfono debe contener solo dígitos.');
        return;
      }
      if(new Date(fecha) < new Date()) {
        alert('La fecha no puede ser anterior a hoy.');
        return;
      }

      // Si todo está bien
      alert('Registro exitoso. ¡Gracias por registrarte!');
    });