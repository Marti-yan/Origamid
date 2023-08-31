function meme(){
    let img = document.getElementById('img2')

    fetch('https://api.chucknorris.io/jokes/random')
    .then( response => response.json())
    .then( response => {
        console.log(response)
        img.innerHTML = response.value
        // img.src = response.url
    })
}
let Btn = document.getElementById('prox')
Btn.addEventListener('click', meme)
// meme()