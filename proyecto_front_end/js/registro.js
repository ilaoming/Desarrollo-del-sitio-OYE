function validate(form) {
        //Expresion regular para validar un formato de email correcto.
        var exp_regular = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //Test para comprobar que el campo email cumpla con la expresion regular
        if (!exp_regular.test(form.email.value)) {
            document.getElementById("error_email").innerHTML = "Email incorrecto*"
            return false;
        }else{
            document.getElementById("error_email").innerHTML = ""
        }

        //Comprobamos si el campo contraseña  esta vacio
        if (form.pass.value.trim().length == 0) {
            document.getElementById("error_pass").innerHTML = "Contraseña obligatoria*"
            return false;
        }else{
            document.getElementById("error_pass").innerHTML = ""
        }

        //comprobamos si la contraseña tienes menos de 8 carateres.
        if (form.pass.value.trim().length <=8 ) {
            document.getElementById("error_pass").innerHTML = "La contraseña debe tener mas de 8 caracteres*"
            return false;
        }else{
            document.getElementById("error_pass").innerHTML = ""

        }

            //comprobamos si las contraseñas no coinciden.
        if (form.pass.value != form.pass_confir.value) {
                document.getElementById("error_pass_confir").innerHTML = "Las contraseñas no coinciden*"
                return false;
        }else{
           document.getElementById("error_pass_confir").innerHTML = ""

        }
        //Comprobamos si el selec genero  esta vacio
        if (form.genero_musical.value == "") {
            document.getElementById("error_genero_musical").innerHTML = "Genero musical obligatorio*"

            return false;
        }else{
            document.getElementById("error_genero_musical").innerHTML = ""

        }
        
        //Comprobamos si el radio edad  esta vacio
        if (form.edad.value == "") {
            document.getElementById("error_edad").innerHTML = "Edad obligatoria*"
            return false;
        }else{
            document.getElementById("error_edad").innerHTML = ""

        }

        //Comprobamos si el check terminos  no esta checked
        if (!form.terminos.checked) {
            document.getElementById("error_terminos").innerHTML = "Debe aceptar los términos y condiciones*"
            return false;
        }else{
            document.getElementById("error_terminos").innerHTML = ""

        }

        //limpia los campos del formulario
        form.email.value = "";
        form.pass.value = "";
        form.pass_confir.value = "";
        form.genero_musical.value = "";
        form.terminos.checked = false;
        document.getElementById("menor_20").checked = false;
        document.getElementById("mayor_20").checked = false;
        document.getElementById("mayor_50").checked = false;

        //enviamos una alerta personalizada de registro exitoso y bienvenida
        document.getElementById("alerta_bienvenido").innerHTML = alerta("Tu registro fue exitoso bienvenido a Oye Music","primary");
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
