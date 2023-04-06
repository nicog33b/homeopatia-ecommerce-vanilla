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
    <div class="mb-3 input-group userModalOptions">

    <button id="changePassBtn" type="button" class="btn btn-primary w-100 mx-3 border text-center">Cambiar contraseña</button>
    <button id="buyHistoryBtn" type="button" class="btn btn-primary w-100 mx-3 border text-center" >Historia de compras</button>
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