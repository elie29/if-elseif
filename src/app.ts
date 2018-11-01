import { Vacation } from './vacation';

const vacation = new Vacation();
console.log(vacation.getNumberOfDaysOff(1, 110));
console.log(vacation.getNumberOfDaysOff(1, 145));
console.log(vacation.getNumberOfDaysOff(2, 190));
console.log(vacation.getNumberOfDaysOff(3, 310));
console.log(vacation.getNumberOfDaysOff(4, 410));
console.log(vacation.getNumberOfDaysOff(5, 510));
