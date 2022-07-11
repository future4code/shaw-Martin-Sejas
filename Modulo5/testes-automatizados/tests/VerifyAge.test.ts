import { Casino, CasinoUser, LOCATION, NATIONALITY } from "../src/CasinoUser"
import { verifyAge } from "../src/VerifyAge"



describe("Testing casino verify age function", ()=> {

    let brazilianCasino:Casino = {
        name: "O Casininho", 
        location: LOCATION.BRAZIL
    }

    let americanCasino:Casino = {
        name: "The Casininho", 
        location: LOCATION.EUA
    }

    test("Brazilian allowed guest on a brazilian casino", ()=> {
        let testUser:CasinoUser = {
            name: "Zezinho da Vila", 
            age: 20, 
            nationality: NATIONALITY.BRAZILIAN
        }

        let users:CasinoUser[] = []; 

        users.push(testUser); 

       let result = verifyAge(brazilianCasino, users); 

       expect(result.brazilians.allowed).toEqual(["Zezinho da Vila"])
    })


    test("American tourist over age on a brazilian casino", ()=> {
        let testUser:CasinoUser = {
            name: "Bob", 
            age: 19, 
            nationality: NATIONALITY.AMERICAN
        }

        let result = verifyAge(brazilianCasino, [testUser]);

        expect(result.americans.allowed).toEqual(["Bob"])
    })


    test("2 brazilians and 2 americans (underage) on american casino", ()=> {
        let brazilian:CasinoUser = {
            name: "Martin", 
            age: 19, 
            nationality: NATIONALITY.BRAZILIAN
        }

        let american:CasinoUser = {
            name: "Bob", 
            age: 19,    
            nationality: NATIONALITY.AMERICAN
        }

        let result = verifyAge(americanCasino, [brazilian,american, brazilian, american]); 

        expect(result.americans.unallowed).toEqual(["Bob", "Bob"]); 
        expect(result.brazilians.unallowed).toEqual(["Martin", "Martin"])
    })


    test("2 brazilians (19) and 2 americans (21) in american casino", ()=> {
            let brazilian: CasinoUser = {
                name: "Martin", 
                age: 19, 
                nationality: NATIONALITY.BRAZILIAN
            }

            let american: CasinoUser = {
                name: "Tim", 
                age: 21, 
                nationality: NATIONALITY.AMERICAN
            }

            let users:CasinoUser[] = [american, brazilian, american, brazilian]; 

            let result = verifyAge(americanCasino, users); 

            expect(result.americans.allowed).toEqual(["Tim", "Tim"]); 
            expect(result.brazilians.unallowed).toEqual(["Martin", "Martin"])
    })
})