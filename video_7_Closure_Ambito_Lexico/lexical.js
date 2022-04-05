const buildCount = (i) =>{
    let count = i;
    const displayCount = () =>{
        console.log(count++);
    }

    return displayCount;
}

//Primer ambito lexico
const myCount = buildCount(1);
myCount();
myCount();
myCount();

//segundo ambito lexico
const myOtherCount = buildCount(10);
myOtherCount();
myOtherCount();
myOtherCount();
