const loginForm = document.getElementById('formLogin');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita el envío por defecto

  // Si es inválido
  if (!loginForm.checkValidity()) {
    event.stopPropagation(); 
  } else {
    // Si es válido
    alert(`¡Bienvenido, ${loginForm.usuarionombre.value}!`);
    window.location.href = "inicio.html";
    
  }

  // Siempre aplica validación de Bootstrap
  loginForm.classList.add('was-validated');
});
