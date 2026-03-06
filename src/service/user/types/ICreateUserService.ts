import type { UserDto } from "../../../dto/user/userDto.js";



export interface ICreateUserService {
    save:(user:UserDto)=> Promise<UserDto>
    existingUser:(userId:string)=>void
}