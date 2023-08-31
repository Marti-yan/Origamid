function areaQuadrada(lados) {
    return lados * lados
}

console.log(areaQuadrada(4))

function pi() {
    return 3.14
}
var total = 5 * pi();
console.log(total)


// peso e altura são os parâmetros
function imc(peso, altura) {
    const imc = peso / (altura ** 2);
    return imc;
}

console.log(imc(80, 1.80)) // 80 e 1.80 são os argumentos
console.log(imc(60, 1.70)) // 60 e 1.70 são os argumentos


function corFavorita(cor) {
    if (cor === 'vermelho') {
        return 'vermelho';
    } else if (cor === 'verde') {
        return 'verde';
    } else {
        return 'azul'
    }
}
console.log(corFavorita('verde'))


// addEventListener('click', function () {
//     console.log('Clicou');
// });
// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima

// function console() {
//     console.log('Oi')
// }
// addEventListener('click', mostrarConsole)


// //////////////////////////////////////////////////////////////////

function imc2(peso, altura) {
    const imc = peso / (altura ** 2);
    console.log(imc);
}

imc(80, 1.80); // retorna o imc
console.log(imc2(80, 1.80)); // retorna o imc e undefined


var idade = 65
function terceiraIdade(idade) {
    if (typeof idade !== 'number') {
        return 'Informe a sua idade!';
    } else if (idade >= 60) {
        return true;
    } else {
        return false;
    }
}
console.log(terceiraIdade(idade))


// ////////// exercicio //////////////////////////
// Crie uma função para verificar se um valor é Truthy
function verificar(dado) {
    return !!dado
}
console.log(verificar(0))

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetro(lado) {
    return lado * 4;
}
console.log(perimetro(5))

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
var nome = 'Yan', sobrenome = 'Martins';
function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`
}
console.log(nomeCompleto(nome, sobrenome));


// Crie uma função que verifica se um número é par

function par(n) {
    if (n % 2 == 0) {
        console.log(`O valor ${n} é um numero par`)
        return true
    } else {
        console.log(`O valor ${n} não é um numero par`)
        return false
    }
}
console.log(par(4))

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDeDado(dado) {
    return typeof dado;
}
console.log(tipoDeDado('null'))



// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('scroll', function () {
    console.log("yan martins")
})



// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

console.log(precisoVisitar(20))
console.log(jaVisitei(20))
