//Primera Parte: declaracion con var
const fruits = () => {
    if(true){
        var fruit1 = "apple";
        var fruit2 = "banana";
        let fruit3 = "kiwi"; 
        console.log(fruit3);
    }

    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);//error por el block scope
}

fruits();

//Segunda Parte: declaracion con let y const
const fruits1 = () => {
    if(true){
        const fruit1 = "apple";
        let fruit2 = "banana";
        let fruit3 = "kiwi";
     /*   console.log(fruit1); 
        console.log(fruit2); 
        console.log(fruit3);*/
    }

    console.log(fruit1); //error por el block scope
    console.log(fruit2); //error por el block scope
    console.log(fruit3);//error por el block scope
}

fruits1(); 

//Tercera Parte: declaracion con let, var y const
const fruits2 = () => {
    if(true){
        const fruit1 = "apple";
        let fruit2 = "banana";
        var fruit3 = "kiwi";
        
        console.log(fruit1);
        console.log(fruit2);
    }

   /* console.log(fruit1);
    console.log(fruit2);*/
    console.log(fruit3);
}

fruits2(); /*Good*/

//Cuarta Parte let y var
let x = 1;
{
    let x = 2;
    console.log(x);//Scope Local = 2
}
console.log(x); //scope local = 1

//--------
var x1 = 1;
{
    let x1 = 2;
    console.log(x);//Scope Local = 2
}
console.log(x1); //scope local = 1

//-------------------
var x2 = 1;
{
    var x2 = 2;
    console.log(x);//Scope Local = 2
}
console.log(x2); //scope local = 2

//let o var
const anotherFunctionVar = () => {
    
    for(var i = 0; i < 10; i++){
          setTimeout (() => {
            console.log(i);
          }, 1000)  
    }
}

anotherFunctionVar();
console.log(" ");

const anotherFunctionVar1 = () => {
    var i;
    for(i = 0; i < 10; i++){
          setTimeout (() => {
            console.log(i);
          }, 1000)  
    }
}

anotherFunctionVar1();
console.log(" ");

const anotherFunctionLet = () => {

    for(let i = 0; i < 10; i++){
          setTimeout (() => {
            console.log(i);
          }, 1000)  
    }
}

anotherFunctionLet();

/*El block scope gue algo que me rompi?? cuando lo aprend??, porque si no me equivoco, no hay m??s lenguajes que lo tengan jaja (o igual si) pero a??n no los conozco

Para explicar un poco mejor qu?? fue lo que sucedi?? con el timeOut, al declarar con ???var??? la variable ???i??? dentro del for, lo que estamos haciendo es declarar una variable global llamada ???i???, y con cada iteraci??n del for estamos sobreescribiendo esa variable, el for del 1 al 10 se ejecuta en menos de un segundo, es decir, una computadora es r??pida ejecutando c??digo, pero el setTimeout se ejecutar?? despu??s de un segundo, JavaScript NO se va a quedar esperando que cada setTimeout se ejecute, simplemente JavaScript va a ver que hay un setTimeout y lo va a poner en su cola de tareas (Ver el curso de as??ncronismo con JavaScript y el curso profesional de JavaScript para entender esto mejor), el caso es que, cuando pasa un segundo, los 10 setTimeouts que JavaScript puso en cola (Uno por cada iteraci??n) se ejecutan, y como ???i??? es una variable global que fue sobreescrita, se quedo con el ??ltimo valor de 10 (Porque aunque la condici??n del ??ltimo ciclo no se cumpli??, la variable si fue asignada para poder evaluar la condici??n), y es por eso que todos los setTimeouts miran el valor de la variable y todos acaban obteniendo ???10???, con let, como saben, no se puede sobreescribir la variable, y tenemos un ???let??? diferente por cada iteraci??n (Imaginen que cada iteraci??n es un bloque de c??digo totalmente diferente), entonces, cada setTimeout agarra el ???let??? que est?? dentro de su propio bloque de c??digo, y como es ??nico gracias al scope, ah?? si que se imprimen del 1 al 9:D! 


Con var , tiene un scope de funci??n y solo un enlace compartido para todas sus iteraciones de bucle, es decir, i en cada callback setTimeout significa la misma variable que finalmente es igual a 6 despu??s de que finaliza la iteraci??n del bucle.

Con let tener un scope de bloque y cuando se utiliza en el ciclo for obtiene un enlace nuevo para cada iteraci??n, es decir, el i en cada callback setTimeout significa una variable diferente, cada una de las cuales tiene un valor diferente: la primera es 0, la el siguiente es 1 etc.

Ahora, ??Pero por qu?? me devuelve 10 veces 10? ??No deber??a devolverme 10 veces 9?
veamos la declaraci??n del ciclo for:

for (var i = 0; i < 10; i++) {
	...
}

El ciclo for termina cuando la condici??n (i < 10) sea falsa, osea que mientras sea verdadera el recorrer?? el ciclo. La variable i aumentar?? su valor en 1 (i++) por cada iteraci??n, osea que tomar?? estos valores: (0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10). Toma el 10 porque es ese el valor donde la condici??n (i < 10) es falsa puesto que 10 no es menor que 10, si no que es igual??? y el ciclo termina.
Espero haberles ayudado y que hayan aclarado sus dudas!

*/

