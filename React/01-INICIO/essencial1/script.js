// tudo é Objeto

const menu = {
  seletor: '.principal',
};

console.log(menu.seletor.toUpperCase());

// declarar funções

function upperName(name){
  return name.toUpperCase();
}

const lowerName = function (name) {
  return name.toLowerCase();
}

const lowerName2 = (name) => name.toLowerCase();
 
console.log(upperName('yAn'))
console.log(lowerName('yAn'))
console.log(lowerName2('yAn'))


////////////////////////////////////////////////////////////////////////
// desistruturação
//             {clientX, clientY}  //da pra colocar assim tbm onde esta o 'event' porem ou perco acesso ao restante das coisas do 'event' (bom se eu for usar so os "clientX, clientY" msm)

function handleMouse(event){
  // const x = event.clientX
  // const y = event.clientY
  const {clientX, clientY} = event;
  console.log(clientX, clientY)
}
document.addEventListener ('click', handleMouse)

const frutas = ['banana','uva']
const [fruta1, fruta2] = frutas

const useQuadrado = [4, function(lado){
  return 4*lado;
}]

const [lados, perimetro] = useQuadrado;
console.log(lados)
console.log(perimetro(10))



////////////////////////////////////////////
// rest e spred            rest  
function showList(empresa, ...clientes){
  clientes.forEach((cliente) => {
    console.log(cliente, empresa)
  })
} //   1dado empresa... o resto cliente
showList('Google', 'Yan', 'Martins',)
showList('INC', 'Yan', 'Martins',)


const numeros = [10,5,20]// spred
const maior = Math.max(...numeros)
console.log(maior)

const numeros2 = [13,...numeros,7,71,244]
console.log(numeros2)