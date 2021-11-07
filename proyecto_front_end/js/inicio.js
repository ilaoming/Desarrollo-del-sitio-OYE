var canciones;
var max_reproduciones = [];
var aux_reproducciones = [];

$(document).ready(function () {

  //Carga los datos que estan en el JSON (datos.json) usando AJAX
  $.ajax({
    url: "datos.json"
  }).done(function (resultado) {

    //Guarda el resultado en variables
    canciones = resultado.canciones;

    //Selecciona las  reproducciones de las canciones del archivo JSON y las almacena en aux_reproducciones
    for(var i = 0; i < canciones.length; i++){
        aux_reproducciones[i] = canciones[i].reproducciones;
    }
    //Guardamos en un nuevo arreglo las 3 mas reproducidas. Es decir retorna en un nuevo arreglo con los valores mas altos almacenados en aux_reproducciones
    max_reproduciones = aux_reproducciones.sort(function (a, b) { return b - a; }).slice(0, 3);

    var html = "";
    
    //Realizamos un filtro en base a las canciones mas reproducidas.
    //Insertamos los datos del JSON dinamicamente en el HTML modificando el DOM, el contenido se ingresa en el div con id = "contenedor_canciones" del archivo index.html
    for (var index in canciones) {
      if (canciones[index].reproducciones == max_reproduciones[0] || canciones[index].reproducciones == max_reproduciones[1] || canciones[index].reproducciones == max_reproduciones[2]) {

        html += `
        <div class="row">
        <div class="col d-none d-sm-block">
          <p class="">${canciones[index].nombre}</p>
        </div>
        <div class="col">
        <audio controls class="col-12 mx-auto text-center border border-dark">
        <source src="./canciones/${canciones[index].ruta}" type="audio/mp3" id="" >
            Tu navegador no soporta audio HTML5.
        </audio>
        </div>
        </div>
        <hr>
        `;

      }
 
    }

    document.getElementById("contenedor_canciones").innerHTML = html;

  })

});