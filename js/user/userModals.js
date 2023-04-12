
//estado de conexión
 var userIsConnected = 0;

//localStorage.setItem("status",0)


const openSignIn = ()=>{
  // Verificar si el modal ya existe
  if (!document.querySelector("#signInModal")) {
    document.body.insertAdjacentHTML('beforeend', modalSignIn);
    document.body.insertAdjacentHTML('beforeend', modalRegister);
  }
  $('#signInModal').modal('show'); 
}

const openModalUser=() =>{
  // Verificar si el modal ya existe
  if (!document.querySelector("#userModal")) {
    document.body.insertAdjacentHTML('beforeend', modalUser);
    document.body.insertAdjacentHTML('beforeend', modalChangePassword);
  }
  $('#userModal').modal('show'); 
}





 //lista de modals.
 const modals = [  {    id: "#signInModal",  },  {    id: "#registroModal",  },  {    id: "#userModal",  },  {    id: "#changePassword",  }]

 const hideOrShow = (modalShow, modalHide) => {
  $(modalHide).off('click');
  $(modalHide).modal('hide');
  $(modalShow).modal('show');
}


 /*
 0-sign in
 1-register
 2-user
 3-change password
 */










document.getElementById('userButton').addEventListener('click', function() {
  //verifica si el usuario esta conectado. 
  if (localStorage.getItem("status" )!=1) {
    //abre menu de inicio de sesión y pre-registro.
    
    openSignIn();
    
    loginValidate(); //function from ../login/loginValidation   


    document.getElementById('buttonRegister').addEventListener('click', function() {
      //change modal sign in -> register 
      inputSignInClean();
      registerPost(); //function from ../user/registerPost
     hideOrShow(modals[1].id,modals[0].id)
         
   


      document.getElementById('backToSignButton').addEventListener('click', function() {
      //cambio de modal register -> sign in 

      inputRegisterClean();
        hideOrShow(modals[0].id,modals[1].id)
    
      });
      
    });
  } else {
   openModalUser();
   userLogoutBtn() //function from ../user/userLogout
   const userDate = JSON.parse(localStorage.getItem("userDate"));
document.getElementById("user_email").value= userDate.register_user_email;
document.getElementById("user_nombre").value = userDate.register_user_nombre_completo;
document.getElementById("user_fecha").value = userDate.register_fecha_nacimiento;
document.getElementById("user_departamento").value = userDate.departamento;
document.getElementById("user_telefono").value = userDate.telefono;
document.getElementById("user_direccion").value = userDate.direccion;
  
   
   //acceso al modal de cambio de contraseña
    document.getElementById('changePassBtn').addEventListener('click', function() {
    //user date -> change password
    changePasswordPost();
    hideOrShow(modals[3].id,modals[2].id);
   
    //regresa al modal de datos de usuario
    document.getElementById('backToUserModal').addEventListener('click', function() {
      inputChangePasswordClean();
      hideOrShow(modals[2].id,modals[3].id);

        });
    });
  }
});

//limpiar todos los input si el modal se cierra
    $(document).on('hidden.bs.modal', function (e) {
      inputChangePasswordClean();
      inputRegisterClean();
      inputSignInClean();
      })





 