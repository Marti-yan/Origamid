import React from 'react';

const titulo = <h1>Titulo da MartinsTech</h1>;

function App() {
  const ativo = true;

  const mostrarNomes = (sobrenome) => {
    return 'Yan ' + sobrenome;
  };
  return (
    <>
      {titulo}
      <div>
        Olá, {mostrarNomes('Martins')} esse é o seu App React <br />
        Feito em: {new Date().getFullYear()}
      </div>
      <input type="text" placeholder={ativo ? 'ativo' : 'inativo'} />
      <hr />
      <hr />
    </>
  );
}

export default App;
