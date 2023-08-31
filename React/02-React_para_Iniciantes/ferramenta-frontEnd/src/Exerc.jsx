import React from 'react';


// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const styleActive = {
  color: 'green',
};
const styleInactive = {
  color: 'red',
};
const Exerc = () => {
  const dados = luana;
  let vt = [];
  let vgt = [];
  const valorTotal = () => {
    dados['compras'].forEach((element) => {
      vt.push(element['preco']);
      vgt = vt.map((p) => +p.replace('R$ ', ''));
    });

    let valorFinal = 0;
    for (const key of vgt) {
      valorFinal += key;
    }
    vgt, (vt = []);
    return valorFinal;
  };

  return (
    <>
      <div>
        Nome: {dados.cliente} <br />
        Idade: {dados.idade} <br />
        Situação:
        <span style={dados.ativa ? styleActive : styleInactive}>
          {dados.ativa ? ' Ativo' : ' Inativo'} <br />
        </span>
        Total gasto: R${valorTotal()} <br />
        {valorTotal() > 10000 ? 'Meu fi meu fi, vc ta gastando muito em!' : ''}
      </div>
    </>
  );
};

export default Exerc;
