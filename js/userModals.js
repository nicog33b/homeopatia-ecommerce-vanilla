
//estado de conexión
var userIsConnected = 0;

var nombreCompleto="";
var email="";
var documento="";
var telefono="";
var departamento="";
var dirección="";
var password="";
var newpassword="";
var newpassword2="";




const modalRegister = `
<div class="modal fade" id="registroModal" tabindex="-1" aria-labelledby="registroModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-center" id="exampleModalLabel">¡A un paso de tener tu usuario!</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <main class="form-register">

        <form>
        <label class="form-label" for="register_user_email">Email</label>
        <div class="form-outline mb-4">
        <input type="email" id="register_user_email" class="form-control form-control-lg" />
        <div class="valid-feedback">
        </div>
       <div class="invalid-feedback">
        </div>
        
        <div class="form-outline mb-4">
        <label class="form-label" for="register_user_nombre_completo">Nombre completo</label>
        <input type="email" id="register_user_nombre_completo" class="form-control form-control-lg"/>
        </div>


        <div class="form-outline mb-4">
        <label for="register_fecha_nacimiento">Fecha de nacimiento:</label>
        <input class="form-control form-control-lg" type="date" id="register_fecha_nacimiento" name="register_fecha_nacimiento">
        </div>


        <div class="form-outline mb-4">
        <label class="form-label" for="register_user_password">Contraseña</label>
        <input name="register_user_password" type="password" id="register_user_password" class="form-control form-control-lg" />
        </div>
        
        <div class="form-outline mb-4">
        <label class="form-label" for="register_user_password_confirm">Repite contraseña</label>
        <input type="password" name="register_user_password_confirm" id="register_user_password_confirm" class="form-control form-control-lg" />
       
        </div>
        <div class="d-flex justify-content-center">
        <button type="Submit"
        class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Registrar</button>
        </div>
        
        <p class="text-center text-muted mt-5 mb-0"> <a id="backToSignButton" href="#!" class="fw-bold text-body">¿Ya tienes cuenta?</a></p>
        
        </form>
        
        </main>
        
      </div>
     </div>
  </div>
</div>  
`;


const modalSignIn = `


<div class="modal fade" id="signInModal" tabindex="-1" aria-labelledby="signInModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-center" id="exampleModalLabel">¡Bienvenido de vuelta!</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">



      
        <main class="form-signin">
          <form>
            <div class="registerTitle text-center">
            <a href="home.html">Homeopatía <br>Larrosa</a>
          </div>
            <h1 class="h3 mb-3 fw-normal"></h1>
       ¡Entra a tu cuenta!
            <div class="form-floating">
              <input type="email" class="form-control" id="enter_user_email" placeholder="name@example.com">
            </div>
            <div class="form-floating">
              <input type="password" class="form-control" id="enter_user_password" placeholder="Password">
            </div>
            <div id="buttonRegister" class="mb-3">
              <label>
             <a href="#" value="registrarse" > ¿No tienes cuenta? registrate.</a>
              </label>
            </div>
            <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            <p class="mt-5 mb-3 text-muted">&copy; 2023</p>
          </form>
        </main>
        
      </div>
     </div>
  </div>
</div>  
`;

const modalUser = `
<div class="modal fade" id="userModal" tabindex="-1" aria-labelledby="UserModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
  <div class="modal-header">
  <h3 class="text-center">Datos del perfil</h3>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">
<!--Register body starts-->


<form>
<label for="user_nombre" class="form-label">Nombre completo</label>
  <div class="mb-3 input-group">
    <input value="Nicolás García" type="text" class="form-control" id="user_nombre" name="nombre" placeholder="Escribe aquí tu nombre" disabled>
    <button class="btn btn-outline-secondary" type="button">
      <i class="fas fa-pencil-alt"></i>
    </button>
  </div>
  <label for="user_email" class="form-label">Correo electronico</label>
  <div class="mb-3 input-group">
    <input value="nicolasg99dr@gmail.com" type="email" class="form-control" id="user_email" name="email" placeholder="Escribe aquí tu correo electrónico" disabled>
    <button class="btn btn-outline-secondary" type="button">
      <i class="fas fa-pencil-alt"></i>
    </button>
  </div>
  <label for="user_documento" class="form-label">Documento</label>
  <div class="mb-3 input-group">
    <input value="50113552" type="text" class="form-control" id="user_documento" name="documento" placeholder="Escribe aquí tu documento" disabled>
    <button class="btn btn-outline-secondary" type="button">
      <i class="fas fa-pencil-alt"></i>
    </button>
  </div>
  <label for="user_telefono" class="form-label">Telefono</label>
  <div class="mb-3 input-group">
    <input value="094272390" type="text" class="form-control" id="user_telefono" name="telefono" placeholder="Escribe aquí tu telefono" disabled>
    <button class="btn btn-outline-secondary" type="button">
      <i class="fas fa-pencil-alt"></i>
    </button>
  </div>
  <div class="mb-3">
    <label for="user_departamento" class="form-label">Departamento</label>
    <select class="form-select" id="user_departamento" name="ciudad">
      <option value="" selected disabled>Selecciona tu departamento</option>
      <option value="Montevideo">Montevideo</option>
      <option value="Canelones">Canelones</option>
      <option value="Maldonado">Maldonado</option>
      <option value="Rocha">Rocha</option>
      <option value="Colonia">Colonia</option>
      <option value="San José">San José</option>
      <option value="Paysandú">Paysandú</option>
      <option value="Artigas">Artigas</option>
      <option value="Durazno">Durazno</option>
      <option value="Florida">Florida</option>
      <option value="Lavalleja">Lavalleja</option>
      <option value="Rivera">Rivera</option>
      <option value="Tacuarembó">Tacuarembó</option>
      <option value="Treinta y Tres">Treinta y Tres</option>
      <option value="Salto">Salto</option>
    </select>
  </div>
  <label for="user_direccion" class="form-label">Dirección</label>
  <div class="mb-3 input-group">
    <input value="Independencia 919" type="text" class="form-control" id="user_direccion" name="dirección" placeholder="Escribe aquí tu correo electrónico" disabled>
    <button class="btn btn-outline-secondary" type="button">
      <i class="fas fa-pencil-alt"></i>
    </button>
  </div>

  <button id="changePassBtn" type="button" class="btn-sm btn-primary text-center">Cambiar contraseña</button>
  <button  type="button" class="btn-sm btn-secondary text-center" ><a class="unstyled" href="../html/historial.html">Ver historial</a></button>
  <button type="submit" class="btn-sm btn-danger  text-center">Guardar</button>

</form>

<!--Register body ends-->
      </div>
     </div>
  </div>
</div>
</div>
</div>
</div>
</div>


`;

const modalChangePassword= `
<div class="modal fade" id="changePassword" tabindex="-1" aria-labelledby="UserModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
  <div class="modal-header">
  <h3 class="text-center">Cambiar contraseña</h3>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">
<!--Register body starts-->

<form>
<label for="passOld" class="form-label">Contraseña antigua</label>
  <div class="mb-3 input-group">
    <input id="passOld" value="" type="password" class="form-control"  name="old password" placeholder="Escribe aquí tu antigua contraseña">
    <button class="btn btn-outline-secondary" type="button">
      <i class="fas fa-pencil-alt"></i>
    </button>
  </div>
  <label for="newPass1" class="form-label">Contraseña nueva</label>
  <div class="mb-3 input-group">
    <input  type="password" class="form-control" id="newPass1" name="new password" placeholder="Escribe aquí tu nueva contraseña">
    <button class="btn btn-outline-secondary" type="button">
      <i class="fas fa-pencil-alt"></i>
    </button>
  </div>
  <label for="newPass2" class="form-label">Repite la nueva</label>
  <div class="mb-3 input-group">
  <input  type="password" class="form-control" id="newPass2" name="new password" placeholder="Repite aquí tu nueva contraseña">
  <button class="btn btn-outline-secondary" type="button">
    <i class="fas fa-pencil-alt"></i>
  </button>
</div>

  <button id="savePassBtn" type="Submit" class="btn-sm btn-primary text-center">Guardar contraseña</button>

  
  <p class="text-center text-muted mt-5 mb-0"> <a id="backToUserModal" href="#!" class="fw-bold text-body">No quiero cambiar mi contraseña</a></p>
</form>

<!--Register body ends-->
      </div>
     </div>
  </div>
</div>
</div>
</div>
</div>
</div>


`;

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

//cleaners de input en cada modal

inputChangePasswordClean = () =>{
  $('#passOld').val('')
  $('#newPass1').val('')
  $('#newPass2').val('')
}

inputUserClean = () =>{
  $('#user_nombre').val('')
  $('#user_email').val('')
  $('#user_documento').val('')
  $('#user_telefono').val('')
  $('#user_departamento').val('')
  $('#user_direccion').val('')
}

inputSignInClean = () =>{
  $('#enter_user_email').val('')
  $('#enter_user_password').val('')
}

inputRegisterClean = () =>{
  $('#register_user_email').val('')
  $('#register_user_password').val('')
  $('#register_user_password_confirm').val('')
  $('#register_user_nombre_completo').val('')
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
  if (userIsConnected === 0) {
    //abre menu de inicio de sesión y pre-registro.
    openSignIn();
    document.getElementById('buttonRegister').addEventListener('click', function() {
      //cambio de modal sign in -> register
     hideOrShow(modals[1].id,modals[0].id)
      document.getElementById('backToSignButton').addEventListener('click', function() {
      //cambio de modal register -> sign in 
      inputRegisterClean();
        hideOrShow(modals[0].id,modals[1].id)
      });
    });
  } else {
   openModalUser();
   //botton de acceso al modal de cambio de contraseña
    document.getElementById('changePassBtn').addEventListener('click', function() {
    //user date -> change password
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




