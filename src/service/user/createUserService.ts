import type { UserDto } from "../../dto/user/userDto.js";
import { ErrorCreatingUser, UserAlreadyExists } from "../../errors/user/user.errors.js";
import type { IUserRepository } from "../../repository/user/IUserRepository.js";
import type { IHash } from "../../utils/hash/iHash.js";
import type { ICreateUserService } from "./types/ICreateUserService.js";


export class CreateUserService implements ICreateUserService {
    constructor(private userRepo:IUserRepository,private hashPass:IHash){

    }
    save=async  (user: UserDto) => {
        const verifyUser =  this.existingUser(user.id)
        const salt = await this.hashPass.salt(5)
        const passwordHash = await this.hashPass.hash(user.password,salt)
        user.password = passwordHash
        const res = await this.userRepo.create(user)
        if(res){
            return res
        }
        throw new ErrorCreatingUser()

    }

    existingUser=async (userId:string)=>{
        const user = await this.userRepo.find(userId)
        if(!user){
            throw new UserAlreadyExists()
        }
        
    }
}