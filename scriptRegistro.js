// Obtener el formulario
const registroForm = document.getElementById('formRegistro');

registroForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita el envío por defecto

  // Validación de Bootstrap
  if (!registroForm.checkValidity()) {
    registroForm.classList.add('was-validated');
    return; // Si falla, no sigue
  }

  // Obtener valores
  const usuario = registroForm.usuarionombre.value.trim();
  const correo = registroForm.correo.value.trim();
  const pass = registroForm.contrasena.value;
  const confirmPass = registroForm.confirmarContrasena.value;

  // Validar contraseña segura
  const regexPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#_-])[A-Za-z\d@$!%*?&.#_-]{8,}$/;

  if (!regexPassword.test(pass)) {
    alert("La contraseña debe tener al menos 8 caracteres, incluir mayúscula, minúscula, número y un carácter especial.");
    return;
  }

  // Validar coincidencia de contraseñas
  if (pass !== confirmPass) {
    alert("Las contraseñas no coinciden.");
    return;
  }

  // Si todo está bien:
  alert(`Cuenta creada con éxito, ${usuario}!`);

  // Redirige después del alert
  window.location.href = "inicio.html";

  // Limpia el formulario
  registroForm.reset();
  registroForm.classList.remove('was-validated');
});

