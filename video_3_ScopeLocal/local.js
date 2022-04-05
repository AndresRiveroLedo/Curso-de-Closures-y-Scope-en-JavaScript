
/*Primera Parte: Scope Local --------------------------- */
const helloWorld = () => {
    const hello = 'Hello World'
    console.log(hello)
}

helloWorld();
console.log(hello);

/*Segunda Parte: Scope local y global----------------------------- */
let scope = 'Im Global';

const functionScope = () =>{
    let scope = "Im just a local"
    const func = () =>{
        return scope;
    }
    console.log(func());
}

functionScope();
console.log(scope);