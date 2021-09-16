const submit = document.getElementById("submit-btn");

function enviarMensaje() {
  const nombre = document.getElementById("Nombre").value;
  const email = document.getElementById("Email").value;
  const asunto = document.getElementById("Mensaje").value;
  mensajeAJAX(nombre, email, asunto );
  return false;
}

function mensajeAJAX(nombre, email, asunto, url) {
  const urlCompleta = "https://quintino.ar/send-mail";
  const request = $.ajax({
    url: urlCompleta,
    type: 'POST',
    dataType: 'json',
    data: {
      nombre: nombre,
      email: email,
      asunto: asunto,
    }
  })
  request.done(function (response) {
    if (response.success) {
      document.getElementById("frm").reset();
      $('#modalExito').modal('show');
    } else {
      document.getElementById("frm").reset();
      $('#modalFail').modal('show');
    }
  })
  request.fail(function (response) {
	  console.log('fail '+ response)
    document.getElementById("frm").reset();
    $('#modalFail').modal('show');
  })
}