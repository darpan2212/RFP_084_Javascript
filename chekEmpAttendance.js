const PRESENT = 1;
let isPresent = Math.floor(Math.random() * 2);

console.log(isPresent);
if (isPresent == PRESENT) {
    console.log("Employee is present");
} else {
    console.log("Employee is absent");
}