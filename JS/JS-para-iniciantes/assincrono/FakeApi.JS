const url = "https://jsonplaceholder.typicode.com/posts";
const options = {    // por padrão usa o "GET"
    method: "HEAD"  //"POST",
    // body: '{"title": "JavaScript"}',
    // headers: {
    //     "Content-Type": "application/json; charset=utf-8"
    // }
}

// fetch(url, options)      // method "POST"
// .then(response => response.json())  
// .then(json => console.log(json))

fetch(url, options)        // method "HEAD"
.then(response => {

    const headers = response.headers.forEach(console.log)
    console.log(headers)

})  
