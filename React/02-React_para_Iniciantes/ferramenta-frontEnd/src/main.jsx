import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Exerc from './Exerc.jsx';
import Resposta from './Resposta.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
    <h4>Minha resolução</h4>
    <Exerc />
    <hr />
    <h4>Resolução da aula</h4>
    <Resposta />
  </>,
);
