import { performPurchase } from "../src/performPurchase"
import { User } from "../src/User"

describe("Testing function perform purchase with user balance", ()=> {

    test("Testing user with balance greater than purchase value", ()=> {
        const user:User = {
            name: "Martin", 
            balance:100
        }

        const result = performPurchase(user, 40); 

        expect(result).toEqual({
            name: "Martin", 
            balance: 60
        })

    })


    test("Testing user with balance equal to purchase value", ()=> {
        const user:User = {
            name: "Martin", 
            balance: 50     
        }

        const result = performPurchase(user, 50); 

        expect(result).toEqual({
            name: "Martin", 
            balance: 0
        })
    })

    test("Testing user with balance inferior to purchase value", ()=> {
        const user:User = {
            name: "Martin", 
            balance: 20
        }

        const result = performPurchase(user, 100); 

        expect(result).not.toBeDefined()
    })
})