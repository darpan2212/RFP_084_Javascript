let age = Math.floor(Math.random() * 50);
let status;

if((age>=14)) {
	status="Eligible";
} else {
	status="not eligible";
}

console.log("Age is "+age+". Status : "+status);
