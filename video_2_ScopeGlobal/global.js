
var hello = 'HELLO';
var hello = 'HELLO'; // declaramos dos veces var hello: Esto NO causa error

//Inicio de Bloque de Buena Practica-------------------------
let world = 'Hello World';
/*let world = 'Hello World'; //declaramos dos veces let world: Esto SI causa error*/

const helloWorld = 'Hello World';
console.log(hello);

const anotherFunction1 = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction1();
//Fin de Bloque de Buena Practica-------------------------

//Inicio Bloque "Mala Practica"--------------------------
const helloWorld1 = () => {
    globalVar = "im global";
}

helloWorld1(); //Primero: llamamos a la funcion helloWorld()
console.log(globalVar) //Segundo: usamos la variable dentro de la funcion helloWorld()

const anotherFunction = () => {
    var localVar = globalVar = 'Im Global';
}

anotherFunction();
console.log(globalVar);
console.log(localVar); //No podemos usar localVar porque su declaracion (var) es local

/*Esto se considera una mala practica en el desarrollo de software. Usar variables de una funcion
en el scope global*/
//Fin Bloque "Mala Practica"----------------------------------------


