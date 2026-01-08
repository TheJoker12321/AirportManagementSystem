import { Flight } from "./flight.js";

export class Airport {

    constructor() {

        this.flights = [

                        new Flight('Israel', 'El-Al', 717, 10, 90, 200),
                        new Flight('Russia', 'El-Al', 461, 50, 110, 250),
                        new Flight('Japan', 'El-Al', 333, 100, 50, 110)
                    
                    ]

        for (const flight of this.flights) {

            flight.addTickets(10)

        }

    }

}