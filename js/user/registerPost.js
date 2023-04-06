
var userCount=0;
function registerPost() {
      document.getElementById("formRegister").addEventListener("submit", function(event) {
        event.preventDefault();  

// Obtener los elementos del formulario de registro
const register_user_email = document.getElementById("register_user_email");
const register_user_nombreCompleto = document.getElementById("register_user_nombreCompleto");
const register_user_password = document.getElementById("register_user_password");
const register_user_password_confirm = document.getElementById("register_user_password_confirm");

// Validar el email del usuario
if (!register_user_email.value || !register_user_email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
  register_user_email.classList.add("is-invalid");
  document.getElementById("feedback_email").textContent = "Por favor, ingrese un email válido.";
} else {
  register_user_email.classList.remove("is-invalid");
  document.getElementById("feedback_email").textContent = "";
}



// Validar la contraseña del usuario
if (!register_user_password.value) {
  register_user_password.classList.add("is-invalid");
  document.getElementById("feedback_registerPass1").textContent = "La contraseña no puede estar vacía.";
} else if (register_user_password.value.length < 7) {
  register_user_password.classList.add("is-invalid");
  document.getElementById("feedback_registerPass1").textContent = "La contraseña debe tener al menos 7 caracteres.";
} else if (!/[a-z]/.test(register_user_password.value) || !/[A-Z]/.test(register_user_password.value)) {
  register_user_password.classList.add("is-invalid");
  document.getElementById("feedback_registerPass1").textContent = "La contraseña debe contener mayúsculas y minúsculas.";
} else {
  register_user_password.classList.remove("is-invalid");
  document.getElementById("feedback_registerPass1").textContent = "";
}

// Validar la confirmación de la contraseña del usuario
if (register_user_password_confirm.value !== register_user_password.value) {
  register_user_password_confirm.classList.add("is-invalid");
  document.getElementById("feedback_registerPass2").textContent = "Las contraseñas no coinciden.";
} else {
  register_user_password_confirm.classList.remove("is-invalid");
  document.getElementById("feedback_registerPass2" ).textContent = "";
}

        const user = {
          userId:userCount,
          register_user_email: document.getElementById("register_user_email").value,
          register_fecha_nacimiento: document.getElementById("register_fecha_nacimiento").value,
          register_user_password: document.getElementById("register_user_password").value,
          register_user_password_confirm: document.getElementById("register_user_password_confirm").value,
          telefono:"",
          
        };

   userCount++;
        // Realiza una solicitud POST a la API
        fetch("http://localhost:3999/api/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          document.getElementById("formRegister").reset();
          $("#registroModal").modal("hide");
          location.reload()
        })
        .catch(error => {
  
          console.error(error);
          alert("Ocurrió un error al registrar el usuario.");
        })
        
      });
    }