import React from 'react';
import Titulo from './assets/titulo';
import Produto from './assets/produto';

const Produtos = () => {
  const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  ];
  return (
    <>
      <Titulo texto="Produtos" />
      {produtos.map((produto) => (
        <Produto key={produto.nome} {...produto} />
      ))}
      {/* Jeito do professor (usando o arquivo Produto.jsx) */}

      {/* {produtos.map(({ nome, propriedades }) => (
        <section  key={nome} style={{ border: '1px solid black', padding: '15px 10px', margin: '5px' }}>
          <div>
            <h3>{nome}</h3>
            <ul>
              {propriedades.map((propriedade) => (
                <li key={propriedade}> {propriedade}</li>
              ))}
            </ul>
          </div>
        </section>     // meu Jeito (sem o 'produto.jsx')
      ))} */}
    </>
  );
};

export default Produtos;
