import { CuboUserDTO } from "../src/types/CuboUserDTO";

const userDatabase = {
    createNewUser: jest.fn( async (newCuboUser:CuboUserDTO) => {}),
    getAllUsers: jest.fn(async () => {
        let response = {
            users: [
                {
                    id: 1, 
                    first_name
                }
            ]
        }
    })
}