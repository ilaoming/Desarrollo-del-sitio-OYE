var canciones;


$(document).ready(function () {

  //Carga los datos que estan en el JSON (datos.json) usando AJAX
  $.ajax({
    url: "datos.json"
  }).done(function (resultado) {

    //Guarda el resultado en variables
    canciones = resultado.canciones;

    var html = "";
    //Inserta los datos del JSON dinamicamente en el HTML modificando el DOM, el contenido se ingresa en el div con id = "row_canciones" del archivo canciones.html
        for (var index in canciones) {
            html += `
            <div class="col-lg-4 col-md-6 col-sm-12 my-2">
            <div class="card">
              <img src="./imagenes/${canciones[index].icono}.svg" class="card-img-top" alt="..." id="">
              <div class="card-body">
                <h5 class="" id="">${canciones[index].nombre}</h5>
                <audio controls class="col-12">
                  <source src="./canciones/${canciones[index].ruta}" type="audio/mp3" id="">
                      Tu navegador no soporta audio HTML5.
              </audio>
              </div>
            </div>
          </div>
            `;
        }
        document.getElementById("row_canciones").innerHTML = html;
  })

});

//realizamos una busqueda por nombre con ayuda de la funcion reservada indexOf, buscamos una coincidencia del  contenido del campo buscar con los nombres de las canciones actuales almacenados en el archivo JSON
// Luego inserta los datos del JSON dinamicamente en el HTML modificando el DOM, el contenido se ingresa en el div con id = "row_canciones" del archivo canciones.html
function buscar() {
    var html_buscar = ""
    var campo = document.getElementById("buscar").value.toUpperCase()
    for (var j in canciones){
       if (canciones[j].nombre.toUpperCase().indexOf(campo) !== -1) {   
           
       html_buscar += `
       <div class="col-lg-4 col-md-6 col-sm-12 my-2">
       <div class="card">
         <img src="./imagenes/${canciones[j].icono}.svg" class="card-img-top" alt="..." id="">
         <div class="card-body">
           <h5 class="" id="">${canciones[j].nombre}</h5>
           <audio controls class="col-12">
             <source src="./canciones/${canciones[j].ruta}" type="audio/mp3" id="">
                 Tu navegador no soporta audio HTML5.
         </audio>
         </div>
       </div>
     </div>
       `;
       }
    }
    document.getElementById("row_canciones").innerHTML = html_buscar;
   }


   
   



