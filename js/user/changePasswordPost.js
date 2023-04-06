const changePasswordPost = () => {
  document
    .getElementById("changePasswordForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const passOld = document.getElementById("oldPass");
      const newPass1 = document.getElementById("newPass1");
      const newPass2 = document.getElementById("newPass2");
      const feedback_oldPass = document.getElementById("feedback_oldPass");
      const feedback_newPass1 = document.getElementById("feedback_newPass1");
      const feedback_newpasss2 = document.getElementById("feedback_newPass2");
      const storedPassword = localStorage.getItem("pass");

      if (storedPassword !== passOld.value) {
        // Si la contraseña actual no coincide con la almacenada, muestra un mensaje de error
        passOld.classList.add("is-invalid");
        feedback_oldPass.textContent = "Contraseña actual incorrecta.";
        return; // Detiene la ejecución de la función
      }
    
      // Reinicia la validación de todos los campos
      passOld.classList.remove("is-invalid");
      feedback_oldPass.textContent = "";
      newPass1.classList.remove("is-invalid");
      feedback_newPass1.textContent = "";
      newPass2.classList.remove("is-invalid");
      feedback_newPass2.textContent = "";
    
      if (!newPass1.value) {
        // Si la nueva contraseña 1 está vacía, muestra un mensaje de error
        newPass1.classList.add("is-invalid");
        feedback_newPass1.textContent = "Ingrese una contraseña válida";
      } else if (newPass1.value.length < 7) {
        // Si la nueva contraseña 1 es demasiado corta, muestra un mensaje de error
        newPass1.classList.add("is-invalid");
        feedback_newPass1.textContent = "La contraseña debe tener al menos 7 caracteres";
      } else if (
        !newPass1.value.match(/[a-z]/) ||
        !newPass1.value.match(/[A-Z]/)
      ) {
        // Si la nueva contraseña 1 no tiene mayúsculas y minúsculas, muestra un mensaje de error
        newPass1.classList.add("is-invalid");
        feedback_newPass1.textContent = "La contraseña debe contener tanto mayúsculas como minúsculas";
      } else if (newPass2.value !== newPass1.value) {
        // Si las nuevas contraseñas no coinciden, muestra un mensaje de error
        newPass2.classList.add("is-invalid");
        feedback_newPass2.textContent = "Las contraseñas no coinciden";
      } else {
        // Si todo está bien, cambia la contraseña y muestra un mensaje de éxito
        localStorage.setItem("pass", newPass1.value);
        inputChangePasswordClean();
        hideOrShow(modals[2].id,modals[3].id);
        console.log("Contraseña cambiada con éxito.");
        
      }
    });
}    

