// fetch('https://api.chucknorris.io/jokes/random')
// .then((response) => response.json())
// .then((json) => {
//   console.log(json.value)
// })

async function fetchmemes(url){
  const response = await fetch(url);
  const json = await response.json();
  // console.log(json.value)
  return json.value
}

const meme = fetchmemes("https://api.chucknorris.io/jokes/random")
console.log(meme)
