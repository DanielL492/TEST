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
/*const URL = `https://api.quotable.io/random`; 
// .io/$(thing) to use variable
async function getData(URL) {
    try { //pretend forEach for each card
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data);
        document.querySelector("h1").textContent = data.content;
        document.querySelector("h2").textContent = data.author;
    } catch (error) {}
}
getData(URL);*/




//ASSESSMENT Prep

const dennis = {
    name: "Dennis",
    age: 16,
};
//let x = Array.from(dennis.name);
console.log(x);
for (let i = 0; i<dennis.name.length; i++) {
    console.log(dennis.name[i]);
} //both for and while do roughly the same thing
let i = 0;
while (i < dennis.name.length) {
    console.log(dennis.name[i]);
    i++;
}
//assessment will revolve around string
//console.log(12+Number("13"));
//console.log(dennis.name);

function needle(name, search) {
    if (name.includes(search)) {
//(name === search) to find exact replica
        return true;
    } else {
        return false;
    }
}

console.log(needle(dennis.name,"D")); 
//lowercase d would provide false