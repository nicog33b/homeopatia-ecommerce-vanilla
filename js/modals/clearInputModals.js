
const inputChangePasswordClean = () => {
  // Obtener todos los inputs del modal
  const inputs = document.querySelectorAll('#changePasswordForm input');

  // Recorrer todos los inputs y limpiar su valor
  inputs.forEach(input => {
    input.value = '';
    input.classList.remove('is-invalid', 'is-valid');
  });

  // Limpiar los mensajes de error
  const feedbacks = document.querySelectorAll('[id^="feedback_"]');
  feedbacks.forEach(feedback => feedback.textContent = '');

  // Resetear el formulario y ocultar los mensajes de error
  const form = document.getElementById('changePasswordForm');
  form.reset();
  form.classList.remove('was-validated');
}

  

  const inputCleanUser = () => {
    //boton de editar usuario
    const changeDateUserButton = document.getElementById("changeDatesUser");

    //desabilita los input de info de usuario.
    document.getElementById('user_nombre').disabled = true;
    document.getElementById('user_email').disabled = true;
    document.getElementById('user_telefono').disabled = true;
    document.getElementById('user_direccion').disabled = true;

//devuelve el texto original del boton de editar usuario
    document.getElementById('changeDatesUser').textContent = 'Editar datos';
  


  };
  
  const inputCleanSignIn = () => {
    // Obtener todos los inputs del modal
    const inputs = document.querySelectorAll('#signInModal input');
  
    // Recorrer todos los inputs y limpiar su valor
    inputs.forEach(input => {
      input.value = '';
      input.classList.remove('is-invalid', 'is-valid');
    });
  
    // Limpiar los mensajes de error
    const feedbacks = document.querySelectorAll('[id^="feedback_signin_"]');
    feedbacks.forEach(feedback => feedback.textContent = '');
  
    // Resetear el formulario y ocultar los mensajes de error
    const form = document.querySelector('#signInModal form');
    form.reset();
    form.classList.remove('was-validated');
  };
  
  const inputCleanRegister = () => {
    // Obtener todos los inputs del modal
    const inputs = document.querySelectorAll('#registerModal input');
  
    // Recorrer todos los inputs y limpiar su valor
    inputs.forEach(input => {
      input.value = '';
      input.classList.remove('is-invalid', 'is-valid');
    });
  
    // Limpiar los mensajes de error
    const feedbacks = document.querySelectorAll('[id^="feedback_register_"]');
    feedbacks.forEach(feedback => feedback.textContent = '');
  
    // Resetear el formulario y ocultar los mensajes de error
    const form = document.querySelector('#registerModal form');
    form.reset();
    form.classList.remove('was-validated');
  };
  
