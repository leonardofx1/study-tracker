import type { UUID } from "node:crypto";
import type { UserDto } from "../../dto/user/userDto.js";

export interface IUserRepository {
    create:(user:UserDto)=> Promise<UserDto>
    update:(user:UserDto)=>Promise<UserDto>
    delete:(id:UUID)=>Promise<UserDto>
    find:(id:UUID)=> Promise<UserDto|null>
}