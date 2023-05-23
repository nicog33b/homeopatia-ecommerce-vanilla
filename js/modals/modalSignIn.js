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
          <form id="signInForm" class="needs-validation" novalidate>
            <div class="registerTitle text-center">
            <a href="home.html">Homeopatía <br>Larrosa</a>
          </div>
            <h1 class="h3 mb-3 fw-normal"></h1>
       ¡Entra a tu cuenta!
            <div class="form-floating">
            <input type="email" class="form-control" id="login_user_email" name="login_user_email" placeholder="name@example.com" required>
            <div id="feedback_email" class="invalid-feedback" data-feedback="login_user_email"></div>
            </div>
            <div class="form-floating">
              <input type="password" class="form-control" id="login_user_password" placeholder="Password" required>
              <div id="feedback_password" class="invalid-feedback" data-feedback="login_user_password"></div>
            </div>
            <div class="mb-3">
              <label>
             <a id="buttonRegister" href="#" value="registrarse" > ¿No tienes cuenta? registrate.</a>
              </label>
            </div>
            <button id="signInButtonConfirm" class="w-100 btn btn-lg btn-primary" type="Submit">Sign in</button>
            </br>
        
          </form>
        </main>
        
      </div>
     </div>
  </div>
</div>  
`;