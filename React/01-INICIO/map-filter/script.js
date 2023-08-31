const precos = [
  'credito',
  'R$ 200',
  'R$ 400',
  'contas a pagar',
  'R$ 300',
  'R$ 400',
  'Meus dados'
];

const precosFiltro = precos.filter((p) => p.includes('R$'))
const precosNumeros = precosFiltro.map((p) => +p.replace('R$ ', ''))
console.log(precosNumeros)