import react from 'react';
import Header from './Header';
import Footer from './footer';
import Form from './Form/Form';
import Titulo from './Propriedades/titulo';
import RestSpread from './Propriedades/rest&Spread';

const Teste = () => {
  const active = false;
  if (active) {
    return 'Ativo';
  } else {
    // antes não podia deixar de retornar algo, mas agora aparentemente ta suave
  }
};

function App() {
  // Para o Header eu posso passar assim
  const logado = true;
  return (
    <>
      <hr />
{/* /////////////////////////////////////////// */}
      <h1>Componentes</h1>
      //                    ou assim!
      <Header logado={logado} nome={'Yan'}/>
      <h1>Olá</h1>
      <Form />
      <Footer />
{/* /////////////////////////////////////////// */}
      <hr />
{/* /////////////////////////////////////////// */}
      <h1>Propriedades</h1>
      <Titulo cor="Blue" texto="Titulo Props 1" />
      <Titulo texto="Titulo Props 2"> Isso é o children </Titulo>
{/* /////////////////////////////////////////// */}
      <hr />
{/* /////////////////////////////////////////// */}
      <h1>Rest & Spread</h1>
      <RestSpread />
    </>
  );
}

export default App;
