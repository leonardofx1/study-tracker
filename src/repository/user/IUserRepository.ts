
import type { UserDto } from "../../dto/user/userDto.js";

export interface IUserRepository {
    create:(user:UserDto)=> Promise<UserDto>
    update:(user:UserDto)=>Promise<UserDto>
    delete:(id:string)=>Promise<UserDto>
    find:(id:string)=> Promise<UserDto|null>
}