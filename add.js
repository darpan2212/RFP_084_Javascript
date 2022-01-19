let a = 10;
let b = 20;
let c = a + b;

console.log("Addition : " + c);

let x = "10";
let y = "20";
let z = x + y;

console.log("Concating : " + z);

let d = new Date();
let today = "Today : " + (d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear();
let time = "Time : " + d.getHours() + "-" + d.getMinutes();

console.log(today + "\n" + time);