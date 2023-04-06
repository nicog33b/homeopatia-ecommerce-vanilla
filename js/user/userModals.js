
//estado de conexión
 var userIsConnected = 0;
//localStorage.setItem("status",0)


//Abrir modals y dependencias
 const openSignIn = ()=>{
  document.body.insertAdjacentHTML('beforeend', modalSignIn);
  document.body.insertAdjacentHTML('beforeend', modalRegister);
  $('#signInModal').modal('show'); 
 }

const openModalUser=() =>{
  document.body.insertAdjacentHTML('beforeend', modalUser);
  document.body.insertAdjacentHTML('beforeend', modalChangePassword);
  $('#userModal').modal('show'); 
 
}


 //lista de modals.
 const modals = [  {    id: "#signInModal",  },  {    id: "#registroModal",  },  {    id: "#userModal",  },  {    id: "#changePassword",  }]

 //esta f-arrow permite reducir la sobrecarga de reptición de codigo a la hora de abrir o cerrar los modals.
 const hideOrShow = (modalShow, modalHide) => {
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
  if (localStorage.getItem("status" )!=1) {
    //abre menu de inicio de sesión y pre-registro.
    
    openSignIn();
    loginValidate(); //function from ../login/loginValidation   


    document.getElementById('buttonRegister').addEventListener('click', function() {
      //change modal sign in -> register 
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
   
   //botton de acceso al modal de cambio de contraseña
    document.getElementById('changePassBtn').addEventListener('click', function() {
    //user date -> change password
    changePasswordPost();
    hideOrShow(modals[3].id,modals[2].id);
   
    //boton para volver del modal de cambio de contraseña al que contiene los datos de usuario
    document.getElementById('backToUserModal').addEventListener('click', function() {
      inputChangePasswordClean();
      hideOrShow(modals[2].id,modals[3].id);

        });
      document.getElementById('savePassBtn').addEventListener('Submit', function() {
       //codigo post password.
      });
    });
  }
});

//limpiar todos los input si el modal se cierra
    $(document).on('hidden.bs.modal', function (e) {
      inputChangePasswordClean();
      inputRegisterClean();
      inputSignInClean();
      inputUserClean();
      })



