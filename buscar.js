$(document).ready(function() {
  $("#boton").click(function(){
    console.log("click")

    limpiar()

    $.ajax({
      url: "http://127.0.0.1:5000/buscar",
      data: $("#correo").serialize(),
      type: "POST",
      success: function(respuesta){
        console.log(respuesta)
        mostrar(respuesta)
      },
      error: function(respuesta){
        console.log(respuesta)
      }
    })
  })
})

function mostrar(respuesta){
  $.each(respuesta, function(index,valor){
    var fila = "<tr id='datos'>"
    fila += "<td>" + valor["correo"] + "</td>"
    fila += "<td>" + valor["nombre"] + "</td>"
    fila += "<td>" + valor["apellido1"] + "</td>"
    fila += "<td>" + valor["apellido2"] + "</td>"
    fila += "<td>" + valor["idVendedor"] + "</td>"
    fila += "</tr>"

    $("#resultados").append(fila)
  })
}
function limpiar(){
  $("#resultados").find("tr[id='datos']").each(function(index,value){
    value.remove()
  })
}
