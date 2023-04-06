
const loginValidate = () => {
  document.getElementById("signInForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("login_user_email")
    const password = document.getElementById("login_user_password")
    const feedback_email=document.getElementById("feedback_email")
    const feedback_password=document.getElementById("feedback_password")
    

    if (!email.value || !email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      email.classList.add("is-invalid");
      feedback_email.textContent="Por favor, ingresa un email válido.";
    }else{
      email.classList.remove("is-invalid");
      feedback_email.textContent="";
    }

    if (!password.value) {
      password.classList.add("is-invalid");
      feedback_password.textContent="No puede estar vacío";
    } else if (password.value.length < 7) {
      password.classList.add("is-invalid");
      feedback_password.textContent="Debe tener al menos 7 caracteres";
    } else if (!password.value.match(/[a-z]/) || !password.value.match(/[A-Z]/)) {
      password.classList.add("is-invalid");
      feedback_password.textContent="Debe contener mayúsculas y minúsculas";
    }else{
  

    
// Si no hay errores, enviar solicitud al servidor para validar el inicio de sesión
fetch("http://localhost:3999/api/users", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((login) => {
    const loginSearch = login.find((u) => u.register_user_email === email.value && u.register_user_password === password.value);
    if (loginSearch !== undefined && loginSearch !== null) {
      // Se encontró un usuario con el email y contraseña proporcionados
      localStorage.setItem("email", email.value);
      localStorage.setItem("pass", password.value);
      localStorage.setItem("status", 1);
      inputSignInClean();
      // Verificar si el usuario todavía está en la página antes de redirigirlo
     location.reload();
    } else {
      // No se encontró un usuario con el email y contraseña proporcionados
      feedback_email.textContent="";
      feedback_password.textContent="Email o contraseña incorrecta.";
    }
  })
  .catch((error) => {
    console.error(error);
  });
    }
  });
  }

