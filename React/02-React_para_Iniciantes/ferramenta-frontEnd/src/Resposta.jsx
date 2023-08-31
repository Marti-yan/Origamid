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

const Resposta = () => {
  const dados = luana;

  const total = dados.compras
    .map((item) => +item.preco.replace('R$ ', ''))
    .recuce((a, b) => a + b);

  return (
    <>
      <div>
        <p>Nome: {dados.cliente}</p>
        <p>Idade: {dados.idade}</p>
        <p>
          Situação:{' '}
          <span style={{ color: dados.ativa ? 'green' : 'red' }}>
            {dados.ativa ? 'ativa' : 'Inativa'}
          </span>
        </p>
        <p>Total: R$ {total}</p>
        {total > 10000 &&  <p>Você esta gastando muito!</p>}
      </div>
    </>
  );
};
export default Resposta;
