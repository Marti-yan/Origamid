const grupoA = 100;
const grupoB = 200;

if(grupoA > grupoB){
  console.log("GrupoA ganhou")
}else{
  console.log("GrupoB ganhou")
}

const vencedor = grupoA > grupoB ? "Grupo A venceu" : "Grupo B venceu";
console.log(vencedor);

const active = true;
const button = active && "Botão esta ativo!"
console.log(button);