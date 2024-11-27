let pinguinos = [

    {name: "Gunter",  
    origin: "Adventure Time",  
    canFly: false,  
    sayHello: function () {  
    console.log("QUACK!!!");  
    }},
    
    {name: "Ramón",  
    origin: "Happy Feet",  
    canFly: true,  
    sayHello: function () {  
    console.log("Estoy encantado de conocerle.");  
    }},
    
    {name: "Fred",  
    origin: "Sitting Ducks",  
    canFly: false,  
    sayHello: function () {  
    console.log("Hi there!");  
    }} 

];

//-------------------------------------------------------------------------------------------------------------------------------------------//
//Imprimir todos los nombres en consola, lo que hago es iterar por todos los objetos del arreglo y con la propiedad name del objeto muestro todos los nombres//
for (let i = 0; i < pinguinos.length; i++) {
    const element = pinguinos[i];

    alert = (`El nombre del pinguino es: (${element.name})`)
    console.log(element.name)
    
}

/* pinguinos.forEach(element => {
    if (element === element.name) {
        const nombres = `el nombre del pinguino es (${element.name})`;
        console.log(nombres);
        return; 
    }
}); */

//-----------------------------------------------------------------------------------------------------------------------------------------//

console.log(pinguinos.length);//imprimo el tamanio del arreglo en consola

//-----------------------------------------------------------------------------------------------------------------------------------------//

//Cambio el pinguno por un elemento nuevo que en este caso sera carlos que cambiara con fred que esta en el tercer indice.
const element = pinguinos[2];

element.name = "Carlos";
element.origin = "Alajuela";
element.canFly = true;
element.sayHello = "Hellowdah"

console.log(element);

console.log(pinguinos);
    
//--------------------------------------------LA MISMA-----------------------------------------------------------------//
for (let i = 0; i < pinguinos.length; i++) {

    const element = pinguinos[i];

    if (element.canFly === true) {
        const resultado = (`Los pingunios que pueden volar son (${element.name})`);
        console.log(resultado) 
    }
}

pinguinos.forEach(element => {
    if (element.canFly === true) {
        const resultadoPrimero = `Los pingunios que pueden volar son (${element.name})`;
        console.log(resultadoPrimero);
        return; 
    }
});

//-----------------------------------------------------------------------------------------------------------------------//

//------------------------------primer pinguino que puede volar y su oringe----------------------------------------------//
for (let i = 0; i < pinguinos.length; i++) {
    if (pinguinos[i].canFly) {

        console.log(`El primer pinguno que puede volar es ${pinguinos[i].name} y su origen es: ${pinguinos[i].origin}`);
        break; 
    }
}
//-------------------------------------------------------------------------------------------------------------------------//

//----------------------------------Asignar cantidadHijos a cada pingüino--------------------------------------------------//
pinguinos.forEach(pinguino => {
    pinguino.cantidadHijos = Math.floor(Math.random() * 5) + 1; // Generar entre 1 y 5 hijos
});

// Mostrar los pingüinos con su cantidad de hijos
console.log(pinguinos);

//--------------------------------------------------------------------------------------------------------------------------//

//----------------------------------------------origen happy----------------------------------------------------------------//

const origenHappy = pinguinos.filter(pinguino => pinguino.origin.includes("Happy"));
console.log("El Pingüino cuyo origen contiene 'Happy' es:", origenHappy);

//--------------------------------------------------------------------------------------------------------------------------//

const pinguinosConMasDeDosHijos = pinguinos.filter(pinguino => pinguino.cantidadHijos > 2);
console.log("Pingüinos con más de 2 hijos:", pinguinosConMasDeDosHijos);

//--------------------------------------------------------------------------------------------------------------------------//
const nuevoPinguino = {
    name: "Alvaro",
    origin: "Esquipulas",
    canFly: true,
    sayHello: function () {
        console.log("Hola, soy del ghetto");
    }
};

pinguinos.splice(1, 0, nuevoPinguino);//inserta a alvaro en la posiciion 2

console.log("arreglo con cambios", pinguinos);