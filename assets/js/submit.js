//Obtener los datos de html
const submit = document.getElementById("submit-email");
const nameS = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

//Eventos de escucha
submit.addEventListener("click", (e) => {
  //cancela el comportamiento por defecto
  e.preventDefault;
  //almacenar los datos
  dateName = nameS.value;
  dateEmail = email.value;
  dateMessage = message.value;
  //Limpiar los datos
  nameS.value = ''
  email.value = ''
  message.value = ''
  //Enviar a correo
  window.location.href=`mailto:eduardoantonio72432@gmail.com?subject=${dateEmail} ${dateName}&body=${dateMessage}`
});