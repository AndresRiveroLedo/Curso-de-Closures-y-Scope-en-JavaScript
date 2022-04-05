/*Te lo resumo así nomás: En un loop nunca ocupes var, siempre utiliza let para valores que irán cambiando dentro de la ejecución del scope. */

//let o var
const anotherFunctionVar = () => {
    
    for(var i = 0; i < 10; i++){
          setTimeout (() => {
            console.log(i); // 10, 10, 10, 10 ,10....
          }, 1000)  
    }
}

anotherFunctionVar();
console.log(" ");

const anotherFunctionVar1 = () => {
    var i;
    for(i = 0; i < 10; i++){
          setTimeout (() => {
            console.log(i); // 10, 10, 10, 10 ,10....
          }, 1000)  
    }
}

anotherFunctionVar1();
console.log(" ");

const anotherFunctionLet = () => {
    
    for(let i = 0; i < 10; i++){
          setTimeout (() => {
            console.log(i); //0, 1, 2, 3, 4, 5, 6, 7, 8, 9...
          }, 1000)  
    }
}

anotherFunctionLet();


