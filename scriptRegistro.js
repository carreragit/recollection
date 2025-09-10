const registroForm = document.getElementById('formRegistro');
const passInput = registroForm.contrasena;
const passFeedback = document.getElementById('passwordFeedback');

registroForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita el envío por defecto

  // Reset de estado previo
  passInput.classList.remove('is-invalid');

  // Validación de Bootstrap
  if (!registroForm.checkValidity()) {
    registroForm.classList.add('was-validated');
    return; // Si falla, no sigue
  }

  // Obtener valores
  const usuario = registroForm.usuarionombre.value.trim();
  const correo = registroForm.correo.value.trim();
  const pass = passInput.value;
  const confirmPass = registroForm.confirmarContrasena.value;

  // Validar contraseña segura
  const regexPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#_-])[A-Za-z\d@$!%*?&.#_-]{8,}$/;

  if (!regexPassword.test(pass)) {
    passInput.classList.add('is-invalid'); // marca el input como inválido
    return; // no continúa
  }

  // Validar coincidencia de contraseñas
  if (pass !== confirmPass) {
    alert("Las contraseñas no coinciden.");
    return;
  }

  // Si todo está bien:
  alert(`Cuenta creada con éxito, ${usuario}!`);
  window.location.href = "inicio.html";

  // Limpia el formulario
  registroForm.reset();
  registroForm.classList.remove('was-validated');
});
