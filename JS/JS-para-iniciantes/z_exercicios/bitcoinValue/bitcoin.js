valorBTC()
setInterval(valorBTC, 30000)

function valorBTC() {
    let Dom = document.getElementById('btc');
    fetch('https://blockchain.info/ticker')
        .then(res => res.json())
        .then(res => {
            Dom.innerHTML = `R$${res.BRL['buy']} <br> US$${res.USD['buy']}`
        })
}

