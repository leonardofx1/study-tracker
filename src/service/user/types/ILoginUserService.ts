import type { UserDto } from "../../../dto/user/userDto.js";



export interface ILoginUserService{
    login: (user:UserDto) => Promise<UserDto>
}