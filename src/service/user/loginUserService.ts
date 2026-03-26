import type { UserDto } from "../../dto/user/userDto.js";
import { UserNotFoundError } from "../../errors/user/user.errors.js";
import type { IUserRepository } from "../../repository/user/IUserRepository.js";
import type { IHash } from "../../utils/hash/iHash.js";
import type { ILoginUserService } from "./types/ILoginUserService.js";
export const numSalts = {salt:5}


export class LoginUserService implements ILoginUserService {
    constructor(private UserRepo:IUserRepository,private hash:IHash){

    }
    login= async (user:UserDto) => {
        const resUser = await this.UserRepo.find(user.email)
   
       
        if(resUser){
            const verifyUser = await this.hash.compare(user.password,resUser?.password)
            return resUser
        }
        throw new UserNotFoundError()
    }

    
}