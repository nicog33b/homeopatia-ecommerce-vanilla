function validateEmail(input) {
  const register_user_email = document.getElementById("register_user_email");
  if (!input.value || !input.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    input.classList.add("is-invalid");
    document.getElementById("feedback_registerEmail").textContent = "Por favor, ingrese un email válido.";
  } else if(register_user_email.value===""){
return;
  }else{
    // Si no hay errores, enviar solicitud al servidor para validar el inicio de sesión
    fetch("http://localhost:3999/api/users", {
      method: "GET",
      headers: { 
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((users) => {
        console.log(users)
        const emailExists = users.find(user => user.register_user_email === input.value);

        if (emailExists) {
          input.classList.add("is-invalid");
          document.getElementById("feedback_registerEmail").textContent = "Este email ya está registrado.";
   
        } else {
          input.classList.remove("is-invalid");
          document.getElementById("feedback_registerEmail").textContent = "";
        }
      })
      .catch((error) => {
        console.error(error);
      })
  }
}

const register_user_email = document.getElementById("register_user_email");
register_user_email.addEventListener("blur", function() {
  validateEmail(register_user_email);
});


function registerPost() {
  document.getElementById("formRegister").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtener los elementos del formulario de registro
    const register_user_email = document.getElementById("register_user_email");
    const register_user_nombre_completo = document.getElementById("register_user_nombre_completo");
    const register_fecha_nacimiento = document.getElementById("register_fecha_nacimiento")
    const register_user_password = document.getElementById("register_user_password");
    const register_user_password_confirm = document.getElementById("register_user_password_confirm");





    
    // Validar el nombre completo del usuario
if (!register_user_nombre_completo.value) {
  register_user_nombre_completo.classList.add("is-invalid");
  document.getElementById("feedback_registerNombre").textContent = "Por favor, ingrese su nombre completo.";
} else {
  register_user_nombre_completo.classList.remove("is-invalid");
  document.getElementById("feedback_registerNombre").textContent = "";
}

// Validar la fecha de nacimiento del usuario
if (!register_fecha_nacimiento.value) {
  register_fecha_nacimiento.classList.add("is-invalid");
  document.getElementById("feedback_registerNacimiento").textContent = "Por favor, ingrese su fecha de nacimiento.";
} else {
  const birthDate = new Date(register_fecha_nacimiento.value);
  const currentDate = new Date();

  if (birthDate >= currentDate) {
    register_fecha_nacimiento.classList.add("is-invalid");
    document.getElementById("feedback_registerNacimiento").textContent = "La fecha de nacimiento no puede ser mayor o igual a la fecha actual.";
  } else {
    register_fecha_nacimiento.classList.remove("is-invalid");
    document.getElementById("feedback_registerNacimiento").textContent = "";
  }
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
    } else if(register_user_password_confirm.value===""){
      register_user_password_confirm.classList.add("is-invalid");
      document.getElementById("feedback_registerPass2").textContent = "Este campo no puede estar vacío";
    }else{
      register_user_password_confirm.classList.remove("is-invalid");
      document.getElementById("feedback_registerPass2").textContent = "";
    }


      

// Verificar si hay casillas con la clase is-invalid después de validar nombre completo y fecha de nacimiento
const invalidFields2 = document.querySelectorAll('.is-invalid');
if (invalidFields2.length > 0) {
  return;
}


const user = {
  register_user_email: document.getElementById("register_user_email").value,
  register_user_nombre_completo: document.getElementById("register_user_nombre_completo").value,
  register_fecha_nacimiento: document.getElementById("register_fecha_nacimiento").value,
  register_user_password: document.getElementById("register_user_password").value,
  register_user_password_confirm: document.getElementById("register_user_password_confirm").value,
};



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
  location.reload()
  inputRegisterClean()
})
.catch(error => {
  console.error(error); 
  console.log(error)
})
    
})
}



