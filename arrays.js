let dogs = ["Bulldog","Beagle","Labrador"];
let cats = new Array("American curl","Bengal");
let birds = new Array("Flacons","Ducks","Flamingoes");

//copy Elements from an array
let slicedDog = dogs.slice(1,2);
let allDog = [...dogs];
let d = dogs.slice(1);

console.log(slicedDog);
console.log(allDog);
console.log(d);

dogs.push("Golden Retriver");

console.log(dogs);
console.log(dogs.pop());
console.log(dogs);

dogs.unshift("Golden Retriver");

console.log(dogs);
console.log(dogs.shift());
console.log(dogs);

dogs.splice(2,1,"Pug","Boxer");
console.log(dogs);

//Arrays function
let animals = dogs.concat(cats,birds);
console.log(animals);

let newAnimals = [...dogs,...cats,...birds].toString();
console.log(newAnimals);

let sortDog = dogs.slice(1).sort();

console.log(sortDog);

function scanArray([first, second, third]) {
    console.log(first+" "+second+" "+third);
}
scanArray(dogs);

let joinAnimals = animals.join(" ");
console.log(joinAnimals);

let allAnimals = "";

for(let animal of animals)
    allAnimals+=animal+" ";

console.log(allAnimals);

console.log(dogs[2]);