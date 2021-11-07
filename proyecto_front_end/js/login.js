function validate(form) {
    //Expresion regular para validar un formato de email correcto.
    var exp_regular = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //Test para comprobar que el campo email cumpla con la expresion regular
    if (!exp_regular.test(form.email.value)) {
        document.getElementById("error_aviso").innerHTML = alerta("Email inválido.","danger")
        return false;
}
    //Comprobamos si el campo contraseña  esta vacio
    if (form.pass.value.trim().length == 0) {
        document.getElementById("error_aviso").innerHTML = alerta("Contraseña obligatoria.","danger")
        return false;
}
    //comprobamos si la contraseña tienes menos de 8 carateres.
    if (form.pass.value.trim().length <=8 ) {
        document.getElementById("error_aviso").innerHTML = alerta("La contraseña debe tener mas de 8 caracteres","danger");
        return false;
}
      //limpiamos los campos del formulario
      form.email.value = "";
      form.pass.value = "";
    //mensaje de bienvenida.
    document.getElementById("error_aviso").innerHTML = alerta("Bienvenido a Oye Music ~ Proyecto Local.","info")
    return true
}

//definimos una funcion que retorna un alert, recibe como parametros el texto del alert y el tipo de alerta (primary, danger, warning etc)
function alerta(texto,tipo) {
  var html = `
    <div class="alert alert-${tipo}" role="alert">
    ${texto}
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
    </div>`
    return html
}