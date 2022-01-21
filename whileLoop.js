let dogs = ["Bulldog", "Huskey", "Pomarian", "Labrador"];

let i = 0;
let allDog;
while (i < dogs.length) {
    allDog = dogs[i++];
    console.log(allDog);
}
console.log("\n");
i = 0;
allDog = "";

do {
    allDog = dogs[i++];
    console.log(allDog);
} while (i < dogs.length);