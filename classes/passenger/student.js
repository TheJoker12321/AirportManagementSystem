import { Passenger } from "./passenger.js";

export class Student extends Passenger {

    constructor( name, IDnumber, amountOfMoney, nameStudyPlace) {

        super(name, IDnumber, amountOfMoney)

        this.nameStudyPlace = nameStudyPlace

    }

    buyRegularTicket(flight) {

        return this.buyTicket(flight, 10, 'regular')
        

    }

    buyVIPticket(flight) {

        return this.buyTicket(flight, 0, 'VIP')

    }

}