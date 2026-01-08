import { Ticket } from "../ticket/ticket.js";
import { VIPticket } from "../ticket/VIPticket.js";

export class Passenger {

    constructor(name, IDnumber, amountOfMoney) {

        this.name = name
        this.IDnumber = IDnumber
        this.amountOfMoney = amountOfMoney

    }

    buyTicket(flight, discount, typeTicket) {

        for (const ticket of flight.ticketsList) {

            if (ticket.type === typeTicket && !ticket.ownerName) {

                if (this.amountOfMoney - ticket.price < 0) {
                    

                    return false
                }

                this.amountOfMoney -= ticket.price / 100 * (100 - discount)
                flight.ticketsList[flight.ticketsList.indexOf(ticket)].ownerName = this.name 
                
                return true
            }

        }

        return "The type of card you are looking for is sold out"

    }

}