import { Airport } from "./classes/airport.js";
import { Regular } from "./classes/passenger/regular.js";
import { Student } from "./classes/passenger/student.js";


const airport = new Airport()

const student = new Student('shlomo', '219843674', 10, 'Morasha')
const regularPass = new Regular('Ori', '214268392', 5, 'lower', true)

regularPass.buyVIPticket(airport.flights[0])
console.log(student.buyRegularTicket(airport.flights[0]));
regularPass.buyRegularTicket(airport.flights[0])
console.log(student.amountOfMoney);






