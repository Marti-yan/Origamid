const doc = fetch('./src/doc.txt')
const conteudo = document.getElementById('conteudo')

doc.then(resolucao => {
    return resolucao.text()
}).then(body => {
    console.log(body)
    conteudo.innerHTML = body
})