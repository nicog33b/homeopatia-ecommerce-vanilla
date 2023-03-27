
//estado de conexión
var userIsConnected = 1;

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
        <div class="form-outline mb-4">
        <input type="email" id="form3Example1cg" class="form-control form-control-lg" />
        <label class="form-label" for="form3Example1cg">Email</label>
        </div>
        
        <div class="form-outline mb-4">
        <input type="email" id="form3Example3cg" class="form-control form-control-lg" />
        <label class="form-label" for="form3Example3cg">Nombre completo</label>
        </div>
        
        <div class="form-outline mb-4">
        <input type="password" id="form3Example4cg" class="form-control form-control-lg" />
        <label class="form-label" for="form3Example4cg">Contraseña</label>
        </div>
        
        <div class="form-outline mb-4">
        <input type="password" id="form3Example4cdg" class="form-control form-control-lg" />
        <label class="form-label" for="form3Example4cdg">Repite contraseña</label>
        </div>
        <div class="d-flex justify-content-center">
        <button type="button"
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
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
              <label for="floatingInput">Email</label>
            </div>
            <div class="form-floating">
              <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
              <label for="floatingPassword">Contraseña</label>
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
<label for="nombre" class="form-label">Nombre completo</label>
  <div class="mb-3 input-group">
    <input value="Nicolás García" type="text" class="form-control" id="nombre" name="nombre" placeholder="Escribe aquí tu nombre" disabled>
    <button class="btn btn-outline-secondary" type="button">
      <i class="fas fa-pencil-alt"></i>
    </button>
  </div>
  <label for="email" class="form-label">Correo electronico</label>
  <div class="mb-3 input-group">
    <input value="nicolasg99dr@gmail.com" type="email" class="form-control" id="email" name="email" placeholder="Escribe aquí tu correo electrónico" disabled>
    <button class="btn btn-outline-secondary" type="button">
      <i class="fas fa-pencil-alt"></i>
    </button>
  </div>
  <label for="documento" class="form-label">Documento</label>
  <div class="mb-3 input-group">
    <input value="50113552" type="text" class="form-control" id="documento" name="documento" placeholder="Escribe aquí tu documento" disabled>
    <button class="btn btn-outline-secondary" type="button">
      <i class="fas fa-pencil-alt"></i>
    </button>
  </div>
  <label for="telefono" class="form-label">Telefono</label>
  <div class="mb-3 input-group">
    <input value="094272390" type="text" class="form-control" id="telefono" name="telefono" placeholder="Escribe aquí tu telefono" disabled>
    <button class="btn btn-outline-secondary" type="button">
      <i class="fas fa-pencil-alt"></i>
    </button>
  </div>
  <div class="mb-3">
    <label for="ciudad" class="form-label">Ciudad</label>
    <select class="form-select" id="ciudad" name="ciudad">
      <option value="" selected disabled>Selecciona tu ciudad</option>
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
  <label for="dirección" class="form-label">Dirección</label>
  <div class="mb-3 input-group">
    <input value="Independencia 919" type="text" class="form-control" id="direction" name="dirección" placeholder="Escribe aquí tu correo electrónico" disabled>
    <button class="btn btn-outline-secondary" type="button">
      <i class="fas fa-pencil-alt"></i>
    </button>
  </div>

  <button id="changePassBtn" type="button" class="btn-sm btn-primary text-center">Cambiar contraseña</button>
  <button  type="button" class="btn-sm btn-secondary text-center" ><a class="unstyled" href="../html/historial.html">Ver historial</a></button>
  <button type="submit" class="btn-sm btn-danger  text-center">Salir</button>

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
    <input value="holasi" type="password" class="form-control" id="passOld" name="old password" placeholder="Escribe aquí tu antigua contraseña">
    <button class="btn btn-outline-secondary" type="button">
      <i class="fas fa-pencil-alt"></i>
    </button>
  </div>
  <label for="newPass1" class="form-label">Contraseña nueva</label>
  <div class="mb-3 input-group">
    <input value="holasi" type="password" class="form-control" id="newPass1" name="new password" placeholder="Escribe aquí tu nueva contraseña">
    <button class="btn btn-outline-secondary" type="button">
      <i class="fas fa-pencil-alt"></i>
    </button>
  </div>
  <label for="newPass2" class="form-label">Repite la nueva</label>
  <div class="mb-3 input-group">
  <input value="holasi" type="password" class="form-control" id="newPass2" name="new password" placeholder="Repite aquí tu nueva contraseña">
  <button class="btn btn-outline-secondary" type="button">
    <i class="fas fa-pencil-alt"></i>
  </button>
</div>

  <button id="savePassBtn" type="button" class="btn-sm btn-primary text-center">Guardar contraseña</button>

  <button type="submit" class="btn-sm btn-danger  text-center">Salir</button>

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



document.getElementById('userButton').addEventListener('click', function() {
  if (userIsConnected === 0) {
    // Si el usuario no está conectado, se muestra el modal de inicio de sesión.
    document.body.insertAdjacentHTML('beforeend', modalSignIn);
    document.body.insertAdjacentHTML('beforeend', modalRegister);
    //se muestra el login
    $('#signInModal').modal('show'); 

    //abre el registro si el usuario no tiene cuenta.
      document.getElementById('buttonRegister').addEventListener('click', function() {
        //cierra el modal de sign in
        $('#signInModal').modal('hide');
        //muestra el modal register
        $('#registroModal').modal('show'); 
        //habilita el boton volver atras.
        document.getElementById('backToSignButton').addEventListener('click', function() {
          //cierra modal registro
          $('#registroModal').modal('hide');
          //accion
          //abre modal sign in 
          $('#signInModal').modal('show'); 
        });
      });

  } else {
    // Si el usuario está conectado, se muestra el modal de usuario y se agrega un listener para el botón de cambio de contraseña.
    document.body.insertAdjacentHTML('beforeend', modalUser);
    document.body.insertAdjacentHTML('beforeend', modalChangePassword);
    $('#userModal').modal('show'); 
    document.getElementById('changePassBtn').addEventListener('click', function() {
      // Cuando se presiona el botón de cambio de contraseña, se cierra el modal de usuario y se muestra el modal de cambio de contraseña.
      $('#userModal').modal('hide');

      $('#changePassword').modal('show'); 
      //cuando se presiona el boton de guardar contraseña
      document.getElementById('savePassBtn').addEventListener('click', function() {
        // Cuando se presiona el botón de cambio de contraseña, se cierra el modal de usuario y se muestra el modal de cambio de contraseña.
        $('#changePassword').modal('hide');
       //update de password
        $('#userModal').modal('show'); 
      });
    });
  }
});




