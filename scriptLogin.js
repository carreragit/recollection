//Ingresar exitosamente usuario + validaciones

// Obtener el formulario
const loginForm  = document.getElementById('formLogin');

loginForm.addEventListener('submit', function(event) 
{
  event.preventDefault(); // Evita el envío por defecto

  // Validación de Bootstrap
  if (!loginForm.checkValidity())
    {
      loginForm.classList.add('was-validated'); // Muestra los mensajes de Bootstrapsi no se completan los campos
      return; // y no sigue para abajo, No sigue con el alert ni reset
    }

  // Si todo está bien, si sigue ejecutando lo de abajo
  alert(`¡Bienvenido, ${loginForm.usuarionombre.value}!`); // envia el mensaje que quieras

    // Redirige después del alert
  window.location.href = "inicio.html";
  
  loginForm.reset(); // Limpia el formulario
  loginForm.classList.remove('was-validated'); // Quita estilos de validación
});