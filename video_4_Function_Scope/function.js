//Primero Parte 
const fruits = () => {
    let fruit = "apple";
    console.log(fruit);

}

fruits();
//console.log(fruit); //error

//Segunda parte
const anotherFunction = () => {
    var x = 1;
    var x = 2
    let x = 3;
    var y = 3;
    let y = 4;
    console.log(x);
    console.log(y);
}

anotherFunction(); //Error por doble declaracion de variable.