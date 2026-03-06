import type { UserDto } from "../../dto/user/userDto.js";
import type { IUserRepository } from "../../repository/user/IUserRepository.js";
import type { IFindUserService } from "./types/IFindUserService.js";



export class FindUserService implements IFindUserService {
    constructor(private UserRepo:IUserRepository){

    }
    find= async (userId:string) => {
        const user = await this.UserRepo.find(userId)
        if(user){
            return user
        }
        throw new Error('not found user.')
    }
}