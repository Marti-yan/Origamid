// const promessa1 = new Promise((resolve, reject) => {
//     let condicao = true;
//     if (condicao) {
//         resolve('Estou pronto!');
//     } else {
//         reject(Error('Um erro ocorreu.'));
//     }
// });

// promessa1.then(resolucao => { console.log(resolucao) }); // 'Estou pronto!'



// const promessa2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Resolvida');
//     }, 1000);
// });


// const retorno = promessa2
//     .then(resolucao => {
//         resolucao.profissao = 'programmer';
//         return resolucao
//     })
//     .then(resolucao => {
//         console.log(resolucao)
//     })
// console.log(retorno)

// const promessa3 = new Promise((resolve, reject) => {
//     resolve('Etapa 1');
// });

// promessa3.then(resolucao => {
//     console.log(resolucao); // 'Etapa 1';
//     return 'Etapa 2';
// }).then(resolucao => {
//     console.log(resolucao) // 'Etapa 2';
//     return 'Etapa 3';
// }).then(r => r + 4)
//     .then(r => {
//         console.log(r); // Etapa 34
//     });



// const promessa4 = new Promise((resolve, reject) => {
//     let condicao = false;
//     if (condicao) {
//         resolve('Estou pronto!');
//     } else {
//         reject(Error('Um erro ocorreu.'));
//     }
// });

// promessa4.then(resolucao => { console.log(resolucao) }
//     , (reject => { console.log(reject) }) // sem o .catch - passado como segundo argumento do .then
// )
//     // .catch(reject => { console.log(reject) })


// finally() executará a função anônima assim que a promessa acabar. A diferença do finally é que ele será executado independente do resultado, se for resolvida ou rejeitada.

// const promessa5 = new Promise((resolve, reject) => {
//     let condicao = true;
//     if (condicao) {
//         resolve('Estou pronto!');
//     } else {
//         reject(Error('Um erro ocorreu.'));
//     }
// });

// promessa5.then(resolucao => {
//     console.log(resolucao);
// }, reject => {
//     console.log(reject);
// }).finally(() => { // executara de qualquer jeito
//     console.log('Acabou'); // 'Acabou'
// });


const login = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Usuario Logado')
        // console.log('Login')
    },1000)
})

const dados = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Dados carregados')
        // console.log('Dados carregados')
    },500)
})

const tudoCarregado = Promise.all([login,dados]) // espera todas promisses serem resolvidas 
const tudoCarregado2 = Promise.race([login,dados]) // retorna a primeira promisse resolvida

tudoCarregado2.then((result) => {
    console.log(result)
})
tudoCarregado.then((result) => {
    console.log(result)
})
