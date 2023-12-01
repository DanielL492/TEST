/*function greet(name) {
    const greetPromise = new Promise(function(resolve, reject) {
        resolve(`Hello ${name}`);
    });
    return greetPromise;
}
const Aaron = greet("Aaron");
console.log(Aaron);
Aaron.then((result) => {
    console.log(result);
})*/

//REST API app program interface
const URL = `https://api.quotable.io/random`; 
// .io/$(thing) to use variable
async function getData(URL) {
    try { //pretend forEach for each card
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data);
        //document.querySelector("h1").textContent = data.content;
        //document.querySelector("h2").textContent = data.author;
    } catch (error) {}
}
getData(URL);