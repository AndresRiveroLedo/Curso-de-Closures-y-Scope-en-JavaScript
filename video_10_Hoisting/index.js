//ejemplo 1 hoisting
a = 2; 
var a;
console.log(a);

//ejemplo 2 hoisting
var a;
a = 2; 
console.log(a);

//Ejemplo 3 hoisting
console.log(a);
var a = 2;

//Ejemplo 4 Hoisting

nameDog('Kora'); //prueba de llamada antes de la creacion de la funcion
function nameDog(name){
    console.log(name);
}
nameDog("Sissi"); //prueba de llamada despues de la creacion de la funcion

//Prueba 1
var b = 10
function print(){
    console.log(b)//undefined
    var b = 20;
    console.log(b)//20
}
print()