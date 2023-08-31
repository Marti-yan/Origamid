// document.querySelector("#buscaCep").addEventListener('submit', function (e) {
//     e.preventDefault();
//     const cepT = document.getElementById('cepT').value;

//     fetch(`https://viacep.com.br/ws/${cepT}/json`)
//         .then(response => response.json())
//         .then((cep) => {
//             let res = document.querySelector('#resultadoCEP')
//             res.innerHTML = ''
//             for (let chave in cep) {
//                 console.log(`${chave} ${cep[chave]}`);
//                 res.innerHTML += `${chave} : ${cep[chave]} <br>`;
//             }
//         })

// })

// EventListener verificando quando o formulario ira ser submetido


function verificarCEP(event) {
    event.preventDefault(); // impede que a pagina recarregue

    const cepT = document.getElementById("cepT").value

    fetch(`https://viacep.com.br/ws/${cepT}/json`)
        .then(r => r.json())
        .then((cep) => {
            console.log(cep)
            ExibirResultado(cep)

        })
}

function ExibirResultado(cep) {
    let resultado = document.getElementById('resultadoCEP')
    resultado.innerHTML = ''

    for (let chave in cep) {
        if(chave == 'siafi' || chave == 'ibge'){
            continue
        }
        if ( cep[chave] != '' ) {
            resultado.innerHTML += `<h4>   ${chave} : ${cep[chave]}    </h4>`
        }

    }
}

document.querySelector('#buscarCEP').addEventListener('submit', verificarCEP)




