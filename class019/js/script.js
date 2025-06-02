/*
Faça um programa para mudar o fundo da aplicação para uma
cor do arco-íris a cada 1 segundo.
Mantenha em loop.
Utilizar async/await
*/

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let changecolor = async () => {
    let colorindex = 0;
    setTimeout(() => {}, 3000);
};

let returnPromise = () => {};

let doTimeOut = async () => {
    await returnPromise((document.body.style.backgroundColor = 'red'));
    await returnPromise((document.body.style.backgroundColor = 'orange'));
    await returnPromise((document.body.style.backgroundColor = 'yellow'));
    await returnPromise((document.body.style.backgroundColor = 'green'));
    await returnPromise((document.body.style.backgroundColor = 'blue'));
    await returnPromise((document.body.style.backgroundColor = 'indigo'));
    await returnPromise((document.body.style.backgroundColor = 'violet'));
};
