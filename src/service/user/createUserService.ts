import type { UserDto } from "../../dto/user/userDto.js";
import type { IUserRepository } from "../../repository/user/IUserRepository.js";
import type { ICreateUserService } from "./types/ICreateUserService.js";


export class CreateUserService implements ICreateUserService {
    constructor(private userRepo:IUserRepository){

    }
    save=async  (user: UserDto) => {
        const verifyUser =  this.existingUser(user.id)

        const res = await this.userRepo.create(user)
        if(res){
            return res
        }
        throw new Error('not created')

    }

    existingUser=async (userId:string)=>{
        const user = await this.userRepo.find(userId)
        if(!user){
            throw new Error('user already existis')
        }
        
    }
}