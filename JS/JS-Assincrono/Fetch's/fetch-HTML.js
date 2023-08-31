const sobre = fetch('./src/sobre.html')

const div = document.createElement('div')

sobre.then( r => r.text())
.then(body => {
    // console.log(body)
    div.innerHTML = body
    const  titulo = div.querySelector('p')
    document.querySelector('h1').innerText = titulo.innerHTML
    // console.log(div)


})