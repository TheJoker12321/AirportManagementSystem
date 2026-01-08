import test, { describe } from 'node:test'
import assert from 'node:assert'

import { Regular } from "../classes/passenger/regular.js";
import { Student } from "../classes/passenger/student.js";
import { Airport } from '../classes/airport.js';


const airport = new Airport()

const student = new Student('shlomo', '219843674', 1000, 'Morasha')
const regularPass = new Regular('Ori', '214268392', 5, 'lower', true)


describe('airport',

    test('if not enough money return false', () => {

        assert.equal(regularPass.buyRegularTicket(airport.flights[0]), false)

    }),

    test('if enough money the name of ticket updated and the passengers money is reduced by the correct ticket price'), () => {
        const moneyBeforeBuy = student.amountOfMoney
        student.buyRegularTicket(airport.flights[0])
        const findTicket = airport.flights[0].ticketsList.find(ticketObj => ticketObj.ownerName === student.name)
        const moneyForPay = findTicket.price / 100 * 90

        assert.equal(findTicket.ownerName, student.name)
        assert.equal(student.amountOfMoney + moneyForPay, moneyBeforeBuy)
    }

)