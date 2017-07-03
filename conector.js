$(document).ready(function(){
  console.log("Cargado!")
  mostrar()
})

function mostrar(){
  $.ajax({
    url:"http://127.0.0.1:5000/casas",
    success:function(respuesta){
      mostrarResultados(respuesta)
    },
    error:function(respuesta){
      console.log(respuesta)
    }
  })
}

function mostrarResultados(resultados){
  $.each(resultados,function(index,valor){
    var row =  '<tr>'
    row += '<td>' + valor[0] + '</td>'
    row += '<td>' + valor[1] + '</td>'
    row += '<td>' + valor[2] + '</td>'
    row += '<td>' + valor[3] + '</td>'
    row += '<td>' + valor[4] + '</td>'

    $("#tablaCompradores").append(row)
  })
}
