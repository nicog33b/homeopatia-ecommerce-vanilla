
var userCount=0;
function registerPost() {
      document.getElementById("formRegister").addEventListener("submit", function(event) {
        event.preventDefault();  


        const user = {
          userId:userCount,
          register_user_email: document.getElementById("register_user_email").value,
          register_user_nombre_completo: document.getElementById("register_user_nombre_completo").value,
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