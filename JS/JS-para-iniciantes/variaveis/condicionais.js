var possuiGraduacao = true;

if(possuiGraduacao){
    console.log("tem")
}else{
    console.log("não tem")
}

if(!possuiGraduacao){
    console.log("tem")
}else{
    console.log("não tem")
}



// Falsy
if(false)
if(0) // ou -0
if(NaN)
if(null)
if(undefined)
if('') {}// ou "" ou ``

// Truthy
if(true)
if(1)
if(' ')
if('andre')
if(-5)
if({});


// O operador !, nega uma operação booleana. Ou seja, !true é igual a false
// Truthy
if(!true) // false
if(!1) // false
if(!'') // true
if(!undefined) // true
if(!!' ') // true
if(!!''); // false


// ////////////   SWITCH     ////////////////
var corFavorita = "Azul";

switch (corFavorita) {
    case 'azul':
        console.log("olha para o céu")
        break
    case 'Amarelo':
        console.log("amarelo para o sol")
        break
    default:
        console.log("Feche os olhos.")
}



//  ///////////////   EXERCICIOS   ////////////////////////

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

let minhaIdade = 19, IdadeParente = 15;
if (minhaIdade > IdadeParente) {
    console.log("É maior")
} else if (minhaIdade < IdadeParente) {
    console.log("É menor")
} else {
    console.log("É igual")
}



// Qual valor é retornado na seguinte expressão?  //  3
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao) // 3

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';            // True
var idade = 28;                // True
var possuiDoutorado = false;   // False
var empregoFuturo;             // False
var dinheiroNaConta = 0;       // False

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)


// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (china > brasil){
    console.log(`China possui ${china} milhoes de habitantes sendo ${china-brasil} milhoes a mais que o Brasil, que possui ${brasil} milhoes de habitantes!`)
}else{
    console.log(`Brasil possui ${brasil} milhoes de habitantes sendo ${brasil-china} milhoes a mais que a China, que possui ${china} milhoes de habitantes!`)

}

// O que irá aparecer no console?  // Falso
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?  // Cão
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}