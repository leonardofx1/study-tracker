import type { UserDto } from "../../../dto/user/userDto.js";



export interface IFindUserService{
    find: (userId:string) => Promise<UserDto>
}