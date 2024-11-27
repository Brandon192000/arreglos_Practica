//alt z para ver comentarios

let inputTexto = document.getElementById("PalabraCompleta");
let BtnPalabra = document.getElementById("BtnPalabra");
let resultadoDiv = document.getElementById("resultado");
let btnLimpiar = document.getElementById("BtnLimpiar");

/* inputTexto.addEventListener("input", function () {

    // Evento que permite solo letras y espacios (mayúsculas y minúsculas de A a Z y \s para espacios).
    inputTexto.value = inputTexto.value.replace(/[^a-zA-Z\s]/g, ""); 

}); */


BtnPalabra.addEventListener("click", function () {
    


    let palabra = inputTexto.value.trim();
    let mensaje = "";

    if (palabra === palabra.toUpperCase()) {

        mensaje = ("La palabra introducida esta escrita en letras mayusculas");

    }else if (palabra == palabra.toLowerCase()) {

        mensaje = ("La palabra introducida esta escrita en letras minusculas");

    }else{

        mensaje = ("La palabra introducida tiene convinacion entre minusclas y mayusculas");

    }

    resultadoDiv.textContent = mensaje;
    console.log(resultado)
    
});


btnLimpiar.addEventListener("click", function(){

    inputTexto.value = "";    
    resultadoDiv.textContent = "";

});