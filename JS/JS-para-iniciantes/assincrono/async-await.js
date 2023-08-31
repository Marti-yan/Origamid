async function puxarDados() {
    try{
        // const responseDados = await fetch('./src/dados.json')
        // const JsonDados = await responseDados.json();
    
        // segunda opção pra mesma coisa de cima
        const responseDados2 = fetch('./src/dados.json')
        const JsonDados2 = await (await responseDados2).json();

        console.log(JsonDados2)

        // JsonDados2.forEach(element => {
        //     document.body.innerText += ` ${element.id} / ${element.aula} / ${element.tempo} \n`
        // });

    } catch(erro) {console.log(erro)}
}
puxarDados()


// ///////////   diferenças   /////////////////

function iniciarFetch() {
    fetch('./src/dados.json')
        .then(dadosResponse => dadosResponse.json())
        .then(dadosJSON => {
            document.body.innerText += dadosJSON['0'].aula;
            document.body.innerHTML += '<br>'
        })
}
iniciarFetch();



async function iniciarAsync() {
    const dadosResponse = await fetch('./src/dados.json');
    const dadosJSON = await dadosResponse.json();
    document.body.innerText += dadosJSON['1'].aula;
}
iniciarAsync();


////////////////////////////////////////////////////////////////////////////////

async function asyncSemPromise() {
    // Console não irá esperar.
    await setTimeout(() => console.log('Depois de 1s'), 1000);  // so espera se for uma promisse, e nesse caso não é
    console.log('acabou');
  }
  asyncSemPromise();
  
  async function iniciarAsync() {
    await new Promise(resolve => {     // aqui ele ja é uma promisse e ira esperar para ser resolvido
      setTimeout(() => {
          resolve();     
          console.log('teste2-Depois de 1s');
    }, 1000)
    // console.log("teste2-acabou")
    });
  }
  iniciarAsync();