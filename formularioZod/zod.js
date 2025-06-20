const { z } = window.Zod;

const registerSchema = z.object({
  name: z.string().min(1, "El nombre es obligatorio."),
  email: z.string().email("El correo electrónico no es válido."),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres.")
});

document.getElementById("registerForm").addEventListener("submit", (event) => {
  event.preventDefault();

  ["name", "email", "password"].forEach(field => {
    document.getElementById(`error-${field}`).textContent = "";
  });

  const formData = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    password: document.getElementById("password").value.trim()
  };

  try {
    registerSchema.parse(formData);
    alert("¡Registro exitoso!");
  } catch (error) {
    if (error.errors) {
      error.errors.forEach(err => {
        const field = err.path[0];
        const span = document.getElementById(`error-${field}`);
        if (span) span.textContent = err.message;
      });
    }
  }
});