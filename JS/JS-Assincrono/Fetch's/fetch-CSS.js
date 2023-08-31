// const estilo  = fetch('./style.css')

// estilo.then( resposta => resposta.text())
// .then( body => {
//     const conteudo = document.getElementById('conteudo');
//     const style = document.crateElement('style');
//     style.innerHTML = body
//     console.log(style)
//     // conteudo.appendChild(style)
// })


const styleElement = document.createElement('style');

fetch('./src/style.css')
.then(response => response.text())
.then(style => {
  styleElement.innerHTML = style;
  document.body.appendChild(styleElement);
});

