const PRESENT = 1;
const PART_TIME = 2;
const PAY_PER_HOUR = 20;
const WORK_HOUR = 8;

let isPresent = Math.floor(Math.random() * 3);

let dailyWage;

if (isPresent == PRESENT) {
    console.log("Employee is present");
    dailyWage = WORK_HOUR * PAY_PER_HOUR
} else if (isPresent == PART_TIME) {
    console.log("Employee is working part time");
    dailyWage = (WORK_HOUR / 2) * PAY_PER_HOUR;
} else {
    console.log("Employee is absent");
    dailyWage = 0;
}

console.log("Daily wage : " + dailyWage + " USD");