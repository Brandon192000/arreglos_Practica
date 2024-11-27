let btnLimpiar = document.getElementById("btnLimpiar");

function verificarPalindromo(){

    let ResultadoDiv = document.getElementById("resultado");
    let palabra  = document.getElementById("PalabraCompleta").value;
    
    // Verificar si el input tiene algún valor
    if (palabra === "") {
        ResultadoDiv.textContent = "Por favor, ingresa una palabra.";
        ResultadoDiv.className = "alert alert-danger text-center";
        return; 
    }
    
    let palabraSinEspacio = palabra.replace(/\s+/g,'' ).toLowerCase();
    let palabraInvertida = palabraSinEspacio.split("").reverse().join("");
    

    if (palabraSinEspacio === palabraInvertida ) {
        ResultadoDiv.textContent = (`El texto ingresado (${palabra}) es palindromo`);
        ResultadoDiv.className = "alert alert-success text-center";
    }else{
        ResultadoDiv.textContent = (`El texto ingresado (${palabra}) no es palindromo`);
        ResultadoDiv.className = "alert alert-success text-center";
    }
    console.log(palabra);   

}

btnLimpiar.addEventListener("click", function(){

    let ResultadoDiv = document.getElementById("resultado");
    let palabra  = document.getElementById("PalabraCompleta");

    
    palabra.value = "";

    
    ResultadoDiv.textContent = "";
    ResultadoDiv.className = "";


});