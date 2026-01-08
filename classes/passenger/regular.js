import { Passenger } from "./passenger.js";

export class Regular extends Passenger {

    constructor(name, IDnumber, amountOfMoney, workPlace, knowsEmployee) {

        super(name, IDnumber, amountOfMoney)

        this.workPlace = workPlace
        this.knowsEmployee = knowsEmployee

    }

    buyRegularTicket(flight) {

        if (!this.knowsEmployee) {

            return this.buyTicket(flight, 0, 'regular')

        } else {

            return this.buyTicket(flight, 20, 'regular')

        }

    } 

    buyVIPticket(flight) {

        if (!this.knowsEmployee) {

            return this.buyTicket(flight, 0, 'VIP')

        } else {

            return this.buyTicket(flight, 15, 'VIP')

        }

    }

}