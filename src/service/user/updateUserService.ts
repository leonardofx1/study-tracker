import type { UserDto } from "../../dto/user/userDto.js";
import type { IUserRepository } from "../../repository/user/IUserRepository.js";
import type { IUpdateUser } from "./types/IUpdateUserService.js";



export class UpdateUserService implements IUpdateUser{
    constructor(private userRepo:IUserRepository){

    }

    update=async(user:UserDto)=>{
        const res = await this.userRepo.update(user)
        if(!res){
            throw new Error('not update')
        }
        return res.id
    }
}