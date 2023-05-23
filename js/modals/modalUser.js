const modalUser = `
<div class="modal fade " id="userModal" tabindex="-1" aria-labelledby="UserModalLabel" aria-hidden="true" >
<div class="modal-dialog " >
<div class="modal-content" >
  <div class="modal-header">
  <h3 class="text-center">Datos del perfil</h3>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">
<!--Register body starts-->


<form id="userDataForm">
<label for="user_nombre" class="form-label">Nombre completo</label>
  <div class="input-group">
    <input value="" type="text" class="form-control edit-input" id="user_nombre" name="register_user_nombre_completo" placeholder="Escribe aquí tu nombre" disabled>
  </div>
  <label for="user_email" class="form-label">Correo electronico</label>
  <div class="mb-3 input-group">
    <input value="" type="email" class="form-control" id="user_email" name="email" placeholder="Escribe aquí tu correo electrónico" disabled>
 
    <div id="feedback_user_nombre" class="invalid-feedback" data-feedback="user_email">
    </div>
  </div>
  
  <label for="user_telefono" class="form-label">Telefono</label>
  <div class="mb-3 input-group">
    <input value="" type="text" class="form-control edit-input" id="user_telefono" name="telefono" placeholder="Escribe aquí tu telefono" disabled>
    <div id="feedback_user_telefono" class="invalid-feedback" data-feedback="user_telefono">
    </div>
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
    <input value="" type="text" class="form-control edit-input" id="user_direccion" name="direccion" placeholder="Escribe aquí tu correo electrónico" disabled>

    </div>
    <br>
    <div class="mb-3 input-group userModalOptions">

    <button id="changeDatesUser" type="button" class="btn btn-secondary w-100 mx-3 border text-center">Editar datos</button>
    <br>
    <button id="buyHistoryBtn" type="button" class="btn btn-primary w-100 mx-3 border text-center" >Historia de compras</button>
    <button id="changePassBtn" type="button" class="btn btn-primary w-100 mx-3 border text-center">Cambiar contraseña</button>
    <button id="userLogoutBtn" type="button" class="btn btn-primary w-100 mx-3 border text-center">Cerrar session</button>

    </div>

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