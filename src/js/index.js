var gmail = document.getElementById("gmail");
var formulario = document.getElementById("form");

/* Evento de icono de Gmail */

if(gmail != null) {
    gmail.addEventListener("click", function(){
        formulario.scrollIntoView({behavior: "smooth"});
    }) 
}
