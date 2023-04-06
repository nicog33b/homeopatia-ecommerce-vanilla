//cleaners de input en cada modal

const inputChangePasswordClean = () =>{
    $('#oldPass').val('')
    $('#newPass1').val('')
    $('#newPass2').val('')
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
  }
  
  const inputRegisterClean = () =>{
    $('#register_user_email').val('')
    $('#register_user_password').val('')
    $('#register_user_password_confirm').val('')
    $('#register_user_nombre_completo').val('')
  }