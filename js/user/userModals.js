

//lista de modals.
const modals = [
  { id: "#signInModal" }, //0
  { id: "#registroModal" }, //1
  { id: "#userModal" }, //2
  { id: "#changePassword" }, //3
];

//modals open time
let registerTimes=0;
let userTimes=0;
let signInTimes=0;
let changePasswordTimes=0;

//modals ID
const userModal = document.querySelector(modals[2].id);
const changePasswordModal = document.querySelector(modals[3].id);
const signInModal = document.querySelector(modals[0].id);
const registerModal = document.querySelector(modals[1].id);




const changeDates = () => {
  const nombre = document.getElementById("user_nombre");
  const email = document.getElementById("user_email");
  const telefono = document.getElementById("user_telefono");
  const direccion = document.getElementById("user_direccion");


  

  // Función para enviar los datos a la base de datos
  function sendDataToDatabase(input) {
    const userDate = JSON.parse(localStorage.getItem("userDate"));
    if (localStorage.getItem("status") == 1 && userDate) {
      fetch(`http://localhost:3999/api/users/${userDate._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ [input.name]: input.value }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Datos actualizados con éxito", data);
        })
        .catch((error) => {
          console.error("Error al actualizar los datos:", error);
        });
    } else {
      console.log("El usuario no está conectado.");
    }
  }

  // Envía los datos a la base de datos
  sendDataToDatabase(nombre);
  sendDataToDatabase(email);
  sendDataToDatabase(telefono);
  sendDataToDatabase(direccion);

  // Cambia el botón a "Editar datos"
  const editButton = document.getElementById("changeDatesUser");
  editButton.textContent = "Editar datos";
  editButton.removeEventListener("click", changeDates);
  editButton.addEventListener("click", editUserData);

  // Deshabilita los inputs
  nombre.disabled = true;
  telefono.disabled = true;
  direccion.disabled = true;
};

const editUserData = () => {
  const editButton = document.getElementById("changeDatesUser");
  const nombre = document.getElementById("user_nombre");
  const email = document.getElementById("user_email");
  const telefono = document.getElementById("user_telefono");
  const direccion = document.getElementById("user_direccion");

  editButton.removeEventListener("click", changeDates);
  editButton.addEventListener("click", editUserData);
  editButton.textContent = "Guardar datos";

  editButton.removeEventListener("click", editUserData);
  editButton.addEventListener("click", changeDates);

  // Habilita los inputs
  //nombre.disabled = false;
  telefono.disabled = false;
  direccion.disabled = false;
};



const updateDepartamento = () => {
  const depa = document.getElementById("user_departamento");
  depa.addEventListener("change", () => {
    if (localStorage.getItem("status") == 1) {
      fetch(
        `http://localhost:3999/api/users/${
          JSON.parse(localStorage.getItem("userDate"))._id
        }`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ departamento: depa.value.toString() }),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("Datos actualizados con éxito", data);
        })
        .catch((error) => {
          console.error("Error al actualizar los datos:", error);
        });
    } else {
      console.log("El usuario no está conectado.");
    }
  });
};

const updateUserData = () => {
  // Si no hay errores, enviar solicitud al servidor para validar el inicio de sesión
  fetch(
    `http://localhost:3999/api/users/${
      JSON.parse(localStorage.getItem("userDate"))._id
    }`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((searchData) => {
      console.log(searchData);
      document.getElementById("user_email").value =
        searchData.register_user_email;
      document.getElementById("user_nombre").value =
        searchData.register_user_nombre_completo;
      document.getElementById("user_telefono").value = searchData.telefono;
      document.getElementById("user_direccion").value = searchData.direccion;
      document.getElementById("user_departamento").value =
        searchData.departamento;

      //*
    })
    .catch((error) => {
      console.error(error);
    });
};

/*
 0-sign in
 1-register
 2-user
 3-change password
 */


// Abre el modal de registro
const openRegister = () => {
if(registerTimes===0){
  document.body.insertAdjacentHTML("beforeend", modalRegister);
  $("#signInModal").modal("hide");
  $("#registroModal").modal("show");
  registerPost();
  registerTimes++;
}else{
  inputRegisterClean();
$("#signInModal").modal("hide");
$("#registroModal").modal("show");
registerPost();
}}


// Abre el modal de inicio de sesión
const openSignIn = () => {
  if(registerTimes===0){
    document.body.insertAdjacentHTML("beforeend", modalSignIn);
    $("#registroModal").modal("hide");
    $("#signInModal").modal("show");
  signInTimes++;
  }else{
  $("#registroModal").modal("hide");
  $("#signInModal").modal("show");
}}


const openChangePassword = () => {
  if (changePasswordTimes===0) {
    document.body.insertAdjacentHTML("beforeend", modalChangePassword);
  changePasswordPost();
  $(modals[2].id).modal("hide");
  $(modals[3].id).modal("show");
  changePasswordTimes++;
  }else{
  changePasswordPost();
  $(modals[2].id).modal("hide");
  $(modals[3].id).modal("show");
  }
};

const editButtonConditions = () => {
  const editButton = document.getElementById("changeDatesUser");
  editButton.addEventListener("click", function () {
    if (editButton.textContent === "Editar datos") {
      editUserData();
    } else if (editButton.textContent === "Guardar datos") {
      changeDates();
    }
  });
};

const openModalUser = () => {
  if (userTimes===0) {
    
    document.body.insertAdjacentHTML("beforeend", modalUser);
    editButtonConditions()
    updateUserData();
    updateDepartamento(); 
    $(modals[3].id).modal("hide");
    $(modals[2].id).modal("show");
    userTimes++;
  }else{
  inputCleanUser();
  updateUserData();
  updateDepartamento(); 
  editButtonConditions()
  editButtonConditions();
  $(modals[3].id).modal("hide");
  $(modals[2].id).modal("show");
  
  }
};




document.getElementById("userButton").addEventListener("click", function () {
  //verifica si el usuario esta conectado.
  if (localStorage.getItem("status") != 1) {
    //abre menu de inicio de sesión y pre-registro.
    openSignIn(); 
    loginValidate(); //function from ../login/loginValidation
    document
      .getElementById("buttonRegister")
      .addEventListener("click", function () {
        //change modal sign in -> register
    openRegister();
        document
          .getElementById("backToSignButton")
          .addEventListener("click", function () {
            //cambio de modal register -> sign in
            openSignIn();
          });
      });
  } else {
    openModalUser(); //from here
    userLogoutBtn(); //function from ../user/userLogout
 
      //acceso al modal de cambio de contraseña

    

    //acceso al modal de cambio de contraseña
    document
      .getElementById("changePassBtn")
      .addEventListener("click", function () {
        //user date -> change password
        openChangePassword();
      });
  }
});

//limpiar todos los input si el modal se cierra
$(document).on("hidden.bs.modal", function (e) {
  inputChangePasswordClean();
  inputRegisterClean();
  inputSignInClean();
  inputCleanUser();
});
