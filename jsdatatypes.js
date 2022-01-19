var val;
var datatype = typeof val;

console.log(val + ":" + datatype);

val = 10;
datatype = typeof val;

console.log(val + ":" + datatype);

val = 10n;
datatype = typeof val;

console.log(val + ":" + datatype);

val = true;
datatype = typeof val;

console.log(val + ":" + datatype);

val = "foo";
datatype = typeof val;

console.log(val + ":" + datatype);

datatype = typeof Symbol("id");

console.log("Type of symbol " + datatype);

datatype = typeof Math;

console.log("type of math " + datatype);

datatype = typeof null;

console.log("type of null " + datatype);

let sayHi = function () {
    console.log.apply("Say hi");
};

datatype = typeof sayHi;

console.log("Type of function " + datatype);