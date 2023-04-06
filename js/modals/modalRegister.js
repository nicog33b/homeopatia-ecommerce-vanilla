
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

        <form id="formRegister">
        <label class="form-label" for="register_user_email">Email</label>
        <div class="form-outline mb-4">
        <input  name="email" type="email" id="register_user_email" class="form-control form-control-lg" />
        <div class="valid-feedback">
        </div>
       <div class="invalid-feedback">
        </div>
        
        <div class="form-outline mb-4">
        <label class="form-label" for="register_user_nombre_completo">Nombre completo</label>
        <input name="nombreCompleto" type="String" id="register_user_nombre_completo" class="form-control form-control-lg"/>
        </div>

        <div class="form-outline mb-4">
        <label for="register_fecha_nacimiento">Fecha de nacimiento:</label>
        <input name="fechaNacimiento"class="form-control form-control-lg" type="String" id="register_fecha_nacimiento" name="register_fecha_nacimiento">
        </div>


        <div class="form-outline mb-4">
        <label class="form-label" for="register_user_password">Contraseña</label>
        <input name="pass1" type="password" id="register_user_password" class="form-control form-control-lg" />
        </div>
        
        <div class="form-outline mb-4">
        <label class="form-label" for="register_user_password_confirm">Repite contraseña</label>
        <input type="password" name="pass2" id="register_user_password_confirm" class="form-control form-control-lg" />
       
        </div>
        <div class="d-flex justify-content-center">
        <button id="registerForm" type="Submit" class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Registrar</button>
        </div>
        
        <p class="text-center text-muted mt-5 mb-0"> <a id="backToSignButton" href="#!" class="fw-bold text-body">¿Ya tienes cuenta?</a></p>
        
        </form>
        
        </main>
        
      </div>
     </div>
  </div>
</div>  
`;