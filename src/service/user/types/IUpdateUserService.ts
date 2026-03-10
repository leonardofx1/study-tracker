import type { UserDto } from "../../../dto/user/userDto.js";



export interface IUpdateUser{
    update:(user:UserDto)=> Promise<string>
}