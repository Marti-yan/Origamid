fetch('./src/dados.json')
.then(r => r.text())  // pega o Json em formato "string"
.then(JsonText => {  
   const JsonFinal = JSON.parse(JsonText)  // tranforma a string para {Objeto}
   console.log(JsonText)
   console.log(JsonFinal)
})


fetch('./src/dados.json')
.then(r => r.json())  // não precisa transformar, ja vem no formato de {Objeto}
.then(res => {
 res.forEach(aula => {
    console.log(aula.id)
   })    
   
})



const configuracoesOBJ = {
   player: "Google",
   tempo: 25.5,
   aula: "2.1 JavaScript"
}
console.log(configuracoesOBJ)

localStorage.player = "Google";                            // pra não ter q mandar cada chave:valor, pode...
const configuracoesSTR = JSON.stringify(configuracoesOBJ); // Tranformar o {Objeto} em "String".                //(Bom pra mandar tipo pro banco de dados tbm)
                                                           // e salva tudo como uma str e dps so convertela usando o JSON.parse
localStorage.Config = configuracoesSTR;// ou- JSON.stringify(configuracoesOBJ)
console.log(configuracoesSTR);

