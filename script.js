// Obtener el formulario
const form = document.getElementById('formContacto');

form.addEventListener('submit', function(event) 
{
  event.preventDefault(); // Evita el envío por defecto

  // Validación de Bootstrap
  if (!form.checkValidity())
    {
      form.classList.add('was-validated'); // Muestra los mensajes de Bootstrapsi no se completan los campos
      return; // y no sigue para abajo, No sigue con el alert ni reset
    }

  // Si todo está bien, si sigue ejecutando lo de abajo
  alert("¡Tus datos fueron enviados con éxito!"); // envia el mensaje que quieras
  
  form.reset(); // Limpia el formulario
  form.classList.remove('was-validated'); // Quita estilos de validación
}
);


