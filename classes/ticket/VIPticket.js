import { Ticket } from "./ticket.js";

export class VIPticket extends Ticket {

    constructor(price) {

        super(price)

        this.type = 'VIP'
        this.benefitsList = ['Free alcohol', 'Free food', 'Hot towels']
    
    }
    
}