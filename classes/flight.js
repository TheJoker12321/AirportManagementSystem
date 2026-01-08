import { Ticket } from "./ticket/ticket.js"
import { VIPticket } from "./ticket/VIPticket.js"

export class Flight {

    constructor(flightName, airline, flightNumber, maxPassengers, regularTicketPrice, VIPticketPrice) {

        this.flightName = flightName
        this.airline = airline
        this.flightNumber = flightNumber
        this.maxPassengers = maxPassengers
        this.regularTicketPrice = regularTicketPrice
        this.VIPticketPrice = VIPticketPrice
        this.ticketsList = []
        
    }

    addTickets(VIPpercentage) {

        let numberVIPtickets = Number(this.maxPassengers / 100 * VIPpercentage)

        for (let i = 0; i < this.maxPassengers; i ++) {

            if (numberVIPtickets === 0) {

                this.ticketsList.push(new Ticket(this.regularTicketPrice))
            
            } else {

                this.ticketsList.push(new VIPticket(this.VIPticketPrice))
                numberVIPtickets -= 1
            
            }

        }

    }

}