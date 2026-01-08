export class Ticket {

    constructor(price) {

        this.type = 'regular'
        this.ticketNumber = Math.floor(Math.random() * 10000000000)
        this.price = price
        this.ownerName = null

    }
}