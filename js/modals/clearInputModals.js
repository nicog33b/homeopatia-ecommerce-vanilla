
const inputChangePasswordClean = () =>{
    $('#oldPass').val('')
    $('#newPass1').val('')
    $('#newPass2').val('')
    oldPass.classList.remove("is-invalid");
    newPass1.classList.remove("is-invalid");
    newPass2.classList.remove("is-invalid");
  }
  
 const  inputUserClean = () =>{
    $('#user_nombre').val('')
    $('#user_email').val('')
    $('#user_documento').val('')
    $('#user_telefono').val('')
    $('#user_departamento').val('')
    $('#user_direccion').val('')
  }
  
 const inputSignInClean = () =>{
    $('#login_user_email').val('')
    $('#login_user_password').val('')
    login_user_email.classList.remove("is-invalid");
    login_user_password.classList.remove("is-invalid");


  }
  
  const inputRegisterClean = () =>{
    $('#register_user_email').val('')
    $('#register_user_password').val('')
    $('#register_user_password_confirm').val('')
    $('#register_user_nombre_completo').val('')
    //import user/registerPost
    register_user_email.classList.remove("is-invalid");
    register_user_nombre_completo.classList.remove("is-invalid");
    register_fecha_nacimiento.classList.remove("is-invalid");
    register_user_password.classList.remove("is-invalid");
    register_user_password_confirm.classList.remove("is-invalid");
  }

