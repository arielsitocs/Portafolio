var gmail = document.getElementById("gmail");
var formulario = document.getElementById("form");

if(gmail != null) {
    gmail.addEventListener("click", function(){
        formulario.scrollIntoView({behavior: "smooth"});
    }) 
}