import { ErrorDeleteUser } from "../../errors/user/user.errors.js";
import type { UserRepository } from "../../repository/user/userRepository.js";
import type { IDeleteService } from "./types/IDeleteUserService.js";







export class DeleteUserService implements IDeleteService {
    constructor(private userRepo:UserRepository){
        
    }
    delete=async (userId:string)=> {
            const res = await this.userRepo.delete(userId)
            if(!res){
                throw new ErrorDeleteUser()
            }
            return res.id
    }
}