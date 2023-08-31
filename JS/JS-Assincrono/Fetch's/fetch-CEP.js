const cep  = fetch('https://viacep.com.br/ws/28930000/json')
const conteudo = document.getElementById('conteudo')

cep.then(response =>{
    console.log(response.status)
    const response2 = response.clone(); 
    response.json().then((json) =>{
        console.log(json);
    })
    response2.text().then((text) =>{
        console.log(text);
    })
})
// .then(response => {
//     console.log(response)
//     conteudo.innerText = response.localidade
// })