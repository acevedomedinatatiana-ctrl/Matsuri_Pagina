// TRADUCCIÓN

function setLanguage(lang){

document.querySelectorAll("[data-es]").forEach(element => {

element.textContent = element.getAttribute("data-" + lang);

});

actualizarMensaje(lang);

}

// MENSAJE DINÁMICO

function actualizarMensaje(lang){

const hora = new Date().getHours();

let mensaje = "";

if(lang === "es"){

if(hora < 12){
mensaje = "☀️ Buenos días, explora la cultura japonesa";
}
else if(hora < 18){
mensaje = "🌸 Buenas tardes, disfruta los festivales japoneses";
}
else{
mensaje = "🌙 Buenas noches, descubre Japón";
}

}else{

if(hora < 12){
mensaje = "☀️ Good morning, explore Japanese culture";
}
else if(hora < 18){
mensaje = "🌸 Good afternoon, enjoy Japanese festivals";
}
else{
mensaje = "🌙 Good evening, discover Japan";
}

}

document.getElementById("mensaje").textContent = mensaje;

}

actualizarMensaje("es");

// SLIDER

let slides = document.querySelectorAll(".slide");

let index = 0;

function cambiarSlide(){

slides[index].classList.remove("active");

index++;

if(index >= slides.length){
index = 0;
}

slides[index].classList.add("active");

}

setInterval(cambiarSlide, 4000);