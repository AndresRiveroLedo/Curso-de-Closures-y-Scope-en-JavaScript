//Primera Parte.Sin estructura closure.
const moneyBox = (coins) => {
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`)
}

moneyBox(5); //nos devuelve $5
moneyBox(10); //nos devuelve $10. No suma(mal)

//Segunda Parte
var saveCoins = 0;

const moneyBox1 = (coins) => {
    saveCoins += coins;
    console.log(saveCoins);
}

moneyBox1(5); //5
moneyBox1(10); //15

//Tercera Parte. Estructura de un closure.
const moneyBox2 = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`)
    }
    return countCoins; //nos retorna la funciona que declaramos anteriormente.
}

let myMoneyBox = moneyBox2();

myMoneyBox(5); //5 . Aqui realmente 
myMoneyBox(10);//15
myMoneyBox(11);//26