//Navegador chrome url: about:blank
//Primera Parte. DEBUGGER.
var a = "hello";

function hello(){
    let b = 'Hello "World';
    const c = 'Hello World!';
    if(true){
        let d = 'Hello World!!';
        debugger
    }
}

hello();

//Seguna Parte. DEBUGGER.
const moneyBox = () => {
    debugger
    var saveCoins = 0;
    const countCoins = (coins) => {
        debugger
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`)
    }
    return countCoins; //nos retorna la funciona que declaramos anteriormente.
}

let myMoneyBox = moneyBox();

myMoneyBox(5); //5 . Aqui realmente 
myMoneyBox(10);//15
myMoneyBox(11);//26