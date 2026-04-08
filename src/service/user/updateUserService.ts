import type { UserDto } from "../../dto/user/userDto.js";
import { ErrorUpdateUser, UserAlreadyExists } from "../../errors/user/user.errors.js";
import type { IUserRepository } from "../../repository/user/IUserRepository.js";
import type { IHash } from "../../utils/hash/iHash.js";
import type { IUpdateUser } from "./types/IUpdateUserService.js";



export class UpdateUserService implements IUpdateUser{
    constructor(private userRepo:IUserRepository,private hash:IHash){

    }

    update=async(user:UserDto)=>{
        const existing = await this.existingUser(user.id)
        const isValidPassword = this.hash.compare(user.password,existing.password)
        const res = await this.userRepo.update(user)
        if(!res){
            throw new ErrorUpdateUser()
        }
        return res.id
    }
       existingUser=async (userId:string)=>{
            const user = await this.userRepo.find(userId)
            if(!user){
                throw new UserAlreadyExists()
            }
            return user
            
        }
}