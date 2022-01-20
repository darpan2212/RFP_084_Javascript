function getWorkingHours(isPresent) {
    let workingHour;
    switch (isPresent) {
        case PRESENT:
            console.log("Employee is present");
            workingHour = WORK_HOUR;
            break;

        case PART_TIME:
            console.log("Employee is working part time");
            workingHour = (WORK_HOUR / 2);
            break;

        default:
            console.log("Employee is absent");
            workingHour = 0;
            break;
    }
    return workingHour;
}

const WORK_HOUR = 8;
const PRESENT = 1;
const PART_TIME = 2;
const WAGE_PER_HOUR = 20;

let isPresent = Math.floor(Math.random() * 3);
let workHour = getWorkingHours(isPresent);
let dailyWage = workHour * WAGE_PER_HOUR;

console.log("Employee wage : " + dailyWage + " USD");