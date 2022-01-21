const PRESENT = 1;
const PART_TIME = 2;
const WAGE_PER_HOUR = 20;
const MAX_WORKING_DAY = 20;
const MAX_HOURS_OF_WORKING = 100;

function getWorkingHour(isPresent) {
    let workingHour = 0;
    switch (isPresent) {
        case PRESENT:
            workingHour = 8;
            break;
        case PART_TIME:
            workingHour = 4;
            break;

        default:
            workingHour = 0;
            break;
    }
    return workingHour;
}

function calculateWage(empHour) {
    return WAGE_PER_HOUR * empHour;
}

let dailyWageArray = new Array();
let totalWorkingHour = 0;
day = 0;

while (day < MAX_WORKING_DAY && totalWorkingHour <= MAX_HOURS_OF_WORKING) {
    let isPresent = Math.floor(Math.random() * 3);
    let empHr = getWorkingHour(isPresent);
    totalWorkingHour += empHr;
    dailyWageArray.push(calculateWage(empHr));
    day++;
}

console.log("Employee monthly wage : " + calculateWage(totalWorkingHour) + "\nTotal working day : " + dailyWageArray.length + "\nTotal working hour : " + totalWorkingHour);

console.log(dailyWageArray);

let totalEmpWage = 0;

function sum(dailyWage) {
    totalEmpWage += dailyWage;
}

dailyWageArray.forEach(sum);

console.log("Total salary : " + totalEmpWage);

function totalWages(total, dailyWage) {
    return total + dailyWage;
}

console.log("By reduce method :" + dailyWageArray.reduce(totalWages, 0));


let dailyCnt = 0;

function arrayMap(dailyWage) {
    dailyCnt++;
    return dailyCnt + " = " + dailyWage;
}

let mappedArray = dailyWageArray.map(arrayMap);
console.log(mappedArray);

function fullTimeWage(dailyWage) {
    return dailyWage.includes("160")
}

function partTimeWage(dailyWage) {
    return dailyWage.includes("80")
}

let filterFullTimeWage = mappedArray.filter(fullTimeWage);
console.log(filterFullTimeWage);

console.log(mappedArray.find(fullTimeWage));

console.log(filterFullTimeWage.every(fullTimeWage));
console.log(filterFullTimeWage.some(partTimeWage));

function countAttendance(numOfWorkingDay, dailyWage) {
    if(dailyWage>0) return ++numOfWorkingDay;
    else  return numOfWorkingDay;
}

console.log("Employee present days : "+dailyWageArray.reduce(countAttendance, 0));