const modalChangePassword = `
<div class="modal fade" id="changePassword" tabindex="-1" aria-labelledby="UserModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="text-center">Cambiar contraseña</h3>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <!--Register body starts-->

        <form id="changePasswordForm" class="needs-validation" novalidate>
          <label for="passO
          
          ld" class="form-label">Contraseña antigua</label>
          <div class="form-outline mb-4">
            <input id="oldPass" value="" type="password" class="form-control" name="register_user_password" placeholder="Escribe aquí tu antigua contraseña">
            <div id="feedback_oldPass" class="invalid-feedback" data-feedback="oldPass"></div>
      
          </div>
          <label for="newPass1" class="form-label">Contraseña nueva</label>
          <div class="form-outline mb-4">
            <input type="password" class="form-control" id="newPass1" name="newPass1" placeholder="Escribe aquí tu nueva contraseña">
            <div id="feedback_newPass1" class="invalid-feedback" data-feedback="newPass1"></div>
   
          </div>
          <label for="newPass2" class="form-label">Repite la nueva</label>
          <div class="form-outline mb-4">
            <input type="password" class="form-control" id="newPass2" name="newPass2" placeholder="Repite aquí tu nueva contraseña">
            <div id="feedback_newPass2" class="invalid-feedback" data-feedback="newPass2"></div>
     
          </div>
          <button id="savePassBtn" type="Submit" class="btn-sm btn-primary text-center">Guardar contraseña</button>
          
          <p class="text-center text-muted mt-5 mb-0"> <a id="backToUserModal" href="#!" class="fw-bold text-body">Volver sin cambiar.</a></p>
        </form>

        <!--Register body ends-->
      </div>
    </div>
  </div>
</div>
`;
